"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "../lib/products";
import { formatPKR } from "../lib/products";
import { useCart } from "./cart-context";
import { SpiceMeter } from "./spice-meter";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-chili/10">
      <div
        className={`relative flex h-56 w-full items-center justify-center bg-gradient-to-br overflow-hidden ${product.gradient}`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <>
            <span className="bg-dots absolute inset-0 opacity-40" aria-hidden />
            <span className="relative text-7xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
              {product.emoji}
            </span>
          </>
        )}
        
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-charcoal px-3 py-1 text-xs font-bold text-cream shadow z-10">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-tight text-charcoal">
            {product.name}
          </h3>
          <span className="shrink-0 font-display text-lg font-extrabold text-chili">
            {formatPKR(product.price)}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-charcoal/60">
          {product.description}
        </p>

        {typeof product.spice === "number" && (
          <SpiceMeter level={product.spice} />
        )}

        <button
          onClick={handleAdd}
          className={`mt-auto flex h-11 items-center justify-center gap-2 rounded-full text-sm font-bold transition-all active:scale-95 ${
            added
              ? "bg-mint text-white"
              : "bg-charcoal text-cream hover:bg-chili"
          }`}
        >
          {added ? "Added to cart ✓" : "Add to cart +"}
        </button>
      </div>
    </article>
  );
}
