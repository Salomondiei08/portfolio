"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

/** Provides a manual fallback when an in-app browser blocks WhatsApp. */
export function WhatsAppHelp({ channelUrl, phone }: { channelUrl: string; phone: string }) {
  const [status, setStatus] = useState("");

  async function copyValue(input: HTMLInputElement) {
    try {
      await navigator.clipboard.writeText(input.value);
      setStatus("Copié.");
    } catch {
      input.focus();
      input.select();
      input.setSelectionRange(0, input.value.length);
      setStatus("Appuyez longuement sur le texte sélectionné, puis choisissez Copier.");
    }
  }

  return (
    <details className="mt-6 border-t border-border pt-4 text-sm">
      <summary className="min-h-11 cursor-pointer py-3 font-bold">WhatsApp ne s&apos;ouvre pas ?</summary>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        Depuis TikTok, essayez le menu en haut de l&apos;écran, puis l&apos;option pour ouvrir cette page dans votre navigateur. Vous pouvez aussi copier le lien de la chaîne ou mon numéro ci-dessous.
      </p>
      {[
        { label: "Lien de la chaîne", value: channelUrl },
        { label: "Numéro de contact WhatsApp", value: phone },
      ].map(({ label, value }) => (
        <div key={label} className="mt-4">
          <label className="block font-medium">
            {label}
            <span className="mt-2 flex items-center gap-2">
              <input readOnly value={value} className="min-h-11 w-full min-w-0 rounded-md border border-border bg-background px-3 text-foreground" />
              <button
                type="button"
                aria-label={`Copier : ${label}`}
                title={`Copier : ${label}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={(event) => {
                  const input = event.currentTarget.previousElementSibling as HTMLInputElement;
                  void copyValue(input);
                }}
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
              </button>
            </span>
          </label>
        </div>
      ))}
      <p role="status" className="mt-3 leading-relaxed text-muted-foreground">{status}</p>
    </details>
  );
}
