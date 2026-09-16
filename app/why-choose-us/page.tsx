import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock3,
  Handshake,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover DeBloomField Investment Ltd's approach to integrated business solutions, responsive service, partnerships and value creation across Nigeria.",
};

const reasons = [
  {
    title: "One-Stop Solutions",
    description:
      "Our diversified service offering allows clients to explore contracting, logistics, supplies, equipment, real estate and solar energy solutions through one business.",
    icon: Boxes,
  },
  {
    title: "Partnership Mindset",
    description:
      "We approach opportunities with a collaborative mindset, seeking to understand client requirements and build productive business relationships.",
    icon: Handshake,
  },
  {
    title: "Responsive Service",
    description:
      "Every enquiry starts with listening to the requirement, reviewing the relevant details and communicating the appropriate next steps.",
    icon: Clock3,
  },
  {
    title: "Nigeria-Focused Reach",
    description:
      "Based in Port Harcourt, Rivers State, we are positioned to explore and respond to suitable business and service requirements across Nigeria.",
    icon: MapPinned,
  },
  {
    title: "Integrity & Transparency",
    description:
      "We believe clear communication, responsible business practices and transparency are essential to building long-term relationships.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Approach",
    description:
      "Different clients have different requirements. Our approach allows us to understand each enquiry individually instead of applying the same solution to every need.",
    icon: Users,
  },
];

const commitments = [
  "Understand the client's requirement before recommending next steps.",
  "Communicate clearly throughout the enquiry and service process.",
  "Provide flexible support based on the nature of the requirement.",
  "Build relationships around reliability, collaboration and long-term value.",
];

export default function WhyChooseUsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--primary) py-16 text-white lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
              Why DeBloomField
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              A Business Partner Focused on Practical Solutions and Long-Term
              Value
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              DeBloomField Investment Ltd brings together multiple business
              capabilities under one company, giving clients a flexible way to
              explore solutions across different sectors.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-service"
                className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
              >
                Request a Service
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
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-subtitle">Our Approach</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              Different Services. One Connected Business Approach.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Many business requirements do not fit neatly into a single
              category. A project may involve contracting, supplies, logistics,
              equipment or energy support at the same time.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              DeBloomField&apos;s diversified structure allows us to begin with
              the client&apos;s actual requirement and explore the most relevant
              service or combination of services.
            </p>
          </div>

          <div className="rounded-2xl bg-(--section-light) p-7 sm:p-8">
            <Handshake size={34} className="text-(--accent-dark)" />

            <h3 className="mt-5 text-2xl font-bold text-(--primary)">
              Partnership Starts With Understanding
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Before moving forward, we focus on understanding what the client
              needs, the intended outcome and the important details surrounding
              the request.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 font-bold text-(--accent-dark)"
            >
              Explore Our Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-(--section-light) py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-subtitle">Why Choose Us</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              What Shapes the DeBloomField Experience
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our focus is on building a dependable and flexible business
              relationship around each client&apos;s requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-2xl bg-white p-7 shadow-sm"
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

                  <h3 className="mt-5 text-xl font-bold text-(--primary)">
                    {reason.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-subtitle">Our Commitment</p>

            <h2 className="mt-3 text-3xl font-bold text-(--primary)">
              A Clear and Client-Focused Way of Working
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We want every enquiry to begin with clarity. That means
              understanding the requirement, discussing realistic next steps
              and keeping communication straightforward.
            </p>
          </div>

          <div className="space-y-4">
            {commitments.map((commitment) => (
              <div
                key={commitment}
                className="flex gap-4 rounded-2xl border border-gray-200 p-5"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-(--accent-dark)"
                />

                <p className="font-medium leading-7 text-gray-700">
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide */}
      <section className="bg-(--section-light) py-16">
        <div className="container">
          <div className="rounded-2xl bg-(--primary) p-8 text-white lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <MapPinned className="text-(--accent)" size={25} />

                  <span className="font-bold text-(--accent)">
                    Nigeria-Focused Business
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Based in Port Harcourt. Open to Opportunities Across Nigeria.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  Our base is in Port Harcourt, Rivers State, while our business
                  focus allows us to explore suitable service requirements,
                  partnerships and opportunities in other parts of Nigeria.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-(--primary) transition hover:bg-gray-100"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container text-center">
          <MessageSquareText
            size={36}
            className="mx-auto text-(--accent-dark)"
          />

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-(--primary)">
            Have a Requirement or Business Opportunity to Discuss?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Tell us what you need and let&apos;s explore how DeBloomField can
            support your requirement.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-service"
              className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
            >
              Request a Service
              <ArrowRight size={18} />
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