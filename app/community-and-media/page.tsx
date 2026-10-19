import { ExploreCards } from "./components/explore-cards";
import { HeroSection } from "@/components/shared/hero-section";
import { MediaCarousel } from "@/components/shared/media-carousel";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { communityAndMediaData } from "@/data/community-and-media";

export default function CommunityAndMediaPage() {
  const { hero, intro, nextStepBanner } = communityAndMediaData;

  return (
    <>
      <HeroSection
        showExplore
        title={hero.title}
        backgroundImage={hero.backgroundImage}
        backgroundImages={hero.backgroundImages}
        exploreText={hero.exploreText}
      />

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
          <p className="mb-10 max-w-5xl text-base leading-relaxed text-zinc-900 md:mb-12 md:text-lg lg:text-4xl">
            {intro.beforeBrand}
            <span className="font-semibold text-brand-green">Slim</span>
            <span className="font-semibold text-brand-purple">Possible</span>
            {intro.afterBrand}
          </p>

          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-[#5E2D8E] md:mb-10 md:text-3xl lg:text-4xl">
            Featured
          </h2>
          <MediaCarousel />
          <ExploreCards />
        </div>
      </section>

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
