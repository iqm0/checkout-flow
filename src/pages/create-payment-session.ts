export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const SECRET_KEY = import.meta.env.SECRET_KEY;
  const SITE_URL = import.meta.env.SITE_URL;

  try {
    const response = await fetch(
      "https://api.sandbox.checkout.com/payment-sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SECRET_KEY}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
        body: JSON.stringify({
          amount: 2999,
          currency: "GBP",
          reference: `ORD-${Date.now()}`,
          display_name: "Online shop",
          billing: {
            address: {
              country: "GB",
            },
          },
          customer: {
            name: "John Doe",
            email: "john.doe@example.com",
          },
          success_url: `${SITE_URL}/success`,
          failure_url: `${SITE_URL}/failure`,
        }),
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data.error_type || "Payment session creation failed" }),
        { status: response.status }
      );
    }

    return new Response(
      JSON.stringify({ paymentSession:data }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error('Error details:', error);
    return new Response(
      JSON.stringify({ error: "Failed to create payment session" }),
      { status: 500 }
    );
  }
};