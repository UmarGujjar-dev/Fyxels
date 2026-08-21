import { Router } from "express";
import { z } from "zod";
import { validate } from "../middleware/validate";
import { prisma } from "../lib/prisma";
import { sendLeadAlert, sendLeadConfirmation } from "../services/email";

const router = Router();

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().max(200).optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  source: z.string().optional(),
});

// POST /api/leads
router.post("/", validate(leadSchema), async (req, res) => {
  try {
    const data = req.body;

    // Save to database
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        service: data.service,
        budget: data.budget,
        message: data.message,
        source: data.source || req.headers.referer || null,
      },
    });

    // Fire emails in parallel (non-blocking — don't fail request if email fails)
    Promise.all([
      sendLeadAlert(data).catch((err) =>
        console.error("Lead alert email failed:", err)
      ),
      sendLeadConfirmation({
        name: data.name,
        email: data.email,
        service: data.service,
      }).catch((err) =>
        console.error("Lead confirmation email failed:", err)
      ),
    ]);

    res.status(201).json({
      success: true,
      message: "Your inquiry has been received. We'll be in touch within 1 business day.",
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Lead creation error:", error);
    res.status(500).json({ error: "Failed to process your inquiry. Please try again." });
  }
});

// GET /api/leads — internal only (should be behind auth in production)
router.get("/", async (_req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json({ leads, total: leads.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

export default router;
