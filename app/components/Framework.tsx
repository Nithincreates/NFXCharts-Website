'use client';

export default function Framework() {
  const cards = [
    {
      title: 'Market Structure & Liquidity',
      description: 'Understand session highs/lows, liquidity sweeps, imbalances, and institutional positioning.',
    },
    {
      title: 'Session-Based Execution',
      description: 'London and New York session models. Opening range behavior. High-probability timing windows.',
    },
    {
      title: 'Risk & Trade Management',
      description: 'Defined invalidation. Structured R:R framework. Daily loss discipline. Scaling logic.',
    },
  ];

  return (
    <section
      id="framework"
      className="py-24 px-6 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16 text-center">
          The Edge You Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-zinc-900 bg-opacity-40 rounded-xl shadow-xl ring-1 ring-gray-700 hover:ring-blue-400 transition-transform transform hover:scale-105 backdrop-blur-sm"
            >
              <h3 className="text-xl font-light tracking-tight mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
