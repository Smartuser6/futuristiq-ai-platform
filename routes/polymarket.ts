// routes/polymarket.ts

export async function polymarketRoute(request: Request): Promise<Response> {
  try {
    const response = await fetch("https://clob.polymarket.com/markets");

    if (!response.ok) {
      throw new Error("Failed to fetch Polymarket data");
    }

    const data = await response.json();

    // OPTIONAL: Märkte filtern (z. B. nur „Economics“)
    const filtered = data.filter((market: any) =>
      market.category?.toLowerCase().includes("economics")
    );

    return new Response(JSON.stringify({
      status: "ok",
      count: filtered.length,
      markets: filtered,
      timestamp: Date.now(),
    }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({
      status: "error",
      message: error.message,
    }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
