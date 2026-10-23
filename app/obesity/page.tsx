import { FadeUpView } from "@/components/animations/fade-up-view";
import { AskAiSection } from "@/components/shared/ask-ai-section";
import { HeroSection } from "@/components/shared/hero-section";
import { NotAloneBanner } from "@/components/shared/not-alone-banner";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { TextImageSection } from "@/components/shared/text-image-section";
import { obesityData } from "@/data/obesity";

export default function ObesityPage() {
  const { hero, banners, infoBlocks } = obesityData;
  const [firstBanner, secondBanner] = banners;
  const [biologyBlock, pakistanBlock] = infoBlocks;

  return (
    <>
      <HeroSection
        showExplore
        title={hero.title}
        titleClassName="text-2xl font-semibold text-white md:text-5xl"
        subtitle={hero.subtitle}
        subTitleClassName="text-white/95 md:text-lg font-light leading-[1.1]"
        backgroundImage={hero.backgroundImage}
        exploreText={hero.exploreText}
      />

      <div className="flex flex-col gap-10 py-12 md:gap-14 md:py-16">
        <FadeUpView>
        <h1 className="text-2xl md:text-5xl 2xl:text-[64px] mt-8 sm:mt-16 text-purple-800 font-bold text-center">Why Is Managing Weight So Difficult?</h1>
        </FadeUpView>
        {firstBanner ? (
          
          <SmallRoundBanner
            variant="tall"
            contentAlign="left"
            title={firstBanner.title}
            description={firstBanner.description}
            descriptionClassName="text-white sm:mt-32 sm:text-3xl font-light leading-[1.1] max-w-xl"
            backgroundImage={firstBanner.backgroundImage}
            showBlueCta={false}
            showGradientCta
            hideAllCta={firstBanner.hideAllCta}
            titleClassName="text-white text-3xl font-semibold md:text-6xl"
            contentPaddingClassName="px-4 py-16 md:px-12 lg:px-24 lg:py-32"
          />
        ) : null}

        {biologyBlock ? (
          <TextImageSection
            title={biologyBlock.title}
            description={biologyBlock.description}
            image={biologyBlock.image}
            imageAlt={biologyBlock.imageAlt}
          />
        ) : null}

        {secondBanner ? (
          <SmallRoundBanner
            variant="tall"
            title={secondBanner.title}
            
            description={secondBanner.description}
            descriptionClassName="text-white font-medium mt-28 sm:mt-36 sm:text-2xl  leading-[1.1]"
            backgroundImage={secondBanner.backgroundImage}
            showBlueCta={secondBanner.showBlueCta}
            hideAllCta={secondBanner.hideAllCta}
            titleClassName="text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[3.85rem]"
            contentPaddingClassName="px-4 py-16 md:px-12 lg:px-24 lg:py-36 "
            contentAlign="left"
          />
        ) : null}

        {pakistanBlock ? (
          <TextImageSection
            title={pakistanBlock.title}
            description={pakistanBlock.description}
            image={pakistanBlock.image}
            imageAlt={pakistanBlock.imageAlt}
          />
        ) : null}

        <SmallRoundBanner
          variant="tall"
          title="Obesity Can Start Early"
          description="Children can also be affected by obesity, and its impact can continue into adulthood. Early awareness, healthy family habits, and support from healthcare professionals can help children build a healthier future."
          descriptionClassName="text-white font-medium mt-28  sm:text-2xl font-light leading-[1.1]"
          backgroundImage="/images/kids-shop.png"
          showBlueCta={false}
          hideAllCta={false}
          titleClassName="text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[3.85rem]"
          contentPaddingClassName="px-4 py-16 md:px-12 lg:px-24 lg:py-36 "
          contentAlign="left"
        />
      </div>

      <NotAloneBanner />
      <AskAiSection />
    </>
  );
}
