"use client";

import { useState } from "react";
import {
  categories,
  products,
  type Category,
} from "../lib/products";
import { ProductCard } from "./product-card";

export function MenuSection() {
  const [active, setActive] = useState<Category | "all">("all");

  const visible =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const selected = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                selected
                  ? "border-chili bg-chili text-cream shadow-md shadow-chili/30"
                  : "border-charcoal/15 bg-white text-charcoal/70 hover:border-chili/40 hover:text-charcoal"
              }`}
            >
              <span aria-hidden>{cat.emoji}</span>
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
