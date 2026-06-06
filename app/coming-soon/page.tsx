export const metadata = {
  title: 'Coming Soon | NFXCharts',
  description: 'Payment gateway in process. Coming soon.',
};

export default function ComingSoon() {
  return (
    <main className="bg-zinc-950 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-semibold text-white mb-6">
          Payment Gateway<br />Coming Soon
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          We're currently working on integrating our payment gateway. Please check back soon or contact us at{' '}
          <a href="mailto:info@nfxcharts.in?subject=NFXCharts%20Membership%20Inquiry" className="text-blue-400 hover:text-blue-300">
            info@nfxcharts.in
          </a>
          .
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-light hover:bg-blue-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}
