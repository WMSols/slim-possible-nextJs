export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  megaImage?: string;
  megaImageTitle?: string;
  megaImageSubtitle?: string;
  megaImageLink?: string;
  children?: NavChild[];
};

export const mainNavItems: NavItem[] = [
  {
    label: "Health Check",
    href: "/health-check",
    description:
      "Check your BMI and waist measurement for a quick indication of weight-related health risk",
    megaImage: "/images/health-check/women-sunshine.png",
    megaImageSubtitle: "Start your health check",
    megaImageLink: "/health-check",
    children: [
      { label: "BMI Calculator", href: "/health-check" },
      { label: "Waist-Risk Calculator", href: "/health-check" },
    ],
  },
  {
    label: "Understanding Obesity",
    href: "/obesity",
    description:
      "Obesity is more than weight - understand the factors that influence it and what you can do next",
    megaImage: "/images/obesity/mw-food.png",
    megaImageSubtitle: "Understand obesity",
    megaImageLink: "/obesity",
    children: [
      { label: "Understanding Obesity", href: "/obesity" },
      { label: "Health Risks", href: "/obesity" },
    ],
  },
  {
    label: "Support",
    href: "/support",
    description:
      "Connect with a healthcare professional for personalized guidance based on your goals",
    megaImage: "/images/support/doctor.png",
    megaImageSubtitle: "Get support",
    megaImageLink: "/support",
    children: [
      { label: "Talk to a Professional", href: "/support" },
      { label: "Start Assessment", href: "/support" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    description:
      "SlimPossible is a health platform designed to help people better understand obesity and find the right support",
    megaImage: "/images/hand-pen.png",
    megaImageSubtitle: "Discover SlimPossible",
    megaImageLink: "/about-us",
    children: [
      { label: "Our Story", href: "/about-us" },
      { label: "Our Mission", href: "/about-us" },
      { label: "Partners", href: "/about-us" },
    ],
  },
  {
    label: "Community and Media",
    href: "/community-and-media",
    description:
      "Stories, updates, and media from the SlimPossible community",
    megaImage: "/images/interview.png",
    megaImageSubtitle: "Explore community",
    megaImageLink: "/community-and-media",
  },
];

export const secondaryNavItems: NavItem[] = [
  {
    label: "SlimPossible AI",
    href: "/slim-possible-ai",
    description:
      "Ask SlimPossible about your weight, health, or treatment options in simple language",
    megaImage: "/images/man-sunset.jpg",
    megaImageSubtitle: "Ask SlimPossible’s AI",
    megaImageLink: "/slim-possible-ai",
  },
];

/** Flat list used for simple link maps (footer, etc.) */
export const navItems = [
  { label: "Home", href: "/" },
  ...mainNavItems.map(({ label, href }) => ({ label, href })),
  ...secondaryNavItems.map(({ label, href }) => ({ label, href })),
];

export const footerSocialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/slimpossiblepk?igsh=MXYzeHVhY3hoZWlhcA==",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Slim-Possible/61585621366038/?rdid=J6h6U5z3KISBtJUA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1By2GHVGFU%2F",
    icon: "facebook",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@slimpossibleofficial",
    icon: "tiktok",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/slim-possible-pk/",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SlimPossiblePK",
    icon: "youtube",
  },
] as const;

export const footerLinkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Health Check", href: "/health-check" },
      { label: "Obesity", href: "/obesity" },
      { label: "Support", href: "/support" },
      { label: "SlimPossible AI", href: "/slim-possible-ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Community and Media", href: "/community-and-media" },
    ],
  },
];
