"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    // Fast, ultra-smooth mathematical progress curve (0 -> 100)
    const startTime = Date.now();
    const duration = 1400; // 1.4s ultra-sleek loading time

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Easing curve (Ease-Out Power 3 for snappy feel)
      const easedProgress = Math.round(100 * (1 - Math.pow(1 - progressRatio, 3)));
      setProgress(easedProgress);

      if (progressRatio >= 1) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300); // Smooth exit delay
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  const isLight = mounted && (resolvedTheme === "light" || theme === "light");

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${progress === 100 ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      style={{
        backgroundColor: isLight ? "#ffffff" : "#080808",
      }}
    >
      {/* Subtle Ambient Background Laser Glow */}
      <div
        className="absolute w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, #f97c00 0%, #00deaa 60%, transparent 100%)",
        }}
      />

      {/* Center Brand Logo Mark Container */}
      <div className="relative flex flex-col items-center gap-6 z-10">
        {/* Glow Ring Behind Logo Mark */}
        <div className="relative group">
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-orange-500 to-teal-400 blur-lg opacity-40 animate-pulse" />

          {/* Logo Mark Frame (Matching 10px Radius style) */}
          <div
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[12px] overflow-hidden border shadow-2xl flex items-center justify-center transition-transform duration-500"
            style={{
              borderColor: isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)",
              backgroundColor: isLight ? "#ffffff" : "#0d0d0e",
            }}
          >
            <Image
              src="/logo-mark.jpg"
              alt="Fyxels Loading Mark"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-[10px]"
              priority
            />
          </div>
        </div>

        {/* Minimal Progress Numerical & Status Indicator */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono font-bold uppercase tracking-widest"
              style={{ color: isLight ? "#6b7280" : "#a1a1aa" }}
            >
              INITIALIZING ENGINE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
          </div>

          {/* Precision Percentage Counter */}
          <div
            className="text-2xl font-mono font-extrabold tracking-tighter"
            style={{ color: isLight ? "#0a0a0a" : "#ffffff" }}
          >
            {progress}
            <span className="text-sm font-sans text-orange-500 ml-0.5">%</span>
          </div>
        </div>

        {/* Ultra-Clean Bottom Laser Progress Beam (2px high) */}
        <div
          className="w-48 sm:w-64 h-1 rounded-full overflow-hidden relative"
          style={{
            backgroundColor: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-150 ease-out bg-gradient-to-r from-orange-500 via-teal-400 to-orange-500"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 12px rgba(249, 124, 0, 0.8)",
            }}
          />
        </div>
      </div>

      {/* Subtle Bottom Technical Signature Tag */}
      <div
        className="absolute bottom-8 text-[11px] font-mono font-medium tracking-widest opacity-40 uppercase"
        style={{ color: isLight ? "#000000" : "#ffffff" }}
      >
        FYXELS // ENGINEERING SYSTEM v3.8.0
      </div>
    </div>
  );
}
