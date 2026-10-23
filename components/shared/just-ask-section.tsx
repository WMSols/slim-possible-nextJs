"use client";

import { FadeUpView } from "@/components/animations/fade-up-view";
import { UniversalButton } from "@/components/shared/universal-button";

const CONTENT = {
  lineOne: "See something you",
  lineTwo: "don't understand?",
  lineThree: "Just ask.",
  description:
    "Glucose data can sometimes feel complicated. Ask SlimPossible to help explain common glucose patterns and metabolic-health concepts in simple language.",
  ctaText: "Ask SlimPossible's AI",
  ctaLink: "/slim-possible-ai",
} as const;

export function JustAskSection() {
  return (
    <section className="bg-white px-4 py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <FadeUpView className="max-w-2xl lg:max-w-3xl">
          <h2 className="text-3xl font-medium  tracking-tight  md:text-5xl lg:text-6xl">
            <span className="block">{CONTENT.lineOne}</span>
            <span className="block">{CONTENT.lineTwo}</span>
            <span className="mt-1 block bg-linear-to-r from-brand-gradient-from to-brand-gradient-to bg-clip-text text-transparent">
              {CONTENT.lineThree}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed  md:mt-6 md:text-base lg:text-lg">
            {CONTENT.description}
          </p>

          <div className="mt-6 md:mt-8">
            <UniversalButton
              variant="gradient"
              ctaText={CONTENT.ctaText}
              ctaLink={CONTENT.ctaLink}
            />
          </div>
        </FadeUpView>
      </div>
    </section>
  );
}
