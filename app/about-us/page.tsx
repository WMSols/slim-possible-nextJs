import { AboutSlimPossibleSection } from "@/components/shared/about-slimpossible-section";
import { AskAiSection } from "@/components/shared/ask-ai-section";
import { AssessmentTestimonials } from "@/components/shared/assessment-testimonials";
import { CareConnectionSection } from "@/components/shared/care-connection-section";
import { HeroSection } from "@/components/shared/hero-section";
import { SmallRoundBanner } from "@/components/shared/small-round-banner";
import { aboutUsData } from "@/data/about-us";

export default function AboutUsPage() {
  const { hero, aboutIntro, careConnection, nextStepBanner } = aboutUsData;

  return (
    <>
      <HeroSection
        alignLeft
        showExplore
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        exploreText={hero.exploreText}
      />

      <AboutSlimPossibleSection
        titleLead={aboutIntro.titleLead}
        titleSlim={aboutIntro.titleSlim}
        titlePossible={aboutIntro.titlePossible}
        description={aboutIntro.description}
        cardTitle={aboutIntro.whoWeAre.title}
        cardParagraphs={aboutIntro.whoWeAre.paragraphs}
        backgroundImage={aboutIntro.whoWeAre.backgroundImage}
      />

      <CareConnectionSection
        title={careConnection.title}
        description={careConnection.description}
      />

      <div className="pb-12 md:pb-16">
        <SmallRoundBanner
          title={nextStepBanner.title}
          description={nextStepBanner.description}
          backgroundImage={nextStepBanner.backgroundImage}
        />
      </div>

      <AssessmentTestimonials />
      <AskAiSection />
    </>
  );
}
