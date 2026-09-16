import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Handshake,
  MessageSquareText,
  PackageCheck,
  Search,
  Settings,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Supplies & General Services",
  description:
    "Explore procurement, supplies and general business support services from DeBloomField Investment Ltd for businesses, organizations and project requirements across Nigeria.",
};

const capabilities = [
  {
    title: "Product & Material Sourcing",
    description:
      "Support for identifying and sourcing products, materials and supplies according to client requirements.",
    icon: Search,
  },
  {
    title: "Business & Project Supplies",
    description:
      "Supply support for businesses, organizations, contractors and project-related requirements.",
    icon: Boxes,
  },
  {
    title: "Procurement Coordination",
    description:
      "Coordination of purchasing requirements, quantities and relevant supply arrangements.",
    icon: ClipboardList,
  },
  {
    title: "General Service Support",
    description:
      "Flexible support for business and operational requirements that may extend beyond standard procurement needs.",
    icon: Settings,
  },
];

const process = [
  "Tell us what products, materials or support you require.",
  "We review the specifications, quantities and location.",
  "We discuss sourcing and suitable arrangements with you.",
  "Supply or service requirements are coordinated according to the agreed scope.",
];

export default function SuppliesGeneralServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              Supplies & General Services
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Sourcing and Support for Your Business Requirements
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              DeBloomField Investment Ltd provides supply, procurement and
              general service support tailored to the requirements of
              businesses, organizations, contractors and individual clients.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-service?service=Supplies%20%26%20General%20Services"
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
                src="/service-supplies.jpg"
                alt="Business supplies, procurement and general services"
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
              Helping You Source What Your Business Needs
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Procurement requirements can vary significantly between
              businesses and projects. Our approach begins with understanding
              the exact item, specification, quantity, location and other
              relevant requirements.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              DeBloomField can also combine supply requirements with related
              logistics and general business support where appropriate,
              providing a more connected approach to client needs.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent) text-white">
              <PackageCheck size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-(--primary)">
              Who This Service Is For
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Businesses",
                "Organizations",
                "Contractors",
                "Project Teams",
                "Property Interests",
                "Individual Clients",
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
              Flexible Supply and Business Support
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Requirements are reviewed individually so the appropriate
              sourcing or general service solution can be discussed.
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
              From Requirement to Supply
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Clear specifications help us better understand what you require.
              Include quantities, location, preferred timeline and other
              relevant information when submitting your request.
            </p>

            <Link
              href="/request-service?service=Supplies%20%26%20General%20Services"
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

      {/* Connected services */}
      <section className="bg-(--section-light) py-16">
        <div className="container">
          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Truck className="text-(--accent)" size={25} />

                  <span className="font-bold text-(--accent)">
                    Connected Business Services
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Need Transportation or Equipment Support?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  A supply requirement may also involve transportation,
                  equipment or project support. Explore DeBloomField&apos;s
                  wider range of business solutions.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-(--primary) transition hover:bg-gray-100"
              >
                Explore All Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container text-center">
          <Handshake
            size={36}
            className="mx-auto text-(--accent-dark)"
          />

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-(--primary)">
            Have a Supply or General Service Requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Send us the item, quantity, specification, location and any other
            information that will help us understand your requirement.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-service?service=Supplies%20%26%20General%20Services"
              className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              <MessageSquareText size={18} />
              Request Supplies & Services
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