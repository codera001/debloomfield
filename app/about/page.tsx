import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Eye,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DeBloomField Investment Ltd, our mission, vision, values and approach to building business solutions across Nigeria.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We conduct business with honesty, responsibility and transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We focus on professionalism, quality and dependable service.",
    icon: BadgeCheck,
  },
  {
    title: "Innovation",
    description:
      "We explore practical ideas and better ways to create lasting value.",
    icon: Lightbulb,
  },
  {
    title: "Customer Focus",
    description:
      "We place client requirements at the center of our approach.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
            About DeBloomField
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Building a Diversified Business Around Opportunity and Value
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            DeBloomField Investment Ltd is a Nigerian company focused on
            developing practical business solutions across multiple sectors.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-subtitle">Who We Are</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
              A Nigerian Business with a Multi-Sector Vision
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
              DeBloomField Investment Ltd is based in Port Harcourt, Rivers
              State, and is building a diversified business focused on
              contracting, logistics, procurement, shipping, equipment, real
              estate, solar energy and general services.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Our goal is to respond to real needs by connecting people,
              businesses and organizations with practical solutions,
              dependable communication and opportunities for long-term value.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-8">
            <h3 className="text-xl font-bold text-(--primary)">
              Our Approach
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <Handshake className="mt-1 shrink-0 text-(--accent-dark)" />
                <p className="leading-7 text-gray-600">
                  Build relationships before transactions.
                </p>
              </div>

              <div className="flex gap-4">
                <Target className="mt-1 shrink-0 text-(--accent-dark)" />
                <p className="leading-7 text-gray-600">
                  Understand client requirements before recommending a path
                  forward.
                </p>
              </div>

              <div className="flex gap-4">
                <Trophy className="mt-1 shrink-0 text-(--accent-dark)" />
                <p className="leading-7 text-gray-600">
                  Focus on responsible growth, service quality and long-term
                  value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, vision, goal */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--accent)">
              <Target className="text-white" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-(--primary)">
              Our Mission
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              To provide reliable, innovative and integrated business
              solutions across diverse sectors while creating lasting value
              for our clients, partners and communities.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary)">
              <Eye className="text-white" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-(--primary)">
              Our Vision
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              To become a trusted and diversified Nigerian enterprise
              recognized for excellence, reliability and sustainable growth
              across multiple industries.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--accent)">
              <Trophy className="text-white" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-(--primary)">
              Our Goal
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              To build strong relationships, create new opportunities and
              provide solutions that support sustainable business growth.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-subtitle">Our Values</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
              Principles That Guide How We Work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-gray-200 p-6"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      index % 2 === 0
                        ? "bg-(--accent)"
                        : "bg-(--primary)"
                    }`}
                  >
                    <Icon className="text-white" size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-(--primary)">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--primary) py-12 text-white">
        <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Let&apos;s discuss your next opportunity.
            </h2>

            <p className="mt-2 text-white/75">
              Tell us what you need and we&apos;ll take the conversation from
              there.
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