import { HeroSection } from "@/components/shared/hero-section";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { aboutUsData } from "@/data/about-us";

export default function AboutUsPage() {
  const { hero, nextStepBanner } = aboutUsData;

  return (
    <>
      <HeroSection
        showExplore
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
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
