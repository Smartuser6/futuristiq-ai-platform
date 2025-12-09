import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { handleRequest } from "./server.ts";

console.log("FUTURISTIQ backend running");

serve(handleRequest);
