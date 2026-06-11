export type Category = "bowls" | "drinks" | "combos";

export type Product = {
  id: string;
  name: string;
  price: number;
  emoji: string;
  description: string;
  category: Category;
  /** 0–5 heat level, only meaningful for bowls */
  spice?: number;
  /** optional sticker shown on the card */
  tag?: string;
  /** tailwind gradient classes used for the card's visual */
  gradient: string;
  image?: string;
};

export const products: Product[] = [
  {
    id: "kurkure-classic",
    name: "Kurkure Classic",
    price: 150,
    emoji: "🌶️",
    description:
      "Crunchy Kurkure Masala Munch base loaded with chaat masala, onions, tomatoes & a tangy imli drizzle.",
    category: "bowls",
    spice: 4,
    tag: "Bestseller",
    gradient: "from-amber-300 via-orange-400 to-rose-500",
    image: "/products/kurkure-classic.png",
  },
  {
    id: "lays-mayo",
    name: "Lays Mayo Bowl",
    price: 160,
    emoji: "🥔",
    description:
      "Crispy Lays base smothered in creamy garlic mayo with jalapeños, herbs & a squeeze of lemon.",
    category: "bowls",
    spice: 2,
    gradient: "from-yellow-300 via-amber-400 to-orange-400",
    image: "/products/lays-mayo.png",
  },
  {
    id: "nachos-cheese",
    name: "Nachos Cheese Burst",
    price: 180,
    emoji: "🧀",
    description:
      "Loaded nachos drowning in molten cheese & zesty salsa. The kids go absolutely crazy for it.",
    category: "bowls",
    spice: 2,
    tag: "Family Fav",
    gradient: "from-amber-200 via-yellow-400 to-orange-500",
    image: "/products/nachos-cheese.png",
  },
  {
    id: "spicy-volcano",
    name: "Spicy Volcano",
    price: 200,
    emoji: "🌋",
    description:
      "A triple-chili overload for the brave. Our hottest bowl — eat at your own risk, hero.",
    category: "bowls",
    spice: 5,
    tag: "🔥 Extreme",
    gradient: "from-orange-500 via-red-600 to-rose-700",
    image: "/products/spicy-volcano.png",
  },
  {
    id: "chicken-chatak",
    name: "Chicken Chatak Special",
    price: 250,
    emoji: "🍗",
    description:
      "Juicy grilled chicken chunks over a crunchy chip base, finished with our secret signature sauce.",
    category: "bowls",
    spice: 3,
    tag: "Signature",
    gradient: "from-rose-400 via-red-500 to-orange-600",
    image: "/products/chicken-chatak.png",
  },
  {
    id: "creamy-blast",
    name: "Creamy Blast",
    price: 190,
    emoji: "🥣",
    description:
      "Smooth creamy sauce, sweet corn & cheese over a light base — the clean-eater's go-to.",
    category: "bowls",
    spice: 2,
    gradient: "from-amber-200 via-orange-300 to-rose-400",
    image: "/products/creamy-blast.png",
  },
  {
    id: "tangy-twist",
    name: "Tangy Twist",
    price: 170,
    emoji: "🍋",
    description:
      "A sour-tangy tamarind & pomegranate kick layered with fresh mint and crunchy sev.",
    category: "bowls",
    spice: 3,
    gradient: "from-lime-300 via-amber-300 to-orange-400",
    image: "/products/tangy-twist.png",
  },
  {
    id: "monsoon-masala",
    name: "Monsoon Masala Bowl",
    price: 180,
    emoji: "🌧️",
    description:
      "Limited seasonal special — bold monsoon spices, extra crunch & a smoky finish.",
    category: "bowls",
    spice: 4,
    tag: "Seasonal",
    gradient: "from-orange-300 via-red-400 to-rose-600",
    image: "/products/monsoon-masala.png",
  },
  {
    id: "mint-lemonade",
    name: "Mint Lemonade",
    price: 90,
    emoji: "🍹",
    description: "Ice-cold fresh mint & lemon cooler to calm the Dhamaka heat.",
    category: "drinks",
    gradient: "from-emerald-300 via-lime-300 to-yellow-300",
    image: "/products/mint-lemonade.png",
  },
  {
    id: "doodh-soda",
    name: "Doodh Soda",
    price: 100,
    emoji: "🥛",
    description: "The desi creamy soda classic — sweet, fizzy & full nostalgia.",
    category: "drinks",
    gradient: "from-sky-200 via-rose-200 to-amber-200",
    image: "/products/doodh-soda.png",
  },
  {
    id: "chilled-cola",
    name: "Chilled Cola",
    price: 80,
    emoji: "🥤",
    description: "The classic fizzy companion to every Dhamaka bowl.",
    category: "drinks",
    gradient: "from-zinc-700 via-red-700 to-orange-600",
    image: "/products/chilled-cola.png",
  },
  {
    id: "lunch-rush",
    name: "Lunch Rush Bundle",
    price: 280,
    emoji: "🍱",
    description:
      "Any bowl + a drink + one add-on. Save PKR 40 on the campus favourite combo.",
    category: "combos",
    tag: "Save PKR 40",
    gradient: "from-amber-300 via-orange-500 to-red-600",
    image: "/products/lunch-rush.png",
  },
  {
    id: "triple-threat",
    name: "Triple Threat",
    price: 600,
    emoji: "🎉",
    description:
      "Three signature bowls to share with the squad. Built for the weekend crew.",
    category: "combos",
    tag: "For Sharing",
    gradient: "from-yellow-400 via-orange-500 to-rose-600",
    image: "/products/triple-threat.png",
  },
];

export const categories: { id: Category | "all"; label: string; emoji: string }[] =
  [
    { id: "all", label: "Everything", emoji: "✨" },
    { id: "bowls", label: "Signature Bowls", emoji: "🥣" },
    { id: "drinks", label: "Coolers", emoji: "🥤" },
    { id: "combos", label: "Combo Deals", emoji: "🍱" },
  ];

export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}
