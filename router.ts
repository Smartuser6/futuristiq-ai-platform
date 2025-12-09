type Handler = (req: Request) => Promise<Response> | Response;

interface Route {
  method: string;
  path: string;
  handler: Handler;
}

class Router {
  routes: Route[] = [];

  add(method: string, path: string, handler: Handler) {
    this.routes.push({ method: method.toUpperCase(), path, handler });
  }

  match(path: string, method: string) {
    const m = method.toUpperCase();
    return this.routes.find(r => r.method === m && r.path === path);
  }
}

export const router = new Router();

// wichtig: diese Imports registrieren die Routen beim Start
import "./routes/health.ts";
import "./routes/markets.ts";
import "./routes/mod.ts";

export default router;
