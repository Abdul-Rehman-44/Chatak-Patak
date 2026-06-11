"use client";

import { useState } from "react";
import { Sparkles, Activity, Check } from "lucide-react";
import { useCart } from "../components/cart-context";
import type { Category } from "../lib/products";

const ingredientOptions = {
  bases: ["Kurkure Classic", "Lays Salted", "Nachos"],
  proteins: ["Grilled Chicken", "Extra Chicken", "None (Veggie)"],
  toppings: ["Fresh Onions", "Jalapeños", "Sweet Corn", "Extra Cheese", "Sev"],
  sauces: ["Garlic Mayo", "Spicy Volcano", "Tamarind Kick", "No Sauce (Dry)"]
};

export default function BuildBowlPage() {
  const { add } = useCart();
  const [base, setBase] = useState(ingredientOptions.bases[0]);
  const [protein, setProtein] = useState(ingredientOptions.proteins[0]);
  const [toppings, setToppings] = useState<string[]>([]);
  const [sauce, setSauce] = useState(ingredientOptions.sauces[0]);
  
  const [loading, setLoading] = useState(false);
  const [nutrition, setNutrition] = useState<any>(null);
  const [added, setAdded] = useState(false);

  const toggleTopping = (t: string) => {
    if (toppings.includes(t)) {
      setToppings(toppings.filter(item => item !== t));
    } else {
      setToppings([...toppings, t]);
    }
  };

  const getNutrition = async () => {
    setLoading(true);
    setNutrition(null);
    try {
      const ingredients = [base, protein, ...toppings, sauce].filter(i => i && i !== "None (Veggie)" && i !== "No Sauce (Dry)");
      const res = await fetch("/api/nutrition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients })
      });
      const data = await res.json();
      setNutrition(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: "custom-bowl-" + Date.now(),
      name: "Custom Built Bowl",
      price: 250 + (toppings.length * 20),
      emoji: "🥣",
      description: `Base: ${base}, Protein: ${protein}, Toppings: ${toppings.join(", ") || "None"}, Sauce: ${sauce}`,
      category: "bowls" as Category,
      gradient: "from-lime-300 via-emerald-400 to-teal-500",
    };
    add(customProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-extrabold text-charcoal sm:text-5xl">
            Build Your Own Bowl 🥣
          </h1>
          <p className="mt-4 text-lg text-charcoal/70">
            You choose the ingredients, our AI estimates the macros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Builder Form */}
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl border border-charcoal/5">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">1. Pick a Base</h3>
              <div className="flex flex-wrap gap-2">
                {ingredientOptions.bases.map(b => (
                  <button key={b} onClick={() => setBase(b)} className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${base === b ? 'border-chili bg-chili text-white' : 'border-charcoal/10 text-charcoal/70 hover:border-chili/50'}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">2. Pick Protein</h3>
              <div className="flex flex-wrap gap-2">
                {ingredientOptions.proteins.map(p => (
                  <button key={p} onClick={() => setProtein(p)} className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${protein === p ? 'border-mango bg-mango text-charcoal' : 'border-charcoal/10 text-charcoal/70 hover:border-mango/50'}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">3. Load Toppings</h3>
              <div className="flex flex-wrap gap-2">
                {ingredientOptions.toppings.map(t => (
                  <button key={t} onClick={() => toggleTopping(t)} className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${toppings.includes(t) ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-charcoal/10 text-charcoal/70 hover:border-emerald-500/50'}`}>
                    {t} {toppings.includes(t) && <Check className="inline h-3 w-3 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">4. Choose Sauce</h3>
              <div className="flex flex-wrap gap-2">
                {ingredientOptions.sauces.map(s => (
                  <button key={s} onClick={() => setSauce(s)} className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${sauce === s ? 'border-rose-500 bg-rose-500 text-white' : 'border-charcoal/10 text-charcoal/70 hover:border-rose-500/50'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={getNutrition}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-charcoal py-4 text-lg font-bold text-cream transition-colors hover:bg-chili disabled:opacity-50"
            >
              {loading ? <Sparkles className="h-5 w-5 animate-spin-slow" /> : <Activity className="h-5 w-5 text-mango" />}
              {loading ? "Analyzing macros..." : "Estimate Nutrition Info"}
            </button>
          </div>

          {/* Results Card */}
          <div>
            {nutrition ? (
              <div className="sticky top-24 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-400 to-teal-500 p-1 shadow-2xl transition-all">
                <div className="flex h-full w-full flex-col justify-center rounded-[2.4rem] bg-charcoal/95 p-8 text-cream backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-6">
                     <Activity className="h-6 w-6 text-emerald-400" />
                     <h2 className="font-display text-2xl font-bold">AI Nutrition Estimate</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-extrabold text-emerald-400 mb-1">{nutrition.calories}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/50">Calories</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-extrabold text-white mb-1">{nutrition.protein}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/50">Protein</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-extrabold text-white mb-1">{nutrition.carbs}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/50">Carbs</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-extrabold text-white mb-1">{nutrition.fats}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/50">Fats</div>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-8 italic">
                    "{nutrition.message}"
                  </p>

                  <button
                    onClick={handleAddToCart}
                    className={`w-full flex items-center justify-center rounded-xl py-4 text-lg font-bold transition-all ${added ? 'bg-emerald-400 text-charcoal' : 'bg-mango text-charcoal hover:bg-white'}`}
                  >
                    {added ? "Added to Cart ✓" : "Add Custom Bowl to Cart 🛒"}
                  </button>
                  <p className="text-center text-xs text-white/40 mt-4">*Estimates are AI-generated approximations</p>
                </div>
              </div>
            ) : (
              <div className="sticky top-24 rounded-[2.5rem] border-2 border-dashed border-charcoal/10 bg-white/50 p-12 text-center text-charcoal/40 h-full flex flex-col items-center justify-center min-h-[400px]">
                 <Activity className="h-12 w-12 mb-4 opacity-50" />
                 <p className="text-lg font-medium">Build your bowl and tap "Estimate Nutrition Info" to see the AI breakdown.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
