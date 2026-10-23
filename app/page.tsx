import { HealthRisksBanner } from "@/components/sections/health-risks-banner";
import { HealthToolsSection } from "@/components/sections/health-tools-section";
import { AskAiSection } from "@/components/shared/ask-ai-section";
import { AssessmentTestimonials } from "@/components/shared/assessment-testimonials";
import { BeyondScaleSection } from "@/components/shared/beyond-scale-section";
import { HeroSection } from "@/components/shared/hero-section";
import { JustAskSection } from "@/components/shared/just-ask-section";
import { MediaCarousel } from "@/components/shared/media-carousel";
import { NotAloneBanner } from "@/components/shared/not-alone-banner";
import { FadeUpView } from "@/components/animations/fade-up-view";
import { AiChatWidget } from "@/components/shared/ai-chat-widget";
import { homeData } from "@/data/home";

export default function HomePage() {
  const { hero } = homeData;

  return (
    <>
      <HeroSection
        isHome
        showExplore
        title={hero.title}
        titleClassName="text-3xl font-semibold  text-white md:text-5xl lg:text-6xl sm:-mt-24 2xl:-mt-52 "
        subtitle={hero.subtitle}
        subtitleHighlights={hero.subtitleHighlights}
        backgroundImage={hero.backgroundImage}
        exploreText={hero.exploreText}
        shopCgmHref={hero.shopCgm.href}
        shopCgmLabel={hero.shopCgm.label}
        shopCgmMessage={hero.shopCgm.message}
        disclaimer={hero.disclaimer}
      />
      <AiChatWidget />
      <HealthRisksBanner />
      <HealthToolsSection />
      <NotAloneBanner />
      <BeyondScaleSection />
      <JustAskSection />
      <NotAloneBanner variant="secondary" />
      <AssessmentTestimonials />

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
          <FadeUpView>
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-[#5E2D8E] md:mb-10 md:text-3xl lg:text-4xl 2xl:text-5xl">
            Hear from the Experts. Understand Obesity.
          </h2>
          </FadeUpView>
          <MediaCarousel />
        </div>
      </section>

      <AskAiSection />
    </>
  );
}
