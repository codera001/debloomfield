import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Handshake,
  Home,
  Lightbulb,
  MessageSquareText,
  Settings,
  Sun,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Energy Services",
  description:
    "Explore solar energy solutions from DeBloomField Investment Ltd for homes, businesses, organizations and property requirements across Nigeria.",
};

const capabilities = [
  {
    title: "Residential Solar",
    description:
      "Solar energy solutions for homes and residential properties based on individual power requirements.",
    icon: Home,
  },
  {
    title: "Business Solar Solutions",
    description:
      "Solar energy support for businesses and commercial locations seeking alternative power solutions.",
    icon: Building2,
  },
  {
    title: "Solar System Requirements",
    description:
      "Support for identifying suitable solar system requirements based on intended use and power needs.",
    icon: Sun,
  },
  {
    title: "Energy Support",
    description:
      "Flexible support for solar and related energy requirements for different types of clients and properties.",
    icon: BatteryCharging,
  },
];

const process = [
  "Tell us about the property and your power requirements.",
  "We review the intended use, location and relevant energy needs.",
  "Suitable solar options and requirements can then be discussed.",
  "The next steps are coordinated according to the agreed solution and scope.",
];

export default function SolarEnergyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              Solar Energy
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Practical Solar Energy Solutions for Homes and Businesses
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              DeBloomField Investment Ltd provides solar energy solutions for
              individuals, businesses, organizations and properties seeking
              practical alternative power options.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-service?service=Solar%20Energy"
                className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
              >
                Request Solar Service
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/5 shadow-xl">
            <div className="aspect-3/2">
              <Image
                src="/service-solar.jpg"
                alt="Solar panel installation representing DeBloomField solar energy services"
                width={1536}
                height={1024}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-subtitle">Service Overview</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              Solar Solutions Based on Your Energy Requirements
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Solar requirements differ depending on the property, appliances,
              operating hours and intended use. That is why the right starting
              point is understanding the actual energy requirement rather than
              assuming that one system works for everyone.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              DeBloomField works from the client&apos;s requirement to explore
              suitable solar energy options for residential, commercial and
              other property-related needs.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent) text-white">
              <Sun size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-(--primary)">
              Who This Service Is For
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Homeowners",
                "Businesses",
                "Organizations",
                "Property Owners",
                "Developers",
                "Commercial Facilities",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-(--accent-dark)"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-subtitle">Our Solar Focus</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              Energy Solutions for Different Requirements
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Solar requirements can be considered according to property type,
              intended use and the client&apos;s energy needs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${
                      index % 2 === 0
                        ? "bg-(--accent)"
                        : "bg-(--primary)"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-(--primary)">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-subtitle">Our Approach</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              Start With Your Power Needs
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              When making an enquiry, tell us about the property and the
              appliances or equipment you want to power. This gives us a better
              understanding of your energy requirements.
            </p>

            <Link
              href="/request-service?service=Solar%20Energy"
              className="mt-7 inline-flex items-center gap-2 font-bold text-(--accent-dark)"
            >
              Request Solar Service
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <span className="text-sm font-bold text-(--accent-dark)">
                  0{index + 1}
                </span>

                <p className="mt-3 font-semibold leading-7 text-(--primary)">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="bg-(--section-light) py-16">
        <div className="container">
          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="text-(--accent)" size={25} />

                  <span className="font-bold text-(--accent)">
                    Planning Your Solar Requirement
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Tell Us What You Want to Power
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  Information about your lights, televisions, refrigerators,
                  air conditioners, computers, pumps or other equipment can
                  help clarify the scale of your energy requirement.
                </p>
              </div>

              <Link
                href="/request-service?service=Solar%20Energy"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-(--primary) transition hover:bg-gray-100"
              >
                Submit Your Requirements
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connected services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Zap size={32} className="mx-auto text-(--accent-dark)" />

            <h2 className="mt-4 text-3xl font-bold text-(--primary)">
              Solar as Part of a Wider Property Solution
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Solar energy may form part of a wider residential, commercial or
              development requirement. You can also explore DeBloomField&apos;s
              real estate and general contracting services.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/services/real-estate"
                className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-(--primary) transition hover:border-(--primary)"
              >
                Real Estate
              </Link>

              <Link
                href="/services/general-contracting"
                className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-(--primary) transition hover:border-(--primary)"
              >
                General Contracting
              </Link>

              <Link
                href="/services"
                className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-(--primary) transition hover:border-(--primary)"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container text-center">
          <Handshake size={36} className="mx-auto text-(--accent-dark)" />

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-(--primary)">
            Interested in a Solar Energy Solution?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Tell us about your property and what you need to power so we can
            better understand your requirements.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-service?service=Solar%20Energy"
              className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              <MessageSquareText size={18} />
              Request Solar Energy
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-(--primary) px-6 py-3 font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}