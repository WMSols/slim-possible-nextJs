import { HeroSection } from "@/components/shared/hero-section";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { communityAndMediaData } from "@/data/community-and-media";

export default function CommunityAndMediaPage() {
  const { hero, nextStepBanner } = communityAndMediaData;

  return (
    <>
      <HeroSection
        showExplore
        title={hero.title}
        backgroundImage={hero.backgroundImage}
        backgroundImages={hero.backgroundImages}
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
