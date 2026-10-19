"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { mediaCarouselSlides } from "@/data/media-carousel";
import { cn } from "@/lib/utils";

export function MediaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = mediaCarouselSlides[activeIndex] ?? mediaCarouselSlides[0];

  return (
    <div className="w-full">
      <div className="relative isolate aspect-[16/10] w-full overflow-hidden rounded-[28px] md:aspect-[16/9] md:rounded-[36px] lg:rounded-[40px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1536px) 100vw, 1280px"
              priority={activeIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/35 to-transparent px-5 pb-5 pt-16 md:px-8 md:pb-7">
          <Link
            href={slide.watchHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#D4B8E8] px-5 py-2.5 text-sm font-medium text-[#5E2D8E] transition hover:brightness-105 md:px-6 md:py-3 md:text-base"
          >
            {slide.watchLabel}
            <Play className="size-4 fill-transparent stroke-[2]" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="mt-5 flex justify-center md:mt-6">
        <div
          className="inline-flex items-center gap-2 rounded-full bg-[#E8D4F0] px-3 py-2 md:gap-2.5 md:px-4"
          role="tablist"
          aria-label="Media slides"
        >
          {mediaCarouselSlides.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "transition-all",
                  isActive
                    ? "h-1.5 w-7 rounded-full bg-[#5E2D8E] md:h-2 md:w-8"
                    : "size-2 rounded-full bg-[#C9A8DC] hover:bg-[#b890d0] md:size-2.5",
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
