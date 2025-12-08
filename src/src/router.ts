// src/router.ts
// Einfacher, aber sauberer Router für unsere API

export type Handler = (req: Request) => Promise<Response> | Response;

type Route = {
  method: string;
  path: string;
  handler: Handler;
};

export class Router {
  private routes: Route[] = [];

  private register(method: string, path: string, handler: Handler) {
    this.routes.push({
      method: method.toUpperCase(),
      path,
      handler,
    });
  }

  get(path: string, handler: Handler) {
    this.register("GET", path, handler);
  }

  post(path: string, handler: Handler) {
    this.register("POST", path, handler);
  }

  // Hier laufen alle Requests durch
  async handle(req: Request): Promise<Response> {
    const url = new URL(req.url);

    const route = this.routes.find(
      (r) => r.method === req.method && r.path === url.pathname,
    );

    if (!route) {
      return this.json(
        { error: "Not Found", path: url.pathname },
        { status: 404 },
      );
    }

    try {
      const result = route.handler(req);
      return result instanceof Promise ? await result : result;
    } catch (err) {
      console.error("Request error:", err);
      return this.json(
        { error: "Internal Server Error" },
        { status: 500 },
      );
    }
  }

  // Kleine Helper-Methode für JSON Responses
  json(data: unknown, init?: ResponseInit): Response {
    return new Response(JSON.stringify(data, null, 2), {
      ...init,
      headers: {
        "content-type": "application/json; charset=utf-8",
        ...(init?.headers ?? {}),
      },
    });
  }
}
