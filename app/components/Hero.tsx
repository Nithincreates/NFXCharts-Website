'use client';

import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-4 sm:px-8 sm:py-6">
      <div className="grid-bg absolute inset-0" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl sm:px-6">
        <a href="/" aria-label="NFXCharts home">
          <Logo />
        </a>
        <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
          <a href="#framework" className="transition-colors hover:text-white">Framework</a>
          <a href="#instruments" className="transition-colors hover:text-white">Markets</a>
          <a href="#process" className="transition-colors hover:text-white">Process</a>
        </div>
        <a
          href="#membership"
          className="rounded-full border border-transparent bg-[var(--accent-green)] px-8 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:border-white/70 hover:bg-emerald-900 hover:text-white sm:text-sm"
        >
          Join
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-7xl items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-12">
        <div>
          <p className="section-kicker fade-in mb-5">Intraday futures education</p>
          <h1 className="fade-in text-4xl font-semibold leading-[1.03] tracking-tight text-white min-[390px]:text-5xl sm:text-6xl lg:text-7xl">
            Trade NY session with structure, not noise.
          </h1>

          <p className="fade-in-delay-1 mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:mt-7 sm:text-xl sm:leading-8">
            A focused learning environment for US indices and Gold futures: pre-market bias, liquidity maps, execution windows, and review discipline.
          </p>

          <div className="fade-in-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#framework"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:border-white/35 hover:bg-white/10"
            >
              Explore Us
            </a>
            <a
              href="#membership"
              className="rounded-full border border-transparent bg-[var(--accent-green)] px-6 py-3 text-center text-sm font-bold text-zinc-950 transition-colors hover:border-white/70 hover:bg-emerald-900 hover:text-white"
            >
              Membership
            </a>
          </div>

          <div className="fade-in-delay-3 mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-gray-400 min-[420px]:grid-cols-3 sm:mt-10">
            <div className="border-l border-white/10 pl-3 sm:pl-4">
              <strong className="block text-2xl font-semibold text-white"></strong>
              Futures markets
            </div>
            <div className="border-l border-white/10 pl-3 sm:pl-4">
              <strong className="block text-2xl font-semibold text-white"></strong>
              Core sessions
            </div>
            <div className="border-l border-white/10 pl-3 sm:pl-4">
              <strong className="block text-2xl font-semibold text-white"></strong>
              Repeatable plan
            </div>
          </div>
        </div>

        <div className="glass-panel fade-in-delay-2 relative overflow-hidden rounded-3xl p-4 sm:rounded-[2rem] sm:p-7">
          <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6 sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">New York Session</p>
              <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">Liquidity Map</h2>
            </div>
            <div className="shrink-0 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              Live model
            </div>
          </div>

          <div className="relative h-60 overflow-hidden rounded-2xl border border-white/10 bg-[#080c12] p-4 sm:h-80 sm:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
            <div className="absolute left-5 right-5 top-16 market-line rotate-[-7deg]" />
            <div className="absolute left-12 right-10 top-36 market-line rotate-[5deg] opacity-80" />
            <div className="absolute left-4 right-16 top-56 market-line rotate-[-3deg] opacity-70" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              {[44, 68, 38, 82, 54, 94, 62, 76, 48, 88].map((height, index) => (
                <div
                  key={index}
                  className="w-full rounded-t-sm bg-white/10"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <div className="absolute left-4 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-300 backdrop-blur sm:left-8 sm:top-8">
              Sweep + reclaim
            </div>
            <div className="absolute bottom-20 right-4 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-100 backdrop-blur sm:bottom-24 sm:right-8">
              Target liquidity
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
            {[
              { item: 'Plan', value: 'READY' },
              { item: 'Risk', value: 'CLEAR' },
              { item: 'Review', value: 'DONE' },
            ].map((metric) => (
              <div key={metric.item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.1em] text-gray-500 sm:text-xs sm:tracking-[0.16em]">{metric.item}</p>
                <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
