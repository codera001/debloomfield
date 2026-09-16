import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  Handshake,
  MessageSquareText,
  PackageCheck,
  Settings,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "General Contracting Services",
  description:
    "Explore general contracting and project support services from DeBloomField Investment Ltd for businesses, organizations and project requirements across Nigeria.",
};

const capabilities = [
  {
    title: "Project Coordination",
    description:
      "Support for organizing project requirements, resources, suppliers and relevant service providers.",
    icon: ClipboardCheck,
  },
  {
    title: "Procurement Support",
    description:
      "Assistance with sourcing materials, equipment and other resources required for project execution.",
    icon: PackageCheck,
  },
  {
    title: "Logistics Coordination",
    description:
      "Support for the movement of materials, equipment and other project resources where required.",
    icon: Truck,
  },
  {
    title: "Operational Support",
    description:
      "Flexible support designed around the practical requirements of each project or business need.",
    icon: Settings,
  },
];

const process = [
  "Tell us about your project or requirement.",
  "We review the scope and identify the support required.",
  "We discuss suitable arrangements and next steps with you.",
  "Project support is coordinated according to the agreed requirements.",
];

export default function GeneralContractingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              General Contracting
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Practical Support for Projects and Business Requirements
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              DeBloomField Investment Ltd provides flexible contracting and
              project support solutions designed around the requirements of
              businesses, organizations and individual clients.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-service?service=General%20Contracting"
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
                src="/service-contracting.jpg"
                alt="General contracting and construction project support"
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
              Contracting Support Built Around Your Requirements
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Every project has different requirements. DeBloomField takes a
              flexible approach to general contracting by first understanding
              the scope of the requirement and then identifying the resources,
              coordination and support needed to move it forward.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our broader business capabilities in procurement, logistics,
              equipment and general services also allow us to approach project
              requirements from multiple perspectives.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent) text-white">
              <HardHat size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-(--primary)">
              Who This Service Is For
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Businesses",
                "Organizations",
                "Property Interests",
                "Contractors",
                "Developers",
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
              How We Can Support Your Project
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Support can be tailored according to the nature, location and
              requirements of your project.
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
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-subtitle">Our Approach</p>

              <h2 className="mt-3 text-3xl font-bold text-(--primary)">
                From Requirement to Next Steps
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                We begin by understanding what you need before discussing the
                most appropriate way to support the requirement.
              </p>

              <Link
                href="/request-service?service=General%20Contracting"
                className="mt-7 inline-flex items-center gap-2 font-bold text-(--accent-dark)"
              >
                Start Your Request
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
        </div>
      </section>

      {/* Related capabilities */}
      <section className="bg-(--section-light) py-16">
        <div className="container">
          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Building2 className="text-(--accent)" size={25} />
                  <span className="font-bold text-(--accent)">
                    Integrated Business Support
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Need More Than Contracting Support?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  DeBloomField also provides logistics, supplies, equipment,
                  real estate and solar energy solutions, allowing clients to
                  explore related services through one business relationship.
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
            Have a Contracting or Project Requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Tell us what you need and provide as much information as possible
            about your project or requirement.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
             href="/request-service?service=General%20Contracting"
              className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              <MessageSquareText size={18} />
              Request General Contracting
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