/** Submit to the local newsletter API; transport failures retain their original rejection. */
export async function subscribeNewsletter(email: string): Promise<string | null> {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  return response.ok ? null : data.error || "Something went wrong. Try again.";
}
