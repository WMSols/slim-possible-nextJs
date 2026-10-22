import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

/** Placeholder until assessment URL is ready */
const ASSESSMENT_HREF = "";

const STEPS = [
  {
    title: "Take a Quick Online Assessment",
    description:
      "Answer a few quick questions about your weight and goals, then get connected to the right professional support",
  },
  {
    title: "Meet Your Health Coach",
    description:
      "Start with a free call. Continue with your doctor and personalized care plan on the Marham App",
  },
  {
    title: "Guidance That Keeps You on Track",
    description:
      "Daily WhatsApp check-ins on food and activity. Weekly weigh-ins. Rewards as you make progress",
  },
] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, index) => (
        <Star
          key={index}
          className="size-3.5 fill-[#F5C518] text-[#F5C518] md:size-4"
          aria-hidden
        />
      ))}
    </div>
  );
}

export function AssessmentTestimonials() {
  return (
    <section className="bg-white px-4 py-14 md:py-16">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <div className="flex flex-col items-center">
          <Image
            src="/images/marham-slimpossible.png"
            alt="Marham x SlimPossible"
            width={420}
            height={140}
            className="h-auto w-[min(100%,22rem)] object-contain md:w-[min(100%,28rem)]"
          />

          <div className="mt-10 grid w-full grid-cols-1 items-stretch gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
            {STEPS.map((step) => (
              <article
                key={step.title}
                className="h-full sm:min-h-[19rem] rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)] md:min-h-[22rem] md:rounded-[32px] md:p-8 md:pt-16 "
              >
                <h3 className="text-lg font-bold leading-snug text-brand-blue md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <a
            href={ASSESSMENT_HREF}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 md:mt-10 md:px-10 md:py-4 md:text-base"
          >
            Start Your Assessment
          </a>
        </div>
{/* Testimonials */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[#6B8A9A] md:text-base">
            What patients are saying
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
            {testimonials.map((item) => (
              <article
                key={`${item.name}-${item.location}`}
                className="flex h-full flex-col rounded-[28px] bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)] md:rounded-[42px] md:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <Stars count={item.rating} />
                  <span className="text-sm font-semibold text-brand-green md:text-base">
                    {item.weightLoss}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-800 ">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <p className="mt-2 text-xs text-zinc-400 md:text-sm">
                  {item.name} - {item.age} - {item.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
