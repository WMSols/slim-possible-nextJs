"use client";

import { UniversalButton } from "@/components/shared/universal-button";

const CONTENT = {
  title: "Not sure where to start? That's okay. Start with one question.",
  description: "Ask SlimPossible about your weight, health or treatment options.",
  ctaText: "Ask SlimPossible's AI",
  ctaLink: "/slim-possible-ai",
} as const;

export function AskAiSection() {
  return (
    <section className="bg-white px-4 py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <div className="max-w-3xl lg:max-w-4xl">
          <h2 className="bg-linear-to-r from-brand-gradient-from to-brand-gradient-to bg-clip-text text-3xl font-bold leading-tight tracking-tight text-transparent md:text-5xl lg:text-6xl">
            {CONTENT.title}
          </h2>
          <p className="mt-4 text-sm text-zinc-900 md:mt-5 md:text-base lg:text-lg">
            {CONTENT.description}
          </p>
          <div className="mt-6 md:mt-8">
            <UniversalButton
              variant="gradient"
              ctaText={CONTENT.ctaText}
              ctaLink={CONTENT.ctaLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
