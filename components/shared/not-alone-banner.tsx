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
  const titleBreak = DEFAULT_CONTENT.title.indexOf(" obesity");
  const titleLead = DEFAULT_CONTENT.title.slice(0, titleBreak);
  const titleTail = DEFAULT_CONTENT.title.slice(titleBreak + 1);

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
              <p className="text-sm text-white font-light md:text-base lg:text-2xl">
                {SECONDARY_CONTENT.eyebrow}
              </p>
              <h2 className="text-2xl mt-2 sm:mt-8 font-bold leading-tight tracking-tight text-brand-orange md:text-4xl lg:text-6xl">
                {SECONDARY_CONTENT.title}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed font-extralight text-white md:max-w-2xl md:text-base lg:text-lg">
                {SECONDARY_CONTENT.description}
              </p>
              <div className="flex flex-col items-center gap-3 pt-2 sm:pt-16">
                <UniversalButton
                  variant="orange"
                  ctaText={SECONDARY_CONTENT.orangeCta.text}
                  ctaLink={SECONDARY_CONTENT.orangeCta.link}
                />
                <p className="text-xs text-white/90 mt-4  font-light">
                  {SECONDARY_CONTENT.footnote}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex h-full min-h-[26rem] flex-col justify-center px-6 py-12 md:min-h-[36rem] md:justify-start md:px-14 md:pt-24 md:pb-16 lg:min-h-[780px] lg:px-20 lg:pt-32 lg:pb-20 xl:px-28">
            <div className="flex w-full max-w-[36.25rem] flex-col items-start">
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-brand-green md:text-4xl lg:text-5xl">
                  {titleLead}
                  <br className="hidden md:block" /> {titleTail}
                </h2>
                <p className="text-sm leading-relaxed text-white md:text-lg lg:text-xl lg:leading-relaxed">
                  {DEFAULT_CONTENT.description}
                </p>
              </div>
              <div className="mt-10 flex flex-col items-start gap-2 sm:mt-12 sm:flex-row sm:items-center md:mt-16 lg:mt-20">
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
