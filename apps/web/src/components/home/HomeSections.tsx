import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Layers3,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";
import { FAQSection } from "./FAQSection";

const services = [
  {
    title: "Custom Software",
    description: "Purpose-built systems shaped around the way your business works.",
    icon: Code2,
  },
  {
    title: "Web Applications",
    description: "Fast, accessible web products designed to grow with your users.",
    icon: Layers3,
  },
  {
    title: "Mobile Apps",
    description: "Useful, polished mobile experiences for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "AI & Automation",
    description: "Practical AI features and workflows that reduce repetitive work.",
    icon: Bot,
  },
  {
    title: "UI/UX Design",
    description: "Clear product journeys, thoughtful interfaces, and design systems.",
    icon: Palette,
  },
  {
    title: "Cloud & DevOps",
    description: "Reliable infrastructure and delivery pipelines for your product.",
    icon: Cloud,
  },
];

const platforms = [
  "Google Cloud",
  "Microsoft",
  "AWS",
  "Stripe",
  "Shopify",
  "Adobe",
];

const projectConcepts = [
  {
    title: "Connected Fitness",
    category: "Mobile product · Concept direction",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern fitness studio with workout equipment",
  },
  {
    title: "Commerce Studio",
    category: "Digital commerce · Concept direction",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
    alt: "Minimal product photography for an online store",
  },
  {
    title: "Productivity Cloud",
    category: "Web application · Concept direction",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    alt: "Developer workspace with a laptop and code editor",
  },
];

const principles = [
  {
    title: "Direct collaboration",
    description: "Work with the people shaping and building your product.",
    icon: Code2,
  },
  {
    title: "A clear roadmap",
    description: "Align on priorities, scope, and milestones before delivery.",
    icon: Workflow,
  },
  {
    title: "Quality by design",
    description: "Make performance, usability, and maintainability part of the work.",
    icon: Layers3,
  },
  {
    title: "Built for what’s next",
    description: "Choose an approach that can adapt as your needs change.",
    icon: ArrowUpRight,
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Understand your goals, users, and constraints.",
    icon: ArrowUpRight,
  },
  {
    title: "Plan",
    description: "Turn priorities into a practical scope and roadmap.",
    icon: Layers3,
  },
  {
    title: "Design",
    description: "Shape the experience and validate the product direction.",
    icon: Palette,
  },
  {
    title: "Develop",
    description: "Build, review, and test in clear delivery cycles.",
    icon: Code2,
  },
  {
    title: "Launch",
    description: "Prepare your product for release and its next iteration.",
    icon: ArrowRight,
  },
];

const technologyGroups = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
  { category: "Data", items: ["PostgreSQL", "MySQL", "Prisma", "Redis"] },
  { category: "Cloud & delivery", items: ["AWS", "Docker", "Kubernetes", "Terraform"] },
];

