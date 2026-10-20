export type RiskPill =
  | { type: "text"; label: string }
  | { type: "image"; src: string; alt: string };

export const homeData = {
  title: "Home",
  description: "SlimPossible home page — content coming soon.",
  healthRisks: {
    title: "Health Risks Associated with Obesity",
    rowOne: [
      { type: "text", label: "Heart Disease" },
      { type: "text", label: "Hypertension" },
      {
        type: "image",
        src: "/images/man-sunset.jpg",
        alt: "Person outdoors at sunset",
      },
      { type: "text", label: "Depression" },
      { type: "text", label: "PCOS/PMOS" },
      {
        type: "image",
        src: "/images/home/women-dark.png",
        alt: "Person looking downward",
      },
    ] as RiskPill[],
    rowTwo: [
      {
        type: "image",
        src: "/images/home/women-selfie.png",
        alt: "People smiling together",
      },
      { type: "text", label: "Stroke" },
      { type: "text", label: "Sleep Apnea" },
      {
        type: "image",
        src: "/images/jogging.png",
        alt: "People jogging outdoors",
      },
      { type: "text", label: "Type 2 Diabetes" },
    ] as RiskPill[],
  },
  healthTools: {
    titleLineOne: "Know your numbers.",
    titleLineTwo: "Understand your health.",
    caption:
      "Check your BMI and waist measurement for a quick indication of weight-related health risk.",
    backgroundImage: "/images/yoga.png",
    disclaimer:
      "These tools provide general health information and are not a medical diagnosis*",
    stackedTitle:
      "Start with two simple checks to better understand your weight-related health risk",
    bmi: {
      heading: "Check your BMI",
      description: "Check your BMI and learn what it may mean for your health",
      ctaText: "BMI Calculator",
      stackedImage: "/images/health-check/women-sunshine.png",
    },
    waistRisk: {
      heading: "Check your Waist-Risk",
      description:
        "Your waist measurement can provide additional information about your health risk",
      ctaText: "Waist-Risk Calculator",
      stackedImage: "/images/health-check/water-bottle.png",
    },
  },
  hero: {
    title: "Obesity is a treatable medical condition",
    subtitle:
      "Understand your health, explore your options, and find the right professional support",
    subtitleHighlights: ["health", "support"] as string[],
    backgroundImage: "/images/jogging.png",
    shopCgm: {
      label: "Shop CGM",
      message: "Monitor your glucose 24/7 with Sibionics",
      href: "https://sibionics.bfbio.com/products/sibionics-gs1-cgm",
    },
    disclaimer: {
      title: "Disclaimer:",
      body: "Consult your doctor for medical advice. This is an awareness initiative.",
    },
    exploreText: "Find my next step",
    aiPlaceholder: "Type a symptom, concern, or health question…",
    aiSuggestions: [
      "What does my BMI mean?",
      "What kind of doctor should I see for obesity?",
      "How do I know if my weight is becoming a medical problem?",
      "What is a CGM and how does it work?",
      "What does a glucose spike mean?",
      "What should I look for in my glucose trends?",
    ],
    aiReplies: {
      "What does my BMI mean?":
        "BMI (Body Mass Index) is a screening tool that uses height and weight to estimate body fat. It is not a diagnosis — talk to a clinician about what your number means for you.",
      "What kind of doctor should I see for obesity?":
        "Start with a GP or endocrinologist experienced in obesity care. They can assess risks and refer you to nutrition, coaching, or specialist support as needed.",
      "How do I know if my weight is becoming a medical problem?":
        "Rising waist size, difficulty with daily activity, or related conditions like high blood pressure or type 2 diabetes are signs to get a professional check-in.",
      "What is a CGM and how does it work?":
        "A Continuous Glucose Monitor tracks glucose throughout the day via a small sensor. It helps you see how food, sleep, and activity affect your levels.",
      "What does a glucose spike mean?":
        "A spike is a rapid rise in glucose after meals or stress. Occasional rises are normal; frequent large spikes are worth discussing with a clinician.",
      "What should I look for in my glucose trends?":
        "Look for patterns across days — overnight levels, post-meal peaks, and time in range — rather than any single reading in isolation.",
    } as Record<string, string>,
    aiFallbackReply:
      "Thanks for your question. SlimPossible can help explain common metabolic-health concepts — this is general information, not a diagnosis. For personal advice, talk to a healthcare professional.",
  },
};
