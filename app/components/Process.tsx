'use client';

export default function Process() {
  const steps = [
    {
      title: 'Pre-Market Plan',
      description: 'Bias, key levels, structural roadmap before session open.',
    },
    {
      title: 'Live Session Commentary',
      description: 'Real-time breakdown of execution logic, not signals.',
    },
    {
      title: 'Structured Review',
      description: 'Post-session analysis explaining decision-making process.',
    },
  ];

  return (
    <section id="process" className="bg-zinc-950/70 px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="section-kicker mb-4">Process</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
            Built around the rhythm of the trading day.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-emerald-300/40 hover:bg-white/[0.06] hover:shadow-[0_20px_70px_rgba(15,143,98,0.12)] sm:p-7"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-base font-bold text-zinc-950 transition-colors duration-300 group-hover:bg-[var(--accent-green)] group-hover:text-white">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-4 text-white transition-colors duration-300 group-hover:text-emerald-100">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
