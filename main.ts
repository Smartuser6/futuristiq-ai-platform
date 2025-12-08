// main.ts – Entry point für Deno Deploy

import { handleRequest } from "./src/server.ts";

export default {
  async fetch(request: Request): Promise<Response> {
    return handleRequest(request);
  },
};
