import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-charcoal text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-chili text-lg">
              🌶️
            </span>
            <span className="font-display text-xl font-extrabold text-cream">
              Chatak<span className="text-mango">Patak</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Lahore&apos;s loudest food truck. Customisable chip-bowls layered
            with chaat, sauces & pure dhamaka — made fresh, served fast.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-mango">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-cream">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="transition-colors hover:text-cream"
              >
                Full Menu
              </Link>
            </li>
            <li>
              <Link href="/cart" className="transition-colors hover:text-cream">
                Your Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-mango">
            Find the Truck
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>📍 UCP Campus Gate, Lahore</li>
            <li>📍 MM Alam Road (weekends)</li>
            <li>🕛 Mon–Sat · 12 PM – 9 PM</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-mango">
            Stay Saucy
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>💬 WhatsApp: 0300-DHAMAKA</li>
            <li>📸 @chatak_patak</li>
            <li>🎵 TikTok: @chatakpatak</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Chatak Patak · Flavor Ka Dhamaka!</p>
          <p>A University of Central Punjab brand concept.</p>
        </div>
      </div>
    </footer>
  );
}
