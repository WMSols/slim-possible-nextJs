"use client";

import Image from "next/image";
import { UniversalButton } from "@/components/shared/universal-button";
import { cn } from "@/lib/utils";

export type NotAloneBannerVariant = "default" | "secondary";

type NotAloneBannerProps = {
  variant?: NotAloneBannerVariant;
};

const DEFAULT_CONTENT = {
  title: "You don't have to manage obesity alone",
  description:
    "Obesity can be treated. A qualified healthcare professional can help you understand your health, discuss the options available to you, and recommend an approach based on your individual needs",
  backgroundImage: "/images/obesity/mw-food.png",
  orangeCta: {
    text: "Talk to a Healthcare Professional",
    link: "#",
  },
  gradientCta: {
    text: "Ask SlimPossible's AI",
    link: "/slim-possible-ai",
  },
} as const;

const SECONDARY_CONTENT = {
  eyebrow: "Some questions need a healthcare professional",
  title: "Get personalized support for your weight and health",
  description:
    "Connect with a qualified healthcare professional who can assess your individual health, discuss appropriate management options and help you decide what to do next",
  backgroundImage: "/images/man-sunset.jpg",
  orangeCta: {
    text: "Talk to a Healthcare Professional",
    link: "#",
  },
  footnote: "Professional care available through Marham",
} as const;

export function NotAloneBanner({ variant = "default" }: NotAloneBannerProps) {
  const isSecondary = variant === "secondary";

  return (
    <section className="w-full  py-10  md:py-14 lg:py-16">
      {/* Full-bleed width with visible rounded corners; ~780px on desktop */}
      <div className="relative isolate min-h-[26rem] w-full overflow-hidden rounded-[25px] md:min-h-[36rem] md:rounded-[40px] lg:min-h-[780px]">
        <Image
          src={
            isSecondary
              ? SECONDARY_CONTENT.backgroundImage
              : DEFAULT_CONTENT.backgroundImage
          }
          alt=""
          fill
          className={cn(
            "object-cover",
            isSecondary ? "object-[70%_center]" : "object-center",
          )}
          sizes="100vw"
        />
        <div
          className={cn(
            "absolute inset-0",
            isSecondary ? "bg-black/55" : "bg-black/45",
          )}
          aria-hidden
        />

        {isSecondary ? (
          <div className="relative z-10 flex h-full min-h-[26rem] flex-col items-center justify-center px-6 py-12 text-center md:min-h-[36rem] md:px-12 md:py-16 lg:min-h-[780px] lg:px-16 lg:py-20">
            <div className="flex max-w-2xl flex-col items-center gap-4 md:max-w-3xl md:gap-5 lg:max-w-4xl">
              <p className="text-sm text-white md:text-base lg:text-lg">
                {SECONDARY_CONTENT.eyebrow}
              </p>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-orange md:text-4xl lg:text-5xl">
                {SECONDARY_CONTENT.title}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white md:max-w-2xl md:text-base lg:text-lg">
                {SECONDARY_CONTENT.description}
              </p>
              <div className="flex flex-col items-center gap-3 pt-2">
                <UniversalButton
                  variant="orange"
                  ctaText={SECONDARY_CONTENT.orangeCta.text}
                  ctaLink={SECONDARY_CONTENT.orangeCta.link}
                />
                <p className="text-xs text-white/90 md:text-sm">
                  {SECONDARY_CONTENT.footnote}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex h-full min-h-[26rem] flex-col justify-start px-6 py-12 md:min-h-[36rem] md:px-12 md:py-16 lg:min-h-[780px] lg:px-16 lg:py-20 xl:px-20">
            <div className="flex max-w-xl flex-col gap-4 md:max-w-2xl md:gap-5 lg:max-w-3xl">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-green md:text-4xl lg:text-5xl">
                {DEFAULT_CONTENT.title}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white md:text-base lg:max-w-2xl lg:text-lg">
                {DEFAULT_CONTENT.description}
              </p>
              <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <UniversalButton
                  variant="orange"
                  ctaText={DEFAULT_CONTENT.orangeCta.text}
                  ctaLink={DEFAULT_CONTENT.orangeCta.link}
                />
                <UniversalButton
                  variant="gradient"
                  ctaText={DEFAULT_CONTENT.gradientCta.text}
                  ctaLink={DEFAULT_CONTENT.gradientCta.link}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
