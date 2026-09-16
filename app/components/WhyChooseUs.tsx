import {
  Boxes,
  Handshake,
  Clock3,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "One-Stop Solutions",
    description:
      "Access multiple business solutions through one organization.",
    icon: Boxes,
  },
  {
    title: "Partnership Mindset",
    description:
      "We focus on building strong relationships with clients and partners.",
    icon: Handshake,
  },
  {
    title: "Responsive Service",
    description:
      "We aim to communicate clearly and respond promptly to enquiries.",
    icon: Clock3,
  },
  {
    title: "Nigeria-Focused Reach",
    description:
      "Based in Port Harcourt and positioned for opportunities across Nigeria.",
    icon: MapPinned,
  },
  {
    title: "Integrity & Transparency",
    description:
      "We value honesty, accountability and responsible business practices.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-subtitle">Why Choose Us</p>

          <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
            Partnering for Your Success
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Our approach is built around flexibility, communication and
            creating practical value for every client relationship.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="text-center lg:border-r lg:border-gray-200 lg:px-5 last:lg:border-r-0"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-green-200 bg-green-50">
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    className="text-(--accent-dark)"
                  />
                </div>

                <h3 className="mt-4 text-base font-bold text-(--primary)">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}