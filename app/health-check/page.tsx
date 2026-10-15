import { healthCheckData } from "@/data/health-check";

export default function HealthCheckPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        {healthCheckData.title}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
        {healthCheckData.description}
      </p>
    </div>
  );
}
