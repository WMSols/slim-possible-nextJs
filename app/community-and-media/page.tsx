import { FadeUpView } from "@/components/animations/fade-up-view";
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
          <FadeUpView>
          <p className="mb-10 max-w-5xl text-base font-normal  text-zinc-900 md:mb-12 md:text-lg lg:text-4xl py-4 sm:py-10">
            {intro.beforeBrand}
            <span className="font-semibold text-brand-green">Slim</span>
            <span className="font-semibold text-brand-purple">Possible</span>
            {intro.afterBrand}
          </p>
          </FadeUpView>

          <FadeUpView>
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-[#5E2D8E] md:mb-20 md:text-3xl lg:text-4xl">
            Featured
          </h2>
          </FadeUpView>
          <MediaCarousel />
          <ExploreCards />
        </div>
      </section>

      <div className="py-12 md:py-16">
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
