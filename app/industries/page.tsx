import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Factory,
  Home,
  Landmark,
  ShoppingBag,
  Truck,
  Zap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Support",
  description:
    "Explore the industries and sectors DeBloomField Investment Ltd is positioned to support through contracting, logistics, supplies, shipping, equipment, real estate and solar energy solutions in Nigeria.",
};

const industries = [
  {
    title: "Construction & Infrastructure",
    description:
      "Supporting construction and infrastructure requirements through contracting, supplies, logistics and equipment-related solutions.",
    icon: Building2,
  },
  {
    title: "Commercial & Corporate",
    description:
      "Flexible procurement, logistics, general services and operational support for businesses and organizations.",
    icon: Factory,
  },
  {
    title: "Real Estate & Property",
    description:
      "Supporting property-related requirements, sourcing, development opportunities and associated business needs.",
    icon: Home,
  },
  {
    title: "Public & Institutional",
    description:
      "Solutions positioned to support institutions and organizations with procurement, logistics, contracting and general service requirements.",
    icon: Landmark,
  },
  {
    title: "Retail & General Commerce",
    description:
      "Sourcing, supplies, movement and general business support for commercial and trading requirements.",
    icon: ShoppingBag,
  },
  {
    title: "Transport & Logistics",
    description:
      "Movement, shipping coordination and logistics support for goods, equipment and operational requirements.",
    icon: Truck,
  },
  {
    title: "Energy & Sustainability",
    description:
      "Solar and renewable energy solutions for residential, commercial and developing energy requirements.",
    icon: Zap,
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
            Industries
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Business Solutions Across Diverse Sectors
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Our multi-sector approach allows DeBloomField to explore and
            respond to different business requirements across Nigeria.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-subtitle">Where We Add Value</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
              Industries We Support
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our capabilities are designed to respond to the needs of
              individuals, businesses and organizations operating across a
              range of sectors.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              const iconBackground =
                index % 2 === 0 ? "bg-(--accent)" : "bg-(--primary)";

              return (
                <article
                  key={industry.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`flex h-13 w-13 items-center justify-center rounded-xl ${iconBackground}`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-(--primary)">
                    {industry.title}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    {industry.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-sector section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-subtitle">Multi-Sector Approach</p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-(--primary) sm:text-4xl">
              Different Needs. Connected Solutions.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              A requirement in one sector often involves several capabilities.
              A construction project, for example, may require procurement,
              logistics, equipment and energy support.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              DeBloomField&apos;s diversified model allows us to look at
              requirements from a broader perspective and identify the
              services relevant to each opportunity.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-(--accent-dark) transition hover:gap-3"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-(--accent)">
              Who We Work With
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Solutions for Different Types of Clients
            </h3>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Individuals",
                "Businesses",
                "Organizations",
                "Contractors",
                "Property Interests",
                "Investors & Partners",
              ].map((client) => (
                <div
                  key={client}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 font-medium"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--primary) py-12 text-white">
        <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Have a requirement in your industry?
            </h2>

            <p className="mt-2 max-w-xl text-white/75">
              Tell us what you&apos;re looking for and let&apos;s explore how
              DeBloomField can support your needs.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-service"
              className="rounded-md bg-(--accent) px-6 py-3.5 text-center font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              Request a Service
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-6 py-3.5 text-center font-semibold transition hover:bg-white hover:text-(--primary)"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}