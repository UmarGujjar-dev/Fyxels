"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  ArrowUpRight,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Store,
  Plane,
  Building2,
  PhoneCall,
  ShieldAlert,
  Zap,
  Gamepad2,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export function WhoWeServeMegaMenu() {
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
      {/* Nav Link Trigger with Arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 hover:text-orange-500 transition-colors py-6 text-xs font-display font-bold outline-none cursor-pointer"
        style={{ color: isLight ? "#17191c" : "#ffffff" }}
      >
        <span>Who We Serve</span>
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
          <div className="grid grid-cols-12 gap-8 divide-x divide-zinc-200 dark:divide-zinc-800">
            
            {/* Column 1: FINANCIAL, HEALTHCARE & COMMERCE */}
            <div className="col-span-4 pr-6 space-y-4 text-left">
              <div
                className="text-[11px] font-mono font-bold uppercase tracking-widest flex items-center justify-between mb-2"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                <span>INDUSTRIES &amp; SECTORS</span>
                <span className="text-[10px] text-orange-500 font-bold px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                  FINANCE &amp; COMMERCE
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
                        <Landmark size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>Banking &amp; Fintech</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Digital ledgers, payment gateways, micro-lending &amp; PCI-DSS compliance.
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
                        <HeartPulse size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Healthcare &amp; Pharmaceuticals</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    HIPAA-compliant platforms, Telehealth portals, &amp; EHR integrations.
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
                        <ShoppingBag size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>E-Commerce &amp; Shopify</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Shopify Plus development, headless storefronts, &amp; custom checkouts.
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
                        <Store size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Retail &amp; CPG</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Omnichannel retail platforms, inventory sync, &amp; POS integrations.
                  </p>
                </Link>
              </div>
            </div>

            {/* Column 2: ENTERPRISE, GOVTECH & INDUSTRIAL */}
            <div className="col-span-4 px-6 space-y-4 text-left">
              <div
                className="text-[11px] font-mono font-bold uppercase tracking-widest flex items-center justify-between mb-2"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                <span>ENTERPRISE &amp; INFRASTRUCTURE</span>
                <span className="text-[10px] text-teal-400 font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                  GLOBAL SCALE
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
                        <Plane size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Travel &amp; Hospitality</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Booking engines, hotel reservation engines, &amp; PMS integrations.
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
                        <PhoneCall size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>Telecommunication</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    High-throughput subscriber portals &amp; billing engine infrastructure.
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
                        <ShieldAlert size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Public Sector &amp; GovTech</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Secure citizen portals, public services &amp; government cloud portals.
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
                      <span>Oil, Gas &amp; Energy</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Industrial IoT telemetry, asset tracking &amp; energy analytics dashboards.
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
                        <Gamepad2 size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Gaming &amp; Interactive Media</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Live-ops backends, leaderboard microservices &amp; Web3 gaming portals.
                  </p>
                </Link>
              </div>
            </div>

            {/* Column 3: STARTUPS, SAAS & EMERGING TECH */}
            <div className="col-span-4 pl-6 space-y-4 text-left">
              <div
                className="text-[11px] font-mono font-bold uppercase tracking-widest flex items-center justify-between mb-2"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                <span>STARTUPS &amp; HIGH-GROWTH</span>
                <span className="text-[10px] text-orange-400 font-bold px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                  RAPID 0-TO-1
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
                        <Rocket size={14} className="text-orange-500 flex-shrink-0" />
                      </div>
                      <span>Startups &amp; Scaleups</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    0-to-1 engineering, pitch prototypes, &amp; fast-track MVP launches.
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
                        <Building2 size={14} className="text-teal-400 flex-shrink-0" />
                      </div>
                      <span>Corporate &amp; Enterprise</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    Enterprise digital transformations, legacy migration &amp; scale.
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
                      <span>AI &amp; Automation Tech</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-orange-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                  <p className="font-sans leading-relaxed mt-0.5" style={{ fontSize: "12px", color: isLight ? "#737373" : "#a9a9a9", fontWeight: 400 }}>
                    LLM integration, autonomous AI agents, &amp; RAG vector databases.
                  </p>
                </Link>
              </div>

              <div
                className="pt-3 border-t space-y-2.5"
                style={{ borderColor: isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.12)" }}
              >
                <Link
                  href="/insights"
                  className="flex items-center justify-between text-xs font-display font-bold hover:text-orange-500 transition-colors"
                  style={{ color: isLight ? "#17191c" : "#ffffff" }}
                >
                  <span>Client Testimonials &amp; Success Stories</span>
                  <ArrowUpRight size={14} className="text-orange-500" />
                </Link>

                <Link
                  href="/insights"
                  className="flex items-center justify-between text-xs font-display font-bold hover:text-orange-500 transition-colors"
                  style={{ color: isLight ? "#17191c" : "#ffffff" }}
                >
                  <span>Industry Case Studies</span>
                  <ArrowUpRight size={14} className="text-orange-500" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar: INDUSTRIES QUICK BADGES */}
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
                INDUSTRIES:
              </span>
              {[
                "Banking & Fintech",
                "Shopify & Ecommerce",
                "Healthcare",
                "Retail & CPG",
                "Travel & Hospitality",
                "Public Sector",
                "Oil & Energy",
                "Gaming",
                "Startups",
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
              <span>Consult an Industry Expert</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
