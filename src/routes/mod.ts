import { router } from "../router.ts";
import { marketRoutes } from "./markets.ts";
import { healthRoute } from "./health.ts";

router.add("GET", "/health", healthRoute);
router.add("GET", "/markets", marketRoutes);
