import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  CheckCircle2,
  Container,
  Construction,
  Handshake,
  MessageSquareText,
  PackageSearch,
  Ship,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Equipment Services",
  description:
    "Explore shipping coordination, cargo support, truck cranes, construction equipment and equipment-related services from DeBloomField Investment Ltd across Nigeria.",
};

const capabilities = [
  {
    title: "Shipping Coordination",
    description:
      "Support for organizing shipping requirements, cargo movement and related arrangements based on client needs.",
    icon: Ship,
  },
  {
    title: "Cargo & Freight Support",
    description:
      "Coordination support for goods, materials and other cargo requiring movement between locations.",
    icon: Container,
  },
  {
    title: "Truck Crane Support",
    description:
      "Support for requirements involving truck cranes and related lifting or project equipment.",
    icon: Truck,
  },
  {
    title: "Construction Equipment",
    description:
      "Support for sourcing or coordinating construction equipment according to project requirements.",
    icon: Construction,
  },
];

const process = [
  "Tell us about your shipping, cargo or equipment requirement.",
  "We review the type, location, scope and relevant specifications.",
  "We discuss suitable arrangements and requirements with you.",
  "Shipping or equipment support is coordinated according to the agreed scope.",
];

export default function ShippingEquipmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              Shipping & Equipment
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Shipping and Equipment Support for Business and Project Needs
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              DeBloomField Investment Ltd supports shipping, cargo and
              equipment requirements for businesses, organizations,
              contractors and projects across Nigeria.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-service?service=Shipping%20%26%20Equipment"
                className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
              >
                Request This Service
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
                src="/service-shipping.jpg"
                alt="Cargo shipping and equipment support"
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
              Connecting Shipping, Cargo and Equipment Requirements
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Shipping and equipment requirements can involve multiple
              considerations, including cargo type, location, destination,
              equipment specifications and project requirements.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              DeBloomField begins by understanding the specific requirement
              before discussing suitable arrangements. Where appropriate,
              shipping and equipment needs can also be coordinated alongside
              our logistics, supplies and contracting services.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent) text-white">
              <Ship size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-(--primary)">
              Who This Service Is For
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Businesses",
                "Contractors",
                "Organizations",
                "Project Teams",
                "Suppliers",
                "Developers",
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
            <p className="section-subtitle">Our Capabilities</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              Support Across Shipping and Equipment Requirements
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Each enquiry is reviewed according to its specifications,
              location and intended use.
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
              Start With the Requirement
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              For equipment enquiries, include the type of equipment,
              intended use, location and timeframe. For shipping enquiries,
              provide information about the cargo, origin and destination
              where possible.
            </p>

            <Link
              href="/request-service?service=Shipping%20%26%20Equipment"
              className="mt-7 inline-flex items-center gap-2 font-bold text-(--accent-dark)"
            >
              Submit Your Requirement
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

      {/* Information card */}
      <section className="bg-(--section-light) py-16">
        <div className="container">
          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <PackageSearch className="text-(--accent)" size={25} />

                  <span className="font-bold text-(--accent)">
                    Better Information, Better Response
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Have Equipment Specifications or Cargo Details?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  Include as much information as possible when submitting your
                  request. Equipment type, quantity, dimensions, location,
                  destination and timeframe can help us understand your needs.
                </p>
              </div>

              <Link
                href="/request-service?service=Shipping%20%26%20Equipment"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-(--primary) transition hover:bg-gray-100"
              >
                Send Your Requirements
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-8 md:grid-cols-3">
          <Link
            href="/services/logistics-moving"
            className="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-md"
          >
            <Truck size={26} className="text-(--accent-dark)" />

            <h3 className="mt-4 text-lg font-bold text-(--primary)">
              Logistics & Moving
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Explore transportation and logistics support for goods,
              materials and other requirements.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-(--accent-dark)">
              Learn More
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href="/services/general-contracting"
            className="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-md"
          >
            <Construction size={26} className="text-(--accent-dark)" />

            <h3 className="mt-4 text-lg font-bold text-(--primary)">
              General Contracting
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Explore contracting and project support for business and
              organizational requirements.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-(--accent-dark)">
              Learn More
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href="/services/supplies-general-services"
            className="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-md"
          >
            <Anchor size={26} className="text-(--accent-dark)" />

            <h3 className="mt-4 text-lg font-bold text-(--primary)">
              Supplies & General Services
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Explore procurement, supplies and flexible general business
              support.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-(--accent-dark)">
              Learn More
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container text-center">
          <Handshake size={36} className="mx-auto text-(--accent-dark)" />

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-(--primary)">
            Have a Shipping or Equipment Requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Tell us what you need, where it is required and any specifications
            that can help us understand your request.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
             href="/request-service?service=Shipping%20%26%20Equipment"
              className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              <MessageSquareText size={18} />
              Request Shipping & Equipment
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