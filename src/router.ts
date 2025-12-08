import "./routes/mod.ts";

type Handler = (req: Request) => Promise<Response> | Response;

interface Route {
    method: string;
    path: string;
    handler: Handler;
}

class Router {
    routes: Route[] = [];

    add(method: string, path: string, handler: Handler) {
        this.routes.push({ method, path, handler });
    }

    match(path: string, method: string) {
        return this.routes.find(r => r.method === method && r.path === path);
    }
}

const router = new Router();
export default router;
export { router };
