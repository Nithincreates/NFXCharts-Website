'use client';

export default function Instruments() {
  const markets = [
    {
      title: 'US Indices Futures',
      accent: 'text-sky-200',
      border: 'border-sky-300/20',
      items: ['NASDAQ (NQ)', 'S&P 500 (ES)', 'Dow (YM)'],
      description:
        "Trade the volatility of US equity futures with models for opening range behavior, tech sensitivity, ES liquidity, and directional continuation.",
    },
    {
      title: 'Gold Futures (GC)',
      accent: 'text-amber-200',
      border: 'border-amber-300/20',
      items: ['Macro reaction', 'News windows', 'Continuation tracking'],
      description:
        'Gold offers distinct intraday liquidity patterns shaped by global macro news and US session open dynamics.',
    },
  ];

  return (
    <section id="instruments" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker mb-4">Markets</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
              Specialized where intraday volatility actually moves.
            </h2>
          </div>
          <p className="max-w-sm text-gray-400">
            Fewer instruments, deeper repetition, cleaner pattern recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {markets.map((market) => (
            <div
              key={market.title}
              className="glass-panel group overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:border-emerald-300/40 hover:bg-white/[0.05] hover:shadow-[0_20px_70px_rgba(15,143,98,0.12)] sm:p-7"
            >
              <div className={`mb-7 border-b ${market.border} pb-6`}>
                <h3 className={`text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-100 sm:text-2xl ${market.accent}`}>
                  {market.title}
                </h3>
              </div>
              <div className="mb-8 flex flex-wrap gap-3">
                {market.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-200 transition-colors duration-300 group-hover:border-emerald-300/25 group-hover:bg-emerald-300/10">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {market.description}
              </p>
              <div className="mt-8 h-24 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 transition-colors duration-300 group-hover:border-emerald-300/25 group-hover:bg-emerald-300/5">
                <div className="market-line mt-4 rotate-[-2deg] transition-opacity duration-300 group-hover:opacity-100" />
                <div className="market-line mt-8 rotate-[3deg] opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
