import Image from "next/image";
import Link from "next/link";
import {
    HardHat,
    Truck,
    PackageCheck,
    Ship,
    House,
    Sun,
} from "lucide-react";

const services = [
    {
        title: "General Contracting",
        description:
            "Contracting and project support solutions tailored to client requirements.",
        image: "/service-contracting.jpg",
        href: "/services/general-contracting",
        icon: HardHat,
        iconColor: "bg-(--accent)",
    },
    {
        title: "Logistics & Moving",
        description:
            "Transportation, moving and logistics support for individuals and businesses.",
        image: "/service-logistics.jpg",
        href: "/services/logistics-moving",
        icon: Truck,
        iconColor: "bg-(--primary)",
    },
    {
        title: "Supplies & General Services",
        description:
            "Procurement, sourcing and general supply solutions for diverse requirements.",
        image: "/service-supplies.jpg",
        href: "/services/supplies-general-services",
        icon: PackageCheck,
        iconColor: "bg-(--accent)",
    },
    {
        title: "Shipping & Equipment",
        description:
            "Shipping coordination, equipment sourcing, truck crane and project support services.",
        image: "/service-shipping.jpg",
        href: "/services/shipping-equipment",
        icon: Ship,
        iconColor: "bg-(--primary)",
    },
    {
        title: "Real Estate",
        description:
            "Property-related enquiries, sourcing and opportunities for individuals, businesses and investors.",
        image: "/service-real-estate.jpg",
        href: "/services/real-estate",
        icon: House,
        iconColor: "bg-(--accent)",
    },
    {
        title: "Solar Energy",
        description:
            "Solar and renewable energy solutions for residential and commercial requirements.",
        image: "/service-solar.jpg",
        href: "/services/solar-energy",
        icon: Sun,
        iconColor: "bg-(--primary)",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-[#f7f8fa] pb-20 pt-10 sm:pt-12 lg:pb-24 lg:pt-14">
            <div className="container">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl pt-25 text-center">
                    <p className="section-subtitle">
                        Our Business Solutions
                    </p>

                    <h2 className="section-title mt-3">
                        What We Do
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                        Explore our growing range of services designed to support
                        individuals, businesses, contractors and organizations across
                        Nigeria.
                    </p>
                </div>

                {/* Service cards */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-44 overflow-hidden xl:h-40">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Card content */}
                                <div className="relative p-5 pt-8">
                                    {/* Floating icon */}
                                    <div
                                        className={`absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-xl border-4 border-white shadow-md ${service.iconColor}`}
                                    >
                                        <Icon
                                            size={25}
                                            strokeWidth={1.8}
                                            className="text-white"
                                        />
                                    </div>

                                    <h3 className="text-lg font-bold leading-tight text-(--primary)">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {service.description}
                                    </p>

                                    <Link
                                        href={service.href}
                                        className="mt-5 inline-flex font-semibold text-(--accent-dark) transition group-hover:gap-2"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}