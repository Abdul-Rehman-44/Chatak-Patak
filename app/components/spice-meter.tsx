const labels = ["", "Mild", "Easy", "Medium", "Spicy", "Inferno"];

export function SpiceMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full ${
              i < level
                ? "bg-gradient-to-r from-mango to-chili"
                : "bg-charcoal/10"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-semibold text-charcoal/60">
        {labels[level] ?? "Mild"}
      </span>
    </div>
  );
}
