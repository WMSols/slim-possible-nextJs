import { cn } from "@/lib/utils";

type AiBrandMarkProps = {
  className?: string;
  taglineClassName?: string;
};

export function AiBrandMark({
  className = "",
  taglineClassName = "",
}: AiBrandMarkProps) {
  return (
    <div className={cn("flex flex-col leading-tight", className)}>
      <div className="flex items-center gap-1.5">
        <span className="text-xl font-semibold tracking-tight md:text-2xl">
          <span className="text-brand-green">#Slim</span>
          <span className="text-brand-purple-light">Possible</span>
        </span>
        <span className="flex items-center gap-0.5" aria-hidden>
          <span className="text-lg leading-none text-brand-purple">›</span>
          <span className="text-lg leading-none text-brand-green">›</span>
          <span className="text-lg leading-none text-brand-orange">›</span>
        </span>
      </div>
      <p
        className={cn(
          "mt-0.5 text-[11px] text-white/75 md:text-xs",
          taglineClassName,
        )}
      >
        with Diet, Stride &amp; Medical Advice
      </p>
    </div>
  );
}
