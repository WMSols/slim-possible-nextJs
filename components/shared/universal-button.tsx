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
  purple: "bg-brand-purple px-6 text-white",
  orange: "bg-brand-orange pr-1.5 pl-6 text-white",
  gradient:
    "bg-linear-to-r from-brand-gradient-from to-brand-gradient-to px-6 text-white",
  blue: "bg-brand-blue px-6 text-white",
};

const baseClass =
  "inline-flex h-12 w-fit cursor-pointer items-center justify-center gap-2.5 rounded-full text-sm font-medium md:text-base";

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
        <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-navy md:size-10">
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
