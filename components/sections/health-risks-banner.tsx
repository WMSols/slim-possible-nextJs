"use client";

import Image from "next/image";
import { homeData, type RiskPill } from "@/data/home";
import { cn } from "@/lib/utils";

function Pill({ item }: { item: RiskPill }) {
  if (item.type === "image") {
    return (
      <div className="relative h-16 w-52 shrink-0 overflow-hidden rounded-full">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="208px"
        />
      </div>
    );
  }

  return (
    <span className="shrink-0 whitespace-nowrap rounded-full border border-white/70 px-6 py-3 text-lg text-white">
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
          "flex w-max items-center gap-4",
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
      className="relative z-20 mt-0 px-0 md:-mt-14"
      aria-labelledby="health-risks-heading"
    >
      <div className="overflow-hidden rounded-[28px] bg-[#60269E] px-0 pb-10 pt-12 md:rounded-[35px] md:pb-22 md:pt-22">
        <h2
          id="health-risks-heading"
          className="mb-10 px-6 text-center text-4xl font-medium leading-tight tracking-tight md:mb-14 lg:text-5xl"
        >
          <span className="text-[#D4B7F8]">
            <span className="sm:hidden">
              Health Risks
              <br />
              Associated
              <br />
              with{" "}
            </span>
            <span className="hidden sm:inline">
              Health Risks Associated with{" "}
            </span>
          </span>
          <span className="font-medium text-white">Obesity</span>
        </h2>

        <div className="flex flex-col gap-4">
          <MarqueeRow items={healthRisks.rowOne} direction="left" />
          <MarqueeRow items={healthRisks.rowTwo} direction="right" />
        </div>
      </div>
    </section>
  );
}
