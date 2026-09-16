import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the website Terms and Conditions for DeBloomField Investment Ltd.",
};

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-14 text-white lg:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              Legal
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Terms &amp; Conditions
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-white/80">
              These terms govern your use of the DeBloomField Investment Ltd
              website and the information and enquiry features provided through
              it.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <article className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-gray-500">
              Last updated: September 2026
            </p>

            <div className="mt-8 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  1. Acceptance of Terms
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  By accessing and using this website, you agree to these Terms
                  and Conditions. If you do not agree with these terms, you
                  should discontinue use of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  2. Website Purpose
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  This website provides general information about DeBloomField
                  Investment Ltd, its areas of business interest and the
                  services it may provide or coordinate.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  Website content is provided for general informational and
                  enquiry purposes and does not by itself create a contract,
                  guarantee service availability or constitute a binding offer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  3. Service Requests
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Submitting a service request, contact form, WhatsApp message
                  or other enquiry does not automatically create a contractual
                  relationship between you and DeBloomField Investment Ltd.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  Service scope, availability, pricing, timelines, payment
                  terms and other relevant conditions may need to be discussed
                  and agreed separately before work begins.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  4. Accuracy of Information
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  We aim to keep information on this website clear and
                  accurate. However, business information, services and website
                  content may be changed or updated without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  5. User Responsibilities
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  When submitting an enquiry, you agree to provide information
                  that is accurate to the best of your knowledge and not to use
                  the website for unlawful, fraudulent, abusive or disruptive
                  purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  6. Intellectual Property
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Unless otherwise stated, website branding, original text,
                  graphics and other original materials associated with
                  DeBloomField Investment Ltd may not be copied, reproduced or
                  used for commercial purposes without appropriate permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  7. Third-Party Links
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  The website may contain links to third-party services and
                  platforms. DeBloomField Investment Ltd does not control those
                  external services and is not responsible for their content,
                  availability or practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  8. Limitation of Liability
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  To the extent permitted by applicable law, DeBloomField
                  Investment Ltd will not be responsible for losses arising
                  solely from reliance on general website information or from
                  interruptions outside our reasonable control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  9. Changes to These Terms
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  These Terms and Conditions may be updated when necessary.
                  Changes will become effective when the revised terms are
                  published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  10. Contact
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Questions regarding these Terms and Conditions can be sent to
                  DeBloomField Investment Ltd through our Contact page.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-md bg-(--primary) px-5 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Contact Us
                </Link>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}