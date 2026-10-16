import { HeroSection } from "@/components/shared/hero-section";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { obesityData } from "@/data/obesity";

export default function ObesityPage() {
  const { hero, banners } = obesityData;

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
        {banners.map((banner) => (
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
    </>
  );
}
