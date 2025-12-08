import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { handleRequest } from "./server.ts";

console.log("Server running on port 8000");

serve(handleRequest, { port: 8000 });
