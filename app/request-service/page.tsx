import type { Metadata } from "next";
import RequestServiceForm from "../components/RequestServiceForm";
import { Suspense } from "react";
import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Service",
  description:
    "Request contracting, logistics, supplies, shipping, equipment, real estate, solar energy or general business services from DeBloomField Investment Ltd.",
};


export default function RequestServicePage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
            Request a Service
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Tell Us What You Need
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Complete the form below with details about your requirement and
            DeBloomField will review your request and contact you regarding the
            next steps.
          </p>
        </div>
      </section>

      {/* Main form section */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <Suspense
            fallback={
              <div
                role="status"
                className="rounded-2xl border border-gray-200 bg-white p-8 text-gray-600"
              >
                Loading service request form…
              </div>
            }
          >
            <RequestServiceForm />
          </Suspense>

          {/* Side information */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-(--primary) p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-(--accent)">
                What Happens Next?
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Your Request Starts a Conversation
              </h2>

              <div className="mt-7 space-y-6">
                <div>
                  <span className="text-sm font-bold text-(--accent)">01</span>
                  <h3 className="mt-1 font-bold">We Receive Your Request</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Your information is reviewed to understand what you need.
                  </p>
                </div>

                <div>
                  <span className="text-sm font-bold text-(--accent)">02</span>
                  <h3 className="mt-1 font-bold">We Contact You</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    We follow up using your preferred contact method.
                  </p>
                </div>

                <div>
                  <span className="text-sm font-bold text-(--accent)">03</span>
                  <h3 className="mt-1 font-bold">We Discuss Next Steps</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Requirements, scope and suitable arrangements are discussed.
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative contacts */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-(--primary)">
                Prefer to Contact Us Directly?
              </h2>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+2348055426215"
                  className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-(--accent-dark)"
                >
                  <Phone size={19} className="text-(--accent-dark)" />
                  +234 805 542 6215
                </a>

                <a
                  href="mailto:bloomfieldhillscircle@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-(--accent-dark)"
                >
                  <Mail size={19} className="text-(--accent-dark)" />
                  bloomfieldhillscircle@gmail.com
                </a>

                <a
                  href="https://wa.me/2348103376412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-(--accent-dark)"
                >
                  <MessageCircle size={19} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}