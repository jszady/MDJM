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
    <form
      onSubmit={handleSubmit}
      className="section-surface noise-overlay relative overflow-hidden rounded-[2rem] p-6 shadow-[0_20px_80px_rgba(5,10,30,0.35)] sm:p-8"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-fuchsia-500/14 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-10 h-32 w-32 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="relative">
        <div className="mb-6 rounded-[1.6rem] border border-white/10 bg-slate-950/65 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            Start The Conversation
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
            Tell MJDM where your brand needs to get sharper.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
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
            className="rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-white outline-none transition duration-300 focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_0_30px_rgba(103,232,249,0.12)]"
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
            className="rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-white outline-none transition duration-300 focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_0_30px_rgba(103,232,249,0.12)]"
            placeholder="Company name"
          />
          </label>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            required
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-white outline-none transition duration-300 focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_0_30px_rgba(103,232,249,0.12)]"
            placeholder="you@company.com"
          />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
          Service Needed
          <select
            value={values.serviceNeeded}
            onChange={(event) =>
              setValues((current) => ({ ...current, serviceNeeded: event.target.value }))
            }
            className="rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-white outline-none transition duration-300 focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_0_30px_rgba(103,232,249,0.12)]"
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
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/85 px-4 py-3 text-white outline-none transition duration-300 focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_0_30px_rgba(103,232,249,0.12)]"
            placeholder="Tell MJDM what you are launching, what feels outdated, and what success would look like."
          />
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(244,232,255,0.94))] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.1),0_0_40px_rgba(236,72,153,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(255,255,255,0.12),0_0_50px_rgba(236,72,153,0.24)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Request a response"}
          </button>
          <p className="text-sm text-slate-400">Prefer email? Reach MJDM directly at hello@mjdm.agency</p>
        </div>

        {feedback ? (
          <div
            className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                : "border-rose-400/30 bg-rose-400/10 text-rose-200"
            }`}
          >
            {feedback}
          </div>
        ) : null}
      </div>
    </form>
  );
}
