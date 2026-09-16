import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  Truck,
  PackageCheck,
  Ship,
  House,
  Sun,
  ArrowRight,
  MessageSquareText,
  SearchCheck,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore DeBloomField Investment Ltd services including general contracting, logistics, supplies, shipping and equipment, real estate, and solar energy solutions across Nigeria.",
};

const services = [
  {
    title: "General Contracting",
    description:
      "Contracting and project support solutions tailored to individual, commercial and organizational requirements.",
    image: "/service-contracting.jpg",
    href: "/services/general-contracting",
    icon: HardHat,
    iconColor: "bg-(--accent)",
  },
  {
    title: "Logistics & Moving",
    description:
      "Transportation, moving and logistics support designed around different operational and relocation requirements.",
    image: "/service-logistics.jpg",
    href: "/services/logistics-moving",
    icon: Truck,
    iconColor: "bg-(--primary)",
  },
  {
    title: "Supplies & General Services",
    description:
      "Procurement, sourcing and general supply solutions for businesses, organizations and individual requirements.",
    image: "/service-supplies.jpg",
    href: "/services/supplies-general-services",
    icon: PackageCheck,
    iconColor: "bg-(--accent)",
  },
  {
    title: "Shipping & Equipment",
    description:
      "Shipping coordination, equipment sourcing, truck crane and related project support services.",
    image: "/service-shipping.jpg",
    href: "/services/shipping-equipment",
    icon: Ship,
    iconColor: "bg-(--primary)",
  },
  {
    title: "Real Estate",
    description:
      "Property-related enquiries, sourcing and opportunities for individuals, businesses and prospective investors.",
    image: "/service-real-estate.jpg",
    href: "/services/real-estate",
    icon: House,
    iconColor: "bg-(--accent)",
  },
  {
    title: "Solar Energy",
    description:
      "Solar and renewable energy solutions designed around residential and commercial energy requirements.",
    image: "/service-solar.jpg",
    href: "/services/solar-energy",
    icon: Sun,
    iconColor: "bg-(--primary)",
  },
];

const process = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your service requirements with us through our enquiry form.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Requirement Review",
    description:
      "We review your request and identify the appropriate service direction.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Discuss the Solution",
    description:
      "We contact you to clarify requirements and discuss suitable next steps.",
    icon: Handshake,
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
            Our Services
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Integrated Solutions for Diverse Business Needs
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            From contracting and logistics to real estate and renewable
            energy, DeBloomField brings multiple business capabilities
            together under one organization.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-subtitle">What We Do</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
              Explore Our Business Solutions
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Select a service to learn more about how DeBloomField can
              support your requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="relative p-7 pt-9">
                    <div
                      className={`absolute -top-7 left-7 flex h-14 w-14 items-center justify-center rounded-xl border-4 border-white shadow-md ${service.iconColor}`}
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                    </div>

                    <h2 className="text-xl font-bold text-(--primary)">
                      {service.title}
                    </h2>

                    <p className="mt-3 leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-(--accent-dark) transition group-hover:gap-3"
                    >
                      Explore Service
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="section-subtitle">Our Approach</p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-(--primary) sm:text-4xl">
                Start With Your Requirement
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Every enquiry is different. Rather than offering a
                one-size-fits-all answer, we begin by understanding what you
                need and determining the appropriate next step.
              </p>

              <Link
                href="/request-service"
                className="mt-7 inline-flex rounded-md bg-(--primary) px-6 py-3.5 font-semibold text-white transition hover:bg-(--primary-light)"
              >
                Submit Your Request →
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {process.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="rounded-2xl border border-gray-200 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--section-light)">
                        <Icon
                          size={21}
                          className="text-(--accent-dark)"
                        />
                      </div>

                      <span className="text-2xl font-bold text-gray-200">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-5 font-bold text-(--primary)">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--primary) py-12 text-white">
        <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Not sure which service you need?
            </h2>

            <p className="mt-2 text-white/75">
              Send us your requirements and we&apos;ll help identify the right
              direction.
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