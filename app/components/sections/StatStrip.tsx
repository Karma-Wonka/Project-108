export function StatStrip() {
  return (
    <section className="bg-cream-light border-y border-ink/5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/10">
        {[
          { value: "108", label: "Chortens" },
          { value: "15 m", label: "Height" },
          { value: "108 m", label: "Spacing" },
          { value: "1.62 km", label: "Stacked Height" },
        ].map((stat, i) => (
          <div key={i} className="py-10 md:py-14 px-8 text-center md:text-left">
            <div className="eyebrow opacity-40 mb-3">{stat.label}</div>
            <div className="text-4xl md:text-5xl font-serif text-ink onum font-light">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
