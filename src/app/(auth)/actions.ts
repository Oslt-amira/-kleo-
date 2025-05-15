"use server";

import { createUser } from "@/db/queries";

export async function handleUserCreation(
  email: string,
  clerkId?: string | null,
) {
  try {
    return await createUser(email, clerkId);
  } catch (e) {
    console.log(e);
    return null;
  }
}
