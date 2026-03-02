'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="grid-bg relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="fade-in text-5xl md:text-7xl font-semibold tracking-tight mb-8">
          Unlock the Hidden Patterns of Intraday Markets.
        </h1>

        <p className="fade-in-delay-1 text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Structured intraday education focused on US indices and Gold futures. Clear bias. Defined risk. Institutional structure.
        </p>

        <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('framework')}
            className="px-8 py-4 border border-gray-600 text-white hover:bg-gray-900 transition-colors duration-300 font-semibold tracking-wide"
          >
            Explore Framework
          </button>
          <button
            onClick={() => scrollToSection('membership')}
            className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-semibold tracking-wide"
          >
            Join Membership
          </button>
        </div>

        <p className="fade-in-delay-3 text-sm text-gray-500 tracking-wide">
          Intraday only. Futures focused. Education-driven.
        </p>
      </div>
    </section>
  );
}
