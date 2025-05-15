import { generateTitleFromUserMessage } from "@/app/(signed-in)/home/actions";
import { getChatById, saveChat, saveMessages } from "@/db/queries";
import { similaritySearch } from "@/lib/embeddings";
import {
  generateUUID,
  getMostRecentUserMessage,
  sanitizeResponseMessages,
} from "@/lib/utils";
import { createOpenAI as createGroq } from "@ai-sdk/openai";
import { type Message, streamText, tool } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export async function POST(req: Request) {
  const {
    messages,
    chatId,
    userId,
  }: { messages: Message[]; chatId: string; userId: string } = await req.json();

  console.log("messages", messages);
  console.log("chatId", chatId);
  console.log("userId", userId);

  if (!messages || !userId || !chatId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const userMessage = getMostRecentUserMessage(messages);

  if (!userMessage) {
    return new Response("No user message found", { status: 400 });
  }

  const chat = await getChatById(chatId);

  if (!chat) {
    const title = await generateTitleFromUserMessage({ message: messages[0] });
    await saveChat(userId, title, chatId);
  }

  if (messages.at(-1)?.role === "user") {
    await saveMessages({
      messages: [
        { ...userMessage, id: generateUUID(), createdAt: new Date(), chatId },
      ],
    });
  }

  try {
    const result = await streamText({
      model: groq("llama3-groq-70b-8192-tool-use-preview"),
      system: `You are a helpful assistant. Check your knowledge base before answering any questions.
    if no relevant information is found in the tool calls, respond naturally.
    If the output contains latex expressions, display it in a math environment.
    Always respond in the same language as the user. (if no language is specified, use French).
    You should ALWAYS use \`getReleventResources\` tool to respond to questions.

    `,
      messages,
      experimental_telemetry: {
        isEnabled: true,
        functionId: "kleo-mvp-chat",
      },
      tools: {
        getReleventResources: tool({
          description:
            "get information from your knowledge base to answer questions.",
          parameters: z.object({
            question: z.string().describe("the users question"),
          }),
          execute: async ({ question }) => {
            const resources = await similaritySearch(question);

            const uniqueResults = Array.from(
              new Map(
                resources.flat().map((item) => [item.content, item]),
              ).values(),
            );

            return uniqueResults;
          },
        }),
      },
      onFinish: async ({ responseMessages }) => {
        if (userId) {
          try {
            const responseMessagesWithoutIncompleteToolCalls =
              sanitizeResponseMessages(responseMessages);

            await saveMessages({
              messages: responseMessagesWithoutIncompleteToolCalls.map(
                (message) => {
                  const messageId = generateUUID();

                  return {
                    id: messageId,
                    chatId: chatId,
                    role: message.role,
                    content: message.content,
                    createdAt: new Date(),
                  };
                },
              ),
            });
          } catch (e) {
            console.error("Failed to save chat : ", e);
          }
        }
      },
    });
    return result.toDataStreamResponse();
  } catch (e) {
    console.log(e);
  }
}
