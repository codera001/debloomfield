import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const whatsapp = String(body.whatsapp ?? "").trim();
    const company = String(body.company ?? "").trim();
    const location = String(body.location ?? "").trim();
    const service = String(body.service ?? "").trim();
    const preferredContact = String(body.preferredContact ?? "").trim();
    const preferredDate = String(body.preferredDate ?? "").trim();
    const details = String(body.details ?? "").trim();

    if (
      !fullName ||
      !email ||
      !phone ||
      !location ||
      !service ||
      !preferredContact ||
      !details
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"DeBloomField Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Service Request: ${service}`,
      text: `
New DeBloomField Service Request

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
WhatsApp: ${whatsapp || "Not provided"}
Company: ${company || "Not provided"}
Location: ${location}
Service Required: ${service}
Preferred Contact Method: ${preferredContact}
Preferred Date: ${preferredDate || "Not provided"}

Request Details:
${details}
      `,
      html: `
        <h2>New DeBloomField Service Request</h2>

        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>WhatsApp:</strong> ${
          whatsapp ? escapeHtml(whatsapp) : "Not provided"
        }</p>
        <p><strong>Company:</strong> ${
          company ? escapeHtml(company) : "Not provided"
        }</p>
        <p><strong>Location:</strong> ${escapeHtml(location)}</p>
        <p><strong>Service Required:</strong> ${escapeHtml(service)}</p>
        <p><strong>Preferred Contact Method:</strong> ${escapeHtml(
          preferredContact
        )}</p>
        <p><strong>Preferred Date:</strong> ${
          preferredDate ? escapeHtml(preferredDate) : "Not provided"
        }</p>

        <hr />

        <h3>Request Details</h3>

        <p style="white-space: pre-line;">
          ${escapeHtml(details)}
        </p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your service request has been sent successfully. We will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Service request error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not send your request right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}