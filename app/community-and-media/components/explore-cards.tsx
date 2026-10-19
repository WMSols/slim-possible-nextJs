"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { communityAndMediaData } from "@/data/community-and-media";

const MEDIA_ITEMS = Array.from({ length: 9 }, (_, index) => ({
  id: `media-${index + 1}`,
  label: "Lorem ipsum",
}));

export function ExploreCards() {
  const { exploreCards } = communityAndMediaData;
  const [mediaOpen, setMediaOpen] = useState(false);

  useEffect(() => {
    if (!mediaOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMediaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mediaOpen]);

  return (
    <>
      <div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:max-w-4xl md:gap-6 lg:max-w-5xl">
        {exploreCards.map((card) => {
          const isMedia = card.id === "explore-media";
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => {
                if (isMedia) setMediaOpen(true);
              }}
              className="group relative isolate aspect-[3/4] w-full overflow-hidden rounded-[20px] text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:rounded-[24px] md:rounded-[32px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 45vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/45" aria-hidden />
              <span className="absolute inset-0 z-10 flex items-center justify-center px-2 text-center text-sm font-bold leading-snug text-white sm:px-3 sm:text-base md:text-2xl lg:text-3xl">
                {card.label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {mediaOpen ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMediaOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="explore-media-title"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[28px] bg-brand-purple p-6 shadow-2xl md:max-w-xl md:rounded-[32px] md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setMediaOpen(false)}
                className="absolute right-3 top-3 rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Close explore media"
              >
                <X className="size-5" />
              </button>

              <h3
                id="explore-media-title"
                className="pr-8 text-center text-xl font-semibold text-white md:text-2xl"
              >
                Explore Media
              </h3>

              <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
                {MEDIA_ITEMS.map((item) => (
                  <div key={item.id} className="flex flex-col items-center gap-2">
                    <div className="aspect-[4/3] w-full rounded-xl bg-[#4a2265] md:rounded-2xl" />
                    <p className="text-center text-[10px] text-white sm:text-xs md:text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
