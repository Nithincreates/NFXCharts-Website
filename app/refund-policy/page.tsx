import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | NFXCharts',
  description: 'Refund policy for NFXCharts intraday futures education membership.',
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-zinc-950 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-light mb-12 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-white">
          Refund Policy
        </h1>
        <p className="text-gray-500 font-light mb-16 text-lg">
          Last updated: March 2, 2026
        </p>

        {/* Content */}
        <div className="space-y-16 text-gray-300 font-light leading-8">
          {/* Introduction */}
          <section className="pb-8">
            <p className="text-base leading-8">
              Welcome to the NFXCharts Refund Policy ("Policy"). We value and respect our customers and strive to provide the highest quality services. This policy outlines our stance on refunds for the NFXCharts Intraday Membership ("Membership").
            </p>
          </section>

          {/* Section 1: No Refunds */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              No Refunds
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                Except as required by law, all purchases of the Membership are final and non-refundable. Once you have paid for the Membership, we do not provide refunds or credits, including for partially used periods. We provide a clear description of the Membership on our website and through other communications, so you can make an informed decision before making a purchase.
              </p>
            </div>
          </section>

          {/* Section 2: Exceptional Circumstances */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              Exceptional Circumstances
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                While all sales are final, we understand that exceptional circumstances can take place with regard to the character of the Membership we provide. Therefore, we do honour requests for refund for the following reasons:
              </p>
              
              <div className="space-y-6 pl-6 border-l-2 border-blue-400/30">
                <p className="text-base leading-8">
                  <strong className="text-gray-200">1. Non-delivery of Content:</strong> Due to some mailing issues with your email provider or your own mail server, you might not receive delivery emails or access credentials from us.
                </p>
                <p className="text-base leading-8">
                  <strong className="text-gray-200">2. Major Defects:</strong> Although all the Membership content is thoroughly tested before release, unexpected errors or platform unavailability may occur that prevent access to the educational materials.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Refund Request Process */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              How to Request a Refund
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                If you wish to inquire about a refund under exceptional circumstances, you should contact us at{' '}
                <a href="mailto:info@nfxcharts.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                  info@nfxcharts.in
                </a>{' '}
                with the subject line "Refund Request" and include detailed reasons for your request in the body of the email.
              </p>
              <p className="text-base leading-8">
                Please provide as much detail as possible, including:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="text-base leading-8">Your membership purchase date</li>
                <li className="text-base leading-8">The exact nature of the issue or exceptional circumstance</li>
                <li className="text-base leading-8">Steps you have taken to resolve the issue</li>
                <li className="text-base leading-8">Any relevant screenshots or documentation</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Discretion */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              Our Discretion
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                Please note that we are under no obligation to grant a refund request unless required by applicable local law, and we reserve the right to determine in our sole discretion whether the circumstances warrant a refund. We will review all refund requests on a case-by-case basis and respond within 7-10 business days with a decision.
              </p>
            </div>
          </section>

          {/* Section 5: Changes to Policy */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              Changes to This Policy
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                We reserve the right to revise this Refund Policy at any time. The updated policy will be available on our website. Your access to the Membership after a revised Refund Policy signifies your acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Section 6: Contact */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              Contact Us
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                If you have any questions about this Refund Policy, please contact us at:{' '}
              </p>
              <p className="text-base leading-8 text-blue-400">
                <a href="mailto:info@nfxcharts.in" className="hover:text-blue-300 transition-colors">
                  info@nfxcharts.in
                </a>
              </p>
            </div>
          </section>

          {/* Final Disclaimer */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="space-y-6">
              <p className="text-base text-gray-400 leading-8">
                By purchasing the NFXCharts Membership, you acknowledge that you have read and understood this Refund Policy and agree to be bound by its terms. This policy is provided for your convenience and protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
