'use client';

export default function Instruments() {
  return (
    <section id="instruments" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16 text-center">
        We Specialize In
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* US Indices */}
          <div className="p-8 bg-zinc-900 bg-opacity-40 rounded-xl shadow-xl ring-1 ring-gray-700 hover:ring-blue-400 transition-transform transform hover:scale-105 backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-light tracking-tight mb-8 pb-4 border-b border-blue-500/30">
                <span className="text-blue-400">US Indices Futures</span>
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="text-gray-300 font-light">
                  <strong className="font-light text-white">NASDAQ (NQ)</strong>
                </li>
                <li className="text-gray-300 font-light">
                  <strong className="font-light text-white">S&P 500 (ES)</strong>
                </li>
                <li className="text-gray-300 font-light">
                  <strong className="font-light text-white">Dow (YM)</strong>
                </li>
              </ul>
              <p className="text-gray-400 leading-relaxed font-light">
                Trade the volatility of US equity futures. Each index offers distinct intraday characteristics: NASDAQ's tech sensitivity, ES liquidity, and YM's directional bias. Master session structure and opening range breaks for high-probability setups.
              </p>
            </div>
          </div>

          {/* Gold Futures */}
          <div className="p-8 bg-zinc-900 bg-opacity-40 rounded-xl shadow-xl ring-1 ring-gray-700 hover:ring-amber-400 transition-transform transform hover:scale-105 backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-light tracking-tight mb-8 pb-4 border-b border-amber-600/30">
                <span className="text-amber-500">Gold Futures (GC)</span>
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Gold offers unique intraday liquidity patterns shaped by global macro news and US session open dynamics. Learn news-sensitivity models, continuation tracking, and how to exploit the tight spread environment. GC is ideal for directional thesis trading during high-impact news windows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
