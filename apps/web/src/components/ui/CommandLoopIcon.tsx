"use client";

import React from "react";

export function CommandLoopIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        className="w-full h-full text-zinc-400 dark:text-zinc-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Base Dark Command / Loop Icon Track */}
        <path d="M18 9a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12z" />
      </svg>

      {/* Animated Glowing Gradient Pulse Beam Traveling Along the Track */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="cmdBeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>

        <path
          d="M18 9a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12z"
          stroke="url(#cmdBeamGradient)"
          strokeDasharray="24 60"
          className="animate-cmd-beam"
          style={{
            filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.8))",
          }}
        />
      </svg>
    </div>
  );
}
