"use client";

import Image from "next/image";
import { homeData, type RiskPill } from "@/data/home";
import { cn } from "@/lib/utils";

function Pill({ item }: { item: RiskPill }) {
  if (item.type === "image") {
    return (
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full",
          "h-10 w-[4.5rem] sm:h-12 sm:w-24 md:h-14 md:w-32",
        )}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 72px, 128px"
        />
      </div>
    );
  }

  return (
    <span
      className={cn(
        "shrink-0 rounded-full border border-white/70 text-white",
        "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
        "md:px-5 md:py-2.5 md:text-base",
      )}
    >
      {item.label}
    </span>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: RiskPill[];
  direction: "left" | "right";
}) {
  const track = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          "flex w-max items-center gap-2 sm:gap-3 md:gap-4",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
        )}
      >
        {track.map((item, index) => (
          <Pill
            key={`${item.type}-${index}-${item.type === "text" ? item.label : item.src}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export function HealthRisksBanner() {
  const { healthRisks } = homeData;

  return (
    <section
      id="explore"
      className="relative z-20 -mt-[3.25rem] px-0 md:-mt-14"
      aria-labelledby="health-risks-heading"
    >
      <div className="overflow-hidden rounded-t-[25px] bg-[#6b2d8b] px-0 pb-8 pt-10 md:rounded-t-[35px] md:pb-12 md:pt-14">
        <h2
          id="health-risks-heading"
          className="mb-6 px-4 text-center text-2xl font-semibold tracking-tight sm:mb-8 sm:text-3xl md:mb-10 md:text-4xl lg:text-5xl"
        >
          <span className="text-[#d4b8e8]">Health Risks Associated with </span>
          <span className="font-bold text-white">Obesity</span>
        </h2>

        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
          <MarqueeRow items={healthRisks.rowOne} direction="left" />
          <MarqueeRow items={healthRisks.rowTwo} direction="right" />
        </div>
      </div>
    </section>
  );
}
