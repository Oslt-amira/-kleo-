CREATE TABLE IF NOT EXISTS "user" (
	"user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email_address" text NOT NULL,
	"create_ts" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_address_unique" UNIQUE("email_address")
);
