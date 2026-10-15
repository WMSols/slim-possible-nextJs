import { HeroSection } from "@/components/shared/hero-section";
import { supportData } from "@/data/support";

export default function SupportPage() {
  const { hero } = supportData;

  return (
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
  );
}
