"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        eyebrow: "Integrated Business Solutions Across Nigeria",
        title: "Building Solutions. Moving Business.",
        highlight: "Creating Opportunities.",
        description:
            "DeBloomField Investment Ltd works across livestock, fisheries and crop farming, contracting, logistics, procurement, shipping, equipment, real estate and solar energy in Nigeria.",
        image: "/hero-business.jpg",
        alt: "Construction, logistics, shipping and solar energy services",
    },
    {
        id: 2,
        eyebrow: "Logistics • Contracting • Equipment",
        title: "Reliable Support for Projects,",
        highlight: "Movement and Operations.",
        description:
            "From logistics and transportation to contracting and equipment support, we help individuals and organizations find practical solutions for their operational requirements.",
        image: "/hero-logistics.jpg",
        alt: "Logistics trucks and construction equipment",
    },
    {
        id: 3,
        eyebrow: "Real Estate • Solar Energy",
        title: "Investing in Solutions That",
        highlight: "Create Long-Term Value.",
        description:
            "Explore property-related opportunities and renewable energy solutions designed around evolving residential, commercial and investment needs.",
        image: "/hero-growth.jpg",
        alt: "Modern real estate development with solar energy",
    },
    {
        id: 4,
        eyebrow: "Livestock • Fisheries • Crop Farming",
        title: "Growing Opportunities Through",
        highlight: "Agriculture and Agribusiness.",
        description:
            "Explore DeBloomField’s livestock, fisheries and crop farming activities, and get in touch about agricultural enquiries and partnerships.",
        image: "/service-farming.jpg",
        alt: "Illustrative image of livestock, fish farming and crops",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide(
            (current) => (current - 1 + slides.length) % slides.length
        );
    };
    const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
        setTouchEnd(null);
        setTouchStart(event.targetTouches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
        setTouchEnd(event.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return;

        const distance = touchStart - touchEnd;
        const minimumSwipeDistance = 50;

        if (distance > minimumSwipeDistance) {
            nextSlide();
        }

        if (distance < -minimumSwipeDistance) {
            previousSlide();
        }
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = window.setInterval(() => {
            setCurrentSlide((current) => (current + 1) % slides.length);
        }, 6000);

        return () => window.clearInterval(interval);
    }, [isPaused]);

    const slide = slides[currentSlide];

    return (
        <section
            className="relative overflow-hidden bg-white"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="container grid min-h-162.5 items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
                {/* Slide text */}
                <div
                    key={`content-${currentSlide}`}
                    className="animate-[fadeSlide_500ms_ease-out]"
                >
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-(--accent-dark)">
                        {slide.eyebrow}
                    </p>

                    {currentSlide === 0 ? (
                        <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] text-(--primary) sm:text-5xl lg:text-6xl">
                            {slide.title}{" "}
                            <span className="text-(--accent-dark)">
                                {slide.highlight}
                            </span>
                        </h1>
                    ) : (
                        <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] text-(--primary) sm:text-5xl lg:text-6xl">
                            {slide.title}{" "}
                            <span className="text-(--accent-dark)">
                                {slide.highlight}
                            </span>
                        </h2>
                    )}

                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                        {slide.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/request-service"
                            className="rounded-md bg-(--accent) px-6 py-3.5 text-center font-semibold text-white transition hover:bg-(--accent-dark)"
                        >
                            Request a Service
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-md border border-(--primary) px-6 py-3.5 text-center font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
                        >
                            Explore Our Services
                        </Link>
                    </div>

                    <a
                        href="https://wa.me/2348103376412"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex font-semibold text-(--accent-dark) transition hover:text-(--primary)"
                    >
                        Chat with us on WhatsApp →
                    </a>


                </div>

                {/* Slide image */}
                <div
                    key={`image-${currentSlide}`}
                    className="relative animate-[fadeSlide_500ms_ease-out]"
                >
                    <div className="aspect-3/2 overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                        <Image
                            key={slide.image}
                            src={slide.image}
                            alt={slide.alt}
                            width={1536}
                            height={1024}
                            priority={currentSlide === 0}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    {/* Previous arrow */}
                    <button
                        type="button"
                        onClick={previousSlide}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-(--primary) shadow-lg transition hover:bg-(--primary) hover:text-white"
                    >
                        ‹
                    </button>

                    {/* Next arrow */}
                    <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-(--primary) shadow-lg transition hover:bg-(--primary) hover:text-white"
                    >
                        ›
                    </button>
                    {/* Slide indicators */}
                    <div
                        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md"
                        aria-label="Hero slides"
                    >
                        {slides.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={currentSlide === index ? "true" : undefined}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "w-8 bg-(--accent)"
                                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}