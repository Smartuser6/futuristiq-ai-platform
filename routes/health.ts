import { router } from "../router.ts";

router.add("GET", "/health", () =>
  new Response(JSON.stringify({ status: "ok" }), {
    headers: { "content-type": "application/json; charset=utf-8" },
  }),
);
