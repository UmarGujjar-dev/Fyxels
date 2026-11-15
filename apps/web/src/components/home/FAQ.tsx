"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "./data/faq";

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 text-[#17191c] sm:py-20">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span
            className="mb-3 inline-flex rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--accent-orange)", backgroundColor: "#fff3e8" }}
          >
            {faqData.eyebrow}
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            {faqData.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
            {faqData.description}
          </p>
        </div>
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {faqData.questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={question} className="py-1">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-4 text-left font-display text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:text-base"
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
