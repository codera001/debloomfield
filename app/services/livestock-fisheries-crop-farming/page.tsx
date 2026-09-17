import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Beef,
  Fish,
  Sprout,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Livestock, Fisheries & Crop Farming",
  description:
    "Explore DeBloomField Investment Ltd's livestock farming, fisheries and crop farming services in Nigeria.",
};

const farmingAreas = [
  {
    title: "Livestock Farming",
    description:
      "Livestock farming activities focused on animal care, responsible management and agricultural opportunities.",
    icon: Beef,
  },
  {
    title: "Fish Farming",
    description:
      "Fish farming activities covering aquaculture operations and opportunities within the fisheries sector.",
    icon: Fish,
  },
  {
    title: "Crop & Plant Farming",
    description:
      "Crop and plant farming activities focused on cultivation and agricultural production.",
    icon: Sprout,
  },
];

export default function FarmingServicePage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
            Our Services
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Livestock, Fisheries &amp; Crop Farming
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Exploring agricultural opportunities through livestock,
            aquaculture and crop cultivation.
          </p>

          <Link
            href="/request-service?service=Livestock%2C%20Fisheries%20%26%20Crop%20Farming"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3.5 font-semibold text-white transition hover:bg-(--accent-dark)"
          >
            Enquire About Farming
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-subtitle">Agriculture &amp; Farming</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
              Supporting Opportunities in Agriculture
            </h2>
          </div>

          <div className="space-y-4 leading-8 text-gray-600">
            <p>
              Agriculture is an important part of DeBloomField Investment
              Ltd&apos;s multi-sector business focus. Our farming activities
              cover livestock, fish, and crop and plant farming.
            </p>

            <p>
              We welcome enquiries and partnership conversations related
              to these areas. Contact our team to discuss your specific
              requirements and the opportunities available.
            </p>
          </div>
        </div>
      </section>

      {/* Farming areas */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container">
          <p className="section-subtitle">Our Farming Areas</p>

          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-(--primary) sm:text-4xl">
            Three Areas of Agricultural Focus
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {farmingAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl bg-white p-7 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent)">
                    <Icon size={26} className="text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-(--primary)">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiries */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <ClipboardCheck
            size={36}
            className="mx-auto text-(--accent-dark)"
          />

          <h2 className="mt-5 text-3xl font-bold text-(--primary)">
            Have an Agricultural Enquiry?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Tell us whether you&apos;re interested in livestock, fisheries,
            crop farming or a potential partnership. Our team can discuss
            your enquiry and the next steps.
          </p>

          <Link
            href="/request-service?service=Livestock%2C%20Fisheries%20%26%20Crop%20Farming"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-(--primary) px-6 py-3.5 font-semibold text-white transition hover:bg-(--accent-dark)"
          >
            Request a Service
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}