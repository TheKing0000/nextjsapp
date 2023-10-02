import { authMiddleware } from "@clerk/nextjs";
// Every route includeing api routes are protected by default. We can configure them public by includeing the route path in the publicRoutes array
export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
