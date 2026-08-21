"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ArrowUpRight, ArrowRight, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    eyebrow: "Web Engineering",
    headline: "We Build\nDigital Products\nThat Scale.",
    subtext: "From startup MVP to enterprise platform — full-stack Next.js, React Native & Shopify Plus engineering.",
    cta: { label: "Start a Project", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/services" },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2072&q=80",
    accent: "#f97316",
    tag: "Full-Stack Engineering",
  },
  {
    id: 2,
    eyebrow: "AI & Automation",
    headline: "Autonomous AI\nAgents That\nThink & Act.",
    subtext: "Custom LLM pipelines, RAG search, vector databases & agentic workflows built for production.",
    cta: { label: "Explore AI Services", href: "/services" },
    secondaryCta: { label: "Talk to an Expert", href: "/contact" },
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=2072&q=80",
    accent: "#8b5cf6",
    tag: "Intelligent Systems",
  },
  {
    id: 3,
    eyebrow: "Cloud & DevOps",
    headline: "Cloud Infra\nBuilt for\n99.999% Uptime.",
    subtext: "AWS, Kubernetes, Terraform & CI/CD pipelines. SOC2 compliant. Enterprise-grade from day one.",
    cta: { label: "See Infrastructure", href: "/services" },
    secondaryCta: { label: "Get a Quote", href: "/contact" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80",
    accent: "#06b6d4",
    tag: "Cloud Infrastructure",
  },
  {
    id: 4,
    eyebrow: "Mobile Engineering",
    headline: "iOS & Android\nApps Loved\nBy Millions.",
    subtext: "React Native, Swift, Kotlin — cross-platform or native. From design to App Store launch in 30 days.",
    cta: { label: "Build My App", href: "/contact" },
    secondaryCta: { label: "Mobile Portfolio", href: "/services" },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2072&q=80",
    accent: "#10b981",
    tag: "Mobile Development",
  },
];

export function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => setMounted(true), []);
  const isLight = mounted && (resolvedTheme === "light" || theme === "light");

  const goTo = useCallback((idx: number, dir = 1) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const prev = () => goTo((current - 1 + slides.length) % slides.length, -1);
  const next = useCallback(() => goTo((current + 1) % slides.length, 1), [current, goTo]);

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [isPlaying, next]);

  const slide = slides[current];

  const imgVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.06, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, scale: 0.97, x: dir > 0 ? -40 : 40 }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 28 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* ─── MAIN HERO CARD ───────────────────────────────────────────────── */}
      <div className="relative w-full" style={{ minHeight: "88vh" }}>

        {/* Full-bleed Background Image */}
        <AnimatePresence custom={direction} mode="sync">
          <motion.div
            key={slide.id + "-bg"}
            custom={direction}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.32, 0, 0.67, 0] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.tag}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Layered gradient: strong on left for text legibility, subtle right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* ─── CONTENT OVERLAY ────────────────────────────────────────────── */}
        <div className="relative z-10 container-custom flex flex-col justify-end h-full" style={{ minHeight: "88vh", paddingTop: "5rem", paddingBottom: "4rem" }}>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

            {/* LEFT TEXT BLOCK */}
            <div className="lg:col-span-8 space-y-6">

              {/* Eyebrow Tag */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id + "-eye"}
                  variants={textVariants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-sm border text-[11px] font-mono font-bold tracking-widest uppercase"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderColor: slide.accent + "60",
                    color: slide.accent,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }} />
                  {slide.eyebrow}
                </motion.div>
              </AnimatePresence>

              {/* Headline */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slide.id + "-h1"}
                  variants={textVariants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
                  className="text-[clamp(3.2rem,7vw,7rem)] font-display font-black tracking-[-0.04em] text-white leading-[0.9]"
                >
                  {slide.headline.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {i === 1 ? (
                        <span
                          className="bg-clip-text text-transparent"
                          style={{
                            backgroundImage: `linear-gradient(100deg, ${slide.accent} 0%, color-mix(in srgb, ${slide.accent} 40%, white) 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {line}
                        </span>
                      ) : line}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>

              {/* Subtext */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={slide.id + "-sub"}
                  variants={textVariants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
                  className="text-base sm:text-lg font-sans leading-relaxed max-w-lg text-zinc-300"
                >
                  {slide.subtext}
                </motion.p>
              </AnimatePresence>

              {/* CTAs */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id + "-ctas"}
                  variants={textVariants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-display font-bold text-white shadow-xl transition-all hover:scale-[1.03] active:scale-[0.98]"
                    style={{ backgroundColor: slide.accent, boxShadow: `0 8px 32px ${slide.accent}55` }}
                  >
                    <span>{slide.cta.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-display font-bold text-white border border-white/25 backdrop-blur-sm hover:border-white/50 transition-all"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  >
                    {slide.secondaryCta.label}
                    <ArrowUpRight size={15} className="opacity-60" />
                  </Link>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* RIGHT: Slide Thumbnails & Stats */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end gap-4">

              {/* Slide Thumbnail Strip */}
              <div className="flex flex-col gap-3 w-full max-w-[200px]">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(idx, idx > current ? 1 : -1)}
                    className={`relative w-full h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      idx === current
                        ? "border-white scale-105 shadow-xl"
                        : "border-white/20 opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image src={s.image} alt={s.tag} fill className="object-cover" />
                    {idx === current && (
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                    )}
                    <div className="absolute bottom-1 left-1.5 text-[10px] font-mono font-bold text-white/90 truncate max-w-[90%]">
                      {s.tag}
                    </div>
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* ─── BOTTOM BAR: Progress + Nav Controls ─────────────────────── */}
          <div className="mt-10 flex items-center justify-between gap-6">

            {/* Progress Bars */}
            <div className="flex items-center gap-2 flex-1 max-w-xs">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goTo(idx, idx > current ? 1 : -1)}
                  className="relative h-0.5 rounded-full overflow-hidden cursor-pointer transition-all duration-300"
                  style={{ flex: idx === current ? 3 : 1, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  {idx === current && isPlaying && (
                    <motion.div
                      key={s.id + "-prog"}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute inset-y-0 left-0 w-full origin-left rounded-full"
                      style={{ backgroundColor: slide.accent }}
                    />
                  )}
                  {idx === current && !isPlaying && (
                    <div className="absolute inset-y-0 left-0 w-full rounded-full" style={{ backgroundColor: slide.accent }} />
                  )}
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-xs font-mono font-bold text-white/50 tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>

            {/* Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => next()}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
