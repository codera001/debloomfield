import {
  ClipboardList,
  SearchCheck,
  MessagesSquare,
  ArrowRightCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Complete our service request form and share the details of your requirement.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "We Review Your Request",
    description:
      "We assess the information provided and identify the most suitable next steps.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "We Contact You",
    description:
      "Our team gets in touch to discuss your request, clarify details and answer questions.",
    icon: MessagesSquare,
  },
  {
    number: "04",
    title: "We Move Forward",
    description:
      "Once the scope and arrangements are agreed, we proceed with the appropriate next steps.",
    icon: ArrowRightCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-(--section-light) py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-subtitle">How It Works</p>

          <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
            From Request to Conversation in Four Simple Steps
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Getting started with DeBloomField is simple. Share your needs and
            we&apos;ll guide the conversation from there.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary)">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>

                  <span className="text-3xl font-bold text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-(--primary)">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}