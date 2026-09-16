import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Home,
  KeyRound,
  MapPinned,
  MessageSquareText,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Services",
  description:
    "Explore real estate and property-related services from DeBloomField Investment Ltd for individuals, businesses, investors and organizations in Nigeria.",
};

const capabilities = [
  {
    title: "Property Search Support",
    description:
      "Support for identifying property opportunities based on location, purpose and client requirements.",
    icon: Search,
  },
  {
    title: "Residential Property",
    description:
      "Property-related support for individuals and clients exploring residential real estate opportunities.",
    icon: Home,
  },
  {
    title: "Commercial Property",
    description:
      "Support for businesses and organizations exploring property for commercial or operational purposes.",
    icon: Building2,
  },
  {
    title: "Property & Investment Enquiries",
    description:
      "A starting point for clients and investors interested in discussing suitable property opportunities.",
    icon: KeyRound,
  },
];

const process = [
  "Tell us the type of property or real estate opportunity you are interested in.",
  "We review your preferred location, purpose, requirements and other details.",
  "We discuss relevant options or next steps based on the information available.",
  "Further property discussions and arrangements proceed according to the agreed requirements.",
];

export default function RealEstatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              Real Estate
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Exploring Property Opportunities That Create Long-Term Value
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              DeBloomField Investment Ltd provides real estate support for
              individuals, businesses, organizations and investors exploring
              residential, commercial and investment-related property
              opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-service?service=Real%20Estate"
                className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
              >
                Make a Property Enquiry
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
                src="/service-real-estate.jpg"
                alt="Modern residential property representing DeBloomField real estate services"
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
              Property Requirements Begin With Understanding Your Goals
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Real estate decisions depend on factors such as location,
              intended use, property type, budget and long-term objectives.
              DeBloomField begins by understanding these requirements before
              discussing suitable opportunities or next steps.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Whether your interest is residential, commercial or
              investment-focused, our approach is centered on understanding
              what you are looking for and helping move the conversation
              forward.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent) text-white">
              <Home size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-(--primary)">
              Who This Service Is For
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Individuals",
                "Home Seekers",
                "Businesses",
                "Organizations",
                "Property Investors",
                "Developers & Partners",
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
            <p className="section-subtitle">Our Real Estate Focus</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              Supporting Different Property Requirements
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Property enquiries are considered according to the client&apos;s
              location, purpose and individual requirements.
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
              Start With Your Property Requirement
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Tell us what type of property you are interested in, your
              preferred location and what you intend to use the property for.
              These details give us a clearer understanding of your enquiry.
            </p>

            <Link
              href="/request-service?service=Real%20Estate"
              className="mt-7 inline-flex items-center gap-2 font-bold text-(--accent-dark)"
            >
              Make a Property Enquiry
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

      {/* Property information */}
      <section className="bg-(--section-light) py-16">
        <div className="container">
          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <MapPinned className="text-(--accent)" size={25} />

                  <span className="font-bold text-(--accent)">
                    Property Enquiries
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Tell Us What You&apos;re Looking For
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  Include your preferred location, property type, intended use,
                  approximate budget and other important requirements when
                  submitting an enquiry.
                </p>
              </div>

              <Link
                href="/request-service?service=Real%20Estate"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-(--primary) transition hover:bg-gray-100"
              >
                Submit Property Enquiry
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related opportunities */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-subtitle">More Than Property</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              Connected Solutions for Property Requirements
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Property requirements can sometimes involve contracting,
              equipment, logistics or solar energy. DeBloomField&apos;s
              diversified business model allows clients to explore these
              related services in one place.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/services/general-contracting"
                className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-(--primary) transition hover:border-(--primary)"
              >
                General Contracting
              </Link>

              <Link
                href="/services/solar-energy"
                className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-(--primary) transition hover:border-(--primary)"
              >
                Solar Energy
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
            Looking for a Property or Real Estate Opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Tell us what you&apos;re looking for and provide the details that
            will help us understand your property requirements.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-service?service=Real%20Estate"
              className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              <MessageSquareText size={18} />
              Make a Property Enquiry
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