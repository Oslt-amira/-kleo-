ALTER TABLE "Session" ADD COLUMN "priority" varchar(255);--> statement-breakpoint
ALTER TABLE "Session" ADD COLUMN "note" text;--> statement-breakpoint
ALTER TABLE "Session" ADD COLUMN "progress" real DEFAULT 0;--> statement-breakpoint
ALTER TABLE "Session" ADD COLUMN "status" varchar(255) DEFAULT 'In Progress';--> statement-breakpoint
ALTER TABLE "Session" ADD COLUMN "ai_generated" boolean DEFAULT false NOT NULL;