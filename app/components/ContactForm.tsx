"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

 async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  setStatus("loading");
  setFeedback("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Unable to send message.");
    }

    setStatus("success");
    setFeedback(
      result.message || "Your message has been sent successfully."
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
      <p className="section-subtitle">Send a Message</p>

      <h2 className="mt-3 text-2xl font-bold text-(--primary)">
        How Can We Help?
      </h2>

      <p className="mt-3 leading-7 text-gray-600">
        Send us a message and tell us how DeBloomField can assist you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-(--primary)"
            >
              Full Name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={status === "loading"}
              placeholder="Your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:cursor-not-allowed disabled:bg-gray-100"
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:cursor-not-allowed disabled:bg-gray-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-(--primary)"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            disabled={status === "loading"}
            placeholder="+234..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:cursor-not-allowed disabled:bg-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-(--primary)"
          >
            Subject *
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            disabled={status === "loading"}
            placeholder="What would you like to discuss?"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:cursor-not-allowed disabled:bg-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-(--primary)"
          >
            Message *
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            disabled={status === "loading"}
            placeholder="Tell us how we can help..."
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-(--accent) disabled:cursor-not-allowed disabled:bg-gray-100"
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
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}