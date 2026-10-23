"use client";

import { FadeUpView } from "@/components/animations/fade-up-view";
import { UniversalButton } from "@/components/shared/universal-button";
import { healthCheckData } from "@/data/health-check";

export function WeightMoreThanNumber() {
  const { weightMoreThanNumber: content } = healthCheckData;

  return (
    <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="weight-more-heading">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <FadeUpView className="max-w-3xl lg:max-w-4xl">
          <h2
            id="weight-more-heading"
            className="text-2xl font-normal leading-tight tracking-tight text-[#60269E] md:text-3xl lg:text-4xl"
          >
            {content.title}
          </h2>

          <div className="mt-5 space-y-4 text-sm  text-zinc-900 md:mt-6 md:text-base lg:text-2xl">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-8">
            <UniversalButton
              variant="orange"
              ctaText={content.orangeCta.text}
              ctaLink={content.orangeCta.link}
            />
            <UniversalButton
              variant="gradient"
              ctaText={content.gradientCta.text}
              ctaLink={content.gradientCta.link}
            />
          </div>
        </FadeUpView>
      </div>
    </section>
  );
}
