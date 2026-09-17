import Link from "next/link";
import {
    ShieldCheck,
    BadgeCheck,
    Lightbulb,
    Users,
} from "lucide-react";

export default function AboutPreview() {
    return (
        <section className="bg-(--primary) py-16 text-white lg:py-20">
            <div className="container grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                {/* Left side */}
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
                        About Us
                    </p>

                    <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                        A Diversified Business Focused on Practical Solutions
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                        DeBloomField Investment Ltd is a Nigerian company based in Port
                        Harcourt, Rivers State, focused on building practical and reliable
                        solutions across multiple sectors.
                    </p>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                        Our business interests span livestock, fisheries and crop farming,
                        contracting, logistics, procurement, shipping, equipment, real estate,
                        solar energy and general services. We aim to create value by
                        understanding client needs, identifying suitable solutions and
                        developing strong business relationships.
                    </p>
                    {/* Values */}
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                <ShieldCheck
                                    size={20}
                                    strokeWidth={1.8}
                                    className="text-(--accent)"
                                />
                            </div>

                            <div>
                                <h3 className="font-bold text-white">
                                    Integrity
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-white/65">
                                    We conduct business with honesty, responsibility and transparency.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                <BadgeCheck
                                    size={20}
                                    strokeWidth={1.8}
                                    className="text-(--accent)"
                                />
                            </div>

                            <div>
                                <h3 className="font-bold text-white">
                                    Excellence
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-white/65">
                                    We focus on quality, professionalism and dependable service.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                <Lightbulb
                                    size={20}
                                    strokeWidth={1.8}
                                    className="text-(--accent)"
                                />
                            </div>

                            <div>
                                <h3 className="font-bold text-white">
                                    Innovation
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-white/65">
                                    We explore practical ideas and better ways to create value.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                <Users
                                    size={20}
                                    strokeWidth={1.8}
                                    className="text-(--accent)"
                                />
                            </div>

                            <div>
                                <h3 className="font-bold text-white">
                                    Customer Focus
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-white/65">
                                    We place client requirements at the center of our approach.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/about"
                        className="mt-8 inline-flex w-fit rounded-md bg-(--accent) px-6 py-3.5 font-semibold text-white transition hover:bg-(--accent-dark)"
                    >
                        More About Us →
                    </Link>
                </div>

                {/* Right side */}
                <div className="rounded-2xl bg-white p-7 text-(--primary) shadow-xl sm:p-8">
                    <div className="space-y-8">
                        {/* Mission */}
                        <div className="grid grid-cols-[auto_1fr] gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-2xl">
                                🎯
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">Our Mission</h3>
                                <p className="mt-2 leading-7 text-gray-600">
                                    To provide reliable, innovative and integrated business
                                    solutions across diverse sectors while creating lasting
                                    value for our clients, partners and communities.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-gray-200 pt-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
                                👁️
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">Our Vision</h3>
                                <p className="mt-2 leading-7 text-gray-600">
                                    To become a trusted and diversified Nigerian enterprise
                                    recognized for excellence, reliability and sustainable
                                    growth across multiple industries.
                                </p>
                            </div>
                        </div>

                        {/* Goal */}
                        <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-gray-200 pt-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-2xl">
                                🏆
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">Our Goal</h3>
                                <p className="mt-2 leading-7 text-gray-600">
                                    To build long-term relationships by providing quality
                                    service, creating opportunities and delivering solutions
                                    that support sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}