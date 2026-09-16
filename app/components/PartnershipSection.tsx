import Link from "next/link";
import {
  Building2,
  Handshake,
  PackageSearch,
  BriefcaseBusiness,
} from "lucide-react";

const partnerTypes = [
  {
    title: "Businesses",
    icon: Building2,
  },
  {
    title: "Strategic Partners",
    icon: Handshake,
  },
  {
    title: "Suppliers",
    icon: PackageSearch,
  },
  {
    title: "Developers & Investors",
    icon: BriefcaseBusiness,
  },
];

export default function PartnershipSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left side */}
        <div>
          <p className="section-subtitle">Partnerships</p>

          <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-(--primary) sm:text-4xl">
            Let&apos;s Build Opportunities Together
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            DeBloomField welcomes conversations with businesses, suppliers,
            contractors, developers and strategic partners interested in
            creating mutually valuable opportunities across our areas of
            operation.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Whether you are looking to collaborate, supply products and
            services, explore development opportunities or discuss a strategic
            relationship, we are open to meaningful business conversations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="text-white rounded-md bg-(--primary) px-6 py-3.5 text-center font-semibold transition hover:bg-(--primary-light)"
            >
              Discuss a Partnership →
            </Link>

            <Link
              href="/request-service"
              className="rounded-md border border-(--primary) px-6 py-3.5 text-center font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="grid gap-4 sm:grid-cols-2">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;

            const iconBackground =
              index % 2 === 0 ? "bg-(--accent)" : "bg-(--primary)";

            return (
              <div
                key={partner.title}
                className="rounded-2xl border border-gray-200 bg-(--section-light) p-6"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBackground}`}
                >
                  <Icon
                    size={23}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-4 text-lg font-bold text-(--primary)">
                  {partner.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}