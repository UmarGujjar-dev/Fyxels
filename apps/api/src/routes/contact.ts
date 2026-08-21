import { Router } from "express";
import { z } from "zod";
import { validate } from "../middleware/validate";
import { prisma } from "../lib/prisma";
import nodemailer from "nodemailer";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// POST /api/contact
router.post("/", validate(contactSchema), async (req, res) => {
  try {
    const data = req.body;

    await prisma.contactMessage.create({ data });

    // Notify team
    transporter
      .sendMail({
        from: `"Fyxels Contact" <${process.env.SMTP_USER}>`,
        to: process.env.SALES_EMAIL || process.env.SMTP_USER,
        subject: `Contact Form: ${data.subject}`,
        html: `<p><strong>From:</strong> ${data.name} (${data.email})</p><p>${data.message}</p>`,
      })
      .catch(console.error);

    res.status(201).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;
