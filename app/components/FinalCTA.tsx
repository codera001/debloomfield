import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-(--primary) text-white">
      <div className="container flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
        {/* CTA text */}
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to start your next project?
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
            Tell us what you need and let&apos;s explore the right solution
            together.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/request-service"
            className="rounded-md bg-(--accent) px-6 py-3.5 text-center font-semibold text-white transition hover:bg-(--accent-dark)"
          >
            Request a Service →
          </Link>

          <a
            href="https://wa.me/2348103376412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-(--primary)"
          >
            <MessageCircle size={20} />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}