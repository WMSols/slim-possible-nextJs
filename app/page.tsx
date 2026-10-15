import { HeroSection } from "@/components/shared/hero-section";
import { homeData } from "@/data/home";

export default function HomePage() {
  const { hero } = homeData;

  return (
    <HeroSection
      isHome
      showExplore
      title={hero.title}
      subtitle={hero.subtitle}
      subtitleHighlights={hero.subtitleHighlights}
      backgroundImage={hero.backgroundImage}
      exploreText={hero.exploreText}
      shopCgmHref={hero.shopCgm.href}
      shopCgmLabel={hero.shopCgm.label}
      shopCgmMessage={hero.shopCgm.message}
      disclaimer={hero.disclaimer}
      aiSuggestions={hero.aiSuggestions}
      aiReplies={hero.aiReplies}
      aiFallbackReply={hero.aiFallbackReply}
      aiPlaceholder={hero.aiPlaceholder}
    />
  );
}
