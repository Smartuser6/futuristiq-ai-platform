// src/routes/markets.ts
// Hier wird später die Polymarket-Integration andocken.

import type { Router } from "../router.ts";

export function registerMarketRoutes(router: Router) {
  router.get("/markets", () =>
    router.json({
      message: "Polymarket integration coming soon.",
      data: [],
      nextSteps: [
        "Fetch live markets from Polymarket API",
        "Calculate probabilities & trends",
        "Expose top opportunities for daily briefing",
      ],
    })
  );
}
