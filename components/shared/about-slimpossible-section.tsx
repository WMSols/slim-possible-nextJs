import Image from "next/image";

export type AboutSlimPossibleSectionProps = {
  titleLead: string;
  titleSlim: string;
  titlePossible: string;
  description: string;
  cardTitle: string;
  cardParagraphs: string[];
  backgroundImage: string;
};

export function AboutSlimPossibleSection({
  titleLead,
  titleSlim,
  titlePossible,
  description,
  cardTitle,
  cardParagraphs,
  backgroundImage,
}: AboutSlimPossibleSectionProps) {
  return (
    <section className="bg-white px-4 pt-12 md:pt-32">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-[2.75rem]">
          {titleLead} <span className="text-brand-green">{titleSlim}</span>
          <span className="text-brand-purple">{titlePossible}</span>
        </h2>
        <p className="mt-4 max-w-5xl text-sm  text-zinc-900 md:mt-8 md:text-base lg:text-2xl">
          {description}
        </p>

        <div className="relative isolate mt-8 min-h-[28rem] overflow-hidden rounded-[25px] md:mt-16 md:min-h-[34rem] md:rounded-[35px] lg:min-h-[38rem]">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-[center_42%]"
            sizes="(max-width: 1536px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden />

          <div className="relative z-10 max-w-3xl px-6 py-10 md:px-12 md:py-14 lg:max-w-4xl lg:px-14 lg:py-16">
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-brand-orange md:text-4xl lg:text-[2.75rem]">
              {cardTitle}
            </h3>
            <div className="mt-4 space-y-4 text-sm  text-white md:mt-20 md:space-y-8 md:text-base lg:text-2xl">
              {cardParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
