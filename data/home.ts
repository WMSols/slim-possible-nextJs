export const homeData = {
  title: "Home",
  description: "SlimPossible home page — content coming soon.",
  hero: {
    title: "Obesity is a treatable medical condition",
    subtitle:
      "Understand your health, explore your options, and find the right professional support",
    subtitleHighlights: ["health", "support"] as string[],
    backgroundImage: "/images/jogging.png",
    shopCgm: {
      label: "Shop CGM",
      message: "Monitor your glucose 24/7 with Sibionics",
      href: "#",
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
