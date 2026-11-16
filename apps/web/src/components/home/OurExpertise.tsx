"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowRight as ArrowLink } from "lucide-react";
import { motion } from "framer-motion";
import { expertiseData } from "./data/expertise";

export function OurExpertise() {
  const { title, description, serviceLinkHref, serviceLinkLabel, services } =
    expertiseData;

  const totalCards = services.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2.3);

  // Responsive cards per view for the 70% column
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1.1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(1.6);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2.1);
      } else {
        setCardsPerView(2.3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, totalCards - Math.floor(cardsPerView));

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  // Keyboard navigation support for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  // Progress percentage indicator calculation
  const progressPercentage =
    maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 100;

  return (
    <section
      id="services"
      aria-label="Our Services"
      className="relative overflow-hidden bg-white py-16 text-[#17191c] sm:py-24"
      onKeyDown={handleKeyDown}
    >
      <div className="container-custom">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* ─── LEFT COLUMN (30%) ─── */}
          <div className="flex flex-col justify-between lg:w-[30%] lg:shrink-0 lg:pt-2">
            <div>
              <span className="mb-3 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                {expertiseData.eyebrow || "Our Expertise"}
              </span>
              <h2 className="font-display text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.15] tracking-tight !text-[#17191c]">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* ─── RIGHT COLUMN (70%) ─── */}
          <div className="flex flex-col gap-5 lg:w-[70%]">
            {/* Top-Right Navigation Controls (Arrows + Progress Indicator) */}
            <div className="flex items-center justify-end gap-3 self-end">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous services"
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                  currentIndex === 0
                    ? "cursor-not-allowed opacity-30 text-zinc-400"
                    : "cursor-pointer text-zinc-700 hover:border-zinc-900 hover:text-black"
                }`}
              >
                <ArrowLeft size={16} aria-hidden="true" />
              </button>

              {/* Progress Indicator */}
              <div
                className="relative h-1 w-20 sm:w-24 overflow-hidden rounded-full bg-zinc-200"
                role="progressbar"
                aria-valuenow={Math.round(progressPercentage)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Services carousel progress"
              >
                <motion.div
                  className="h-full rounded-full bg-zinc-900"
                  initial={false}
                  animate={{
                    width: `${Math.max(25, progressPercentage)}%`,
                    x:
                      maxIndex > 0
                        ? `${
                            (currentIndex / maxIndex) *
                            (100 - Math.max(25, 100 / (maxIndex + 1)))
                          }%`
                        : 0,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 35 }}
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next services"
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                  currentIndex >= maxIndex
                    ? "cursor-not-allowed opacity-30 text-zinc-400"
                    : "cursor-pointer text-zinc-700 hover:border-zinc-900 hover:text-black"
                }`}
              >
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>

            {/* Horizontal Cards Viewport */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-4 sm:gap-5"
                animate={{
                  x: `calc(-${currentIndex} * (${100 / cardsPerView}% + ${
                    (cardsPerView - 1) * (18 / cardsPerView)
                  }px))`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                  mass: 0.8,
                }}
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="flex-none"
                      style={{
                        width: `calc(${100 / cardsPerView}% - ${
                          (18 * (cardsPerView - 1)) / cardsPerView
                        }px)`,
                      }}
                    >
                      <Link
                        href={serviceLinkHref}
                        className="group flex h-[255px] sm:h-[265px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#141517] p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:border-zinc-600 hover:bg-[#1a1b1e] hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-display text-lg font-bold tracking-tight !text-white transition-colors duration-200 group-hover:!text-zinc-100 sm:text-xl">
                              {service.title}
                            </h3>
                            {Icon && (
                              <span
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-colors group-hover:bg-zinc-700 group-hover:text-white"
                                aria-hidden="true"
                              >
                                <Icon size={16} strokeWidth={1.8} />
                              </span>
                            )}
                          </div>

                          <p className="mt-3 text-xs leading-relaxed text-zinc-400 group-hover:text-zinc-300 sm:text-[13.5px]">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider !text-zinc-200 transition-colors duration-200 group-hover:!text-white">
                            {serviceLinkLabel || "Explore service"}
                            <ArrowLink
                              size={14}
                              className="transition-transform duration-200 group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}