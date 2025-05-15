"use server";

import { generateText, type Message } from "ai";
import { createOpenAI as createGroq } from "@ai-sdk/openai";
import { deleteChatById, getChatById, getMessagesByChatId } from "@/db/queries";

export async function generateTitleFromUserMessage({
  message,
}: {
  message: Message;
}) {
  const groq = createGroq({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  });

  const { text: title } = await generateText({
    model: groq("llama3-groq-70b-8192-tool-use-preview"),
    system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons
    - the title should be in french (if the message is in another language, use this language)`,
    prompt: JSON.stringify(message),
  });

  return title;
}

export async function refreshChat(chatId: string) {
  const chat = await getChatById(chatId);
  if (!chat) {
    return;
  }
  const messagesFromDb = await getMessagesByChatId({ id: chatId });
  return messagesFromDb;
}

export async function deleteChat(chatId: string) {
  try {
    await deleteChatById({ id: chatId });
    return;
  } catch (e) {
    console.log(e);
  }
}
