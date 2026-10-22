import { homeData } from "@/data/home";

export type AiCollageImage = {
  src: string;
  alt: string;
  opacity: number;
};

export type AiSidebarItem = {
  label: string;
  href: string;
  icon: "home" | "health" | "book" | "support" | "cgm" | "about" | "community";
};

export const slimPossibleAiData = {
  title: "SlimPossible AI",
  description:
    "Ask questions about obesity, weight management, metabolic health, and your next steps, anytime",
  landing: {
    title: "SlimPossible AI",
    subtitle:
      "Ask questions about obesity, weight management, metabolic health, and your next steps, anytime",
    ctaText: "Ask a Question",
    ctaHref: "/slim-possible-ai/chat",
    collage: [
      {
        src: "/images/man-flowers.png",
        alt: "Person standing outdoors near flowers",
        opacity: 0.35,
      },
      {
        src: "/images/jogging.png",
        alt: "People jogging together",
        opacity: 1,
      },
      {
        src: "/images/home/women-selfie.png",
        alt: "People smiling together",
        opacity: 0.18,
      },
      {
        src: "/images/book-table.png",
        alt: "Book and coffee on a wooden table",
        opacity: 0.28,
      },
      {
        src: "/images/hand-pen.png",
        alt: "Hands writing with a pen near a stethoscope",
        opacity: 1,
      },
      {
        src: "/images/kids-shop.png",
        alt: "People outside a small shop",
        opacity: 0.32,
      },
      {
        src: "/images/obesity/mw-food.png",
        alt: "Woman at a table with food",
        opacity: 1,
      },
    ] as AiCollageImage[],
  },
  chat: {
    placeholder: homeData.hero.aiPlaceholder,
    suggestions: homeData.hero.aiSuggestions,
    replies: homeData.hero.aiReplies,
    fallbackReply: homeData.hero.aiFallbackReply,
  },
  sidebar: [
    { label: "Home", href: "/", icon: "home" },
    { label: "Check Your Health", href: "/health-check", icon: "health" },
    {
      label: "Understanding Obesity",
      href: "/obesity",
      icon: "book",
    },
    { label: "Treatment & Support", href: "/support", icon: "support" },
    {
      label: "Track with CGM",
      href: homeData.hero.shopCgm.href,
      icon: "cgm",
    },
    { label: "About Us", href: "/about-us", icon: "about" },
    {
      label: "Media & Community",
      href: "/community-and-media",
      icon: "community",
    },
  ] as AiSidebarItem[],
};
