import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/newsletter
 *
 * Subscribes an email address to the Buttondown newsletter.
 *
 * Setup:
 *   1. Create a free account at https://buttondown.com
 *   2. Go to Settings → API Keys and generate a key
 *   3. Add BUTTONDOWN_API_KEY=<your-key> to your .env.local file
 */
export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    console.error("BUTTONDOWN_API_KEY is not set");
    return NextResponse.json(
      { error: "Newsletter is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));

    // Buttondown returns a specific error when already subscribed
    const alreadySubscribed =
      JSON.stringify(data).toLowerCase().includes("already subscribed") ||
      res.status === 409;

    if (alreadySubscribed) {
      return NextResponse.json({ message: "You are already subscribed!" });
    }

    console.error("Buttondown API error:", res.status, data);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Subscribed successfully!" });
}
