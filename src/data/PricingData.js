export const pricePlans = [
  {
    title: "Free Plan",
    description:
      "Build and test using our core set of products with up to 100 API requests",
    price: 0.0,
    features: [
      { name: "Transactions", isAvailable: true },
      { name: "Auth", isAvailable: true },
      { name: "Identity", isAvailable: true },
      { name: "Investments", isAvailable: false },
      { name: "Assests", isAvailable: false },
      { name: "Liabilities", isAvailable: false },
      { name: "Income", isAvailable: false },
    ],
  },
  {
    title: "Basic Plan",
    description:
      "Launch your project with unlimited requests and no contractual minimums",
    price: 249.0,
    features: [
      { name: "Transactions", isAvailable: true },
      { name: "Auth", isAvailable: true },
      { name: "Identity", isAvailable: true },
      { name: "Investments", isAvailable: true },
      { name: "Assests", isAvailable: true },
      { name: "Liabilities", isAvailable: false },
      { name: "Income", isAvailable: false },
    ],
  },
  {
    title: "Premium Plan",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: 499.0,
    features: [
      { name: "Transactions", isAvailable: true },
      { name: "Auth", isAvailable: true },
      { name: "Identity", isAvailable: true },
      { name: "Investments", isAvailable: true },
      { name: "Assests", isAvailable: true },
      { name: "Liabilities", isAvailable: true },
      { name: "Income", isAvailable: true },
    ],
  },
];
