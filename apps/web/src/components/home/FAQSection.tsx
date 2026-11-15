"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "What kind of products can Fyxels help build?",
    answer:
      "Fyxels works across custom software, web applications, mobile apps, AI and automation, UI/UX design, and cloud and DevOps. The right team and scope depend on your product goals.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start with a conversation about the problem you want to solve, who the product is for, and what you already have. From there, the team can discuss a suitable next step and potential scope.",
  },
  {
    question: "Can you work with an existing product or codebase?",
    answer:
      "Yes. Work can include improving or extending an existing application, modernizing parts of a system, or building a new product. The first step is understanding the current setup and your priorities.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "The stack is selected to fit the product. Common options include Next.js, React, TypeScript, Node.js, relational databases, and cloud platforms such as AWS.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timing depends on the product’s scope, integrations, and requirements. After discussing the goals and constraints, the team can outline a realistic plan and milestones.",
  },
];

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 text-[#17191c] sm:py-20">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span
            className="mb-3 inline-flex rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--accent-orange)", backgroundColor: "#fff3e8" }}
          >
            FAQ
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
            A few helpful details before you get in touch.
          </p>
        </div>
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={question} className="py-1">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenQuestion(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-4 text-left font-display text-sm font-bold sm:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    {question}
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: "var(--accent-orange)" }}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="max-w-2xl pb-4 pr-8 text-sm leading-relaxed text-zinc-600"
                >
                  {answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
