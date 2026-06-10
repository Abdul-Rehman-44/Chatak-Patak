"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../components/cart-context";
import { formatPKR } from "../lib/products";

const SERVICE_FEE = 30;

export default function CartPage() {
  const { items, subtotal, count, increment, decrement, remove, clear } =
    useCart();
  const [placed, setPlaced] = useState(false);

  // Order placed confirmation (no backend — purely UI feedback).
  if (placed) {
    return (
      <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-mint/15 text-5xl">
          🎉
        </span>
        <h1 className="mt-6 font-display text-3xl font-extrabold text-charcoal">
          Order placed — Dhamaka incoming!
        </h1>
        <p className="mt-3 text-charcoal/60">
          Your bowls are being built fresh at the truck. Show your name at the
          counter to collect. (This is a demo — no payment was taken.)
        </p>
        <Link
          href="/products"
          className="mt-8 rounded-full bg-charcoal px-8 py-3.5 text-base font-bold text-cream transition-colors hover:bg-chili"
        >
          Order more 🌶️
        </Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-cream text-5xl ring-1 ring-charcoal/10">
          🛒
        </span>
        <h1 className="mt-6 font-display text-3xl font-extrabold text-charcoal">
          Your cart is empty
        </h1>
        <p className="mt-3 text-charcoal/60">
          No bowls yet — let&apos;s fix that. The Spicy Volcano is calling.
        </p>
        <Link
          href="/products"
          className="mt-8 rounded-full bg-chili px-8 py-3.5 text-base font-bold text-cream shadow-md shadow-chili/30 transition-transform hover:-translate-y-0.5"
        >
          Browse the menu
        </Link>
      </section>
    );
  }

  const total = subtotal + SERVICE_FEE;

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
            Your cart
          </h1>
          <p className="mt-1 text-charcoal/60">
            {count} item{count === 1 ? "" : "s"} ready for the Dhamaka.
          </p>
        </div>
        <button
          onClick={clear}
          className="text-sm font-semibold text-charcoal/50 underline-offset-4 hover:text-chili hover:underline"
        >
          Clear cart
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem]">
        {/* Line items */}
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-3 sm:p-4"
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-cream text-3xl">
                {item.emoji}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-display font-bold text-charcoal">
                  {item.name}
                </h3>
                <p className="text-sm text-charcoal/50">
                  {formatPKR(item.price)} each
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-cream p-1">
                <button
                  onClick={() => decrement(item.id)}
                  aria-label={`Decrease ${item.name}`}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg font-bold text-charcoal shadow-sm transition-colors hover:bg-chili hover:text-cream"
                >
                  −
                </button>
                <span className="w-6 text-center font-bold text-charcoal">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increment(item.id)}
                  aria-label={`Increase ${item.name}`}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg font-bold text-charcoal shadow-sm transition-colors hover:bg-chili hover:text-cream"
                >
                  +
                </button>
              </div>

              <div className="hidden w-24 text-right font-display font-extrabold text-charcoal sm:block">
                {formatPKR(item.price * item.quantity)}
              </div>

              <button
                onClick={() => remove(item.id)}
                aria-label={`Remove ${item.name}`}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-charcoal/40 transition-colors hover:bg-chili/10 hover:text-chili"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="h-fit rounded-3xl border border-charcoal/10 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-bold text-charcoal">
            Order summary
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between text-charcoal/70">
              <dt>Subtotal</dt>
              <dd className="font-semibold text-charcoal">
                {formatPKR(subtotal)}
              </dd>
            </div>
            <div className="flex justify-between text-charcoal/70">
              <dt>Service fee</dt>
              <dd className="font-semibold text-charcoal">
                {formatPKR(SERVICE_FEE)}
              </dd>
            </div>
            <div className="my-2 border-t border-dashed border-charcoal/15" />
            <div className="flex justify-between text-base">
              <dt className="font-display font-bold text-charcoal">Total</dt>
              <dd className="font-display text-xl font-extrabold text-chili">
                {formatPKR(total)}
              </dd>
            </div>
          </dl>

          <button
            onClick={() => {
              clear();
              setPlaced(true);
            }}
            className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-chili text-base font-bold text-cream shadow-md shadow-chili/30 transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            Place order 💥
          </button>
          <Link
            href="/products"
            className="mt-3 block text-center text-sm font-semibold text-charcoal/60 underline-offset-4 hover:text-charcoal hover:underline"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
