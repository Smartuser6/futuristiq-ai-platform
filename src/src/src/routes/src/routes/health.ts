// src/routes/health.ts
// Healthcheck & Status-Endpunkt

import type { Router } from "../router.ts";

export function registerHealthRoutes(router: Router) {
  router.get("/health", () =>
    router.json({
      status: "ok",
      service: "futuristiq-ai-platform",
      uptimeNote: "Deno Deploy instance healthy",
    })
  );
}
