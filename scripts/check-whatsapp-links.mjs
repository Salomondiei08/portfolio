import assert from "node:assert/strict";
import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage();
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: async (value) => { window.copiedValue = value; } },
      configurable: true,
    });
  });
  for (const width of [320, 390, 480, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${process.env.BASE_URL || "http://localhost:3000"}/links`);
    await page.waitForLoadState("networkidle");
    for (const selector of ['a[href*="whatsapp.com/channel/"]', 'a[href^="https://wa.me/"]']) {
      assert.equal(await page.locator(selector).getAttribute("target"), null);
    }
    await page.locator("summary").click();
    await page.getByRole("button", { name: "Copier : Lien de la chaîne", exact: true }).click();
    await page.waitForFunction(() => window.copiedValue?.includes("/channel/0029Vabuc5aCMY0MaUTXzJ1F"));
    await page.getByRole("button", { name: "Copier : Numéro de contact WhatsApp", exact: true }).click();
    await page.waitForFunction(() => window.copiedValue === "+2250152375828");
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  }
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => { throw new Error("Clipboard blocked"); };
  });
  await page.getByRole("button", { name: "Copier : Numéro de contact WhatsApp", exact: true }).click();
  await page.getByRole("status").filter({ hasText: "Appuyez longuement" }).waitFor();
  assert.equal(await page.evaluate(() => {
    const input = document.activeElement;
    return input instanceof HTMLInputElement && input.selectionEnd - input.selectionStart === input.value.length;
  }), true);
  console.log("WhatsApp same-tab links, copying, clipboard-denied fallback and responsive layouts passed.");
} finally {
  await browser.close();
}
