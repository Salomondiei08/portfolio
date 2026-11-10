import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { subscribeNewsletter } from "../src/lib/newsletter.ts";
const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; });

test("sends the submitted email and accepts a successful API result", async () => {
  globalThis.fetch = async (url, init) => {
    assert.equal(url, "/api/newsletter");
    assert.equal(init.method, "POST");
    assert.deepEqual(JSON.parse(init.body), { email: "reader@example.com" });
    return Response.json({ message: "Subscribed successfully!" });
  };
  assert.equal(await subscribeNewsletter("reader@example.com"), null);
});

test("preserves API errors, fallback text and transport failures", async () => {
  globalThis.fetch = async () => Response.json({ error: "Please retry later." }, { status: 500 });
  assert.equal(await subscribeNewsletter("reader@example.com"), "Please retry later.");
  globalThis.fetch = async () => Response.json({}, { status: 500 });
  assert.equal(await subscribeNewsletter("reader@example.com"), "Something went wrong. Try again.");
  globalThis.fetch = async () => { throw new Error("offline"); };
  await assert.rejects(subscribeNewsletter("reader@example.com"), /offline/);
});
