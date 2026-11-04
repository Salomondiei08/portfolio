import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/newsletter
 *
 * Starts a newsletter subscription through Iris, the central mail hub. Iris sends a confirmation
 * email and adds the address only after the person presses the button in it (double opt-in), so a
 * mistyped or someone else's address never receives the newsletter.
 *
 * Setup (server-side environment variables, never in the browser):
 *   IRIS_PUBLIC_URL   https://iris.reinvent-labs.com
 *   IRIS_LIST_ID      id of the list, shown in Iris under Newsletters
 *   IRIS_SIGNUP_KEY   the list's signup key, shown next to it under Inscription
 */
export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as { email?: unknown };
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email || !email.includes("@") || email.length > 254) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const base = process.env.IRIS_PUBLIC_URL;
  const list = process.env.IRIS_LIST_ID;
  const key = process.env.IRIS_SIGNUP_KEY;
  if (!base || !list || !key) {
    console.error("IRIS_PUBLIC_URL, IRIS_LIST_ID or IRIS_SIGNUP_KEY is not set");
    return NextResponse.json({ error: "Newsletter is not configured yet. Please try again later." }, { status: 500 });
  }

  let res: Response;
  try {
    res = await fetch(`${base.replace(/\/+$/, "")}/api/public/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ list, email, key }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error("Iris is unreachable:", error);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 });
  }

  if (res.status === 429) {
    return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }
  if (res.status !== 202) {
    console.error("Iris refused the subscription:", res.status);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ message: "Check your inbox to confirm your subscription." });
}
