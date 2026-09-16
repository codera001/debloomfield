import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact DeBloomField Investment Ltd in Port Harcourt for enquiries about contracting, logistics, supplies, shipping, real estate, solar energy and general business services.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
            Contact Us
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s Start a Conversation
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Whether you have a service enquiry, business opportunity or
            partnership idea, reach out to DeBloomField and tell us what you
            need.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <div>
            <p className="section-subtitle">Get In Touch</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
              We&apos;re Here to Hear From You
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Contact us by phone, email or WhatsApp, or use the form to send
              us a message directly.
            </p>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--accent)">
                  <MapPin size={21} className="text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-(--primary)">
                    Office Address
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    No. 1 John Chiorlu Avenue,
                    <br />
                    Mgbuoba NTA Road,
                    <br />
                    Port Harcourt, Rivers State,
                    <br />
                    Nigeria.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary)">
                  <Mail size={21} className="text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-(--primary)">
                    Email
                  </h3>

                  <a
                    href="mailto:bloomfieldhillscircle@gmail.com"
                    className="mt-1 block text-sm text-gray-600 transition hover:text-(--accent-dark)"
                  >
                    bloomfieldhillscircle@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--accent)">
                  <Phone size={21} className="text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-(--primary)">
                    Phone
                  </h3>

                  <a
                    href="tel:+2348055426215"
                    className="mt-1 block text-sm text-gray-600 transition hover:text-(--accent-dark)"
                  >
                    +234 805 542 6215
                  </a>

                  <a
                    href="tel:+2348103376412"
                    className="mt-1 block text-sm text-gray-600 transition hover:text-(--accent-dark)"
                  >
                    +234 810 337 6412
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary)">
                  <MessageCircle size={21} className="text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-(--primary)">
                    WhatsApp
                  </h3>

                  <a
                    href="https://wa.me/2348103376412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex text-sm font-semibold text-(--accent-dark)"
                  >
                    Start a WhatsApp conversation →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
         <ContactForm />
        </div>
      </section>

      {/* Service request prompt */}
      <section className="bg-white py-14">
        <div className="container rounded-2xl border border-gray-200 p-7 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-(--primary)">
            Looking to request a specific service?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
            Use our detailed service request form to tell us exactly what you
            need, your location and the type of service you&apos;re looking
            for.
          </p>

          <Link
            href="/request-service"
            className="mt-6 inline-flex rounded-md bg-(--primary) px-6 py-3.5 font-semibold text-white transition hover:bg-(--primary-light)"
          >
            Request a Service →
          </Link>
        </div>
      </section>
    </main>
  );
}