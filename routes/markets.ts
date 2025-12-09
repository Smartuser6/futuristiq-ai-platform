import { router } from "../router.ts";

router.add("GET", "/markets", () =>
  new Response(
    JSON.stringify(
      {
        message: "Polymarket backend placeholder",
        status: "online",
      },
      null,
      2,
    ),
    {
      headers: { "content-type": "application/json; charset=utf-8" },
    },
  ),
);
