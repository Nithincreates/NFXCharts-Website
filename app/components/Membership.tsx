'use client';

export default function Membership() {
  const features = [
    {
      title: 'Clear learning modules',
      description: 'Study the framework step by step without scattered content.',
    },
    {
      title: 'Live session context',
      description: 'Understand market structure and execution logic in real time.',
    },
    {
      title: 'Futures-focused approach',
      description: 'Built around US indices and Gold instead of random setups.',
    },
    {
      title: 'Private member access',
      description: 'Get access to the member-only learning environment.',
    },
    {
      title: 'Weekly breakdowns',
      description: 'Review key sessions and improve your decision-making.',
    },
  ];

  return (
    <section id="membership" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="section-kicker mb-4">Membership</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
            NFXCharts Intraday Membership
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Direct education, live context, and structured review in one focused monthly plan.
          </p>
        </div>

        <div className="glass-panel overflow-hidden rounded-3xl p-4 sm:rounded-[2rem] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-300/10 text-xs font-bold text-emerald-200">
                    ✓
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {feature.title}
                    </span>
                    <span className="block text-xs leading-5 text-gray-400">
                      {feature.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 sm:text-sm sm:tracking-[0.18em]">
                Monthly access
              </p>
              <div className="mb-7">
                <div className="mb-2 flex flex-wrap items-end gap-4">
                  <div className="text-2xl font-semibold tracking-tight text-gray-500 line-through sm:text-3xl">
                    <span>₹ </span>
                    <span>999</span>
                  </div>
                  <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    <span className="text-gray-300">₹</span>
                    <span className="text-white">599</span>
                    <span className="text-xl text-gray-400 sm:text-2xl"> / month</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Cancel anytime. No long-term contracts.
                </p>
              </div>

              <a
                href="/coming-soon"
                className="mb-6 block w-full rounded-full border border-transparent bg-[var(--accent-green)] py-4 text-center text-base font-bold text-zinc-950 transition-colors hover:border-white/70 hover:bg-emerald-900 hover:text-white"
              >
                Join NFXCharts
              </a>

              <p className="text-center text-xs leading-relaxed text-gray-500">
                Educational content only. Trading involves risk. Past performance does not guarantee future results. Always trade with defined risk management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
