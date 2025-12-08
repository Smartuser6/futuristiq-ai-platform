// src/routes/mod.ts
// Zentraler Ort, an dem alle Routen registriert werden

import { Router } from "../router.ts";
import { registerHealthRoutes } from "./health.ts";
import { registerMarketRoutes } from "./markets.ts";

export const router = new Router();

// Root-Route – kurze Erklärung, was dieser Service macht
router.get("/", () =>
  router.json({
    service: "FUTURISTIQ AI Platform",
    status: "online",
    endpoints: ["/health", "/markets"],
  })
);

// Spezielle Routen in eigenen Dateien
registerHealthRoutes(router);
registerMarketRoutes(router);
