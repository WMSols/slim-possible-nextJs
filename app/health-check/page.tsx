import { HeroSection } from "@/components/shared/hero-section";
import { healthCheckData } from "@/data/health-check";

export default function HealthCheckPage() {
  const { hero } = healthCheckData;

  return (
    <HeroSection
      title={hero.title}
      backgroundImage={hero.backgroundImage}
    />
  );
}
