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
    <section id="process" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16 text-center">
          How The Membership Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mb-6 text-blue-400 font-light">
                {index + 1}
              </div>
              <h3 className="text-xl font-light tracking-tight mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
