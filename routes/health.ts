// routes/markets.ts

export async function marketsRoute(request: Request): Promise<Response> {
  // Beispiel-Daten – später ersetzen durch echte Markt-Daten
  const data = {
    markets: [
      { id: "1", name: "Inflation 2025 > 3%", probability: 0.42 },
      { id: "2", name: "FED Cut before June", probability: 0.61 },
    ],
    timestamp: Date.now(),
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
