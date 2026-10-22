import { AssessmentTestimonials } from "@/components/shared/assessment-testimonials";
import { HeroSection } from "@/components/shared/hero-section";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { supportData } from "@/data/support";

export default function SupportPage() {
  const { hero, personalizedBanner, nextStepBanner } = supportData;

  return (
    <>
      <HeroSection
        isSupport
        showExplore
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        exploreText={hero.exploreText}
      />

      <div className="flex flex-col gap-10 py-12 md:gap-14 md:py-24">
        <SmallRoundBanner
          variant="default"
          hideAllCta
          eyebrow={personalizedBanner.eyebrow}
          title={personalizedBanner.title}
          description={personalizedBanner.description}
          backgroundImage={personalizedBanner.backgroundImage}
          titleClassName="text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
        />

<AssessmentTestimonials />
        <SmallRoundBanner
          title={nextStepBanner.title}
          contentAlign="left"
          description={nextStepBanner.description}
          backgroundImage={nextStepBanner.backgroundImage}
          titleClassName="text-brand-orange text-3xl font-semibold md:text-5xl"
            contentPaddingClassName="px-4 py-16 md:px-12 lg:px-24 lg:py-36"
            descriptionClassName="text-white mt-12 sm:mt-28 sm:text-2xl font-light leading-[1.1] max-w-3xl"
        />
      </div>

    </>
  );
}
