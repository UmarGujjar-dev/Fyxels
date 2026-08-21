"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Sun,
  Moon,
  ChevronDown,
  Search,
  Volume2,
  VolumeX,
  Menu,
  X,
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Palette,
  Cloud,
} from "lucide-react";
import { DottedScatterIcon } from "@/components/ui/DottedScatterIcon";

import { CommandLoopIcon } from "@/components/ui/CommandLoopIcon";
import { WhoWeServeMegaMenu } from "@/components/layout/WhoWeServeMegaMenu";
import { WhatWeDoMegaMenu } from "@/components/layout/WhatWeDoMegaMenu";

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [revealHeader, setRevealHeader] = useState(false);
  const [mobileWhoWeServeOpen, setMobileWhoWeServeOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setRevealHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Ctrl + K / Cmd + K search shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isLight = mounted && (resolvedTheme === "light" || theme === "light");

  const dropdownItems = {
    "Who We Serve": [
      { name: "Startups & MVPs", desc: "Rapid 0-to-1 product development" },
      { name: "Enterprise & Scaleups", desc: "Complex architecture & infrastructure" },
      { name: "SaaS Platforms", desc: "Subscription & multi-tenant engines" },
      { name: "E-Commerce Brands", desc: "Headless storefronts & custom APIs" },
    ],
    "What We Do": [
      { name: "Custom Software", desc: "Tailor-made software engineering", Icon: Code2 },
      { name: "Web Applications", desc: "Next.js & React full-stack solutions", Icon: Globe },
      { name: "Mobile App Engineering", desc: "iOS & Android native/cross-platform", Icon: Smartphone },
      { name: "UI/UX Product Design", desc: "Research, wireframes & design systems", Icon: Palette },
      { name: "Cloud & DevOps", desc: "AWS, Kubernetes, CI/CD pipelines", Icon: Cloud },
    ],
  };

  return (
    <>
      {/* Primary Top Header (Normal document flow at page top) */}
      <header
        className="w-full border-b transition-colors relative z-40"
        style={{
          borderColor: "var(--border)",
          backgroundColor: isLight ? "rgba(255, 255, 255, 0.98)" : "rgba(10, 10, 10, 0.95)",
        }}
      >
        <div className="container-custom h-20 flex items-center justify-between">
          {/* Left: Brand Logo (Extra Large) */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            {mounted ? (
              <Image
                src={isLight ? "/logo-light.png" : "/logo-dark.png"}
                alt="Fyxels Logo"
                width={240}
                height={60}
                className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            ) : (
              <Image
                src="/logo-dark.png"
                alt="Fyxels Logo"
                width={240}
                height={60}
                className="h-14 md:h-16 w-auto object-contain"
                priority
              />
            )}
          </Link>

          {/* Center: Enterprise i2c Navigation Items */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-display font-bold" style={{ color: isLight ? "#17191c" : "#ffffff" }}>
            <WhoWeServeMegaMenu />
            <WhatWeDoMegaMenu />

            <Link href="/services" className="hover:text-orange-500 transition-colors py-1">
              How We&apos;re Different
            </Link>

            <Link href="/about" className="hover:text-orange-500 transition-colors py-1">
              Who We Are
            </Link>

            <Link href="/insights" className="hover:text-orange-500 transition-colors py-1">
              In The Know
            </Link>
          </nav>

          {/* Right: Utility Bar Icons & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle Icon */}
            {mounted && (
              <button
                onClick={() => setTheme(isLight ? "dark" : "light")}
                className="p-2 rounded-lg border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-center transition-colors"
                style={{ color: isLight ? "#17191c" : "#ffffff" }}
                title="Toggle theme"
              >
                {isLight ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            )}

            {/* Search Icon & Animated Command Badge */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-center transition-colors gap-2"
              style={{ color: isLight ? "#17191c" : "#ffffff" }}
              title="Search website (Cmd/Ctrl + K)"
            >
              <Search size={18} />
              <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-inner">
                <CommandLoopIcon className="w-4 h-4" />
                <span>K</span>
              </kbd>
            </button>

            {/* Secondary Action: Client Login */}
            <Link
              href="/login"
              className="hidden lg:inline-flex items-center justify-center px-4.5 py-2 text-xs font-display font-bold rounded-full border transition-all hover:border-orange-500"
              style={{
                borderColor: isLight ? "#d1d5db" : "rgba(255, 255, 255, 0.4)",
                color: isLight ? "#17191c" : "#ffffff",
                backgroundColor: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
              }}
            >
              Client Login
            </Link>

            {/* Primary Action: Contact Us */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-primary-orange py-2.5 px-5 text-xs font-display font-bold tracking-wide whitespace-nowrap"
            >
              Contact Us <ArrowRight size={13} className="inline-block flex-shrink-0" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Notched Tab Trigger & Slide-Down Header (Smoothly slides from top when scrolled) */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none group transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={() => setRevealHeader(true)}
        onMouseLeave={() => setRevealHeader(false)}
      >
        {/* Full Slide-Down Floating Navigation Bar */}
        <div
          className={`w-full border-b backdrop-blur-md transition-all duration-300 shadow-2xl relative z-40 pointer-events-auto ${
            revealHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
          style={{
            borderColor: "var(--border)",
            backgroundColor: isLight ? "rgba(255, 255, 255, 0.96)" : "rgba(10, 10, 10, 0.95)",
          }}
        >
          <div className="container-custom h-20 flex items-center justify-between">
            {/* Left Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Image
                src={isLight ? "/logo-light.png" : "/logo-dark.png"}
                alt="Fyxels Logo"
                width={240}
                height={60}
                className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* Navigation Items */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-display font-bold" style={{ color: isLight ? "#17191c" : "#ffffff" }}>
              <WhoWeServeMegaMenu />
              <WhatWeDoMegaMenu />
              <Link href="/services" className="hover:text-orange-500 transition-colors py-1">
                How We&apos;re Different
              </Link>
              <Link href="/about" className="hover:text-orange-500 transition-colors py-1">
                Who We Are
              </Link>
              <Link href="/insights" className="hover:text-orange-500 transition-colors py-1">
                In The Know
              </Link>
            </nav>

            {/* Utility Bar Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(isLight ? "dark" : "light")}
                  className="p-2 rounded-lg border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-center transition-colors"
                  style={{ color: isLight ? "#17191c" : "#ffffff" }}
                  title="Toggle theme"
                >
                  {isLight ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              )}

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-center transition-colors gap-2"
                style={{ color: isLight ? "#17191c" : "#ffffff" }}
                title="Search website (Cmd/Ctrl + K)"
              >
                <Search size={18} />
                <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-inner">
                  <CommandLoopIcon className="w-4 h-4" />
                  <span>K</span>
                </kbd>
              </button>

              <Link
                href="/login"
                className="hidden lg:inline-flex items-center justify-center px-4.5 py-2 text-xs font-display font-bold rounded-full border transition-all hover:border-orange-500"
                style={{
                  borderColor: isLight ? "#d1d5db" : "rgba(255, 255, 255, 0.4)",
                  color: isLight ? "#17191c" : "#ffffff",
                  backgroundColor: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                }}
              >
                Client Login
              </Link>

              <Link
                href="/contact"
                className="hidden sm:inline-flex btn-primary-orange py-2.5 px-5 text-xs font-display font-bold tracking-wide whitespace-nowrap"
              >
                Contact Us <ArrowRight size={13} className="inline-block flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* Notched Tab Trigger: Stuck at top-0 when closed, moves down directly underneath header when opened */}
        <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-30">
          <div
            onClick={() => setRevealHeader((prev) => !prev)}
            className={`pointer-events-auto cursor-pointer transition-all duration-300 relative group/tab ${
              revealHeader ? "translate-y-[80px]" : "translate-y-0"
            }`}
            title="Hover or click to toggle Navigation Header"
          >
            {/* Notched Container SVG Box with Inverted Side Curves & Theme Outline */}
            <div className="relative flex items-center justify-center px-10 py-2.5">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 160 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,0 C 22,0 24,40 40,40 L 120,40 C 136,40 138,0 160,0 Z"
                  fill={isLight ? "#ffffff" : "#141416"}
                  stroke={isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)"}
                  strokeWidth="1.5"
                />
              </svg>

              {/* Tab Inner Contents: Dual Bars + Chevron Indicator */}
              <div className="relative z-10 flex items-center gap-2.5 py-0.5 px-2 text-zinc-700 dark:text-zinc-200 group-hover/tab:text-[#00deaa] transition-colors">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="w-5 h-0.5 rounded-full bg-current transition-all duration-200 group-hover/tab:bg-[#00deaa]" />
                  <span className="w-5 h-0.5 rounded-full bg-current transition-all duration-200 group-hover/tab:bg-[#00deaa]" />
                </div>
                <ChevronDown
                  size={15}
                  className={`transition-all duration-300 group-hover/tab:text-[#00deaa] ${
                    revealHeader ? "rotate-180 text-[#00deaa]" : "text-zinc-500 dark:text-zinc-400"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Search Overlay Modal (Theme Responsive & Subtle Backdrop) */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-24 px-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl p-6 rounded-3xl border shadow-2xl space-y-6 text-left animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: isLight ? "#ffffff" : "#121214",
              borderColor: isLight ? "#e5e7eb" : "#27272a",
              color: isLight ? "#17191c" : "#ffffff",
              boxShadow: isLight
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                : "0 25px 60px rgba(0, 0, 0, 0.9)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar: Light Theme = Crisp White/Gray, Dark Theme = Deep Black */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search services, tech stack, case studies... (Ctrl + K)"
                className="w-full py-3.5 pl-5 pr-12 rounded-full text-sm font-sans outline-none border transition-colors"
                style={{
                  backgroundColor: isLight ? "#f3f4f6" : "#000000",
                  color: isLight ? "#0a0a0a" : "#ffffff",
                  borderColor: isLight ? "#e5e7eb" : "#27272a",
                }}
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-3.5 p-1 rounded-full transition-colors"
                title="Close search"
              >
                <X
                  className="w-4 h-4 rounded-full p-0.5 transition-colors"
                  style={{
                    backgroundColor: isLight ? "#e5e7eb" : "#27272a",
                    color: isLight ? "#4b5563" : "#d4d4d8",
                  }}
                />
              </button>
            </div>

            {/* TRENDING Section */}
            <div>
              <div
                className="text-[11px] font-display font-bold uppercase tracking-wider mb-3"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                TRENDING
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Next.js 14",
                  "Custom SaaS Engine",
                  "Flutter Mobile Apps",
                  "Cloud Infrastructure",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all border shadow-sm hover:border-orange-500"
                    style={{
                      backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.8)",
                      borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                      color: isLight ? "#1f2937" : "#e4e4e7",
                    }}
                  >
                    <span className="text-orange-500">↗</span> {term}
                  </button>
                ))}
              </div>
            </div>

            {/* RECENTLY VIEWED Section */}
            <div>
              <div
                className="text-[11px] font-display font-bold uppercase tracking-wider mb-3"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                RECENTLY VIEWED
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Link
                  href="/services"
                  onClick={() => setSearchOpen(false)}
                  className="p-3.5 rounded-2xl border shadow-sm hover:border-orange-500 transition-all group"
                  style={{
                    backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.6)",
                    borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <div
                    className="text-xs font-bold group-hover:text-orange-500 transition-colors"
                    style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                  >
                    Custom Software
                  </div>
                  <div
                    className="text-[10px] font-sans mt-0.5"
                    style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                  >
                    Enterprise scale
                  </div>
                </Link>

                <Link
                  href="/services"
                  onClick={() => setSearchOpen(false)}
                  className="p-3.5 rounded-2xl border shadow-sm hover:border-orange-500 transition-all group"
                  style={{
                    backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.6)",
                    borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                    🌐
                  </div>
                  <div
                    className="text-xs font-bold group-hover:text-orange-500 transition-colors"
                    style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                  >
                    Web Applications
                  </div>
                  <div
                    className="text-[10px] font-sans mt-0.5"
                    style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                  >
                    Next.js &amp; React
                  </div>
                </Link>

                <Link
                  href="/services"
                  onClick={() => setSearchOpen(false)}
                  className="p-3.5 rounded-2xl border shadow-sm hover:border-orange-500 transition-all group"
                  style={{
                    backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.6)",
                    borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div
                    className="text-xs font-bold group-hover:text-orange-500 transition-colors"
                    style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                  >
                    Mobile Apps
                  </div>
                  <div
                    className="text-[10px] font-sans mt-0.5"
                    style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                  >
                    iOS &amp; Android
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation (Theme Responsive) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t p-6 space-y-4 font-display font-bold text-sm"
          style={{
            backgroundColor: mounted && theme === "light" ? "#ffffff" : "var(--bg-secondary)",
            borderColor: "var(--border)",
          }}
        >
          {/* Mobile "Who We Serve" Accordion */}
          <div>
            <button
              onClick={() => setMobileWhoWeServeOpen(!mobileWhoWeServeOpen)}
              className="flex items-center justify-between w-full py-2 hover:text-orange-500 transition-colors"
              style={{ color: mounted && theme === "light" ? "#17191c" : "#ffffff" }}
            >
              <span>Who We Serve</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileWhoWeServeOpen ? "rotate-180 text-orange-500" : ""}`}
              />
            </button>
            {mobileWhoWeServeOpen && (
              <div className="pl-4 mt-2 space-y-3 border-l-2 border-zinc-200 dark:border-zinc-800">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Startups & MVPs</span>
                  Rapid 0-to-1 product engineering
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Enterprise & Scaleups</span>
                  Multi-tenant SaaS & cloud scaling
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">E-Commerce & Retail</span>
                  Headless storefronts & custom APIs
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">AI & Automation Pioneers</span>
                  Custom LLM agents & data pipelines
                </Link>
              </div>
            )}
          </div>

          {/* Mobile "What We Do" Accordion */}
          <div>
            <button
              onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
              className="flex items-center justify-between w-full py-2 hover:text-orange-500 transition-colors"
              style={{ color: mounted && theme === "light" ? "#17191c" : "#ffffff" }}
            >
              <span>What We Do</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileWhatWeDoOpen ? "rotate-180 text-orange-500" : ""}`}
              />
            </button>
            {mobileWhatWeDoOpen && (
              <div className="pl-4 mt-2 space-y-3 border-l-2 border-zinc-200 dark:border-zinc-800">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Web &amp; Custom Apps</span>
                  Corporate Web, Next.js &amp; WordPress
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Shopify &amp; Ecommerce</span>
                  Storefronts, Checkout APIs &amp; WooCommerce
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">UI / UX &amp; Brand Identity</span>
                  Design Systems, Logo &amp; Corporate Kits
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Mobile App Development</span>
                  iOS (Swift), Android &amp; Flutter Apps
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">AI Automation &amp; Chatbots</span>
                  WhatsApp Bots, CRM &amp; Lead Gen Systems
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">AI Video &amp; 3D Motion</span>
                  Ad Creatives, Reels &amp; Motion Graphics
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-sans hover:text-orange-500 text-zinc-500 dark:text-zinc-400"
                >
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Startup MVP Sprint</span>
                  Production-ready MVP launch in 30 Days
                </Link>
              </div>
            )}
          </div>

          {/* Other Mobile Links */}
          {[
            { name: "How We're Different", href: "/about" },
            { name: "Who We Are", href: "/about" },
            { name: "In The Know", href: "/insights" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-orange-500 transition-colors"
              style={{ color: mounted && theme === "light" ? "#17191c" : "#ffffff" }}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: "var(--border)" }}>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary-enterprise justify-center text-xs"
              style={{
                backgroundColor: mounted && theme === "light" ? "#f3f4f6" : "var(--bg-surface)",
                color: mounted && theme === "light" ? "#17191c" : "#ffffff",
                borderColor: mounted && theme === "light" ? "#e5e7eb" : "var(--border)",
              }}
            >
              Client Login
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-orange inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-display font-bold whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowRight size={14} className="flex-shrink-0" />
            </Link>
          </div>
        </div>
      )}

      {/* Premium Search Overlay Modal (Portal to document.body for 100% Clean Layering) */}
      {searchOpen && mounted && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-start justify-center pt-20 sm:pt-24 px-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl p-6 rounded-3xl border shadow-2xl space-y-6 text-left animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: isLight ? "#ffffff" : "#121214",
              borderColor: isLight ? "#e5e7eb" : "#27272a",
              color: isLight ? "#17191c" : "#ffffff",
              boxShadow: isLight
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                : "0 25px 60px rgba(0, 0, 0, 0.9)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search services, tech stack, case studies... (Ctrl + K)"
                className="w-full py-3.5 pl-5 pr-12 rounded-full text-sm font-sans outline-none border transition-colors"
                style={{
                  backgroundColor: isLight ? "#f3f4f6" : "#000000",
                  color: isLight ? "#0a0a0a" : "#ffffff",
                  borderColor: isLight ? "#e5e7eb" : "#27272a",
                }}
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-3.5 p-1 rounded-full transition-colors"
                title="Close search"
              >
                <X
                  className="w-4 h-4 rounded-full p-0.5 transition-colors"
                  style={{
                    backgroundColor: isLight ? "#e5e7eb" : "#27272a",
                    color: isLight ? "#4b5563" : "#d4d4d8",
                  }}
                />
              </button>
            </div>

            {/* TRENDING Section */}
            <div>
              <div
                className="text-[11px] font-display font-bold uppercase tracking-wider mb-3"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                TRENDING
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Next.js 14",
                  "Custom SaaS Engine",
                  "Flutter Mobile Apps",
                  "Cloud Infrastructure",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all border shadow-sm hover:border-orange-500"
                    style={{
                      backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.8)",
                      borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                      color: isLight ? "#1f2937" : "#e4e4e7",
                    }}
                  >
                    <span className="text-orange-500">↗</span> {term}
                  </button>
                ))}
              </div>
            </div>

            {/* RECENTLY VIEWED Section */}
            <div>
              <div
                className="text-[11px] font-display font-bold uppercase tracking-wider mb-3"
                style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
              >
                RECENTLY VIEWED
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Link
                  href="/services"
                  onClick={() => setSearchOpen(false)}
                  className="p-3.5 rounded-2xl border shadow-sm hover:border-orange-500 transition-all group"
                  style={{
                    backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.6)",
                    borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <div
                    className="text-xs font-bold group-hover:text-orange-500 transition-colors"
                    style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                  >
                    Custom Software
                  </div>
                  <div
                    className="text-[10px] font-sans mt-0.5"
                    style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                  >
                    Enterprise scale
                  </div>
                </Link>

                <Link
                  href="/services"
                  onClick={() => setSearchOpen(false)}
                  className="p-3.5 rounded-2xl border shadow-sm hover:border-orange-500 transition-all group"
                  style={{
                    backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.6)",
                    borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                    🌐
                  </div>
                  <div
                    className="text-xs font-bold group-hover:text-orange-500 transition-colors"
                    style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                  >
                    Web Applications
                  </div>
                  <div
                    className="text-[10px] font-sans mt-0.5"
                    style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                  >
                    Next.js &amp; React
                  </div>
                </Link>

                <Link
                  href="/services"
                  onClick={() => setSearchOpen(false)}
                  className="p-3.5 rounded-2xl border shadow-sm hover:border-orange-500 transition-all group"
                  style={{
                    backgroundColor: isLight ? "#f9fafb" : "rgba(39, 39, 42, 0.6)",
                    borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)",
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div
                    className="text-xs font-bold group-hover:text-orange-500 transition-colors"
                    style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
                  >
                    Mobile Apps
                  </div>
                  <div
                    className="text-[10px] font-sans mt-0.5"
                    style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
                  >
                    iOS &amp; Android
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
  </>
  );
}
