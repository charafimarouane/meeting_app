import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define paths you want to protect
const protectedPaths = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
    if(!protectedPaths(request)){
        await auth.protect()
    }
});

// Turn off Clerk authentication for static files or public assets
export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  };
