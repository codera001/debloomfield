"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
    CheckCircle2,
    Loader2,
    Send,
    XCircle,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const services = [
    "General Contracting",
    "Logistics & Moving",
    "Supplies & General Services",
    "Shipping & Equipment",
    "Real Estate",
    "Solar Energy",
    "General Services",
    "Partnership",
    "Other",
];

export default function RequestServiceForm() {
    const searchParams = useSearchParams();
    const selectedService = searchParams.get("service") || "";
    const [status, setStatus] = useState<Status>("idle");
    const [feedback, setFeedback] = useState("");

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setStatus("loading");
        setFeedback("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            whatsapp: formData.get("whatsapp"),
            company: formData.get("company"),
            location: formData.get("location"),
            service: formData.get("service"),
            preferredContact: formData.get("preferredContact"),
            preferredDate: formData.get("preferredDate"),
            details: formData.get("details"),
        };

        try {
            const response = await fetch("/api/request-service", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Unable to send request.");
            }

            setStatus("success");
            setFeedback(
                result.message ||
                "Your service request has been sent successfully."
            );

            form.reset();
        } catch (error) {
            setStatus("error");

            setFeedback(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    }

    return (
        <div className="rounded-2xl bg-white p-7 shadow-sm sm:p-8">
            <p className="section-subtitle">Service Enquiry Form</p>

            <h2 className="mt-3 text-2xl font-bold text-(--primary)">
                Provide Your Request Details
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
                The more information you provide, the easier it will be for us to
                understand your needs and respond appropriately.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="fullName"
                            className="mb-2 block text-sm font-semibold text-(--primary)"
                        >
                            Full Name *
                        </label>

                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            disabled={status === "loading"}
                            placeholder="Your full name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-semibold text-(--primary)"
                        >
                            Email Address *
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            disabled={status === "loading"}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-semibold text-(--primary)"
                        >
                            Phone Number *
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            disabled={status === "loading"}
                            placeholder="+234..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="whatsapp"
                            className="mb-2 block text-sm font-semibold text-(--primary)"
                        >
                            WhatsApp Number
                        </label>

                        <input
                            id="whatsapp"
                            name="whatsapp"
                            type="tel"
                            disabled={status === "loading"}
                            placeholder="+234..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="company"
                            className="mb-2 block text-sm font-semibold text-(--primary)"
                        >
                            Company Name
                        </label>

                        <input
                            id="company"
                            name="company"
                            type="text"
                            disabled={status === "loading"}
                            placeholder="Optional"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="location"
                            className="mb-2 block text-sm font-semibold text-(--primary)"
                        >
                            Location *
                        </label>

                        <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            disabled={status === "loading"}
                            placeholder="City, State"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-semibold text-(--primary)"
                    >
                        Service Required *
                    </label>

                    <select
                        id="service"
                        name="service"
                        required
                        defaultValue={selectedService}
                        disabled={status === "loading"}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                    >
                        <option value="" disabled>
                            Select a service
                        </option>

                        {services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                <fieldset>
                    <legend className="mb-3 text-sm font-semibold text-(--primary)">
                        Preferred Contact Method *
                    </legend>

                    <div className="flex flex-wrap gap-4">
                        {["Phone", "Email", "WhatsApp"].map((method) => (
                            <label
                                key={method}
                                className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-4 py-3"
                            >
                                <input
                                    type="radio"
                                    name="preferredContact"
                                    value={method}
                                    required
                                    disabled={status === "loading"}
                                />

                                <span className="text-sm">{method}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                <div>
                    <label
                        htmlFor="preferredDate"
                        className="mb-2 block text-sm font-semibold text-(--primary)"
                    >
                        Preferred Date
                    </label>

                    <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        disabled={status === "loading"}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100 sm:max-w-xs"
                    />
                </div>

                <div>
                    <label
                        htmlFor="details"
                        className="mb-2 block text-sm font-semibold text-(--primary)"
                    >
                        Tell Us About Your Request *
                    </label>

                    <textarea
                        id="details"
                        name="details"
                        required
                        rows={7}
                        disabled={status === "loading"}
                        placeholder="Describe the service you need, project details, quantity, timeline or any other useful information..."
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:bg-gray-100"
                    />
                </div>

                {status === "success" && (
                    <div
                        role="status"
                        className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                    >
                        <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                        <p>{feedback}</p>
                    </div>
                )}

                {status === "error" && (
                    <div
                        role="alert"
                        className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                    >
                        <XCircle className="mt-0.5 shrink-0" size={20} />
                        <p>{feedback}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-(--accent) px-6 py-3.5 font-semibold text-white transition hover:bg-(--accent-dark) disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending Request...
                        </>
                    ) : (
                        <>
                            <Send size={18} />
                            Send Request
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}