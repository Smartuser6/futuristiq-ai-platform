// src/server.ts
// Koppelt den Deno-Deploy-Fetch mit unserem Router

import { router } from "./routes/mod.ts";

export async function handleRequest(request: Request): Promise<Response> {
  return router.handle(request);
}
