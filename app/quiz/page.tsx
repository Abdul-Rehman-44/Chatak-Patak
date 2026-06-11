"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../lib/products";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

const questions = [
  {
    question: "What's your typical reaction to a looming deadline?",
    options: [
      "Panic, cram all night, and somehow survive.",
      "Cool as a cucumber. I had it planned weeks ago.",
      "Deadline? What deadline?",
      "I bribe my group mates with food."
    ]
  },
  {
    question: "Pick your weekend vibe in Lahore:",
    options: [
      "MM Alam road cruising with the windows down.",
      "Sleeping till 2 PM, then Netflix in bed.",
      "Hitting up the food trucks and taking aesthetic snaps.",
      "Gaming marathon with the boys."
    ]
  },
  {
    question: "How do you handle spicy food?",
    options: [
      "Bring on the fire! I eat raw chilies for breakfast.",
      "I like a little kick, but don't kill me.",
      "Zero spice. I think ketchup is spicy.",
      "I pretend I can handle it, then cry in the bathroom."
    ]
  },
  {
    question: "What's your go-to excuse for skipping an 8 AM class?",
    options: [
      "Traffic on Canal Road was blocked.",
      "My alarm didn't ring (I snoozed it 10 times).",
      "I was stuck in line for chai.",
      "I never skip. I'm the one taking notes for everyone."
    ]
  },
  {
    question: "Choose a sidekick:",
    options: [
      "A chilled glass of mint lemonade.",
      "Extra cheese on everything.",
      "A second bowl of whatever I'm eating.",
      "Just me, myself, and my massive ego."
    ]
  }
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{question: string, answer: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSelect = async (option: string) => {
    const newAnswers = [...answers, { question: questions[currentStep].question, answer: option }];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit
      setLoading(true);
      try {
        const res = await fetch("/api/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: newAnswers })
        });
        const data = await res.json();
        setResult(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const product = products.find(p => p.id === result.productId) || products[0];
    return (
      <div className="min-h-screen bg-charcoal pt-24 pb-12 text-cream flex items-center justify-center">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <div className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${product.gradient} p-1 shadow-2xl`}>
            <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.4rem] bg-charcoal/95 px-8 py-16 text-center backdrop-blur-xl sm:px-12">
              
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white/10 shadow-inner">
                <span className="text-7xl drop-shadow-lg">{product.emoji}</span>
              </div>
              
              <span className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-mango">
                Your Dhamaka Match
              </span>
              <h1 className="mb-4 font-display text-4xl font-extrabold text-white sm:text-5xl">
                {result.personalityLabel}
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-white/80 max-w-lg">
                {result.description}
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/products#${product.id}`}
                  className="inline-flex items-center justify-center rounded-full bg-mango px-8 py-4 text-base font-bold text-charcoal shadow-lg transition-transform hover:-translate-y-1"
                >
                  Order the {product.name} 🛒
                </Link>
                <button
                  onClick={restart}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <RotateCcw className="h-5 w-5" />
                  Retake Quiz
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-extrabold text-charcoal sm:text-5xl">
            What Bowl Are You? 🥣
          </h1>
          <p className="mt-4 text-lg text-charcoal/70">
            5 quick questions to find your true Dhamaka personality.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl border border-charcoal/5 sm:p-12">
          {loading ? (
             <div className="flex flex-col items-center justify-center py-20 text-center">
               <Sparkles className="h-12 w-12 text-mango animate-spin-slow mb-6" />
               <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
                 Analyzing your vibe...
               </h2>
               <p className="text-charcoal/60">Our AI is consulting the flavor gods.</p>
             </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between text-sm font-bold uppercase tracking-widest text-charcoal/40">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div key={i} className={`h-2 w-2 rounded-full ${i === currentStep ? 'bg-mango w-6' : i < currentStep ? 'bg-mango/50' : 'bg-charcoal/10'} transition-all`} />
                  ))}
                </div>
              </div>
              
              <h2 className="mb-10 font-display text-2xl font-bold text-charcoal sm:text-3xl leading-tight">
                {questions[currentStep].question}
              </h2>
              
              <div className="flex flex-col gap-4">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option)}
                    className="group flex w-full items-center justify-between rounded-2xl border-2 border-charcoal/5 bg-charcoal/5 px-6 py-5 text-left text-lg font-medium text-charcoal transition-all hover:-translate-y-1 hover:border-mango hover:bg-white hover:shadow-md"
                  >
                    <span>{option}</span>
                    <ArrowRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100 text-mango" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
