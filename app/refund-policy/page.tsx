import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | NFXCharts',
  description: 'Refund policy for NFXCharts intraday futures education membership.',
};

const sections = [
  {
    title: '1. All Sales Are Final',
    paragraphs: [
      'Except where required by applicable law, purchases of the NFXCharts Membership are final and non-refundable.',
      'We do not provide refunds, credits, or partial refunds for unused time, missed sessions, changes in personal circumstances, or cancellation during an active billing period.',
      'We aim to describe the membership clearly before purchase so you can make an informed decision.',
    ],
  },
  {
    title: '2. Exceptional Circumstances',
    paragraphs: [
      'Although the general policy is no refunds, NFXCharts may review exceptional cases at its discretion.',
      'Examples may include non-delivery of access after purchase or a major platform issue that prevents access to purchased educational content.',
      'Approval of one refund request does not guarantee approval of future requests or create a general refund right.',
    ],
  },
  {
    title: '3. Refund Request Process',
    paragraphs: [
      'To request a review, email info@nfxcharts.in with the subject line "Refund Request".',
      'Include your name, purchase date, payment reference if available, the reason for your request, and any screenshots or details that help us understand the issue.',
      'Refund requests should be submitted as soon as possible after the issue occurs.',
    ],
  },
  {
    title: '4. Review Timeline',
    paragraphs: [
      'NFXCharts will review refund requests on a case-by-case basis.',
      'We aim to respond within 7 to 10 business days after receiving enough information to evaluate the request.',
      'Additional information may be requested before a final decision is made.',
    ],
  },
  {
    title: '5. Cancellation',
    paragraphs: [
      'You may cancel your membership at any time.',
      'Cancellation stops future billing but does not automatically create a refund for the current billing period.',
      'Access may continue until the end of the paid billing period unless otherwise stated.',
    ],
  },
  {
    title: '6. Changes to This Policy',
    paragraphs: [
      'NFXCharts may update this Refund Policy from time to time.',
      'The updated version will be posted on this page with the latest revision date. Continued use of the service after changes are posted means you accept the updated policy.',
    ],
  },
  {
    title: '7. Contact',
    paragraphs: [
      'For refund questions, contact NFXCharts at info@nfxcharts.in.',
    ],
  },
];

export default function RefundPolicyPage() {
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
          <p className="section-kicker mb-4">Policy</p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Refund Policy
          </h1>
          <p className="mt-5 text-sm text-gray-500 sm:text-base">
            Last updated: March 2, 2026
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
            This policy explains how refunds, cancellations, and exceptional refund reviews work for the NFXCharts Intraday Membership.
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
                    {section.title === '7. Contact' ? (
                      <>
                        For refund questions, contact NFXCharts at{' '}
                        <a
                          href="mailto:info@nfxcharts.in?subject=NFXCharts%20Refund%20Policy%20Question"
                          className="font-semibold text-emerald-200 transition-colors hover:text-emerald-100"
                        >
                          info@nfxcharts.in
                        </a>
                        .
                      </>
                    ) : section.title === '3. Refund Request Process' && paragraph.includes('info@nfxcharts.in') ? (
                      <>
                        To request a review, email{' '}
                        <a
                          href="mailto:info@nfxcharts.in?subject=Refund%20Request"
                          className="font-semibold text-emerald-200 transition-colors hover:text-emerald-100"
                        >
                          info@nfxcharts.in
                        </a>{' '}
                        with the subject line "Refund Request".
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
          This policy is provided for clarity around NFXCharts membership purchases. It should not be treated as legal advice.
        </div>
      </div>
    </main>
  );
}
