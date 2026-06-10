"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./cart-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Menu" },
];

export function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-chili text-lg shadow-sm transition-transform group-hover:-rotate-12">
            🌶️
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-charcoal">
              Chatak<span className="text-chili">Patak</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ember">
              Flavor Ka Dhamaka
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                  active
                    ? "bg-charcoal text-cream"
                    : "text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/cart"
            aria-label="View cart"
            className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
              pathname === "/cart"
                ? "bg-chili-dark text-cream"
                : "bg-chili text-cream shadow-md shadow-chili/30"
            }`}
          >
            <span aria-hidden>🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-mango px-1 text-xs font-extrabold text-charcoal">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
