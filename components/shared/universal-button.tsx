"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import { motion } from "framer-motion";

export type UniversalButtonVariant = "purple" | "orange" | "gradient" | "blue";

export type UniversalButtonProps = {
  variant: UniversalButtonVariant;
  ctaText: string;
  ctaLink?: string;
  ctaClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit";
};

const variantClasses: Record<UniversalButtonVariant, string> = {
  purple: "bg-brand-purple text-white",
  orange: "bg-brand-orange text-white pr-1.5",
  gradient:
    "bg-linear-to-r from-brand-gradient-from to-brand-gradient-to text-white",
  blue: "bg-brand-blue text-white",
};

const baseClass =
  "inline-flex w-fit cursor-pointer items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium md:text-base";

export function UniversalButton({
  variant,
  ctaText,
  ctaLink = "#",
  ctaClassName = "",
  onClick,
  type = "button",
}: UniversalButtonProps) {
  const className = `${baseClass} ${variantClasses[variant]} ${ctaClassName}`;

  const content = (
    <>
      <span>{ctaText}</span>
      {variant === "orange" ? (
        <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-navy md:size-11">
          <Image
            src="/images/m-logo.png"
            alt="Marham"
            width={28}
            height={28}
            className="object-contain"
          />
        </span>
      ) : null}
    </>
  );

  const asButton = Boolean(onClick) || type === "submit";

  return (
    <motion.div
      className="inline-flex w-fit"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {asButton ? (
        <button type={type} onClick={onClick} className={className}>
          {content}
        </button>
      ) : (
        <Link href={ctaLink || "#"} className={className}>
          {content}
        </Link>
      )}
    </motion.div>
  );
}
