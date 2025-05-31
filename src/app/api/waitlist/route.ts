// app/api/waitlist/submit/route.ts (Next.js 13+ with App Router)
import { NextResponse } from "next/server";

import { db } from "@/db";
import { User } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await db.insert(User).values({
      email_address: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
