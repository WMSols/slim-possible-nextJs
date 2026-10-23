"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { FadeUpView } from "@/components/animations/fade-up-view";
import { UniversalButton } from "@/components/shared/universal-button";
import { cn } from "@/lib/utils";

export type SmallRoundBannerProps = {
  title: string;
  description: ReactNode;
  backgroundImage: string;
  /** Optional line above the title (e.g. Support personalized banner). */
  eyebrow?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  /** Taller frame used on copy-heavy sections (SS2–SS4). */
  variant?: "default" | "tall";
  /** Shows the hardcoded blue CTA. Default true. */
  showBlueCta?: boolean;
  /** Shows the gradient AI CTA. Default false. */
  showGradientCta?: boolean;
  /** Hides both CTAs. Default false. */
  hideAllCta?: boolean;
  /** Aligns the eyebrow, title, description, and CTAs. Default center. */
  contentAlign?: "center" | "left";
  /**
   * Padding on the inner content (title, description, CTAs).
   * When set, replaces the default padding entirely.
   */
  contentPaddingClassName?: string;
  className?: string;
};

const ORANGE_CTA = {
  text: "Talk to a Healthcare Professional",
  link: "#",
} as const;

const BLUE_CTA = {
  text: "Start Your Assessment",
  link: "#",
} as const;

const GRADIENT_CTA = {
  text: "Ask SlimPossible's AI",
  link: "/slim-possible-ai",
} as const;

export function SmallRoundBanner({
  title,
  description,
  backgroundImage,
  eyebrow,
  titleClassName = "",
  descriptionClassName = "",
  variant = "default",
  showBlueCta = true,
  showGradientCta = false,
  hideAllCta = false,
  contentAlign = "center",
  contentPaddingClassName = "",
  className = "",
}: SmallRoundBannerProps) {
  const isTall = variant === "tall";
  const isLeft = contentAlign === "left";
  const defaultContentPadding = isTall
    ? "px-6 py-14 md:px-12 md:py-20 lg:px-16 lg:py-24"
    : "px-6 py-14 md:px-12 md:py-20 lg:px-16";

  return (
    <FadeUpView className="w-full">
    <section
      className={cn(
        "relative mx-auto w-full overflow-hidden px-4",
        "max-w-5xl 2xl:max-w-7xl",
        className,
      )}
    >
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-[25px] md:rounded-[35px]",
          isTall
            ? "min-h-[28rem] md:min-h-[700px] lg:min-h-[750px]"
            : "min-h-[28rem] md:min-h-[34rem] lg:min-h-[38rem]",
        )}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1536px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />

        <div
          className={cn(
            "absolute inset-0 z-10 flex flex-col",
            contentPaddingClassName || defaultContentPadding,
            isLeft ? "items-start text-left" : "items-center text-center",
            hideAllCta ? "justify-center" : "justify-between",
          )}
        >
          <div
            className={cn(
              "flex w-full max-w-3xl flex-col gap-4 md:gap-5 2xl:max-w-4xl",
              isLeft ? "mr-auto items-start" : "mx-auto items-center",
            )}
          >
            {eyebrow ? (
              <p className="text-sm text-white md:text-base lg:text-lg">
                {eyebrow}
              </p>
            ) : null}

            <h2
              className={
                titleClassName ||
                "text-2xl font-bold leading-tight tracking-tight text-brand-orange md:text-4xl lg:text-[2.75rem]"
              }
            >
              {title}
            </h2>

            <div
              className={
                descriptionClassName ||
                "max-w-2xl space-y-4 text-sm leading-relaxed text-white md:text-base lg:text-lg 2xl:max-w-3xl"
              }
            >
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          </div>

          {!hideAllCta ? (
            <div
              className={cn(
                "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4",
                isLeft ? "items-start justify-start" : "items-center justify-center",
              )}
            >
              <UniversalButton
                variant="orange"
                ctaText={ORANGE_CTA.text}
                ctaLink={ORANGE_CTA.link}
              />
              {showBlueCta ? (
                <UniversalButton
                  variant="blue"
                  ctaText={BLUE_CTA.text}
                  ctaLink={BLUE_CTA.link}
                />
              ) : null}
              {showGradientCta ? (
                <UniversalButton
                  variant="gradient"
                  ctaText={GRADIENT_CTA.text}
                  ctaLink={GRADIENT_CTA.link}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
    </FadeUpView>
  );
}
