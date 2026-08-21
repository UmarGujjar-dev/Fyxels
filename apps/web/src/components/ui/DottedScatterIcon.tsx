"use client";

import React, { useState } from "react";

interface DottedScatterIconProps {
  children?: React.ReactNode;
  className?: string;
  dotColor?: string;
}

export function DottedScatterIcon({
  children,
  className = "",
  dotColor = "#f97c00",
}: DottedScatterIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate 25 scatter particles for a 5x5 grid scatter effect
  const particles = Array.from({ length: 25 }, (_, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    const deltaX = (col - 2) * 14 + (Math.random() * 8 - 4);
    const deltaY = (row - 2) * 14 + (Math.random() * 8 - 4);
    const scale = Math.random() * 0.6 + 0.7;

    return {
      id: i,
      x: deltaX,
      y: deltaY,
      scale,
      delay: Math.random() * 0.08,
    };
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center p-3 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
      style={{
        backgroundColor: isHovered ? "rgba(249, 124, 0, 0.12)" : "var(--bg-surface)",
        borderColor: isHovered ? "var(--accent-orange)" : "var(--border)",
      }}
    >
      {/* Center Icon - Keeps clear contrast in both light & dark mode */}
      <div
        className="transition-all duration-300 ease-out flex items-center justify-center relative z-10 text-orange-500"
        style={{
          opacity: isHovered ? 0.75 : 1,
          transform: isHovered ? "scale(0.9)" : "scale(1)",
        }}
      >
        {children}
      </div>

      {/* Dotted Scatter Particle Layer */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full transition-all duration-500 ease-out"
            style={{
              width: "3.5px",
              height: "3.5px",
              backgroundColor: dotColor,
              opacity: isHovered ? 0.95 : 0,
              transform: isHovered
                ? `translate(${p.x}px, ${p.y}px) scale(${p.scale})`
                : "translate(0px, 0px) scale(0)",
              transitionDelay: isHovered ? `${p.delay}s` : "0s",
              boxShadow: isHovered ? `0 0 6px ${dotColor}` : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
