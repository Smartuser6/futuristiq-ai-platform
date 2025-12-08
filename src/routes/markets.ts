export const marketRoutes = () => {
  return new Response(JSON.stringify({
    message: "Polymarket API placeholder",
  }), {
    headers: { "Content-Type": "application/json" },
  });
};
