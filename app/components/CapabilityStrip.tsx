const capabilities = [
  {
    number: "01",
    title: "Multi-Sector Solutions",
    description:
      "Business capabilities spanning contracting, logistics, procurement, real estate, energy and related services.",
  },
  {
    number: "02",
    title: "Nationwide Service",
    description:
      "Based in Port Harcourt and positioned to respond to service requirements across Nigeria.",
  },
  {
    number: "03",
    title: "Flexible Support",
    description:
      "Solutions tailored to the requirements of individuals, businesses and organizations.",
  },
  {
    number: "04",
    title: "Investment Focused",
    description:
      "Exploring practical opportunities and solutions designed to create sustainable long-term value.",
  },
];

export default function CapabilityStrip() {
  return (
  <section className="relative z-20 -mb-20 -mt-10 px-4 text-white sm:-mb-24 sm:-mt-12 lg:-mb-28 lg:-mt-14">
      <div className="container overflow-hidden rounded-2xl bg-(--primary) shadow-xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="border-b border-white/15 px-6 py-8 sm:border-r lg:border-b-0"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm font-bold text-(--accent)">
                  {capability.number}
                </span>

                <div className="h-px w-8 bg-(--accent)" />
              </div>

              <h2 className="text-xl font-bold">
                {capability.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/75">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}