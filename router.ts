import { healthRoute } from "./routes/health.ts";
import { marketsRoute } from "./routes/markets.ts";
import { polymarketRoute } from "./routes/polymarket.ts";
import { macroRoute } from "./routes/macro.ts";

export function router(request: Request): Response | Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  // Health check
  if (path === "/health") {
    return healthRoute(request);
  }

  // Markets endpoint
  if (path === "/markets") {
    return marketsRoute(request);
  }

  // Polymarket endpoint
  if (path.startsWith("/polymarket")) {
    return polymarketRoute(request);
  }


  // Default fallback
  return new Response("FUTURISTIQ API RUNNING", { status: 200 });
}
