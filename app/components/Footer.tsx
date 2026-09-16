import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a2f66] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="DeBloomField Investment Ltd home"
          >
            <Image
              src="/debloomfield-logo.png"
              alt="DeBloomField Investment Ltd logo"
              width={70}
              height={70}
              className="h-16 w-16 object-contain"
            />

            <div>
              <p className="text-lg font-bold leading-tight">
                DeBloomField
              </p>

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
                Investment Ltd
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-6 text-white/75">
            Integrated solutions across contracting, logistics, supplies,
            shipping, real estate, renewable energy and general business
            services.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition hover:bg-white hover:text-(--primary)"
            >
             <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition hover:bg-white hover:text-(--primary)"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition hover:bg-white hover:text-(--primary)"
            >
              <FaInstagram size={17} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>

          <nav className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <Link href="/" className="transition hover:text-(--accent)">
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-(--accent)"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="transition hover:text-(--accent)"
            >
              Services
            </Link>

            <Link
              href="/industries"
              className="transition hover:text-(--accent)"
            >
              Industries
            </Link>

            <Link
              href="/why-choose-us"
              className="transition hover:text-(--accent)"
            >
              Why Choose Us
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-(--accent)"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold">Our Services</h2>

          <nav className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <Link
              href="/services/general-contracting"
              className="transition hover:text-(--accent)"
            >
              General Contracting
            </Link>

            <Link
              href="/services/logistics-moving"
              className="transition hover:text-(--accent)"
            >
              Logistics & Moving
            </Link>

            <Link
              href="/services/supplies-general-services"
              className="transition hover:text-(--accent)"
            >
              Supplies & General Services
            </Link>

            <Link
              href="/services/shipping-equipment"
              className="transition hover:text-(--accent)"
            >
              Shipping & Equipment
            </Link>

            <Link
              href="/services/real-estate"
              className="transition hover:text-(--accent)"
            >
              Real Estate
            </Link>

            <Link
              href="/services/solar-energy"
              className="transition hover:text-(--accent)"
            >
              Solar Energy
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>

          <div className="mt-5 space-y-4 text-sm text-white/75">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-(--accent)"
              />

              <p>
                No. 1 John Chiorlu Avenue,
                <br />
                Mgbuoba NTA Road,
                <br />
                Port Harcourt, Rivers State,
                <br />
                Nigeria.
              </p>
            </div>

            <a
              href="mailto:bloomfieldhillscircle@gmail.com"
              className="flex items-center gap-3 transition hover:text-(--accent)"
            >
              <Mail size={18} className="shrink-0 text-(--accent)" />
              bloomfieldhillscircle@gmail.com
            </a>

            <div className="flex items-start gap-3">
              <Phone
                size={18}
                className="mt-0.5 shrink-0 text-(--accent)"
              />

              <div className="space-y-1">
                <a
                  href="tel:+2348055426215"
                  className="block transition hover:text-(--accent)"
                >
                  +234 805 542 6215
                </a>

                <a
                  href="tel:+2348103376412"
                  className="block transition hover:text-(--accent)"
                >
                  +234 810 337 6412
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/2348103376412"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-(--accent) px-5 py-3 font-semibold text-white transition hover:bg-(--accent-dark)"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-white/15">
        <div className="container flex flex-col gap-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
         <p>
  © {new Date().getFullYear()} DeBloomField Investment Ltd. All Rights Reserved.
</p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}