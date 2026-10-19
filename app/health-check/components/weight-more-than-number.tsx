"use client";

import { UniversalButton } from "@/components/shared/universal-button";
import { healthCheckData } from "@/data/health-check";

export function WeightMoreThanNumber() {
  const { weightMoreThanNumber: content } = healthCheckData;

  return (
    <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="weight-more-heading">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <div className="max-w-3xl lg:max-w-4xl">
          <h2
            id="weight-more-heading"
            className="text-2xl font-bold leading-tight tracking-tight text-[#5b2a7a] md:text-3xl lg:text-4xl"
          >
            {content.title}
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-900 md:mt-6 md:text-base lg:text-lg">
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
        </div>
      </div>
    </section>
  );
}
