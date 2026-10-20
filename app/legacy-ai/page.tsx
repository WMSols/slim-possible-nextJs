import type { Metadata } from "next";
import { LegacyAiWidget } from "./legacy-ai-widget";

export const metadata: Metadata = {
  title: "Legacy AI",
  description: "Demonstration of the existing SlimPossible chatbot widget.",
};

export default function LegacyAiPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-purple">
        Demonstration
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-navy">
        Legacy AI
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80">
        This page loads the chatbot already set up for SlimPossible. Use the
        button at the bottom-right of the screen to open it.
      </p>
      <LegacyAiWidget />
    </div>
  );
}
