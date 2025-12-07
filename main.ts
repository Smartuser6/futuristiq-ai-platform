// main.ts — Minimal working Deno Deploy app

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("FUTURISTIQ AI Platform is live!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
