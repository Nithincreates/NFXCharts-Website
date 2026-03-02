import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | NFXCharts',
  description: 'Terms and conditions for NFXCharts intraday futures education platform.',
};

export default function TermsPage() {
  return (
    <main className="bg-zinc-950 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-light mb-12 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-white">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 font-light mb-16 text-lg">
          Last updated: March 2, 2026
        </p>

        {/* Content */}
        <div className="space-y-16 text-gray-300 font-light leading-8">
          {/* Introduction */}
          <section className="pb-8">
            <p className="text-base leading-8">
              The following Terms and Conditions ("Terms") govern all use of the NFXCharts Intraday Membership Program ("Membership") and all content, services, and products available at or through NFXCharts, a platform owned and operated by NFXCharts ("Owner"). Please read these Terms carefully before purchasing or using the membership and educational content. By accessing or using any part of the Membership, you agree to become bound by these Terms. If you do not agree to all the Terms, then you may not access the Membership or use any services.
            </p>
          </section>

          {/* Section 1: Educational Content */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              1. Course & Educational Content
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                1.1 The membership content, including but not limited to live session commentary, pre-market plans, market structure analysis, session reviews, intraday strategies, and trading frameworks, is for educational commentary purposes only. Neither NFXCharts nor its operators provide investment, legal, or tax advice. The membership content should not be construed as professional financial advice or trading recommendations.
              </p>
              <p className="text-base leading-8">
                1.2 Any financial information, market analysis, or trading ideas are as of the date published or indicated and are subject to change without notice. Any forward-looking statements or forecasts are based on assumptions and actual results may vary significantly.
              </p>
              <p className="text-base leading-8">
                1.3 Past performance does not guarantee future results. Trading and investing involve substantial risk of loss, including possible loss of principal. Not all trading strategies or approaches are suitable for all market conditions or all investors.
              </p>
            </div>
          </section>

          {/* Section 2: Membership Access */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              2. Membership Access
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                2.1 The membership content and resources will be available through nfxcharts.in and affiliated platforms. Access methods may include private member portals, Discord communities, email communications, and other digital channels. Access methods and platforms may change in the future at the discretion of NFXCharts.
              </p>
              <p className="text-base leading-8">
                2.2 It is your responsibility to ensure you have the necessary software, hardware, internet connection, and technical capability to access and participate in the membership program.
              </p>
              <p className="text-base leading-8">
                2.3 You are responsible for maintaining the confidentiality of your account credentials, login information, and passwords. You are also responsible for restricting access to your computer and devices. You agree to notify NFXCharts immediately of any unauthorized use of your account.
              </p>
            </div>
          </section>

          {/* Section 3: Payment & Refunds */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              3. Payment & Refunds
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                3.1 The NFXCharts Membership requires monthly payment. All payments are non-refundable and there are no refunds or credits for partially used periods.
              </p>
              <p className="text-base leading-8">
                3.2 Membership is billed monthly on a recurring basis. You can cancel your membership at any time, with cancellation taking effect at the end of your current billing period.
              </p>
              <p className="text-base leading-8">
                3.3 By providing payment information, you authorize NFXCharts to charge your account for the membership fee and any applicable taxes.
              </p>
            </div>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              4. Intellectual Property
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                4.1 All content included in or made available through the Membership, such as text, graphics, logos, images, trading frameworks, strategies, analysis, as well as the compilation thereof, and any software used in connection with the Membership, is the property of NFXCharts and is protected by international copyright laws.
              </p>
              <p className="text-base leading-8">
                4.2 You may not duplicate, copy, reproduce, modify, distribute, or reuse any portion of the membership content, HTML/CSS, Javascript, visual design elements, or concepts without express written permission from NFXCharts. This includes sharing content with non-members or using it for commercial purposes.
              </p>
              <p className="text-base leading-8">
                4.3 Unauthorized use of membership content may result in immediate termination of your membership and potential legal action.
              </p>
            </div>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              5. Warranty and Liability
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                5.1 NFXCharts provides the Membership "as is" and "as available," without warranty of any kind. Neither NFXCharts nor any of its suppliers and service providers makes any warranty that the Membership will be error-free, uninterrupted, or continuously available.
              </p>
              <p className="text-base leading-8">
                5.2 In no event will NFXCharts, or its suppliers or service providers, be liable with respect to any subject matter of these Terms under any contract, negligence, strict liability, or other legal or equitable theory for any special, incidental, consequential, or indirect damages, including but not limited to trading losses, financial damages, loss of profits, or lost opportunities.
              </p>
              <p className="text-base leading-8">
                5.3 NFXCharts is not responsible for trading decisions you make based on membership content. You are solely responsible for your own trading actions and financial outcomes. Any use of the educational content is at your own risk.
              </p>
            </div>
          </section>

          {/* Section 6: Risk Acknowledgment */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              6. Risk Acknowledgment
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                6.1 You acknowledge and accept that futures trading involves substantial risk of loss. By becoming a member, you represent that you understand the risks and have the financial capacity to bear potential losses.
              </p>
              <p className="text-base leading-8">
                6.2 Trading futures on margin can magnify losses. You acknowledge that you have read and understood the risks of margin trading and leveraged instruments.
              </p>
              <p className="text-base leading-8">
                6.3 You are solely responsible for evaluating the merits and risks of any trading strategy or educational content. We recommend consulting with qualified financial advisors before making trading decisions.
              </p>
            </div>
          </section>

          {/* Section 7: User Conduct & Restrictions */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              7. User Conduct & Restrictions
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                7.1 You agree to use the Membership responsibly and in compliance with all applicable laws and regulations. You must not engage in any unlawful activity, harassment, fraud, or misuse of the platform.
              </p>
              <p className="text-base leading-8">
                7.2 You agree not to share, redistribute, or sell membership access or content to unauthorized parties. Sharing credentials or content is a violation of these Terms.
              </p>
              <p className="text-base leading-8">
                7.3 NFXCharts reserves the right to terminate your membership immediately if you violate these Terms or use the service in a manner we deem inappropriate.
              </p>
            </div>
          </section>

          {/* Section 8: Modifications */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              8. Modifications to Terms & Services
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                8.1 NFXCharts reserves the right to modify these Terms and the Membership services at any time. Continued use of the Membership following any changes constitutes acceptance of the modified Terms.
              </p>
              <p className="text-base leading-8">
                8.2 We will notify you of significant changes via email or through the membership platform. It is your responsibility to review these Terms periodically.
              </p>
            </div>
          </section>

          {/* Section 9: General Provisions */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              9. General Provisions
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-8">
                9.1 These Terms represent the entire agreement between you and NFXCharts concerning the Membership and all other services provided.
              </p>
              <p className="text-base leading-8">
                9.2 If any part of these Terms is held invalid or unenforceable, that part will be construed to reflect the parties' original intent, and the remaining portions will remain in full force and effect.
              </p>
              <p className="text-base leading-8">
                9.3 Your use of the Membership is at your sole discretion and risk. NFXCharts assumes no responsibility for errors, omissions, or results obtained from the use of the Membership.
              </p>
            </div>
          </section>

          {/* Section 10: Contact */}
          <section className="pb-8">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-white">
              10. Contact Information
            </h2>
            <p className="text-base leading-8">
              For questions regarding these Terms and Conditions, please contact us at{' '}
              <a href="mailto:info@nfxcharts.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                info@nfxcharts.in
              </a>
            </p>
          </section>

          {/* Final Disclaimer */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="space-y-6">
              <p className="text-base text-gray-400 leading-8">
                By accessing and using NFXCharts Membership, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these Terms, you may not use our services.
              </p>
              <p className="text-base text-gray-400 leading-8">
                <strong className="text-gray-300">Educational Disclaimer:</strong> NFXCharts provides educational content only. This is not financial advice. Trading futures involves substantial risk of loss. Always trade responsibly and consult qualified professionals before making financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
