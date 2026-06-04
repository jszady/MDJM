import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/data/site";

/**
 * Contact delivery: set RESEND_API_KEY. Set RESEND_FROM_EMAIL to a Resend-verified sender
 * (e.g. MJDM <hello@mjdm.agency>); otherwise Resend's onboarding sender is used for testing only.
 * Optional CONTACT_TO_EMAIL overrides the inbox (defaults to siteConfig.email).
 */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  serviceNeeded?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.company || !body.email || !body.message || !body.serviceNeeded) {
    return NextResponse.json(
      { message: "Please complete every field before sending your inquiry." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ message: "Please use a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "We could not deliver your message from this environment. Please email hello@mjdm.agency directly."
      },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || "MJDM Website <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const lines = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Company: ${body.company}`,
    `Service: ${body.serviceNeeded}`,
    "",
    "Message:",
    body.message
  ];

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: body.email,
    subject: `Website inquiry — ${body.name} (${body.company})`,
    text: lines.join("\n")
  });

  if (error) {
    return NextResponse.json(
      {
        message:
          "We could not send your message right now. Please try again in a moment or email hello@mjdm.agency."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message:
      "Inquiry received. MJDM will be in touch soon. You can also email hello@mjdm.agency directly."
  });
}
