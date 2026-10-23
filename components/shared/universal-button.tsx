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
  orange: "relative mr-6 bg-brand-orange pr-10 pl-3 sm:pl-5 text-white",
  gradient:
    "bg-linear-to-r from-brand-gradient-from to-brand-gradient-to px-6 text-white",
  blue: "bg-brand-blue px-6 text-white",
};

const baseClass =
  "inline-flex h-11 w-fit cursor-pointer items-center justify-center gap-2.5 rounded-full text-sm font-medium md:text-base";

const variantLinks: Partial<Record<UniversalButtonVariant, string>> = {
  orange: "https://www.marham.pk/obesity-digital-clinic",
  blue: "https://obesity-care.vercel.app/",
};

export function UniversalButton({
  variant,
  ctaText,
  ctaLink = "#",
  ctaClassName = "",
  onClick,
  type = "button",
}: UniversalButtonProps) {
  const className = `${baseClass} ${variantClasses[variant]} ${ctaClassName}`;
  const href =
    ctaLink && ctaLink !== "#" ? ctaLink : (variantLinks[variant] ?? "#");
  const isExternal = href.startsWith("http");

  const content = (
    <>
      <span>{ctaText}</span>
      {variant === "orange" ? (
        <Image
          src="/images/m-logo.png"
          alt="Marham"
          width={48}
          height={48}
          className="absolute top-1/2 right-3 z-10 size-14 -translate-y-1/2 translate-x-1/2 object-contain"
        />
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
        <Link
          href={href}
          className={className}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {content}
        </Link>
      )}
    </motion.div>
  );
}
