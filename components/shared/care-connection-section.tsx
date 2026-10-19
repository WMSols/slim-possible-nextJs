export type CareConnectionSectionProps = {
  title: string;
  description: string;
};

export function CareConnectionSection({
  title,
  description,
}: CareConnectionSectionProps) {
  return (
    <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-blue md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-zinc-900 md:mt-5 md:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
