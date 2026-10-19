import { WeightMoreThanNumber } from "./components/weight-more-than-number";
import { HealthToolsSection } from "@/components/sections/health-tools-section";
import { BeyondScaleSection } from "@/components/shared/beyond-scale-section";
import { HeroSection } from "@/components/shared/hero-section";
import { JustAskSection } from "@/components/shared/just-ask-section";
import { healthCheckData } from "@/data/health-check";

export default function HealthCheckPage() {
  const { hero } = healthCheckData;

  return (
    <>
      <HeroSection
        title={hero.title}
        backgroundImage={hero.backgroundImage}
      />
      <HealthToolsSection variant="stacked" />
      <WeightMoreThanNumber />
      <BeyondScaleSection />
      <JustAskSection />
    </>
  );
}
