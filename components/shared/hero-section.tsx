"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { FadeUpView } from "@/components/animations/fade-up-view";
import { UniversalButton } from "@/components/shared/universal-button";

export type HeroDisclaimer = {
  title: string;
  body: string;
};

export type HeroSectionProps = {
  title: string;
  backgroundImage: string;
  /** When set (e.g. Community), renders a multi-panel background on md+; mobile uses the first image. */
  backgroundImages?: string[];
  subtitle?: string;
  subtitleHighlights?: string[];
  isSupport?: boolean;
  /** Left-align the hero copy block (About, Support). */
  alignLeft?: boolean;
  isHome?: boolean;
  showExplore?: boolean;
  exploreText?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  ctaText?: string;
  ctaLink?: string;
  shopCgmHref?: string;
  shopCgmLabel?: string;
  shopCgmMessage?: string;
  disclaimer?: HeroDisclaimer;
};

function highlightSubtitle(text: string, highlights: string[] = []) {
  if (!highlights.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlight = highlights.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    );

    if (!isHighlight) return <span key={`${part}-${index}`}>{part}</span>;

    return (
      <span key={`${part}-${index}`} className="text-brand-purple-light">
        {part}
      </span>
    );
  });
}

export function HeroSection({
  title,
  backgroundImage,
  backgroundImages,
  subtitle,
  subtitleHighlights = [],
  isSupport = false,
  alignLeft = false,
  isHome = false,
  showExplore = false,
  exploreText,
  titleClassName = "",
  subTitleClassName = "",
  ctaText,
  ctaLink = "#",
  shopCgmHref = "https://sibionics.bfbio.com",
  shopCgmLabel = "Shop CGM",
  shopCgmMessage = "Monitor your glucose 24/7 with Sibionics",
  disclaimer,
}: HeroSectionProps) {
  const panelImages =
    backgroundImages && backgroundImages.length > 1
      ? backgroundImages
      : [backgroundImage];
  const isMultiPanel = panelImages.length > 1;
  const [toastOpen, setToastOpen] = useState(Boolean(disclaimer));

  const isLeftAligned = isSupport || alignLeft;

  return (
    <section
      className={`relative w-full ${isHome ? "bg-brand-mint pt-0" : ""}`}
    >
      {isHome ? (
        <FadeUpView className="relative z-40 flex items-end justify-center gap-2 px-3 pt-5 pb-1.5 text-center text-xs text-zinc-800 md:gap-3 md:px-4 md:pt-4 md:pb-2.5 md:text-base">
          <span>{shopCgmMessage}</span>
          <a
            href={shopCgmHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-brand-mint-dark transition-colors hover:bg-white/90 md:gap-1.5 md:px-3 md:py-1.5 md:text-sm"
          >
            {shopCgmLabel}
            <ArrowRight className="size-3 md:size-3.5" aria-hidden />
          </a>
        </FadeUpView>
      ) : null}

      <div
        className={`relative isolate overflow-hidden ${
          isHome
            ? "min-h-[calc(100dvh-3.5rem)] rounded-t-[2rem] md:min-h-[calc(100dvh-4.5rem)] md:rounded-t-[2.5rem] lg:rounded-t-[3rem]"
            : "min-h-dvh"
        }`}
      >
        {isMultiPanel ? (
          <div className="absolute inset-0 grid md:grid-cols-3">
            {panelImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className={`relative ${index === 0 ? "block" : "hidden md:block"}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 33vw"
                      : "33vw"
                  }
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div
          className={`relative z-10 flex min-h-[inherit] flex-col px-5 pb-10 md:px-10 md:pt-28 lg:px-14 ${
            isHome
              ? "justify-start pt-[7.25rem] md:justify-center"
              : "justify-center pt-24"
          }`}
        >
          <FadeUpView
            className={`flex w-full flex-col gap-2.5 md:gap-5 ${
              isLeftAligned
                ? "mr-auto max-w-2xl items-start text-left lg:max-w-3xl"
                : "mx-auto max-w-3xl items-center text-center"
            }`}
          >
            <h1
              className={
                titleClassName ||
                "text-[1.65rem] font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              }
            >
              {title}
            </h1>

            {subtitle ? (
              <p
                className={
                  subTitleClassName ||
                  ` max-w-xs sm:max-w-2xl text-xl mt-2 text-white md:text-2xl  ${
                    isLeftAligned ? "" : "mx-auto"
                  }`
                }
              >
                {highlightSubtitle(subtitle, subtitleHighlights)}
              </p>
            ) : null}

            {isSupport && ctaText ? (
              <div className="pt-2">
                <UniversalButton
                  variant="orange"
                  ctaText={ctaText}
                  ctaLink={ctaLink}
                />
              </div>
            ) : null}
          </FadeUpView>

          <AnimatePresence>
            {isHome && toastOpen && disclaimer ? (
              <motion.aside
                initial={{ opacity: 0, x: -48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="absolute bottom-52 left-0 z-20 max-w-[11.5rem] rounded-r-lg bg-white p-2 shadow-md sm:bottom-20 md:bottom-24  md:max-w-[28rem] md:rounded-r-xl md:py-4 md:px-8"
                role="status"
              >
                <button
                  type="button"
                  onClick={() => setToastOpen(false)}
                  className="absolute right-1 top-1 rounded p-0.5 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 md:right-2 md:top-2 md:p-1"
                  aria-label="Dismiss disclaimer"
                >
                  <X className="size-3 md:size-4" />
                </button>
                <p className="pr-4 text-[8px] leading-snug text-zinc-900 md:pr-16 md:text-xs">
                  <span className="font-semibold">{disclaimer.title}<br /></span>{" "}
                  {disclaimer.body}
                </p>
              </motion.aside>
            ) : null}
          </AnimatePresence>

          {showExplore ? (
            <div
              className={`absolute z-20 flex items-center gap-2.5 md:gap-3 ${
                isHome ? "bottom-16 md:bottom-24" : "bottom-6 md:bottom-8"
              } left-0 right-4  md:left-auto md:right-8 justify-end`}
            >
              {exploreText ? (
                <span className="text-sm text-white/90 md:text-base">
                  {exploreText}
                </span>
              ) : null}
              <Link
                href="#explore"
                className="flex size-6 items-center justify-center rounded-full border-2 border-brand-green text-brand-green transition hover:bg-brand-green/10 md:size-8"
                aria-label={exploreText || "Explore next section"}
              >
                <ArrowDown className="size-4" strokeWidth={2.25} />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
