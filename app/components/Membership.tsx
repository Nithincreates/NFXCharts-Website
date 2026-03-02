'use client';

export default function Membership() {
  const features = [
    'Structured education modules',
    'Live session commentary',
    'Futures-focused framework',
    'Private member access',
    'Weekly session breakdowns',
  ];

  return (
    <section id="membership" className="py-16 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-in text-5xl md:text-6xl tracking-tight mb-12 text-center font-semibold">
          NFXCharts Intraday Membership
        </h2>

        <div className="fade-in-delay-1 mb-8 p-8 border border-gray-700 bg-zinc-800">
          <div className="space-y-6">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 fade-in-delay-2">
                  <span className="text-blue-400 font-light text-xl">
                    ✓
                  </span>
                  <span className="text-gray-300 font-light">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing Block */}
            <div className="fade-in-delay-2 pt-6 border-t border-gray-700">
              <div className="mb-6">
                <div className="flex items-baseline gap-4 mb-1">
                  <div className="text-3xl font-light tracking-tight line-through text-gray-500">
                    <span className="text-gray-500">₹</span>
                    <span>999</span>
                  </div>
                  <div className="text-5xl font-light tracking-tight">
                    <span className="text-gray-300">₹</span>
                    <span className="text-white">599</span>
                    <span className="text-gray-400 text-3xl"> / month</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm font-light">
                  Cancel anytime. No long-term contracts.
                </p>
              </div>

              <a
                href="/coming-soon"
                className="fade-in-delay-3 block w-full text-center py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-light tracking-wide text-lg mb-6"
              >
                Join NFXCharts
              </a>

              <p className="fade-in-delay-3 text-center text-xs text-gray-500 font-light leading-relaxed">
                Educational content only. Trading involves risk. Past performance does not guarantee future results. Always trade with defined risk management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
