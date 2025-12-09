// routes/health.ts

export function healthRoute(request: Request): Response {
  return new Response(
    JSON.stringify({ status: "ok", timestamp: Date.now() }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    },
  );
}
