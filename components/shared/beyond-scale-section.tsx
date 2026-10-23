import Image from "next/image";
import Link from "next/link";
import { FadeUpView } from "@/components/animations/fade-up-view";
import { StaggerFadeUpView } from "@/components/animations/stagger-fade-up-view";
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
      image: "/images/scale-2.png",
    },
    {
      label: "See what's happening",
      image: "/images/scale-3.png",
    },
    {
      label: "Turn data into understanding",
      image: "/images/scale-4.png",
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
        <FadeUpView className="mx-auto max-w-5xl 2xl:max-w-7xl">
          <h2 className="text-2xl sm:max-w-xl  font-bold leading-tight tracking-tight text-[#01AFA9] md:text-4xl lg:text-[2.75rem]">
            {CONTENT.title}
          </h2>
          <p className="mt-4 sm:mt-8 text-sm leading-relaxed text-zinc-900 md:text-base lg:text-lg">
          Glucose changes throughout the day in response to food, activity,<br className="hidden md:block"/> sleep and other factors. Continuous glucose monitoring can<br className="hidden md:block"/> provide a more detailed picture of glucose patterns over time.
          </p>
        </FadeUpView>

        <StaggerFadeUpView className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-4">
          {CONTENT.cards.map((card) => (
            <article
              key={card.label}
              className="relative isolate min-h-[20rem] overflow-hidden rounded-[28px] sm:min-h-[22rem] lg:min-h-[24rem] lg:rounded-[32px]"
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
        </StaggerFadeUpView>

        <FadeUpView className="mt-8 w-full md:mt-10">
        <div className="flex flex-col  gap-6 rounded-[28px] bg-brand-mint px-3 py-2 md:gap-2 md:rounded-[35px] md:px-8 md:py-5 lg:flex-row lg:items-center lg:justify-between   ">
          <div className="relative h-44 w-full max-w-[280px] shrink-0 overflow-hidden rounded-2xl bg-white sm:h-52 sm:max-w-[320px] lg:h-66 2xl:h-74 lg:w-[340px] lg:max-w-none">
            <Image
              src={CONTENT.cta.visual}
              alt="Sibionics CGM sensor and app"
              fill
              className="object-contain object-center p-3"
              sizes="340px"
            />
          </div>

          <div className="min-w-0 flex-1  lg:text-left">
            <h3 className="text-lg font-normal  text-zinc-900 md:text-xl lg:text-4xl 2xl:text-5xl">
            Get a CGM Today. <br /> Know your glucose,<br /> Improve your health
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-800 md:text-base 2xl:text-xl">
            Turn continuous glucose data<br/> into meaningful insights that<br/> support healthier habits and<br/> better everyday decisions
            </p>
          </div>

          <Link
            href={buyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 w-fit items-center justify-center rounded-2xl border-2 border-zinc-900  px-8 py-3 text-sm font-semibold tracking-wide text-zinc-900 transition hover:bg-black hover:text-white md:px-8 md:py-5 md:text-base"
          >
            {CONTENT.cta.buttonText}
          </Link>
        </div>
        </FadeUpView>
      </div>
    </section>
  );
}
