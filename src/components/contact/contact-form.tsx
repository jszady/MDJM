"use client";

import { FormEvent, useState } from "react";

import { services } from "@/data/services";

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  serviceNeeded: string;
  message: string;
};

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  serviceNeeded: services[0].title,
  message: ""
};

const inputClass =
  "rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition duration-200 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/40";

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      setStatus("success");
      setFeedback(payload.message || "Your inquiry has been sent.");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send inquiry.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="theme-card rounded-xl p-5 sm:p-8">
      <div className="mb-6 rounded-xl border border-white/10 bg-black p-5">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
          Start The Conversation
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
          Tell MJDM where your brand needs to get sharper.
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Share your goals, current gaps, or launch plans. The response will be focused on what
          matters most and what the next move should be.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            required
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className={inputClass}
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Company
          <input
            required
            value={values.company}
            onChange={(event) =>
              setValues((current) => ({ ...current, company: event.target.value }))
            }
            className={inputClass}
            placeholder="Company name"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            required
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className={inputClass}
            placeholder="you@company.com"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-sm text-slate-300">
          Service Needed
          <select
            value={values.serviceNeeded}
            onChange={(event) =>
              setValues((current) => ({ ...current, serviceNeeded: event.target.value }))
            }
            className={`w-full ${inputClass}`}
          >
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm text-slate-300">
        Message
        <textarea
          required
          rows={6}
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          className={inputClass}
          placeholder="Tell MJDM what you are launching, what feels outdated, and what success would look like."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[#ffd700] bg-[#ffd700] px-5 py-3 text-sm font-bold text-black transition-colors duration-200 hover:border-[#ffe566] hover:bg-[#ffe566] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "Sending..." : "Request a response"}
        </button>
        <p className="text-center text-sm text-slate-400 sm:text-left">
          Prefer email?{" "}
          <a href="mailto:info@mjdm.io" className="font-bold text-[#ffd700] underline-offset-2 hover:underline">
            info@mjdm.io
          </a>
        </p>
      </div>

      {feedback ? (
        <div
          className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
              : "border-rose-400/30 bg-rose-400/10 text-rose-200"
          }`}
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}
