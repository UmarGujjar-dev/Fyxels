"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  ArrowUpRight,
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  Palette,
  Sparkles,
  Bot,
  Layers,
  Rocket,
  Video,
  Zap,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export function WhatWeDoMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (resolvedTheme === "light" || theme === "light");

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.dataset.isDown = "true";
    el.dataset.startX = (e.pageX - el.offsetLeft).toString();
    el.dataset.scrollLeft = el.scrollLeft.toString();
  };

  const handleMouseLeaveOrUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.dataset.isDown = "false";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.dataset.isDown !== "true") return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const startX = parseFloat(el.dataset.startX || "0");
    const scrollLeft = parseFloat(el.dataset.scrollLeft || "0");
    const walk = (x - startX) * 1.8;
    el.scrollLeft = scrollLeft - walk;
  };

  const hoverBgClass = isLight
    ? "hover:bg-zinc-100/90"
    : "hover:bg-white/[0.08]";

  return (
    <div
      className="static group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Nav Link Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 hover:text-orange-500 transition-colors py-6 text-xs font-display font-bold outline-none cursor-pointer"
        style={{ color: isLight ? "#17191c" : "#ffffff" }}
      >
        <span>What We Do</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-orange-500" : ""}`}
        />
      </button>

      {/* Glassy Page Backdrop Overlay (Starts strictly below 80px header) */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[80px] pointer-events-none transition-all duration-300 backdrop-blur-md ${
          isOpen
            ? "opacity-100 bg-black/25 dark:bg-black/60 z-30"
            : "opacity-0 z-[-1]"
        }`}
      />

      {/* Invisible Bridge */}
      {isOpen && (
        <div className="absolute left-0 right-0 h-4 top-full -translate-y-2 pointer-events-auto" />
      )}

      {/* 3-Column Mega Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full w-full z-[100] transition-all duration-200 border-y backdrop-blur-xl ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{
          backgroundColor: isLight ? "#ffffff" : "#0c0c0e",
          borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.12)",
          boxShadow: isLight
            ? "0 4px 15px rgba(0, 0, 0, 0.03)"
            : "0 8px 24px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="container-custom py-8">
          {/* Main 3 Columns Grid */}
          <div className="grid grid-cols-12 gap-8 divide-x divide-zinc-200 dark:divide-zinc-800">

            {/* Column 1: WEB, ECOMMERCE & MOBILE APP DEVELOPMENT */}
            <div className="col-span-4 pr-6 space-y-4 text-left">
              <div
                className="text-[11px] font-mono font-bold uppercase tracking-widest flex items-center justify-between mb-2"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                <span>WEB, MOBILE &amp; ECOMMERCE</span>
                <span className="text-[10px] text-orange-500 font-bold px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                  DEVELOPMENT
                </span>
              </div>

              <div className="space-y-1">
                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Globe size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>Web Design &amp; Custom Web Dev</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Corporate Websites, Landing Pages, Custom Web Solutions &amp; CMS (WordPress/Headless).
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <ShoppingCart size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Shopify &amp; Ecommerce Stores</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Shopify Development, Custom Storefronts, Checkout APIs &amp; WooCommerce.
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Smartphone size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>Mobile App Development</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    iOS Apps (Swift), Android Apps (Kotlin), Cross-Platform Apps (Flutter/React Native).
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Code2 size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Admin Panels &amp; API Integration</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Custom Admin Dashboards, REST &amp; GraphQL API Integrations, Payment Gateways.
                  </p>
                </Link>
              </div>

              <div
                className="pt-4 border-t space-y-2.5"
                style={{ borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.12)" }}
              >
                <div
                  className="text-[11px] font-mono font-bold uppercase tracking-widest mb-2"
                  style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                >
                  WEB &amp; APP TECH STACK
                </div>
                <div
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeaveOrUp}
                  onMouseUp={handleMouseLeaveOrUp}
                  onMouseMove={handleMouseMove}
                  className="flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap flex-nowrap py-1 cursor-grab active:cursor-grabbing select-none"
                >
                  {["Next.js", "React Native", "Shopify", "WordPress", "Flutter", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border flex-shrink-0"
                      style={{
                        backgroundColor: isLight ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        borderColor: isLight ? "#e5e7eb" : "rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#374151" : "#d1d5db",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: UI/UX DESIGN, BRANDING & MOTION MEDIA */}
            <div className="col-span-4 px-6 space-y-4 text-left">
              <div
                className="text-[11px] font-mono font-bold uppercase tracking-widest flex items-center justify-between mb-2"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                <span>UI/UX, BRAND &amp; MOTION</span>
                <span className="text-[10px] text-teal-400 font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                  CREATIVE STUDIO
                </span>
              </div>

              <div className="space-y-1">
                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Palette size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>UI / UX &amp; Design Systems</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    UX Research, Wireframing, Prototypes, SaaS &amp; App UI Design, Design Systems.
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Sparkles size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>Brand Identity &amp; Corporate Guidelines</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Logo Design, Brand Guidelines, Company Profiles, Packaging &amp; Social Media Assets.
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Video size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>AI Video &amp; Motion Design</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    AI Video Gen, AI Ad Creatives, Reels/Shorts, Product Promos &amp; UGC Style Videos.
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Zap size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>3D &amp; Explainer Motion Graphics</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    3D Animation, Explainer Videos, Logo &amp; UI Animations, Motion Graphics.
                  </p>
                </Link>
              </div>

              <div
                className="pt-4 border-t space-y-2.5"
                style={{ borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.12)" }}
              >
                <div
                  className="text-[11px] font-mono font-bold uppercase tracking-widest mb-2"
                  style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                >
                  DESIGN &amp; MOTION ASSETS
                </div>
                <div
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeaveOrUp}
                  onMouseUp={handleMouseLeaveOrUp}
                  onMouseMove={handleMouseMove}
                  className="flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap flex-nowrap py-1 cursor-grab active:cursor-grabbing select-none"
                >
                  {["Figma", "Framer", "After Effects", "Cinema 4D", "Midjourney", "Lottie"].map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border flex-shrink-0"
                      style={{
                        backgroundColor: isLight ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        borderColor: isLight ? "#e5e7eb" : "rgba(255, 255, 255, 0.1)",
                        color: isLight ? "#374151" : "#d1d5db",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: AI AUTOMATION, SAAS PLATFORMS & MVP LAUNCH */}
            <div className="col-span-4 pl-6 space-y-4 text-left">
              <div
                className="text-[11px] font-mono font-bold uppercase tracking-widest flex items-center justify-between mb-2"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                <span>AI, SAAS &amp; MVP LAUNCH</span>
                <span className="text-[10px] text-orange-400 font-bold px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                  NEW AI TECH
                </span>
              </div>

              <div className="space-y-1">
                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Bot size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>AI Automation &amp; Chatbots</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    WhatsApp Automation, AI Customer Support, CRM Workflow Bots &amp; Lead Gen.
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Layers size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>SaaS Platforms &amp; Dashboards</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Multi-Tenant SaaS Engines, CRM Solutions, Billing Systems &amp; AI SaaS Products.
                  </p>
                </Link>

                <Link
                  href="/services"
                  className={`group/item block p-2.5 -mx-2.5 rounded-lg transition-all ${hoverBgClass}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="text-sm font-display font-bold group-hover/item:text-orange-500 transition-colors flex items-center gap-0 group-hover/item:gap-2"
                      style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                    >
                      <div className="w-0 opacity-0 -translate-x-2 group-hover/item:w-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 overflow-hidden flex-shrink-0 flex items-center">
                        <Rocket size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>MVP Development &amp; Validation</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Startup MVPs, SaaS MVPs, Web/App MVPs &amp; Rapid Product Validation Systems.
                  </p>
                </Link>
              </div>

              <div
                className="pt-3 border-t space-y-2"
                style={{ borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.12)" }}
              >
                <Link
                  href="/services"
                  className="flex items-center justify-between text-xs font-display font-bold hover:text-orange-500 transition-colors"
                  style={{ color: isLight ? "#17191c" : "#ffffff" }}
                >
                  <span>Browse All Services &amp; Capabilities</span>
                  <ArrowUpRight size={14} className="text-orange-500" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar: POPULAR SERVICES QUICK FILTER BADGES */}
          <div
            className="mt-6 pt-5 border-t flex items-center justify-between gap-4 min-w-0"
            style={{ borderColor: isLight ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)" }}
          >
            <div
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap flex-nowrap min-w-0 py-1 flex-1 cursor-grab active:cursor-grabbing select-none"
            >
              <span
                className="text-[11px] font-mono font-bold uppercase tracking-wider mr-2 flex-shrink-0"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                POPULAR:
              </span>
              {[
                "UI/UX Design",
                "Brand Identity",
                "Shopify & E-Commerce",
                "AI Automation & Chatbots",
                "SaaS Development",
                "MVP Development",
              ].map((item) => (
                <Link
                  key={item}
                  href="/services"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-semibold transition-all border hover:border-orange-500 hover:text-orange-500 flex-shrink-0"
                  style={{
                    backgroundColor: isLight ? "#f9fafb" : "rgba(255, 255, 255, 0.04)",
                    borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
                    color: isLight ? "#374151" : "#e4e4e7",
                  }}
                >
                  <CheckCircle2 size={11} className="text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="text-xs font-display font-bold text-orange-500 hover:underline flex items-center gap-1 flex-shrink-0"
            >
              <span>Get Custom Quote</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
