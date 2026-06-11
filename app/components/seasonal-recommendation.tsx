"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product, products } from "../lib/products";
import { Sparkles } from "lucide-react";

export function SeasonalRecommendation() {
  const [recommendation, setRecommendation] = useState<{
    product: Product;
    suggestionText: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendation() {
      try {
        const res = await fetch("/api/recommendation");
        const data = await res.json();
        
        if (data.productId) {
          const product = products.find((p) => p.id === data.productId);
          if (product) {
            setRecommendation({
              product,
              suggestionText: data.suggestionText,
            });
          }
        }
      } catch (error) {
        console.error("Failed to load recommendation", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecommendation();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="animate-pulse rounded-3xl bg-charcoal/5 p-8 text-center h-48 flex items-center justify-center border border-charcoal/10">
           <div className="flex flex-col items-center gap-3">
             <div className="h-6 w-48 rounded bg-charcoal/10"></div>
             <div className="h-4 w-64 rounded bg-charcoal/10"></div>
           </div>
        </div>
      </section>
    );
  }

  if (!recommendation) return null;

  const { product, suggestionText } = recommendation;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${product.gradient} p-1 shadow-lg transition-transform hover:-translate-y-1`}>
        <div className="flex h-full w-full flex-col items-center justify-between rounded-[1.4rem] bg-white/90 px-6 py-8 backdrop-blur-sm sm:flex-row sm:px-10">
          
          <div className="flex flex-1 flex-col text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <Sparkles className="h-5 w-5 text-mango" />
              <span className="text-sm font-bold uppercase tracking-widest text-charcoal/70">
                Live Dhamaka Suggestion
              </span>
            </div>
            
            <h3 className="mt-3 font-display text-2xl font-extrabold text-charcoal sm:text-3xl">
              {suggestionText}
            </h3>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Link
                href={`/products#${product.id}`}
                className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-chili"
              >
                Get the {product.name}
              </Link>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center sm:ml-8 sm:mt-0">
             <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br shadow-inner shadow-black/10">
                 <div className={`absolute inset-0 rounded-full bg-gradient-to-br opacity-50 ${product.gradient}`}></div>
                 <span className="relative text-6xl drop-shadow-md">{product.emoji}</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
