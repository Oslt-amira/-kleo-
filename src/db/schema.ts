import { InferSelectModel } from "drizzle-orm";
import { uuid, pgTable, text, timestamp } from "drizzle-orm/pg-core";

/**
 * This table stores users.
 */
export const User = pgTable("user", {
  user_id: uuid("user_id").defaultRandom().primaryKey().notNull(),
  email_address: text("email_address").unique().notNull(),
  createTs: timestamp("create_ts").defaultNow().notNull(),
});

export type User = InferSelectModel<typeof User>;
