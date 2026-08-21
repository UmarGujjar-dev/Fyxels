import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = `"Fyxels" <${process.env.SMTP_USER}>`;
const SALES_EMAIL = process.env.SALES_EMAIL || process.env.SMTP_USER;

// ─── Alert to Sales Team ─────────────────────────────────────────────────────
export async function sendLeadAlert(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}) {
  await transporter.sendMail({
    from: FROM,
    to: SALES_EMAIL,
    subject: `🔥 New Lead: ${data.name} — ${data.service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #6C63FF, #00D9FF); padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Lead Received</h1>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
            ${data.company ? `<tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0;">${data.service}</td></tr>
            ${data.budget ? `<tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${data.budget}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
          <p style="color: #333; line-height: 1.6;"><strong>Message:</strong><br/>${data.message}</p>
          <a href="${process.env.FRONTEND_URL}/admin" style="display: inline-block; background: #6C63FF; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin-top: 16px;">View in Dashboard</a>
        </div>
      </div>
    `,
  });
}

// ─── Confirmation to Lead ─────────────────────────────────────────────────────
export async function sendLeadConfirmation(data: {
  name: string;
  email: string;
  service: string;
}) {
  await transporter.sendMail({
    from: FROM,
    to: data.email,
    subject: `We received your inquiry — Fyxels`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #6C63FF, #00D9FF); padding: 32px 24px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: -0.5px;">Fyxels</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">Premium Software Engineering</p>
        </div>
        <div style="background: #ffffff; padding: 32px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <h2 style="color: #0F1623; margin-top: 0;">Hi ${data.name}, thanks for reaching out!</h2>
          <p style="color: #555; line-height: 1.7;">We've received your inquiry about <strong>${data.service}</strong> and our team will review it shortly.</p>
          <p style="color: #555; line-height: 1.7;">A dedicated solutions architect will contact you within <strong>1 business day</strong> to schedule a free technical consultation.</p>
          <div style="background: #f0f0f9; border-left: 4px solid #6C63FF; padding: 16px; margin: 24px 0; border-radius: 0 6px 6px 0;">
            <p style="margin: 0; color: #333; font-size: 14px;">In the meantime, explore our case studies to see how we've delivered measurable results for clients across SaaS, Fintech, and E-commerce.</p>
          </div>
          <a href="${process.env.FRONTEND_URL}/work" style="display: inline-block; background: #6C63FF; color: white; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: 600;">View Our Work</a>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 32px 0 24px;" />
          <p style="color: #999; font-size: 12px; margin: 0;">Fyxels — Building software that scales. | <a href="${process.env.FRONTEND_URL}" style="color: #6C63FF;">fyxels.com</a></p>
        </div>
      </div>
    `,
  });
}
