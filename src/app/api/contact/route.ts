import { NextResponse } from "next/server";

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

  // This is intentionally lightweight for the first production-style build.
  // Wire this route to MJDM's email provider when credentials are available.
  return NextResponse.json({
    message:
      "Inquiry received. MJDM will be in touch soon. You can also email hello@mjdm.agency directly."
  });
}
