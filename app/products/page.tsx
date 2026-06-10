import type { Metadata } from "next";
import { MenuSection } from "../components/menu-section";

export const metadata: Metadata = {
  title: "Menu — Chatak Patak",
  description:
    "Browse the full Dhamaka menu: signature chip-bowls, coolers and combo deals. Add your favourites to the cart.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-chili to-ember">
        <span className="bg-dots absolute inset-0 opacity-25" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            🍽️ The Dhamaka Menu
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Pick your crunch. Stack your cart.
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-white/90">
            Every bowl is built fresh to order. Filter by category, check the
            heat, and load up.
          </p>
        </div>
        <div className="h-8 rounded-t-[2.5rem] bg-cream" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <MenuSection />
      </section>
    </>
  );
}