function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} mb-10 max-w-2xl`}>
      <span
        className="mb-3 inline-flex rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
        style={{
          color: "var(--accent-orange)",
          backgroundColor: dark ? "rgba(249,124,0,0.12)" : "#fff3e8",
        }}
      >
        {eyebrow}
      </span>
      <h2
        className="font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.035em]"
        style={{ color: dark ? "#ffffff" : "#17191c" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-3 text-sm leading-relaxed sm:text-base"
          style={{ color: dark ? "#a1a1aa" : "#4b5563" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function HomeSections() {
  return (
    <>
      <section
        aria-label="Platforms and services"
        className="border-y border-zinc-200 bg-white py-8 text-[#17191c] sm:py-10"
      >
        <div className="container-custom">
          <p className="mb-6 text-center text-sm font-semibold text-zinc-700">
            Built to connect with the platforms modern teams already use
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {platforms.map((platform) => (
              <li
                key={platform}
                className="font-display text-base font-bold tracking-tight text-zinc-500 sm:text-lg"
              >
                {platform}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="bg-white py-16 text-[#17191c] sm:py-20">
        <div className="container-custom">
          <SectionIntro
            eyebrow="Our Expertise"
            title="End-to-end software development"
            description="From the first product idea to a dependable digital experience, bring design and engineering together with one team."
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <Link
                key={title}
                href="/services"
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_28px_rgba(17,24,39,0.04)] transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_16px_34px_rgba(17,24,39,0.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <span
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    color: "var(--accent-orange)",
                    backgroundColor: "rgba(249,124,0,0.1)",
                  }}
                >
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-800 transition-colors group-hover:text-orange-600">
                  Explore service <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-36 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="container-custom relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 sm:min-h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85"
              alt="Analytics dashboard displayed on a laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/65 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-zinc-300">Product workspace</p>
                  <p className="mt-1 font-display text-lg font-bold">One connected experience</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <Layers3 size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4 flex gap-2" aria-hidden="true">
                <span className="h-1.5 w-2/5 rounded-full bg-orange-500" />
                <span className="h-1.5 w-1/4 rounded-full bg-teal-400" />
                <span className="h-1.5 flex-1 rounded-full bg-white/25" />
              </div>
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Our Solutions"
              title="Digital solutions for a smarter tomorrow"
              description="We bring product thinking and engineering together to solve real business needs—whether you’re launching something new or improving what you already have."
              dark
            />
            <ul className="mb-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
              {[
                "Custom software",
                "SaaS platforms",
                "Product modernization",
                "AI & workflow automation",
              ].map((offering) => (
                <li key={offering} className="flex items-center gap-2.5">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] text-black"
                    style={{ backgroundColor: "var(--accent-orange)" }}
                  >
                    ✓
                  </span>
                  {offering}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-orange-400 hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Explore our services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white py-16 text-[#17191c] sm:py-20">
        <div className="container-custom">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionIntro
              eyebrow="Featured Projects"
              title="Ideas shaped into digital products"
              description="A glimpse at the kinds of product experiences we can help you create."
            />
            <Link
              href="/work"
              className="mb-10 inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold transition-colors hover:border-orange-400 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Explore our work <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <p className="-mt-7 mb-6 text-xs text-zinc-500">
            Illustrative product concepts—not published client case studies.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {projectConcepts.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="relative h-52 overflow-hidden bg-zinc-100 sm:h-60">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
                    Concept
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold">{project.title}</h3>
                    <p className="mt-1 text-xs text-zinc-500">{project.category}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-zinc-400"
                    aria-hidden="true"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 text-white sm:py-20">
        <div className="container-custom">
          <SectionIntro
            eyebrow="Why Choose Fyxels"
            title="A thoughtful partner, from first idea to launch"
            description="Good software starts with clear communication and a team that cares about the outcome."
            centered
            dark
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <Icon
                  size={22}
                  className="mb-5"
                  style={{ color: "var(--accent-orange)" }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-[#17191c] sm:py-20">
        <div className="container-custom">
          <SectionIntro
            eyebrow="Our Development Process"
            title="A simple, transparent process"
            description="From first conversation to launch, stay close to the work and know what comes next."
            centered
          />
          <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(({ title, description, icon: Icon }, index) => (
              <li key={title} className="relative text-center">
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute left-[62%] top-6 hidden h-px w-[76%] lg:block"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent-orange), var(--accent-teal))",
                    }}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50"
                  style={{ color: "var(--accent-orange)" }}
                >
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-1 font-display text-base font-bold">{title}</h3>
                <p className="mx-auto mt-2 max-w-[190px] text-xs leading-relaxed text-zinc-500">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-zinc-50 py-16 text-[#17191c] sm:py-20">
        <div className="container-custom">
          <SectionIntro
            eyebrow="Technology Stack"
            title="The right tools for the job"
            description="We select technologies to fit your product’s needs, team, and long-term plans."
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-zinc-200 bg-white p-5"
              >
                <div className="mb-4 flex items-center gap-2 text-sm font-bold">
                  {group.category === "Data" ? (
                    <Database
                      size={17}
                      style={{ color: "var(--accent-orange)" }}
                      aria-hidden="true"
                    />
                  ) : (
                    <Code2
                      size={17}
                      style={{ color: "var(--accent-orange)" }}
                      aria-hidden="true"
                    />
                  )}
                  {group.category}
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-16 text-[#17191c] sm:py-20">
        <div className="container-custom">
          <SectionIntro
            eyebrow="Testimonials"
            title="Client feedback should speak for itself"
            description="We don’t publish placeholder quotes or unverified endorsements. When client feedback is approved for sharing, it belongs here."
            centered
          />
          <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-7 text-center sm:p-10">
            <span
              className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full"
              style={{
                color: "var(--accent-orange)",
                backgroundColor: "rgba(249,124,0,0.1)",
              }}
            >
              <Palette size={20} aria-hidden="true" />
            </span>
            <p className="font-display text-lg font-bold">Real stories, shared with permission</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
              We don’t currently have public client testimonials to feature. Get in touch to learn about our approach and discuss your project directly.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Talk with our team <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="bg-white px-4 pb-8 pt-4 sm:px-6 sm:pb-12">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] px-6 py-10 text-white sm:px-10 lg:px-14">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at right, rgba(0,222,170,0.24), transparent 55%), radial-gradient(ellipse at bottom left, rgba(249,124,0,0.35), transparent 45%)",
              }}
            />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <p
                  className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Let’s build something meaningful
                </p>
                <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Have a product idea in mind?
                </h2>
                <p className="mt-2 text-sm text-zinc-300">
                  Tell us what you’re working on. We’ll help you figure out a thoughtful next step.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{
                  background:
                    "linear-gradient(100deg, var(--accent-orange), #fcd34d 52%, var(--accent-teal))",
                }}
              >
                Start Your Project <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
