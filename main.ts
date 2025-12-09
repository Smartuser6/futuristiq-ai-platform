import { router } from "./router.ts";

console.log("FUTURISTIQ backend running");

Deno.serve((request) => {
  return router(request);
});
