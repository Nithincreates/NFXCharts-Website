'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-lg font-light tracking-tight mb-1 text-white">
                NFXCharts
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Precision intraday futures education for institutional traders.
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold tracking-tight mb-4 text-gray-400 uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="p-4 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 bg-zinc-900/50 hover:bg-zinc-900">
                <p className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Email</p>
                <a 
                  href="mailto:info@nfxcharts.in" 
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-light block break-all hover:underline"
                >
                  info@nfxcharts.in
                </a>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Reach out for support, inquiries, or membership assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600 font-light">
              © 2026 NFXCharts. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 font-light leading-relaxed text-center md:text-right">
              Educational content only. Trading involves risk. Always trade with defined risk management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
