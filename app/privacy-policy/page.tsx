import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for DeBloomField Investment Ltd and learn how information submitted through our website may be collected, used and protected.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-white/80">
              This policy explains how DeBloomField Investment Ltd handles
              information submitted through this website.
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
                  1. Introduction
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  DeBloomField Investment Ltd respects your privacy. This
                  Privacy Policy describes how information may be collected,
                  used and handled when you visit our website, contact us or
                  submit a service request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  2. Information We Collect
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  When you contact us or request a service through this website,
                  you may voluntarily provide information such as your name,
                  email address, telephone number, WhatsApp number, company or
                  organization name, location and details about the service or
                  business requirement you wish to discuss.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  3. How We Use Your Information
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Information submitted through the website may be used to
                  respond to enquiries, review service requests, communicate
                  with prospective clients or partners, provide requested
                  information and support legitimate business communications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  4. Sharing of Information
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  We do not sell personal information submitted through this
                  website. Information may be shared with service providers or
                  business partners where reasonably necessary to respond to a
                  request, operate the website or provide an agreed service,
                  subject to applicable requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  5. Data Security
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  We take reasonable steps to protect information submitted to
                  us. However, no internet transmission or electronic storage
                  system can be guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  6. Third-Party Services
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Our website may contain links to third-party platforms such
                  as WhatsApp or social media services. Those platforms operate
                  under their own privacy policies, and we are not responsible
                  for their privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  7. Your Information
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  You may contact us if you have questions about personal
                  information you have submitted through this website or wish
                  to request that information be corrected or deleted, subject
                  to applicable legal and business requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  8. Changes to This Policy
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  This Privacy Policy may be updated from time to time to
                  reflect changes to our website, business practices or
                  applicable requirements. The updated version will be
                  published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-(--primary)">
                  9. Contact Us
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  If you have questions about this Privacy Policy or how your
                  information is handled, please contact DeBloomField
                  Investment Ltd through our Contact page.
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