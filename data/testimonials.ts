export type Testimonial = {
  name: string;
  age: number;
  location: string;
  rating: number;
  weightLoss: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hira",
    age: 33,
    location: "Lahore",
    rating: 5,
    weightLoss: "-6kg",
    quote:
      "I work 10-hour days. My coach messages me at lunch so I never have to think. The weight is just... going.",
  },
  {
    name: "Ahmad",
    age: 41,
    location: "Karachi",
    rating: 5,
    weightLoss: "-4.5kg",
    quote:
      "First program that didn't ask me to cook separate food. Same daal, right portions.",
  },
  {
    name: "Zainab",
    age: 29,
    location: "Islamabad",
    rating: 5,
    weightLoss: "-8kg",
    quote:
      "The daily check-in feels like a friend who refuses to let me quit. That was the missing piece.",
  },
  {
    name: "Naveed",
    age: 47,
    location: "Rawalpindi",
    rating: 5,
    weightLoss: "-5kg",
    quote:
      "My sugar readings improved before my weight did. The GP explained why. Worth it for that alone.",
  },
];
