

export async function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const route = router.match(url.pathname, req.method);

  if (!route) {
    return new Response("Not found", { status: 404 });
    }

  try {
    return await route.handler(req);
  } catch (err) {
    console.error("Route error:", err);
    return new Response("Server error", { status: 500 });
  }
}
