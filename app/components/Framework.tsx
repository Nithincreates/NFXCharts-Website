'use client';

export default function Framework() {
  const cards = [
    {
      title: 'Market Structure & Liquidity',
      description: 'Understand session highs/lows, liquidity sweeps, imbalances, and institutional positioning.',
      label: '01',
    },
    {
      title: 'Session-Based Execution',
      description: 'London and New York session models. Opening range behavior. High-probability timing windows.',
      label: '02',
    },
    {
      title: 'Risk & Trade Management',
      description: 'Defined invalidation. Structured R:R framework. Daily loss discipline. Scaling logic.',
      label: '03',
    },
  ];

  return (
    <section
      id="framework"
      className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="section-kicker mb-4">Framework</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
            A cleaner operating system for intraday decisions.
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Every lesson is built around repeatable context, timing, and risk so the chart stops feeling random.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-panel group rounded-3xl p-6 transition-all duration-300 hover:border-emerald-300/40 hover:bg-white/[0.05] hover:shadow-[0_20px_70px_rgba(15,143,98,0.12)] sm:p-7"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-emerald-200 transition-colors duration-300 group-hover:border-emerald-300/40 group-hover:bg-[var(--accent-green)] group-hover:text-white">
                {card.label}
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-4 text-white transition-colors duration-300 group-hover:text-emerald-200">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
