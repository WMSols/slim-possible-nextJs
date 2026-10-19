import Image from "next/image";
import Link from "next/link";
import { homeData } from "@/data/home";

const CONTENT = {
  title: "See what's happening beyond the scale",
  description:
    "Glucose changes throughout the day in response to food, activity, sleep and other factors. Continuous glucose monitoring can provide a more detailed picture of glucose patterns over time.",
  cards: [
    {
      label: "Every meal tells a story",
      image: "/images/fruits.png",
    },
    {
      label: "See your body respond",
      image: "/images/cgm-3.png",
    },
    {
      label: "See what's happening",
      image: "/images/cgm-2.png",
    },
    {
      label: "Turn data into understanding",
      image: "/images/cgm-app.png",
    },
  ],
  cta: {
    visual: "/images/cgm-1.png",
    title: "Get a CGM Today. Know your glucose, Improve your health",
    description:
      "Turn continuous glucose data into meaningful insights that support healthier habits and better everyday decisions",
    buttonText: "BUY NOW",
  },
} as const;

export function BeyondScaleSection() {
  const buyHref = homeData.hero.shopCgm.href;

  return (
    <section className="bg-white px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#14919B] md:text-4xl lg:text-[2.75rem]">
            {CONTENT.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-900 md:text-base lg:text-lg">
            {CONTENT.description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {CONTENT.cards.map((card) => (
            <article
              key={card.label}
              className="relative isolate min-h-[20rem] overflow-hidden rounded-[28px] sm:min-h-[22rem] lg:min-h-[26rem] lg:rounded-[32px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/45" aria-hidden />
              <div className="absolute inset-0 z-10 flex items-center justify-center px-5 text-center">
                <p className="text-lg font-bold leading-snug text-white md:text-xl">
                  {card.label}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 rounded-[28px] bg-brand-mint px-5 py-6 md:mt-10 md:gap-8 md:rounded-[35px] md:px-8 md:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-9">
          <div className="relative h-44 w-full max-w-[280px] shrink-0 overflow-hidden rounded-2xl bg-white sm:h-52 sm:max-w-[320px] lg:h-56 lg:w-[340px] lg:max-w-none">
            <Image
              src={CONTENT.cta.visual}
              alt="Sibionics CGM sensor and app"
              fill
              className="object-contain object-center p-3"
              sizes="340px"
            />
          </div>

          <div className="min-w-0 flex-1 text-center lg:text-left">
            <h3 className="text-lg font-bold leading-snug text-zinc-900 md:text-xl lg:text-2xl">
              {CONTENT.cta.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-800 md:text-base">
              {CONTENT.cta.description}
            </p>
          </div>

          <Link
            href={buyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-zinc-900 bg-brand-mint px-8 py-3 text-sm font-semibold tracking-wide text-zinc-900 transition hover:bg-white/70 md:px-10 md:py-3.5 md:text-base"
          >
            {CONTENT.cta.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
