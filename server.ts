import { router } from "./router.ts";

export async function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const route = router.match(url.pathname, req.method);

  if (!route) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const result = route.handler(req);
    return result instanceof Promise ? await result : result;
  } catch (err) {
    console.error("Route error:", err);
    return new Response("Server error", { status: 500 });
  }
}
