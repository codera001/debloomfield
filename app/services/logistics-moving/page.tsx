import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  MapPinned,
  MessageSquareText,
  PackageCheck,
  Truck,
  Warehouse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics & Moving Services",
  description:
    "Explore logistics, moving and transportation support from DeBloomField Investment Ltd for individuals, businesses and organizations across Nigeria.",
};

const capabilities = [
  {
    title: "Goods & Material Movement",
    description:
      "Support for coordinating the movement of goods, materials and other business resources between locations.",
    icon: Truck,
  },
  {
    title: "Moving Support",
    description:
      "Flexible moving solutions for individuals, businesses and organizations based on their specific requirements.",
    icon: Boxes,
  },
  {
    title: "Logistics Coordination",
    description:
      "Coordination of transportation requirements, destinations and relevant logistics arrangements.",
    icon: MapPinned,
  },
  {
    title: "Handling & Distribution",
    description:
      "Support for organizing the handling and distribution of supplies, equipment and other items where required.",
    icon: Warehouse,
  },
];

const process = [
  "Tell us what needs to be moved and where it needs to go.",
  "We review the location, items and logistics requirements.",
  "We discuss the appropriate arrangements and next steps.",
  "Movement and related logistics are coordinated according to the agreed requirements.",
];

export default function LogisticsMovingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              Logistics & Moving
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Moving Goods, Resources and Requirements Forward
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              DeBloomField Investment Ltd provides logistics and moving support
              for individuals, businesses and organizations with transportation
              and movement requirements across Nigeria.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-service?service=Logistics%20%26%20Moving"
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
                src="/service-logistics.jpg"
                alt="Logistics transportation and moving services"
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
              Flexible Logistics Support for Different Requirements
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Moving goods, materials or other resources requires coordination
              between locations, transportation requirements and the people
              involved. DeBloomField approaches each request according to its
              particular scope.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Whether the requirement involves business supplies, project
              materials, equipment or a general moving need, we begin by
              understanding what needs to move, its destination and the
              necessary arrangements.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent) text-white">
              <Truck size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-(--primary)">
              Who This Service Is For
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Individuals",
                "Businesses",
                "Organizations",
                "Contractors",
                "Suppliers",
                "Project Teams",
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
              Logistics Solutions Built Around Your Needs
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Tell us what needs to be moved, the destination and any important
              requirements so we can understand the appropriate support.
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
              From Pickup Requirement to Destination
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Every logistics request begins with understanding what needs to
              move, where it is located and where it needs to go.
            </p>

            <Link
              href="/request-service?service=Logistics%20%26%20Moving"
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
      </section>

      {/* Related services */}
      <section className="bg-(--section-light) py-16">
        <div className="container">
          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <PackageCheck
                    className="text-(--accent)"
                    size={25}
                  />
                  <span className="font-bold text-(--accent)">
                    Connected Business Services
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Need Supplies or Equipment Too?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  Logistics can form part of a wider business requirement.
                  DeBloomField also provides supplies, general services,
                  equipment and contracting support.
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
            Have a Logistics or Moving Requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Tell us what needs to be moved, your location, destination and any
            other important details about the requirement.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-service?service=Logistics%20%26%20Moving"
              className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              <MessageSquareText size={18} />
              Request Logistics Service
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