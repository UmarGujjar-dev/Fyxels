"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && theme === "light";

  return (
    <footer
      className="relative w-full overflow-hidden pt-10 pb-5 mt-10 transition-colors border-t"
      style={{
        backgroundColor: isLight ? "#ffffff" : "#0a0a0a",
        color: isLight ? "#17191c" : "#ffffff",
        borderColor: "var(--border)",
      }}
    >
      <div className="container-custom relative z-10 space-y-6">
        {/* Top Hero CTA Section */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto pt-1">
          {/* Logo Mark Badge with 10px Border Radius */}
          <div
            className="p-2.5 rounded-[10px] shadow-2xl inline-flex items-center justify-center transition-colors"
            style={{
              backgroundColor: isLight ? "#ffffff" : "#18181b",
              border: isLight ? "1px solid #e5e7eb" : "1px solid #27272a",
              boxShadow: isLight
                ? "0 10px 30px rgba(0, 0, 0, 0.08)"
                : "0 10px 30px rgba(249, 124, 0, 0.15)",
            }}
          >
            <Image
              src="/logo-mark.jpg"
              alt="Fyxels Logo Mark"
              width={56}
              height={56}
              className="w-11 h-11 object-cover rounded-[10px]"
            />
          </div>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight transition-colors"
            style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
          >
            Uncover a new approach to software
          </h2>

          {/* Subtitle */}
          <p
            className="text-xs sm:text-sm font-sans max-w-lg leading-relaxed transition-colors"
            style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
          >
            Partner with Fyxels today and join an elite ecosystem of high-growth companies, venture-backed startups, and Fortune 500 enterprises.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-display text-xs font-bold shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Get started for free</span>
            <ArrowDown size={14} className="flex-shrink-0" />
          </Link>
        </div>

        {/* Middle Navigation Columns */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t transition-colors"
          style={{ borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)" }}
        >
          {/* Column 1: Services */}
          <div className="space-y-3">
            <div
              className="text-xs font-mono font-bold tracking-wider transition-colors"
              style={{ color: isLight ? "#0a0a0a" : "#a1a1aa" }}
            >
              // Services
            </div>
            <ul
              className="space-y-2 text-xs font-sans transition-colors"
              style={{ color: isLight ? "#4b5563" : "#a1a1aa" }}
            >
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Web Applications</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Mobile App Engineering</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">UI/UX Product Design</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Cloud &amp; DevOps</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">All Capabilities</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <div
              className="text-xs font-mono font-bold tracking-wider transition-colors"
              style={{ color: isLight ? "#0a0a0a" : "#a1a1aa" }}
            >
              // Solutions
            </div>
            <ul
              className="space-y-2 text-xs font-sans transition-colors"
              style={{ color: isLight ? "#4b5563" : "#a1a1aa" }}
            >
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Enterprise Scalability</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">SaaS Platforms</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Dedicated Dev Teams</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">AI &amp; Automation</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Legacy Migration</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Security &amp; Audit</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <div
              className="text-xs font-mono font-bold tracking-wider transition-colors"
              style={{ color: isLight ? "#0a0a0a" : "#a1a1aa" }}
            >
              // Resources
            </div>
            <ul
              className="space-y-2 text-xs font-sans transition-colors"
              style={{ color: isLight ? "#4b5563" : "#a1a1aa" }}
            >
              <li><Link href="/insights" className="hover:text-orange-500 transition-colors">Engineering Insights</Link></li>
              <li><Link href="/insights" className="hover:text-orange-500 transition-colors">Case Studies</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Tech Stack Benchmark</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Architecture Roadmap</Link></li>
              <li><Link href="/insights" className="hover:text-orange-500 transition-colors">Open Source</Link></li>
              <li><Link href="/insights" className="hover:text-orange-500 transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Column 4: About */}
          <div className="space-y-3">
            <div
              className="text-xs font-mono font-bold tracking-wider transition-colors"
              style={{ color: isLight ? "#0a0a0a" : "#a1a1aa" }}
            >
              // About
            </div>
            <ul
              className="space-y-2 text-xs font-sans transition-colors"
              style={{ color: isLight ? "#4b5563" : "#a1a1aa" }}
            >
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Fyxels</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">Leadership</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">Global Partners</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">Security &amp; Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Newsletter Bar */}
        <div
          className="pt-5 border-t flex flex-col md:flex-row items-start md:items-end justify-between gap-4 transition-colors"
          style={{ borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.6)" }}
        >
          {/* Left Text */}
          <div className="space-y-1 max-w-md">
            <h4
              className="text-xs font-display font-bold uppercase tracking-wider transition-colors"
              style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
            >
              Never miss an update
            </h4>
            <p
              className="text-[11px] font-sans leading-relaxed transition-colors"
              style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
            >
              Get all the latest news, engineering posts, and product updates from{" "}
              <strong style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}>Fyxels</strong> delivered directly to your inbox. We&apos;ll rarely send more than once a month.
            </p>
          </div>

          {/* Right Newsletter Form */}
          <div className="w-full md:w-auto space-y-1.5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) alert(`Subscribed ${email} to Fyxels newsletter!`);
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1 sm:w-72">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-3.5 rounded-xl text-xs outline-none focus:border-orange-500 transition-colors"
                  style={{
                    backgroundColor: isLight ? "#ffffff" : "#18181b",
                    color: isLight ? "#0a0a0a" : "#ffffff",
                    borderColor: isLight ? "#e5e7eb" : "#27272a",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl font-display text-xs font-bold transition-colors flex-shrink-0"
                style={{
                  backgroundColor: isLight ? "#0a0a0a" : "#ffffff",
                  color: isLight ? "#ffffff" : "#0a0a0a",
                }}
              >
                Join
              </button>
            </form>
            <label
              className="flex items-center gap-2 text-[11px] cursor-pointer select-none transition-colors"
              style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
            >
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="rounded border-zinc-400 dark:border-zinc-700 text-orange-500 focus:ring-0"
              />
              <span>I agree to receive marketing emails from Fyxels</span>
            </label>
          </div>
        </div>

        {/* Footer Sub-bar (Copyright & Legal) */}
        <div
          className="pt-3 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] gap-2 transition-colors"
          style={{
            borderColor: isLight ? "#e5e7eb" : "rgba(63, 63, 70, 0.4)",
            color: isLight ? "#6b7280" : "#71717a",
          }}
        >
          <div>
            © {new Date().getFullYear()} Fyxels, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/about" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
