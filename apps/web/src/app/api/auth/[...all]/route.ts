// apps/web/app/api/auth/[...all]/route.ts
import { auth } from "@portfolio/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const runtime = "nodejs";
export const { GET, POST } = toNextJsHandler(auth);
