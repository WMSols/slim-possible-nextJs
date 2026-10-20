"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { UniversalButton } from "@/components/shared/universal-button";
import { homeData } from "@/data/home";
import { cn } from "@/lib/utils";

type CalculatorKind = "bmi" | "waist" | null;

export type HealthToolsSectionVariant = "default" | "stacked";

type HealthToolsSectionProps = {
  variant?: HealthToolsSectionVariant;
};

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal range";
  if (bmi < 30) return "Overweight";
  return "Obese range";
}

function getWaistRisk(cm: number, sex: "female" | "male") {
  if (sex === "female") {
    if (cm < 80) return "Lower risk";
    if (cm < 88) return "Increased risk";
    return "Higher risk";
  }
  if (cm < 94) return "Lower risk";
  if (cm < 102) return "Increased risk";
  return "Higher risk";
}

function CalculatorModal({
  kind,
  onClose,
}: {
  kind: Exclude<CalculatorKind, null>;
  onClose: () => void;
}) {
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [waistCm, setWaistCm] = useState("");
  const [sex, setSex] = useState<"female" | "male">("female");
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setResult(null);

    if (kind === "bmi") {
      const height = Number(heightCm);
      const weight = Number(weightKg);
      if (!height || !weight || height <= 0 || weight <= 0) {
        setResult("Enter valid height and weight to see a sample result.");
        return;
      }
      const meters = height / 100;
      const bmi = weight / (meters * meters);
      setResult(
        `Your BMI is ${bmi.toFixed(1)} (${getBmiCategory(bmi)}). This is general information only — not a diagnosis.`,
      );
      return;
    }

    const waist = Number(waistCm);
    if (!waist || waist <= 0) {
      setResult("Enter a valid waist measurement to see a sample result.");
      return;
    }
    setResult(
      `Waist ${waist} cm suggests ${getWaistRisk(waist, sex)} for ${sex === "female" ? "women" : "men"} (WHO-style cutoffs). This is general information only — not a diagnosis.`,
    );
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="calculator-title"
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        className="relative w-full max-w-md rounded-[24px] bg-white p-6 shadow-2xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800"
          aria-label="Close calculator"
        >
          <X className="size-5" />
        </button>

        <h3
          id="calculator-title"
          className="pr-8 text-xl font-semibold text-zinc-900 md:text-2xl"
        >
          {kind === "bmi" ? "BMI Calculator" : "Waist-Risk Calculator"}
        </h3>
        <p className="mt-2 text-sm text-zinc-600">
          Dummy demo calculator for layout testing. Can be replaced with a clinical tool
          later if needed.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
          {kind === "bmi" ? (
            <>
              <label className="flex flex-col gap-1.5 text-left text-sm text-zinc-700">
                Height (cm)
                <input
                  type="number"
                  inputMode="decimal"
                  min={1}
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="rounded-xl border border-zinc-200 px-3 py-2.5 text-zinc-900 outline-none focus:border-brand-purple"
                  placeholder="e.g. 170"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-left text-sm text-zinc-700">
                Weight (kg)
                <input
                  type="number"
                  inputMode="decimal"
                  min={1}
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="rounded-xl border border-zinc-200 px-3 py-2.5 text-zinc-900 outline-none focus:border-brand-purple"
                  placeholder="e.g. 70"
                />
              </label>
            </>
          ) : (
            <>
              <label className="flex flex-col gap-1.5 text-left text-sm text-zinc-700">
                Sex (for waist cutoffs)
                <select
                  value={sex}
                  onChange={(e) =>
                    setSex(e.target.value as "female" | "male")
                  }
                  className="rounded-xl border border-zinc-200 px-3 py-2.5 text-zinc-900 outline-none focus:border-brand-purple"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-left text-sm text-zinc-700">
                Waist (cm)
                <input
                  type="number"
                  inputMode="decimal"
                  min={1}
                  value={waistCm}
                  onChange={(e) => setWaistCm(e.target.value)}
                  className="rounded-xl border border-zinc-200 px-3 py-2.5 text-zinc-900 outline-none focus:border-brand-purple"
                  placeholder="e.g. 85"
                />
              </label>
            </>
          )}

          <UniversalButton
            variant="purple"
            ctaText="Calculate"
            type="submit"
            ctaClassName="!bg-[#5b2a7a] w-full justify-center"
          />
        </form>

        {result ? (
          <p className="mt-4 rounded-xl bg-brand-purple/10 px-4 py-3 text-sm leading-relaxed text-zinc-800">
            {result}
          </p>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

function ToolCard({
  image,
  heading,
  description,
  ctaText,
  onOpen,
}: {
  image: string;
  heading: string;
  description: string;
  ctaText: string;
  onOpen: () => void;
}) {
  return (
    <div className="relative isolate min-h-[16rem] overflow-hidden rounded-[28px] md:min-h-[20rem] md:rounded-[36px] lg:min-h-[22rem]">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center"
        sizes="(max-width: 1536px) 100vw, 1280px"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div className="relative z-10 flex h-full min-h-[16rem] flex-col justify-center gap-3 px-6 py-10 md:min-h-[20rem] md:px-10 md:py-12 lg:min-h-[22rem] lg:px-14">
        <h3 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
          {heading}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-white/95 md:text-base">
          {description}
        </p>
        <div className="pt-1">
          <UniversalButton
            variant="purple"
            ctaText={ctaText}
            onClick={onOpen}
            ctaClassName="!bg-[#5b2a7a] hover:!bg-[#4a2265]"
          />
        </div>
      </div>
    </div>
  );
}

export function HealthToolsSection({
  variant = "default",
}: HealthToolsSectionProps) {
  const { healthTools } = homeData;
  const [openCalculator, setOpenCalculator] = useState<CalculatorKind>(null);
  const isStacked = variant === "stacked";

  return (
    <section
      className="bg-white px-4 py-14 md:py-20"
      aria-labelledby="health-tools-heading"
    >
      <div className="mx-auto w-full max-w-5xl 2xl:max-w-7xl">
        {isStacked ? (
          <>
            <h2
              id="health-tools-heading"
              className="mb-8 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[#5b2a7a] md:mb-10 md:text-3xl lg:max-w-4xl lg:text-4xl"
            >
              {healthTools.stackedTitle}
            </h2>

            <div className="flex flex-col gap-5 md:gap-6">
              <ToolCard
                image={healthTools.bmi.stackedImage}
                heading={healthTools.bmi.heading}
                description={healthTools.bmi.description}
                ctaText={healthTools.bmi.ctaText}
                onOpen={() => setOpenCalculator("bmi")}
              />
              <ToolCard
                image={healthTools.waistRisk.stackedImage}
                heading={healthTools.waistRisk.heading}
                description={healthTools.waistRisk.description}
                ctaText={healthTools.waistRisk.ctaText}
                onOpen={() => setOpenCalculator("waist")}
              />
            </div>

            <p className="mt-5 text-left text-xs text-zinc-500 md:text-sm">
              {healthTools.disclaimer}
            </p>
          </>
        ) : (
          <>
            <div className="mx-auto mt-8 mb-8 max-w-3xl text-center md:mb-10">
              <h2
                id="health-tools-heading"
                className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl"
              >
                <span className="block">{healthTools.titleLineOne}</span>
                <span className="block">{healthTools.titleLineTwo}</span>
              </h2>
              <p className="mt-8  text-sm font-semibold text-[#60269E] md:text-base lg:text-2xl">
                {healthTools.caption}
              </p>
            </div>

            {/* Image uses fill, so this box is the height. Below 2xl the card is
                max-w-5xl, and 2:1 keeps a laptop from stretching to ~730px.
                At 2xl the card is max-w-7xl and 1280/730 keeps that wide layout. */}
            <div
              className={cn(
                "relative isolate overflow-hidden rounded-[25px] md:rounded-[35px]",
                "min-h-[26rem] md:aspect-[2/1] md:min-h-0 2xl:aspect-[1280/730]",
              )}
            >
              <Image
                src={healthTools.backgroundImage}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1536px) 100vw, 1200px"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden />

              <div className="relative z-10 grid h-full min-h-[26rem] grid-cols-1 md:min-h-full md:grid-cols-2">
                <div
                  className="mx-6 h-px bg-white/70 md:absolute md:inset-y-[18%] md:left-1/2 md:mx-0 md:h-auto md:w-px md:-translate-x-1/2"
                  aria-hidden
                />

                <div className="flex flex-col items-center justify-center px-6 py-10 text-center md:px-8 lg:px-12">
                  <div className="flex max-w-sm flex-col items-center gap-3">
                    <h3 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                      {healthTools.bmi.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/95 md:text-base">
                      {healthTools.bmi.description}
                    </p>
                    <div className="pt-2">
                      <UniversalButton
                        variant="purple"
                        ctaText={healthTools.bmi.ctaText}
                        onClick={() => setOpenCalculator("bmi")}
                        ctaClassName="!bg-[#5b2a7a] hover:!bg-[#4a2265]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center px-6 py-10 text-center md:px-8 lg:px-12">
                  <div className="flex max-w-sm flex-col items-center gap-3">
                    <h3 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                      {healthTools.waistRisk.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/95 md:text-base">
                      {healthTools.waistRisk.description}
                    </p>
                    <div className="pt-2">
                      <UniversalButton
                        variant="purple"
                        ctaText={healthTools.waistRisk.ctaText}
                        onClick={() => setOpenCalculator("waist")}
                        ctaClassName="!bg-[#5b2a7a] hover:!bg-[#4a2265]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 sm:ml-10 text-xs text-zinc-500 md:text-sm">
              {healthTools.disclaimer}
            </p>
          </>
        )}
      </div>

      <AnimatePresence>
        {openCalculator ? (
          <CalculatorModal
            kind={openCalculator}
            onClose={() => setOpenCalculator(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
