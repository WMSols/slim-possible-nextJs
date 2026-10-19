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

      <div className="flex flex-col gap-10 py-12 md:gap-14 md:py-16">
        <SmallRoundBanner
          variant="default"
          hideAllCta
          eyebrow={personalizedBanner.eyebrow}
          title={personalizedBanner.title}
          description={personalizedBanner.description}
          backgroundImage={personalizedBanner.backgroundImage}
          titleClassName="text-white"
        />

<AssessmentTestimonials />
        <SmallRoundBanner
          title={nextStepBanner.title}
          description={nextStepBanner.description}
          backgroundImage={nextStepBanner.backgroundImage}
        />
      </div>

    </>
  );
}
