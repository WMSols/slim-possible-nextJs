export type MediaCarouselSlide = {
  id: string;
  image: string;
  watchLabel: string;
  /** Placeholder until real video URLs are wired */
  watchHref: string;
};

export const mediaCarouselSlides: MediaCarouselSlide[] = [
  {
    id: "world-obesity-day",
    image: "/images/interview.png",
    watchLabel: "Watch now",
    watchHref: "#",
  },
  {
    id: "expert-table",
    image: "/images/book-table.png",
    watchLabel: "Watch now",
    watchHref: "#",
  },
  {
    id: "clinical-notes",
    image: "/images/hand-pen.png",
    watchLabel: "Watch now",
    watchHref: "#",
  },
  {
    id: "outdoor-health",
    image: "/images/jogging.png",
    watchLabel: "Watch now",
    watchHref: "#",
  },
  {
    id: "community-care",
    image: "/images/man-flowers.png",
    watchLabel: "Watch now",
    watchHref: "#",
  },
];
