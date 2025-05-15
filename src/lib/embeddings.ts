"use server";

import {
  type InsertResource,
  type InsertEmbedding,
  resources,
  embeddings,
} from "@/db/schema";
import { db } from "@/db";
import { cosineDistance, desc, eq, gt, sql } from "drizzle-orm";

// export async function seed() {
//   const allResults = [];
//   console.log("Starting seed process...");

//   for (const item of seed_data) {
//     console.log(`Processing page ${item.page}`);
//     const embeddingData = await getEmbeddings(item.md);
//     const values = embeddingData.map((embeddingItem) => ({
//       embedding: embeddingItem.embedding,
//       resourceId: "BVxbZU6",
//       content: embeddingItem.text,
//       pageNumber: item.page,
//     }));

//     try {
//       const result = await db.insert(embeddings).values(values).returning();
//       allResults.push(...result);
//       console.log(`Successfully processed page ${item.page}`);
//     } catch (e) {
//       console.error(`Error processing page ${item.page}:`, e);
//     }
//   }

//   console.log(`Seed complete. Processed ${allResults.length} embeddings`);
//   return allResults;
// }

export async function getEmbeddings(text: string) {
  const data = {
    model: "jina-embeddings-v3",
    task: "retrieval.query",
    late_chunking: false,
    dimensions: 1024,
    embedding_type: "float",
    input: [text],
  };

  const response = await fetch("https://api.jina.ai/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.JINA_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  const responseData: {
    model: string;
    object: string;
    usage: {
      prompt_tokens: number;
      total_tokens: number;
    };
    data: {
      embedding: number[];
      index: number;
    }[];
  } = await response.json();

  return responseData;
}

export async function createResource(name: string): Promise<InsertResource> {
  const [resource] = await db
    .insert(resources)
    .values({
      name,
    })
    .returning();

  return resource;
}

export async function createEmbedding(
  resourceId: string,
  content: string,
  embedding: number[],
  pageNumber: number,
): Promise<InsertEmbedding> {
  const [newEmbedding] = await db
    .insert(embeddings)
    .values({
      resourceId,
      content,
      embedding: embedding,
      pageNumber,
    })
    .returning();
  return newEmbedding;
}

export async function similaritySearch(query: string) {
  const queryEmbedding = await getEmbeddings(query);
  const queryEmbeddingValue = queryEmbedding.data[0].embedding;

  const similarity = sql<number>`1 - (${cosineDistance(embeddings.embedding, queryEmbeddingValue)})`;

  const results = await db
    .select({
      resourceId: embeddings.resourceId,
      content: embeddings.content,
      pageNumber: embeddings.pageNumber,
      similarity,
      resourceTitle: resources.name,
    })
    .from(embeddings)
    .innerJoin(resources, eq(embeddings.resourceId, resources.id))
    .where(gt(similarity, 0.5))
    .orderBy((t) => desc(t.similarity))
    .limit(4);

  return results;
}

export async function getSegmentation(query: string) {
  try {
    const url = "https://segment.jina.ai/";
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer jina_e7b138295bc547b5aabf1287356fbbbe8OjpeY3MxsDL4g4WTy2yr8Doq5W2",
    };
    const data = {
      content: query,
      return_tokens: true,
      return_chunks: true,
      max_chunk_length: 2000,
      tokenizer: "o200k_base",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const json = await response.json();

    return json;
  } catch (e) {
    console.log(e);
  }
}
