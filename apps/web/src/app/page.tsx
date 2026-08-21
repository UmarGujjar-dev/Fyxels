"use client";

import React from "react";
import { Component as LunarGravityCard } from "@/components/ui/lunar-gravity-card";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── HERO / HOME BANNER SECTION ───────────────────────────────────── */}
      <section className="relative w-full flex items-center justify-center overflow-hidden">
        <div className="w-full relative">
          <LunarGravityCard />
        </div>
      </section>
    </div>
  );
}
