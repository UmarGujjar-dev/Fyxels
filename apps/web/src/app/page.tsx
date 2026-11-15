import { Component as LunarGravityCard } from "@/components/ui/lunar-gravity-card";
import { TrustedCompanies } from "@/components/home/TrustedCompanies";
import { OurExpertise } from "@/components/home/OurExpertise";
import { OurSolutions } from "@/components/home/OurSolutions";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChooseFyxels } from "@/components/home/WhyChooseFyxels";
import { DevelopmentProcess } from "@/components/home/DevelopmentProcess";
import { TechnologyStack } from "@/components/home/TechnologyStack";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── HERO / HOME BANNER SECTION ───────────────────────────────────── */}
      <section className="relative w-full flex items-center justify-center overflow-hidden">
        <div className="w-full relative">
          <LunarGravityCard />
        </div>
      </section>
      <TrustedCompanies />
      <OurExpertise />
      <OurSolutions />
      <FeaturedProjects />
      <WhyChooseFyxels />
      <DevelopmentProcess />
      <TechnologyStack />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
