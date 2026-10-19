import Image from "next/image";

export type TextImageSectionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  className?: string;
};

export function TextImageSection({
  title,
  description,
  image,
  imageAlt = "",
  className = "",
}: TextImageSectionProps) {
  return (
    <section className={`bg-white px-4 py-10 md:py-14 ${className}`.trim()}>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16 2xl:max-w-7xl">
        <div className="min-w-0 max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#5b2a7a] md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-900 md:mt-5 md:text-base lg:text-lg">
            {description}
          </p>
        </div>

        <div className="relative aspect-square w-[min(100%,15rem)] shrink-0 overflow-hidden rounded-[24px] sm:w-56 md:w-60 md:rounded-[28px] lg:w-64">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="256px"
          />
        </div>
      </div>
    </section>
  );
}
