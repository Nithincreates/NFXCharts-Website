import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | NFXCharts',
  description: 'Terms and conditions for NFXCharts intraday futures education platform.',
};

const sections = [
  {
    title: '1. Educational Content',
    paragraphs: [
      'The membership content, including live session commentary, pre-market plans, market structure analysis, session reviews, intraday strategies, and trading frameworks, is provided for educational purposes only.',
      'NFXCharts does not provide investment, legal, tax, or financial advice. Nothing on the website, inside the membership, or in any communication should be treated as a recommendation to buy, sell, or hold any financial instrument.',
      'Trading and investing involve risk. Past performance, examples, or educational discussions do not guarantee future results.',
    ],
  },
  {
    title: '2. Membership Access',
    paragraphs: [
      'Membership content and resources may be delivered through nfxcharts.in, private member platforms, email, communities, or other digital channels selected by NFXCharts.',
      'Access methods, platforms, features, and delivery formats may change over time as the service improves or operational requirements change.',
      'You are responsible for maintaining the security of your account, login details, devices, and internet access. You must notify NFXCharts if you suspect unauthorized access to your account.',
    ],
  },
  {
    title: '3. Payments and Cancellation',
    paragraphs: [
      'The NFXCharts Membership is billed monthly unless stated otherwise at checkout.',
      'You may cancel your membership at any time. Cancellation will apply at the end of the current billing period.',
      'By submitting payment information, you authorize NFXCharts or its payment provider to charge the applicable membership fee and any related taxes or charges.',
    ],
  },
  {
    title: '4. Refunds',
    paragraphs: [
      'All membership purchases are final and non-refundable except where required by applicable law or where NFXCharts approves an exceptional request at its discretion.',
      'Please review the Refund Policy for details about exceptional circumstances and how to submit a refund request.',
    ],
  },
  {
    title: '5. Intellectual Property',
    paragraphs: [
      'All NFXCharts content, including text, graphics, videos, analysis, trading frameworks, strategies, design elements, and educational materials, is owned by NFXCharts or its licensors.',
      'You may not copy, reproduce, resell, publish, distribute, modify, or share membership content with non-members without written permission from NFXCharts.',
      'Unauthorized use or sharing of content may result in account termination and further action where appropriate.',
    ],
  },
  {
    title: '6. User Conduct',
    paragraphs: [
      'You agree to use the website and membership responsibly, lawfully, and in a manner that does not interfere with the service or other users.',
      'You must not share login credentials, resell access, scrape content, attempt unauthorized access, or misuse the platform.',
      'NFXCharts may suspend or terminate access if these Terms are violated or if user activity creates operational, security, legal, or reputational risk.',
    ],
  },
  {
    title: '7. Risk Acknowledgment',
    paragraphs: [
      'Futures trading involves substantial risk of loss and may not be suitable for every person.',
      'You are solely responsible for your trading decisions, risk management, position sizing, and financial outcomes.',
      'You should consult qualified professionals before making financial, legal, tax, or investment decisions.',
    ],
  },
  {
    title: '8. Warranty and Liability',
    paragraphs: [
      'The website, membership, and educational materials are provided on an "as is" and "as available" basis.',
      'NFXCharts does not guarantee that the service will be uninterrupted, error-free, continuously available, or suitable for your specific objectives.',
      'To the maximum extent permitted by law, NFXCharts will not be liable for trading losses, lost profits, indirect damages, incidental damages, or decisions made based on educational content.',
    ],
  },
  {
    title: '9. Changes to These Terms',
    paragraphs: [
      'NFXCharts may update these Terms from time to time. Updated Terms will be posted on this page with the latest revision date.',
      'Continuing to use the website or membership after changes are published means you accept the updated Terms.',
    ],
  },
  {
    title: '10. Contact',
    paragraphs: [
      'For questions about these Terms, contact NFXCharts at info@nfxcharts.in.',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="site-shell min-h-screen px-4 py-8 text-gray-300 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-emerald-200 transition-colors hover:border-emerald-300/30"
        >
          Back to Home
        </Link>

        <header className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:mb-10 sm:p-6">
          <p className="section-kicker mb-4">Legal</p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-5 text-sm text-gray-500 sm:text-base">
            Last updated: March 2, 2026
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
            These Terms govern your access to NFXCharts, including the website, membership, educational content, and related services.
          </p>
        </header>

        <div className="space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 sm:p-6">
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-gray-400 sm:text-base">
                    {section.title === '10. Contact' ? (
                      <>
                        For questions about these Terms, contact NFXCharts at{' '}
                        <a
                          href="mailto:info@nfxcharts.in?subject=NFXCharts%20Terms%20Question"
                          className="font-semibold text-emerald-200 transition-colors hover:text-emerald-100"
                        >
                          info@nfxcharts.in
                        </a>
                        .
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-7 text-amber-100">
          NFXCharts provides educational content only. Trading futures involves substantial risk of loss. These Terms are provided for website clarity and should not be treated as legal advice.
        </div>
      </div>
    </main>
  );
}
