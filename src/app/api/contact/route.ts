import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(254),
  message: z.string().trim().min(10, "Message is too short").max(4000),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, message } = parsed.data;

    const {
      RESEND_SECRET_KEY,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL = "info@nexvect.com",
      CONTACT_FROM_EMAIL,
    } = process.env;

    // Prefer Resend when configured.
    if (RESEND_SECRET_KEY) {
      if (!CONTACT_FROM_EMAIL) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "Email sender is not configured. Set CONTACT_FROM_EMAIL (e.g. noreply@zalnex.me).",
          },
          { status: 500 }
        );
      }

      const resend = new Resend(RESEND_SECRET_KEY);
      const subject = `New website inquiry — ${firstName} ${lastName}`;

      const from = `Nexvect Website <${CONTACT_FROM_EMAIL}>`;

      const { error } = await resend.emails.send({
        from,
        to: [CONTACT_TO_EMAIL],
        replyTo: `${firstName} ${lastName} <${email}>`,
        subject,
        text: [
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      });

      if (error) {
        console.error("Resend send failed", {
          name: (error as unknown as { name?: string }).name,
          message: (error as unknown as { message?: string }).message,
          error,
        });
        return NextResponse.json(
          { ok: false, error: error.message || "Failed to send email." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured. Set RESEND_SECRET_KEY or SMTP_* environment variables.",
        },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT);
    if (!Number.isFinite(port)) {
      return NextResponse.json(
        { ok: false, error: "Invalid SMTP_PORT." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const from =
      CONTACT_FROM_EMAIL ??
      // Many SMTP providers require the authenticated user as the from.
      SMTP_USER;

    const subject = `New website inquiry — ${firstName} ${lastName}`;

    await transporter.sendMail({
      from: `Nexvect Website <${from}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}

