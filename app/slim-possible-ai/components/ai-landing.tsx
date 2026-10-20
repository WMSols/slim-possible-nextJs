import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { slimPossibleAiData } from "@/data/slim-possible-ai";

export function AiLanding() {
  const { title, subtitle, ctaText, ctaHref, collage } =
    slimPossibleAiData.landing;
  const [
    topLeft,
    topMid,
    topRight,
    midLeft,
    midRight,
    bottomLeft,
    bottomRight,
  ] = collage;

  return (
    <section className="relative min-h-dvh overflow-hidden bg-linear-to-br from-[#9b7bb8] via-[#c9a8c4] to-[#f0c4b0]">
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-center px-5 pb-24 pt-28 md:px-10 md:pb-28 md:pt-32 lg:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-14">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/95 md:mt-5 md:text-lg lg:text-xl">
              {subtitle}
            </p>
          </div>

          <div className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
              {topLeft ? (
                <CollageTile image={topLeft} className="aspect-square" />
              ) : null}
              {topMid ? (
                <CollageTile image={topMid} className="aspect-square" />
              ) : null}
              {topRight ? (
                <CollageTile
                  image={topRight}
                  className="aspect-square translate-x-1.5 sm:translate-x-2.5"
                />
              ) : null}

              {midLeft ? (
                <CollageTile image={midLeft} className="aspect-square" />
              ) : null}
              <div className="col-span-2">
                {midRight ? (
                  <CollageTile image={midRight} className="aspect-[2/1]" />
                ) : null}
              </div>

              {bottomLeft ? (
                <CollageTile image={bottomLeft} className="aspect-square" />
              ) : null}
              {bottomRight ? (
                <CollageTile
                  image={bottomRight}
                  className="col-span-2 aspect-[2/1]"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <Link
        href={ctaHref}
        className="group absolute bottom-6 right-5 z-20 inline-flex items-center gap-3 text-base font-medium text-[#5b2a7a] transition hover:brightness-110 md:bottom-10 md:right-10 md:text-lg"
      >
        {ctaText}
        <span className="flex size-11 items-center justify-center rounded-full border-2 border-brand-green text-brand-green transition group-hover:bg-brand-green/10 md:size-12">
          <ArrowRight className="size-5 md:size-6" strokeWidth={2.25} />
        </span>
      </Link>
    </section>
  );
}

function CollageTile({
  image,
  className = "",
}: {
  image: (typeof slimPossibleAiData.landing.collage)[number];
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-[4.5rem] overflow-hidden rounded-[20px] sm:min-h-20 md:rounded-[26px] ${className}`.trim()}
      style={{ opacity: image.opacity }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 33vw, 240px"
      />
    </div>
  );
}
