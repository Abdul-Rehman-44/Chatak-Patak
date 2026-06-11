import Link from "next/link";
import { products } from "./lib/products";
import { ProductCard } from "./components/product-card";
import { SeasonalRecommendation } from "./components/seasonal-recommendation";

const features = [
  {
    emoji: "🧼",
    title: "Hygienic Open Kitchen",
    text: "Watch every bowl get built right in front of you. No mystery, all dhamaka.",
  },
  {
    emoji: "🎛️",
    title: "Build Your Own Bowl",
    text: "Pick a chip base, pile on toppings, drown it in sauce. Your bowl, your rules.",
  },
  {
    emoji: "⚡",
    title: "Ready in 5 Minutes",
    text: "Skip the cafeteria queue. Fresh, crunchy and packed before you finish scrolling.",
  },
  {
    emoji: "💸",
    title: "Pocket-Friendly",
    text: "Starts at just PKR 150. Student budgets welcome, flavour never compromised.",
  },
];

const steps = [
  { n: "01", emoji: "🥔", title: "Pick your base", text: "Kurkure, Lays or Nachos — choose your crunch." },
  { n: "02", emoji: "🥗", title: "Load the toppings", text: "Onions, chicken, cheese, sev & more." },
  { n: "03", emoji: "🌶️", title: "Drown in sauce", text: "From mild mayo to the Spicy Volcano." },
  { n: "04", emoji: "💥", title: "Dhamaka!", text: "Grab your bowl and make it a story." },
];

const reviews = [
  {
    name: "Zain Malik",
    tag: "The Hype Hunter · UCP Student",
    emoji: "🎓",
    quote:
      "Bro the Spicy Volcano is unreal. I film every bowl for my story — it's literally too good not to flex. 2–3 visits a week now.",
  },
  {
    name: "Hira Noor",
    tag: "Software Engineer · DHA",
    emoji: "💼",
    quote:
      "Clean prep, under 15 minutes, and the Creamy Blast slaps. Finally a quick lunch near the office I actually trust.",
  },
  {
    name: "The Butt Family",
    tag: "Weekend Regulars · MM Alam",
    emoji: "👨‍👩‍👧",
    quote:
      "Kids spot the red truck from across the road. Nachos Cheese Burst for them, Tangy Twist for us. Saturday sorted.",
  },
];

const featured = products.filter((p) =>
  ["spicy-volcano", "chicken-chatak", "nachos-cheese"].includes(p.id)
);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-chili via-ember to-mango">
        <span className="bg-dots absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
              🚚 Lahore&apos;s loudest food truck
            </span>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              Flavor Ka
              <br />
              <span className="text-charcoal">Dhamaka!</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/90 md:mx-0">
              Customisable chip-bowls loaded with chaat, sauces & grilled
              chicken. Crunchy, spicy, selfie-worthy — built fresh in 5 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start flex-wrap">
              <Link
                href="/products"
                className="flex h-13 w-full items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-base font-bold text-cream shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Order Now 🛒
              </Link>
              <Link
                href="/build"
                className="flex h-13 w-full items-center justify-center rounded-full bg-emerald-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Build Your Bowl 🥗
              </Link>
              <Link
                href="/quiz"
                className="flex h-13 w-full items-center justify-center rounded-full bg-mango px-8 py-3.5 text-base font-bold text-charcoal shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Take Quiz 🥣
              </Link>
              <Link
                href="/products"
                className="flex h-13 w-full items-center justify-center rounded-full bg-white/20 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/30 sm:w-auto"
              >
                See the Menu
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/90 md:justify-start">
              <span>⭐ 4.2 Google rating</span>
              <span>🌶️ 7+ signature bowls</span>
              <span>🧼 100% hygienic</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-4 border-dashed border-white/40" />
              <div className="absolute inset-6 grid place-items-center rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-[8rem] leading-none drop-shadow-lg">🥣</span>
              </div>
              <span className="absolute -right-2 top-6 animate-float rounded-2xl bg-white px-4 py-2 text-sm font-bold text-chili shadow-lg">
                🌶️ Extra Spicy
              </span>
              <span className="absolute -left-4 bottom-10 animate-float-slow rounded-2xl bg-charcoal px-4 py-2 text-sm font-bold text-mango shadow-lg">
                from PKR 150
              </span>
              <span className="absolute -bottom-2 right-10 animate-float rounded-2xl bg-mango px-4 py-2 text-sm font-bold text-charcoal shadow-lg">
                🧀 Cheese Burst
              </span>
            </div>
          </div>
        </div>

        {/* curved divider */}
        <div className="h-10 rounded-t-[2.5rem] bg-cream" />
      </section>

      <SeasonalRecommendation />

      {/* Feature strip */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-2xl">
                {f.emoji}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-charcoal">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-charcoal py-16 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-mango">
              How it works
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Four steps to your Dhamaka 💥
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-3xl border border-cream/10 bg-cream/5 p-6"
              >
                <span className="font-display text-5xl font-extrabold text-cream/15">
                  {s.n}
                </span>
                <div className="mt-2 text-4xl">{s.emoji}</div>
                <h3 className="mt-3 font-display text-lg font-bold text-cream">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured bowls */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:text-left">
          <div className="text-center sm:text-left">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-ember">
              Crowd favourites
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
              The bowls everyone&apos;s talking about
            </h2>
          </div>
          <Link
            href="/products"
            className="rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-chili"
          >
            View full menu →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-gradient-to-r from-mango to-mango-light">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 text-center sm:px-6 lg:grid-cols-4">
          {[
            { value: "72", label: "Bowls served daily" },
            { value: "5 min", label: "Average build time" },
            { value: "4.2★", label: "Google rating" },
            { value: "13+", label: "Menu items & combos" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl font-extrabold text-charcoal sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-charcoal/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ember">
            The regulars
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
            Loved across Lahore
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-charcoal/10 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 text-mango">★★★★★</div>
              <blockquote className="flex-1 text-sm leading-relaxed text-charcoal/70">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cream text-xl">
                  {r.emoji}
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-charcoal">
                    {r.name}
                  </div>
                  <div className="text-xs text-charcoal/50">{r.tag}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-chili to-chili-dark px-6 py-14 text-center shadow-xl">
          <span className="bg-dots absolute inset-0 opacity-20" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Hungry yet? Let&apos;s build your bowl 🌶️
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/85">
              Tap through the menu, stack your cart and bring the Dhamaka to your
              day.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-chili shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Order Now 🛒
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-base font-bold text-cream shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Take the Personality Quiz 🥣
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
