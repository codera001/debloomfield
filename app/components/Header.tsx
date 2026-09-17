"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header>
            {/* Top contact bar */}
            <div className="bg-(--primary) text-white">
                <div className="container flex items-center justify-between py-2 text-sm">
                    {/* Desktop location */}
                    <p className="hidden md:block">
                        Port Harcourt, Rivers State, Nigeria
                    </p>

                    {/* Desktop contact information */}
                    <div className="hidden items-center gap-6 md:flex">
                        <a
                            href="mailto:bloomfieldhillscircle@gmail.com"
                            className="transition hover:text-(--accent)"
                        >
                            bloomfieldhillscircle@gmail.com
                        </a>

                        <a
                            href="tel:+2348055426215"
                            className="transition hover:text-(--accent)"
                        >
                            +234 805 542 6215
                        </a>
                    </div>

                    {/* Mobile contact options */}
                    <div className="flex w-full items-center justify-between md:hidden">
                        <a href="tel:+2348055426215">Call Us</a>

                        <a
                            href="https://wa.me/2348103376412"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <div className="border-b border-gray-200 bg-white">
                <div className="container flex items-center justify-between py-4">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                        onClick={() => setMenuOpen(false)}
                        aria-label="DeBloomField Investment Ltd home"
                    >
                        <Image
                            src="/debloomfield-logo.png"
                            alt="DeBloomField Investment Ltd logo"
                            width={70}
                            height={70}
                            priority
                            className="h-14 w-14 object-contain md:h-16 md:w-16"
                        />

                        <div className="hidden sm:block">
                            <p className="text-lg font-bold leading-tight text-(--primary)">
                                DeBloomField
                            </p>

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-(--accent-dark)">
                                Investment Ltd
                            </p>
                        </div>
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-7 lg:flex">
                        <Link href="/" className="transition hover:text-(--accent-dark)">
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="transition hover:text-(--accent-dark)"
                        >
                            About Us
                        </Link>

                        <div className="group relative">
                            <Link
                                href="/services"
                                className="flex items-center gap-1 transition hover:text-(--accent-dark)"
                            >
                                Services
                                <span className="text-xs">▼</span>
                            </Link>

                            <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 rounded-lg border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <DropdownLink href="/services/livestock-fisheries-crop-farming">
                                    Livestock, Fisheries &amp; Crop Farming
                                </DropdownLink>
                                <DropdownLink href="/services/general-contracting">
                                    General Contracting
                                </DropdownLink>

                                <DropdownLink href="/services/logistics-moving">
                                    Logistics & Moving
                                </DropdownLink>

                                <DropdownLink href="/services/supplies-general-services">
                                    Supplies & General Services
                                </DropdownLink>

                                <DropdownLink href="/services/shipping-equipment">
                                    Shipping & Equipment
                                </DropdownLink>

                                <DropdownLink href="/services/real-estate">
                                    Real Estate
                                </DropdownLink>

                                <DropdownLink href="/services/solar-energy">
                                    Solar Energy
                                </DropdownLink>
                            </div>
                        </div>

                        <Link
                            href="/industries"
                            className="transition hover:text-(--accent-dark)"
                        >
                            Industries
                        </Link>

                        <Link
                            href="/why-choose-us"
                            className="transition hover:text-(--accent-dark)"
                        >
                            Why Choose Us
                        </Link>

                        <Link
                            href="/contact"
                            className="transition hover:text-(--accent-dark)"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Desktop CTA */}
                    <Link
                        href="/request-service"
                        className="hidden rounded-md bg-(--accent) px-5 py-3 font-semibold text-white transition hover:bg-(--accent-dark) lg:inline-block"
                    >
                        Request a Service
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-2xl text-(--primary) lg:hidden"
                        onClick={() => {
                            setMenuOpen(!menuOpen);

                            if (menuOpen) {
                                setServicesOpen(false);
                            }
                        }}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? "×" : "☰"}
                    </button>
                </div>

                {/* Mobile navigation */}
                {menuOpen && (
                    <nav className="container border-t border-gray-200 py-4 lg:hidden">
                        <div className="flex flex-col gap-1">
                            <MobileLink href="/" closeMenu={() => setMenuOpen(false)}>
                                Home
                            </MobileLink>

                            <MobileLink href="/about" closeMenu={() => setMenuOpen(false)}>
                                About Us
                            </MobileLink>

                            <div>
                                <button
                                    type="button"
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-medium text-(--primary) transition hover:bg-gray-100"
                                    aria-expanded={servicesOpen}
                                    aria-controls="mobile-services-menu"
                                >
                                    <span>Services</span>

                                    <span
                                        className={`text-xs transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                            }`}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {servicesOpen && (
                                    <div
                                        id="mobile-services-menu"
                                        className="ml-3 border-l border-gray-200 pl-3"
                                    >
                                        <MobileServiceLink
                                            href="/services/livestock-fisheries-crop-farming"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            Livestock, Fisheries &amp; Crop Farming
                                        </MobileServiceLink>
                                        <MobileServiceLink
                                            href="/services/general-contracting"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            General Contracting
                                        </MobileServiceLink>

                                        <MobileServiceLink
                                            href="/services/logistics-moving"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            Logistics & Moving
                                        </MobileServiceLink>

                                        <MobileServiceLink
                                            href="/services/supplies-general-services"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            Supplies & General Services
                                        </MobileServiceLink>

                                        <MobileServiceLink
                                            href="/services/shipping-equipment"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            Shipping & Equipment
                                        </MobileServiceLink>

                                        <MobileServiceLink
                                            href="/services/real-estate"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            Real Estate
                                        </MobileServiceLink>

                                        <MobileServiceLink
                                            href="/services/solar-energy"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            Solar Energy
                                        </MobileServiceLink>

                                        <MobileServiceLink
                                            href="/services"
                                            closeMenu={() => {
                                                setMenuOpen(false);
                                                setServicesOpen(false);
                                            }}
                                        >
                                            View All Services
                                        </MobileServiceLink>
                                    </div>
                                )}
                            </div>

                            <MobileLink
                                href="/industries"
                                closeMenu={() => setMenuOpen(false)}
                            >
                                Industries
                            </MobileLink>

                            <MobileLink
                                href="/why-choose-us"
                                closeMenu={() => setMenuOpen(false)}
                            >
                                Why Choose Us
                            </MobileLink>

                            <MobileLink href="/contact" closeMenu={() => setMenuOpen(false)}>
                                Contact Us
                            </MobileLink>

                            <Link
                                href="/request-service"
                                onClick={() => setMenuOpen(false)}
                                className="mt-3 rounded-md bg-(--accent) px-5 py-3 text-center font-semibold text-white transition hover:bg-(--accent-dark)"
                            >
                                Request a Service
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

function MobileLink({
    href,
    children,
    closeMenu,
}: {
    href: string;
    children: React.ReactNode;
    closeMenu: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={closeMenu}
            className="rounded-md px-3 py-3 font-medium text-(--primary) transition hover:bg-gray-100"
        >
            {children}
        </Link>
    );
}

function DropdownLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="block rounded-md px-4 py-3 text-sm font-medium text-(--primary) transition hover:bg-gray-100 hover:text-(--accent-dark)"
        >
            {children}
        </Link>
    );
}

function MobileServiceLink({
    href,
    children,
    closeMenu,
}: {
    href: string;
    children: React.ReactNode;
    closeMenu: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={closeMenu}
            className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-(--accent-dark)"
        >
            {children}
        </Link>
    );
}