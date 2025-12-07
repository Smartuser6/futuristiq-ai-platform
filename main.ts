// main.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(() => {
  return new Response("🚀 FUTURISTIQ AI is running!", {
    headers: { "content-type": "text/plain" },
  });
});
