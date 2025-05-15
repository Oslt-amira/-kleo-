import {
  integer,
  pgTable,
  varchar,
  text,
  index,
  vector,
  uuid,
  timestamp,
  json,
  pgEnum,
  real,
  boolean,
} from "drizzle-orm/pg-core";
import { generateId } from "ai";
import type { InferSelectModel } from "drizzle-orm";

export const resources = pgTable("Resource", {
  id: varchar("id", { length: 191 })
    .primaryKey()
    .$defaultFn(() => generateId()),
  name: varchar({ length: 255 }).notNull(),
});

export const embeddings = pgTable(
  "embeddings",
  {
    id: varchar("id", { length: 191 })
      .primaryKey()
      .$defaultFn(() => generateId()),
    resourceId: varchar("resource_id", { length: 191 }).references(
      () => resources.id,
      { onDelete: "cascade" },
    ),
    content: text("content").notNull(),
    embedding: vector("embedding", { dimensions: 1024 }).notNull(),
    pageNumber: integer("page_number").notNull(),
  },
  (table) => ({
    embeddingIndex: index("embeddingIndex").using(
      "hnsw",
      table.embedding.op("vector_cosine_ops"),
    ),
  }),
);

export type InsertResource = typeof resources.$inferInsert;
export type InsertEmbedding = typeof embeddings.$inferInsert;

export const user = pgTable("User", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  email: varchar("email", { length: 64 }).notNull(),
  password: varchar("password", { length: 64 }),
  clerkId: varchar("clerkId", { length: 32 }),
});

export type User = InferSelectModel<typeof user>;

export const chat = pgTable("Chat", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  createdAt: timestamp("createdAt").notNull(),
  title: text("title").notNull(),
  userId: uuid("userId")
    .notNull()
    .references(() => user.id),
});

export type Chat = InferSelectModel<typeof chat>;

export const message = pgTable("Message", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  chatId: uuid("chatId")
    .notNull()
    .references(() => chat.id),
  role: varchar("role").notNull(),
  content: json("content").notNull(),
  createdAt: timestamp("createdAt").notNull(),
});

export type Message = InferSelectModel<typeof message>;

export type TimeRange = {
  start: Date;
  end: Date;
};

export const session = pgTable("Session", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  title: varchar("title", { length: 255 }),
  timeRange: json().$type<TimeRange>().notNull(),
  type: varchar("type", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  userId: uuid("userId")
    .notNull()
    .references(() => user.id),
  priority: varchar("priority", { length: 255 }),
  note: text("note"),
  progress: real("progress").default(0),
  status: varchar("status", { length: 255 }).default("In Progress"),
  ai_generated: boolean("ai_generated").notNull().default(false),
});

export type Session = InferSelectModel<typeof session> & {
  timeRange: TimeRange;
};
