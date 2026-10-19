import { AskAiSection } from "@/components/shared/ask-ai-section";
import { HeroSection } from "@/components/shared/hero-section";
import { NotAloneBanner } from "@/components/shared/not-alone-banner";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { TextImageSection } from "@/components/shared/text-image-section";
import { obesityData } from "@/data/obesity";

export default function ObesityPage() {
  const { hero, banners, infoBlocks } = obesityData;
  const [firstBanner, secondBanner, ...restBanners] = banners;
  const [biologyBlock, pakistanBlock] = infoBlocks;

  return (
    <>
      <HeroSection
        showExplore
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        exploreText={hero.exploreText}
      />

      <div className="flex flex-col gap-10 py-12 md:gap-14 md:py-16">
        <h1 className="text-2xl md:text-5xl 2xl:text-7xl mt-6 text-purple-800 font-bold text-center">Why Is Managing Weight So Difficult?</h1>
        {firstBanner ? (
          
          <SmallRoundBanner
            variant="tall"
            title={firstBanner.title}
            description={firstBanner.description}
            backgroundImage={firstBanner.backgroundImage}
            showBlueCta={firstBanner.showBlueCta}
            hideAllCta={firstBanner.hideAllCta}
            titleClassName="text-white"
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
            backgroundImage={secondBanner.backgroundImage}
            showBlueCta={secondBanner.showBlueCta}
            hideAllCta={secondBanner.hideAllCta}
            titleClassName="text-white"
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

        {restBanners.map((banner) => (
          <SmallRoundBanner
            key={banner.title}
            variant="tall"
            title={banner.title}
            description={
              Array.isArray(banner.description) ? (
                <>
                  {banner.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </>
              ) : (
                banner.description
              )
            }
            backgroundImage={banner.backgroundImage}
            showBlueCta={banner.showBlueCta}
            hideAllCta={banner.hideAllCta}
            titleClassName={
              banner.hideAllCta ? "text-brand-orange" : "text-white"
            }
          />
        ))}
      </div>

      <NotAloneBanner />
      <AskAiSection />
    </>
  );
}
