// main.ts — Fully Deno Deploy Compatible

export default {
  async fetch(_request: Request): Promise<Response> {
    return new Response("FUTURISTIQ AI Platform is live!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
