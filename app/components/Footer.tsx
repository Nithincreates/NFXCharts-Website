import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07090d] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_0.7fr_1fr]">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Precision intraday futures education for traders who want structure before execution.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/terms" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@nfxcharts.in?subject=NFXCharts%20Support%20Inquiry"
                className="flex items-center gap-3 break-all rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-emerald-200 transition-colors hover:border-emerald-300/30"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6.75h16v10.5H4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.75 7.5 7.25 5.25 7.25-5.25"
                  />
                </svg>
                <span>info@nfxcharts.in</span>
              </a>
              <a
                href="https://www.instagram.com/nfxcharts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-emerald-200 transition-colors hover:border-emerald-300/30"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="5" y="5" width="14" height="14" rx="4" />
                  <circle cx="12" cy="12" r="3.25" />
                  <circle cx="16.5" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
                <span>@nfxcharts</span>
              </a>
              <a
                href="https://www.youtube.com/@NFXCharts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-emerald-200 transition-colors hover:border-emerald-300/30"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="7" width="16" height="10" rx="3" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.75 10 4 2-4 2z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span>@NFXCharts</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-600 md:flex-row">
          <p>Copyright 2026 NFXCharts. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Educational content only. Trading involves risk. Always trade with defined risk management.
          </p>
        </div>
      </div>
    </footer>
  );
}
