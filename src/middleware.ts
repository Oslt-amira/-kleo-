import {
  clerkMiddleware,
  createRouteMatcher,
  clerkClient,
} from "@clerk/nextjs/server";
import { getUserByClerkId } from "./db/queries";

const isProtectedRoute = createRouteMatcher(["/home(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect({
      unauthenticatedUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
      unauthorizedUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
    });
  }

  const authObject = await auth();

  if (authObject.userId) {
    const client = await clerkClient();
    const user = await client.users.getUser(authObject.userId);

    if (!user.publicMetadata.id) {
      const userFromDb = await getUserByClerkId(authObject.userId);
      if (!userFromDb) {
        return;
      }
      await client.users.updateUserMetadata(authObject.userId, {
        publicMetadata: {
          id: userFromDb[0]?.id,
        },
      });
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
