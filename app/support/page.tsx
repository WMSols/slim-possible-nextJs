import { HeroSection } from "@/components/shared/hero-section";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { supportData } from "@/data/support";

export default function SupportPage() {
  const { hero, nextStepBanner } = supportData;

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

      <div className="py-12 md:py-16">
        <SmallRoundBanner
          title={nextStepBanner.title}
          description={nextStepBanner.description}
          backgroundImage={nextStepBanner.backgroundImage}
        />
      </div>
    </>
  );
}
