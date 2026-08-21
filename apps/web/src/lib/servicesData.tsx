import type { ServicePageData } from "@/types/service";

export const servicesData: Record<string, ServicePageData> = {
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaDescription:
      "Enterprise-grade custom software development. We build scalable SaaS platforms, ERP systems, and business-critical applications tailored to your exact requirements.",
    heroLabel: "Software Engineering",
    heroTitle: (
      <>
        Custom software built for{" "}
        <span className="text-gradient">enterprise scale</span>
      </>
    ),
    heroSubtitle:
      "Off-the-shelf software doesn't scale. We architect and build bespoke digital systems that grow with your business — from MVP to mission-critical enterprise platform.",
    problemTitle: "Off-the-shelf software doesn't fit your business",
    problemText:
      "Generic solutions force you to change your processes to fit the software. They don't integrate cleanly, they limit your competitive advantage, and they fail at scale.",
    solutionText:
      "We build software that fits your exact workflows — deeply integrated with your existing systems, optimised for your team's way of working, and architected to scale from day one.",
    offerings: [
      {
        icon: "🏗️",
        title: "Enterprise Systems",
        description:
          "ERP, CRM, and workflow automation platforms built on robust, maintainable architectures with enterprise-grade security and compliance.",
      },
      {
        icon: "🚀",
        title: "SaaS Product Development",
        description:
          "Multi-tenant SaaS platforms with subscription billing, role-based access, analytics dashboards, and seamless third-party integrations.",
      },
      {
        icon: "🔄",
        title: "Legacy Modernisation",
        description:
          "Migrate your outdated systems to modern cloud-native architectures without disrupting business continuity.",
      },
    ],
    techStack: ["Node.js", "Next.js", "React", "TypeScript", "PostgreSQL", "MySQL", "Prisma", "Redis", "Docker", "AWS", "GraphQL", "REST APIs"],
    caseStudy: {
      client: "DataFlow Analytics",
      title: "End-to-end SaaS analytics platform for enterprise data teams",
      description:
        "We built a multi-tenant analytics SaaS from scratch — including real-time data pipelines, a drag-and-drop dashboard builder, and Stripe subscription billing. Delivered in 5 months.",
      metric1: { value: "10x", label: "Faster data queries" },
      metric2: { value: "$2.4M", label: "ARR at launch" },
      metric3: { value: "5mo", label: "Time to market" },
    },
    processSteps: [
      { title: "Discovery & Requirements", description: "We interview stakeholders, audit existing systems, and define technical requirements and success metrics." },
      { title: "System Architecture", description: "Design the data models, API contracts, microservices boundaries, and infrastructure blueprint." },
      { title: "Iterative Development", description: "Two-week sprints with continuous integration, code review, and bi-weekly client demos." },
      { title: "QA & Security Audit", description: "Automated test suites, penetration testing, and performance benchmarking under load." },
      { title: "Deployment & Handover", description: "Zero-downtime production deployment, monitoring setup, and comprehensive technical documentation." },
    ],
    testimonial: {
      quote: "Fyxels delivered our complex SaaS platform with an architectural quality I've rarely seen from an agency. They felt like an extension of our own engineering team.",
      name: "Sarah Mitchell",
      role: "CTO, DataFlow Analytics",
    },
  },

  "web-application-development": {
    slug: "web-application-development",
    title: "Web Application Development",
    metaDescription:
      "High-performance web applications built with Next.js, React, and Node.js. SSR, SSG, and SPA architectures optimised for speed, SEO, and user experience.",
    heroLabel: "Web Engineering",
    heroTitle: (
      <>
        Web apps that are{" "}
        <span className="text-gradient">fast by default</span>
      </>
    ),
    heroSubtitle:
      "We build production-ready web applications using Next.js and React — combining server-side rendering, static generation, and edge computing for maximum performance and SEO.",
    problemTitle: "Slow, SEO-poor web apps are costing you customers",
    problemText:
      "A 1-second delay in page load reduces conversions by 7%. Outdated JavaScript frameworks, poor Core Web Vitals, and bloated bundles are silently draining your revenue.",
    solutionText:
      "We architect web applications with performance as a first-class concern — using Next.js App Router, React Server Components, edge caching, and image optimisation to deliver sub-2-second load times globally.",
    offerings: [
      {
        icon: "⚡",
        title: "Next.js & React Apps",
        description:
          "Full-stack Next.js applications with App Router, React Server Components, and streaming SSR for optimal performance and developer experience.",
      },
      {
        icon: "🌐",
        title: "Progressive Web Apps",
        description:
          "Offline-capable, installable PWAs that deliver native-like experiences across all devices and network conditions.",
      },
      {
        icon: "🔌",
        title: "Headless Architectures",
        description:
          "Decouple your frontend from your CMS or e-commerce backend using headless architecture for maximum flexibility and speed.",
      },
    ],
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Prisma", "Vercel", "Cloudflare", "PostgreSQL"],
    caseStudy: {
      client: "RetailAI",
      title: "Rebuilding a legacy dashboard into a Next.js platform",
      description:
        "Migrated a 5-year-old Angular dashboard to Next.js 14 with React Server Components. The result: dramatically improved load times and a 43% increase in user engagement.",
      metric1: { value: "87%", label: "Faster load time" },
      metric2: { value: "43%", label: "Conversion uplift" },
      metric3: { value: "100", label: "Lighthouse score" },
    },
    processSteps: [
      { title: "Audit & Discovery", description: "Performance audit of existing app, Core Web Vitals analysis, and architecture planning." },
      { title: "Component Architecture", description: "Design the component system, state management strategy, and data fetching patterns." },
      { title: "Development", description: "Feature-by-feature implementation with Storybook-driven component development." },
      { title: "Performance Optimisation", description: "Bundle analysis, image optimisation, caching strategies, and edge deployment." },
      { title: "Deployment", description: "CI/CD pipeline setup, staging environment, and production launch with rollback capability." },
    ],
    testimonial: {
      quote: "Our new Next.js app scores 100 on Lighthouse and our bounce rate dropped by 28%. Fyxels understood performance at a level most agencies simply don't.",
      name: "James Okafor",
      role: "CEO, RetailAI",
    },
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaDescription:
      "Cross-platform and native mobile app development. React Native, Flutter, and native iOS/Android solutions built for performance and user delight.",
    heroLabel: "Mobile Engineering",
    heroTitle: (
      <>
        Mobile apps your users{" "}
        <span className="text-gradient">actually love</span>
      </>
    ),
    heroSubtitle:
      "We build cross-platform and native mobile applications that feel premium on every device — from concept to App Store launch.",
    problemTitle: "Most apps are built fast, not built right",
    problemText:
      "Rushed mobile development leads to poor performance, native feel issues, and expensive rewrites. Your app is often the first impression of your brand — it has to be exceptional.",
    solutionText:
      "We invest heavily in UX research, platform conventions, and performance profiling to deliver mobile apps that feel native, perform flawlessly, and users recommend to others.",
    offerings: [
      { icon: "📱", title: "React Native", description: "Cross-platform apps sharing 90% of their codebase between iOS and Android, with native performance and access to device APIs." },
      { icon: "🦋", title: "Flutter", description: "Google's UI toolkit for building natively compiled apps from a single Dart codebase, delivering exceptional 60fps experiences." },
      { icon: "🍎", title: "Native iOS & Android", description: "Swift and Kotlin native development for performance-critical applications that push platform capabilities to the limit." },
    ],
    techStack: ["React Native", "Flutter", "Expo", "Swift", "Kotlin", "Firebase", "Redux", "React Query", "Node.js", "GraphQL", "Push Notifications", "Stripe SDK"],
    caseStudy: {
      client: "PaySwift",
      title: "Cross-platform fintech app with biometric authentication",
      description:
        "Built a React Native fintech wallet app with biometric login, real-time transaction feeds, P2P transfers, and PCI-DSS compliant card tokenisation. Launched on iOS and Android simultaneously.",
      metric1: { value: "4.8★", label: "App Store rating" },
      metric2: { value: "200k", label: "Downloads in 90 days" },
      metric3: { value: "99.9%", label: "Uptime SLA" },
    },
    processSteps: [
      { title: "Product Definition", description: "Feature prioritisation, user journey mapping, and platform strategy (native vs cross-platform)." },
      { title: "UX Prototyping", description: "Interactive Figma prototypes tested with real users before a line of code is written." },
      { title: "Development Sprints", description: "Two-week sprints with TestFlight/Play Console builds for client testing each cycle." },
      { title: "App Store Submission", description: "App Store and Play Store listing optimisation, screenshot design, and review submission." },
      { title: "Post-Launch Support", description: "Crash monitoring, OTA updates (Expo), and ongoing feature iteration." },
    ],
    testimonial: {
      quote: "Fyxels delivered a fintech-grade mobile app that our compliance team, our users, and our investors all love. Truly exceptional execution.",
      name: "Priya Sharma",
      role: "VP Engineering, PaySwift",
    },
  },

  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    metaDescription:
      "Custom e-commerce development with Shopify, headless commerce, and Next.js storefronts. Build high-converting online stores with seamless payment integrations.",
    heroLabel: "E-Commerce",
    heroTitle: (
      <>
        E-commerce that <span className="text-gradient">converts</span>
      </>
    ),
    heroSubtitle:
      "From headless Shopify storefronts to custom cart engines — we build e-commerce experiences that turn browsers into buyers.",
    problemTitle: "Generic storefronts leave revenue on the table",
    problemText:
      "Slow checkout flows, poor mobile UX, and inflexible platforms cap your conversion rate. The average e-commerce site converts only 2-3% of visitors — the best convert 5-8%.",
    solutionText:
      "We engineer custom e-commerce storefronts focused relentlessly on conversion: sub-2-second load times, frictionless mobile checkout, one-click upsells, and A/B testable components.",
    offerings: [
      { icon: "🛒", title: "Headless Shopify + Next.js", description: "Decouple Shopify's powerful backend from the frontend with a blazing-fast Next.js storefront via the Storefront API." },
      { icon: "💳", title: "Payment Gateway Integration", description: "Stripe, PayPal, Klarna, Afterpay, and regional gateways — seamlessly integrated with strong fraud prevention." },
      { icon: "📊", title: "Custom Cart & Checkout", description: "Fully custom multi-step checkout flows, abandoned cart recovery, and real-time inventory syncing." },
    ],
    techStack: ["Next.js", "Shopify Storefront API", "Stripe", "PayPal", "TypeScript", "Prisma", "Algolia", "Cloudinary", "Redis", "PostgreSQL"],
    caseStudy: {
      client: "LuxeStyle",
      title: "Headless Shopify storefront with 3x conversion improvement",
      description:
        "Rebuilt a mid-market fashion brand's Shopify storefront as a headless Next.js app. Integrated Algolia search, Stripe payment intents, and real-time inventory.",
      metric1: { value: "3x", label: "Conversion rate" },
      metric2: { value: "1.2s", label: "Time to first byte" },
      metric3: { value: "+62%", label: "Mobile revenue" },
    },
    processSteps: [
      { title: "Commerce Audit", description: "Analyse your current funnel, checkout drop-off points, and platform limitations." },
      { title: "Storefront Architecture", description: "Plan the product catalogue, search, filtering, and cart architecture." },
      { title: "Frontend Development", description: "Build pixel-perfect product pages, collection views, and checkout flow in Next.js." },
      { title: "Payment & Integrations", description: "Integrate payment gateways, loyalty programmes, email platforms, and analytics." },
      { title: "Launch & CRO", description: "Soft launch, A/B testing setup, heatmap analysis, and ongoing conversion optimisation." },
    ],
    testimonial: {
      quote: "Our conversion rate went from 1.8% to 5.4% after Fyxels rebuilt our storefront. That's millions in additional annual revenue.",
      name: "Emma Chen",
      role: "Head of Digital, LuxeStyle",
    },
  },

  "api-integration-services": {
    slug: "api-integration-services",
    title: "API & Integration Services",
    metaDescription:
      "Custom API development, third-party integrations, middleware architecture, and data synchronisation. Connect your systems and unlock new capabilities.",
    heroLabel: "API Engineering",
    heroTitle: (
      <>
        Connect every system. <span className="text-gradient">Automate everything.</span>
      </>
    ),
    heroSubtitle:
      "We build the API infrastructure and integration layers that make your stack talk to each other — eliminating data silos and manual processes.",
    problemTitle: "Disconnected systems are silently killing your efficiency",
    problemText:
      "Manual data exports, re-keyed information, and systems that don't talk to each other cost enterprises thousands of hours per year and introduce costly errors.",
    solutionText:
      "We design and implement custom API layers, webhook systems, and event-driven integration architectures that synchronise your tools in real-time — with full observability and error recovery.",
    offerings: [
      { icon: "🔌", title: "Custom REST & GraphQL APIs", description: "Robust, documented APIs built with OpenAPI specs, versioning, and enterprise authentication (OAuth 2.0, JWT)." },
      { icon: "🔗", title: "Third-Party Integrations", description: "Salesforce, HubSpot, Stripe, Twilio, Slack, and 200+ SaaS platforms — connected with reliable, retry-capable integrations." },
      { icon: "⚡", title: "Event-Driven Architecture", description: "Kafka, RabbitMQ, or AWS EventBridge-based event systems for real-time data synchronisation at any scale." },
    ],
    techStack: ["Node.js", "Express", "GraphQL", "REST", "Kafka", "RabbitMQ", "Redis", "Prisma", "OpenAPI", "Webhooks", "OAuth 2.0", "AWS Lambda"],
    caseStudy: {
      client: "HealthBridge",
      title: "HL7 FHIR integration hub for a healthcare network",
      description:
        "Built a HIPAA-compliant integration middleware connecting 6 EMR systems, insurance APIs, and a patient portal — handling 50,000+ transactions per day with 99.99% reliability.",
      metric1: { value: "50k+", label: "Daily transactions" },
      metric2: { value: "99.99%", label: "Uptime SLA" },
      metric3: { value: "80%", label: "Ops time saved" },
    },
    processSteps: [
      { title: "Integration Mapping", description: "Document all source and target systems, data formats, and transformation requirements." },
      { title: "API Design", description: "Define contracts, authentication strategies, error schemas, and rate limiting policies." },
      { title: "Middleware Development", description: "Build the integration layer with retry logic, dead-letter queues, and full audit logging." },
      { title: "Testing & Staging", description: "End-to-end integration tests with mocked third-party APIs and load testing." },
      { title: "Production Monitoring", description: "Deploy with Datadog/CloudWatch dashboards and automated alerting for failed transactions." },
    ],
    testimonial: {
      quote: "Our operations team was drowning in manual data entry. Fyxels built an integration layer that automated 80% of that work. ROI in under 3 months.",
      name: "Dr. Amanda Torres",
      role: "CIO, HealthBridge",
    },
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaDescription:
      "User-centred UI/UX design services. User research, wireframing, high-fidelity prototyping, and design systems that drive engagement and conversion.",
    heroLabel: "Design",
    heroTitle: (
      <>
        Design that feels{" "}
        <span className="text-gradient">effortless</span>
      </>
    ),
    heroSubtitle:
      "We design digital experiences that users love — grounded in research, validated with prototypes, and delivered as production-ready design systems.",
    problemTitle: "Beautiful design without strategy is just decoration",
    problemText:
      "Most agencies design for awards, not for users. Pretty interfaces that confuse users or hide key actions actively destroy conversion and retention.",
    solutionText:
      "Every design decision we make is backed by user research, analytics data, or A/B test results. We design for measurable outcomes: higher conversion, lower churn, and deeper engagement.",
    offerings: [
      { icon: "🔬", title: "User Research & Testing", description: "User interviews, usability testing, journey mapping, and analytics analysis to ground design in reality." },
      { icon: "✏️", title: "Wireframing & Prototyping", description: "Rapid low-fi wireframes to high-fidelity interactive Figma prototypes — validated before development begins." },
      { icon: "🎨", title: "Design Systems", description: "Scalable component libraries in Figma with documented usage guidelines for consistent, fast-moving product teams." },
    ],
    techStack: ["Figma", "FigJam", "Principle", "Lottie", "Storybook", "Zeroheight", "Maze", "Hotjar", "Google Analytics", "Tailwind CSS"],
    caseStudy: {
      client: "FinanceOS",
      title: "Complete product redesign resulting in 61% retention improvement",
      description:
        "Conducted user research across 40 users, redesigned the core dashboard and onboarding flow, and shipped a new design system that cut design-to-dev handoff time by 50%.",
      metric1: { value: "+61%", label: "User retention" },
      metric2: { value: "50%", label: "Faster handoffs" },
      metric3: { value: "4.7★", label: "UX research score" },
    },
    processSteps: [
      { title: "Discovery & Research", description: "Stakeholder interviews, user interviews, competitor analysis, and existing product audit." },
      { title: "Information Architecture", description: "Sitemap, user flows, and content hierarchy mapping." },
      { title: "Wireframing", description: "Low-fidelity wireframes for rapid iteration and stakeholder alignment." },
      { title: "High-Fidelity Design", description: "Pixel-perfect designs in Figma with full responsive breakpoints and micro-interactions." },
      { title: "Handoff & QA", description: "Annotated specs, design tokens, and QA review of implemented designs." },
    ],
    testimonial: {
      quote: "Fyxels' design team didn't just make our product look better — they fundamentally improved how users understood and used it. The business impact was immediate.",
      name: "Luis Fernandez",
      role: "CPO, FinanceOS",
    },
  },

  "brand-identity": {
    slug: "brand-identity",
    title: "Brand Identity",
    metaDescription:
      "Premium corporate brand identity design. Logo systems, visual language, typography, and digital brand guidelines for ambitious companies.",
    heroLabel: "Branding",
    heroTitle: (
      <>
        A brand that commands{" "}
        <span className="text-gradient">attention</span>
      </>
    ),
    heroSubtitle:
      "We craft visual identities that communicate your positioning, build trust, and make you unforgettable across every touchpoint.",
    problemTitle: "Inconsistent branding erodes trust and credibility",
    problemText:
      "A fragmented visual identity — inconsistent logos, mismatched colours, amateur typography — signals to prospects that your business isn't ready for enterprise contracts.",
    solutionText:
      "We build comprehensive brand systems — from the foundational logo and colour palette to the complete digital asset library — that give your team everything needed for consistent, premium brand expression.",
    offerings: [
      { icon: "✨", title: "Logo & Mark Design", description: "Primary logo, secondary marks, icon systems, and favicon — all delivered in every required format." },
      { icon: "🎨", title: "Visual Identity System", description: "Colour palette, typography system, iconography, photography direction, and pattern library." },
      { icon: "📋", title: "Brand Guidelines", description: "Comprehensive digital brand book documenting every element of your visual language for internal and agency use." },
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Zeroheight", "Notion"],
    caseStudy: {
      client: "VaultChain",
      title: "Full rebrand for a Series A blockchain infrastructure company",
      description:
        "Led a complete brand overhaul for a blockchain infrastructure startup ahead of their Series A. New identity helped them close a $12M round.",
      metric1: { value: "$12M", label: "Series A raised" },
      metric2: { value: "3wk", label: "Brand delivery" },
      metric3: { value: "100%", label: "Board approval" },
    },
    processSteps: [
      { title: "Brand Strategy", description: "Positioning, competitive differentiation, brand personality, and target audience definition." },
      { title: "Visual Exploration", description: "3 distinct creative directions presented as mood boards." },
      { title: "Logo Development", description: "Refinement of chosen direction into final logo system with variations." },
      { title: "Identity Expansion", description: "Full colour, typography, and asset system built out from the logo foundation." },
      { title: "Guidelines & Delivery", description: "Brand book creation and file delivery in all required formats." },
    ],
    testimonial: {
      quote: "Our new brand identity elevated how investors, partners, and customers perceive us overnight. Fyxels delivered something truly world-class.",
      name: "Nathan Keller",
      role: "CEO, VaultChain",
    },
  },

  "product-design": {
    slug: "product-design",
    title: "Product Design",
    metaDescription:
      "End-to-end product design services. Journey mapping, CRO-optimised flows, and conversion-focused UX for SaaS products and digital platforms.",
    heroLabel: "Product",
    heroTitle: (
      <>
        Products designed to <span className="text-gradient">convert</span>
      </>
    ),
    heroSubtitle:
      "We design digital products with conversion and retention as the primary metric — combining deep UX research with CRO best practices.",
    problemTitle: "Good-looking products with poor activation fail",
    problemText:
      "Users signing up is step one. If your onboarding flow is confusing, your aha-moment takes too long, or key features are buried — you'll churn users faster than you acquire them.",
    solutionText:
      "We apply CRO principles to every screen — optimising the critical user journey from first visit through activation and repeat engagement. Our designs are hypotheses we test, not assumptions we ship.",
    offerings: [
      { icon: "🗺️", title: "Journey Mapping", description: "End-to-end user journey maps identifying friction points and moments of delight across your product." },
      { icon: "📈", title: "CRO-Optimised Flows", description: "Conversion-rate-optimised onboarding, upgrade, and engagement flows built on behavioural design principles." },
      { icon: "🧪", title: "A/B Testing Design", description: "Hypothesis-driven design variants built for A/B testing — with clear success metrics defined upfront." },
    ],
    techStack: ["Figma", "Maze", "Hotjar", "Mixpanel", "Amplitude", "Storybook", "Lottie", "Principle"],
    caseStudy: {
      client: "ProjectHQ",
      title: "Onboarding redesign reducing time-to-value by 70%",
      description:
        "Redesigned the onboarding flow for a B2B SaaS project management tool. Users now reach their first value moment (creating a project) in under 2 minutes vs 7 previously.",
      metric1: { value: "70%", label: "Faster time to value" },
      metric2: { value: "+38%", label: "Day-7 retention" },
      metric3: { value: "-22%", label: "Support tickets" },
    },
    processSteps: [
      { title: "Metrics Baseline", description: "Establish current funnel metrics, identify highest-impact drop-off points." },
      { title: "User Research", description: "Session recordings, user interviews, and friction log analysis." },
      { title: "Redesign Sprints", description: "Rapid design → prototype → test cycles for each critical flow." },
      { title: "A/B Test Design", description: "Design controlled experiments with statistical significance planning." },
      { title: "Iterate on Results", description: "Analyse test data, declare winners, and continue optimisation cycle." },
    ],
    testimonial: {
      quote: "The Fyxels product design team thought like growth engineers, not just designers. The CRO improvements they drove added $800k to our ARR.",
      name: "Rachel Kim",
      role: "Head of Product, ProjectHQ",
    },
  },

  "technical-seo": {
    slug: "technical-seo",
    title: "Technical SEO",
    metaDescription:
      "Technical SEO services: Core Web Vitals optimisation, crawlability auditing, structured data, site speed improvements, and Next.js SEO architecture.",
    heroLabel: "Technical SEO",
    heroTitle: (
      <>
        SEO that goes <span className="text-gradient">beyond keywords</span>
      </>
    ),
    heroSubtitle:
      "Most agencies optimise content. We optimise the technical foundation — the architecture, performance, and structure that determines where Google ranks you.",
    problemTitle: "Google can't rank what it can't crawl and understand",
    problemText:
      "Broken internal links, duplicate content, slow Core Web Vitals, missing structured data, and JavaScript rendering issues prevent Google from indexing and ranking your site — regardless of content quality.",
    solutionText:
      "We audit your technical SEO from crawlability to Core Web Vitals, then systematically fix every issue. Building on Next.js gives us full control over rendering strategy, metadata, and structured data.",
    offerings: [
      { icon: "🔍", title: "Technical Audit", description: "Comprehensive crawl analysis, log file review, Core Web Vitals audit, and structured data validation." },
      { icon: "⚡", title: "Core Web Vitals Optimisation", description: "LCP, CLS, and INP improvements through image optimisation, code splitting, and rendering strategy changes." },
      { icon: "🗺️", title: "Schema & Structured Data", description: "JSON-LD implementation for Organization, Service, Article, FAQ, and BreadcrumbList schemas to enhance SERP presence." },
    ],
    techStack: ["Next.js", "Screaming Frog", "Google Search Console", "Lighthouse", "PageSpeed Insights", "Ahrefs", "Semrush", "Schema.org", "Core Web Vitals API"],
    caseStudy: {
      client: "B2B SaaS Platform",
      title: "Technical SEO overhaul driving 312% organic traffic growth",
      description:
        "Fixed 847 technical SEO issues identified in audit, implemented JSON-LD schema across all service pages, improved LCP from 4.2s to 1.1s, and resolved JavaScript rendering issues.",
      metric1: { value: "+312%", label: "Organic traffic" },
      metric2: { value: "1.1s", label: "LCP (was 4.2s)" },
      metric3: { value: "100", label: "Lighthouse SEO" },
    },
    processSteps: [
      { title: "Full Technical Audit", description: "Crawl analysis, log file review, manual inspection, and competitor benchmarking." },
      { title: "Issue Prioritisation", description: "Critical, high, medium, and low priority issue matrix with estimated traffic impact." },
      { title: "On-Site Fixes", description: "Systematic resolution of technical issues — from redirects to rendering to structured data." },
      { title: "Performance Optimisation", description: "Core Web Vitals improvements and page speed optimisation for all devices." },
      { title: "Monitoring & Reporting", description: "Monthly technical SEO health reports with Search Console integration." },
    ],
    testimonial: {
      quote: "Fyxels found and fixed 800+ technical SEO issues our previous agency missed entirely. Organic traffic has tripled in 6 months.",
      name: "David Park",
      role: "CMO, CloudOps Platform",
    },
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    metaDescription:
      "Performance marketing, SEO, and paid advertising services. ROI-driven Google Ads, Meta campaigns, and organic growth strategies for B2B and B2C brands.",
    heroLabel: "Digital Marketing",
    heroTitle: (
      <>
        Marketing that drives <span className="text-gradient">real ROI</span>
      </>
    ),
    heroSubtitle:
      "We run performance-driven digital marketing campaigns — combining SEO, paid advertising, and content strategy to grow your pipeline with measurable returns.",
    problemTitle: "Spray-and-pray marketing wastes your budget",
    problemText:
      "Untargeted ads, generic content, and vanity metrics disguise poor ROI. Most digital marketing agencies optimise for impressions and clicks — not for revenue.",
    solutionText:
      "We build full-funnel digital marketing systems with clear attribution, tight targeting, and constant optimisation — measured against revenue metrics that actually matter to your business.",
    offerings: [
      { icon: "📣", title: "Performance Marketing", description: "Google Ads, Meta Ads, and LinkedIn campaigns built for maximum ROAS with full conversion tracking and attribution." },
      { icon: "📝", title: "Content & SEO Strategy", description: "Keyword research, content calendar planning, and long-form content that ranks and converts at every funnel stage." },
      { icon: "📊", title: "Analytics & Reporting", description: "GA4 configuration, custom dashboards, and monthly executive reports with clear revenue attribution." },
    ],
    techStack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "Google Tag Manager", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Looker Studio"],
    caseStudy: {
      client: "GrowthOS",
      title: "Full-funnel marketing engine generating $1.2M in pipeline",
      description:
        "Built a complete inbound marketing engine — SEO content programme, Google Ads account restructure, and LinkedIn ABM campaigns — generating $1.2M in qualified pipeline in 6 months.",
      metric1: { value: "$1.2M", label: "Pipeline generated" },
      metric2: { value: "4.1x", label: "ROAS average" },
      metric3: { value: "+280%", label: "Organic leads" },
    },
    processSteps: [
      { title: "Marketing Audit", description: "Analyse existing channels, attribution setup, audience data, and competitive positioning." },
      { title: "Strategy & ICP", description: "Define ideal customer profiles, messaging frameworks, and channel strategy." },
      { title: "Campaign Build", description: "Create and launch campaigns across paid and organic channels with full tracking setup." },
      { title: "Optimise & Scale", description: "Weekly optimisation cycles — pausing underperformers, scaling winners, A/B testing creative." },
      { title: "Monthly Reporting", description: "Revenue-attributed reporting with forward-looking recommendations." },
    ],
    testimonial: {
      quote: "Fyxels restructured our entire marketing stack. Within 6 months we had more qualified pipeline than the entire previous year. Extraordinary team.",
      name: "Tom Walsh",
      role: "VP Marketing, GrowthOS",
    },
  },

  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    metaDescription:
      "AWS and GCP cloud architecture, CI/CD pipeline automation, Kubernetes, Docker, and infrastructure-as-code services for scalable, secure deployments.",
    heroLabel: "Cloud & DevOps",
    heroTitle: (
      <>
        Infrastructure that{" "}
        <span className="text-gradient">never sleeps</span>
      </>
    ),
    heroSubtitle:
      "We design, build, and manage cloud infrastructure and DevOps pipelines that give your engineering team the velocity of a startup with the reliability of an enterprise.",
    problemTitle: "Manual deployments and fragile infrastructure slow everything down",
    problemText:
      "Manual deployments cause downtime. Inconsistent environments cause bugs. No observability means you discover production incidents from angry customers — not monitoring alerts.",
    solutionText:
      "We build automated CI/CD pipelines, container orchestration, and infrastructure-as-code that make deployments boring in the best possible way — predictable, fast, and zero-downtime.",
    offerings: [
      { icon: "☁️", title: "AWS & GCP Architecture", description: "Multi-region cloud architecture with VPC design, auto-scaling, managed databases, and disaster recovery planning." },
      { icon: "🔄", title: "CI/CD Pipelines", description: "GitHub Actions, GitLab CI, or AWS CodePipeline automation for automated testing, building, and zero-downtime deployment." },
      { icon: "🐋", title: "Kubernetes & Docker", description: "Container orchestration with Kubernetes, Helm charts, and auto-scaling workloads for production-grade microservices." },
    ],
    techStack: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Prometheus", "Grafana", "Datadog", "PostgreSQL", "Redis"],
    caseStudy: {
      client: "ScaleOps",
      title: "AWS infrastructure reducing cloud costs by 40% while doubling capacity",
      description:
        "Audited and redesigned a sprawling AWS infrastructure for a 200-engineer company. Implemented Terraform IaC, consolidated microservices onto EKS, and introduced automated cost governance.",
      metric1: { value: "-40%", label: "Cloud cost reduction" },
      metric2: { value: "2x", label: "Throughput capacity" },
      metric3: { value: "99.99%", label: "Uptime achieved" },
    },
    processSteps: [
      { title: "Infrastructure Audit", description: "Current architecture review, cost analysis, security assessment, and scalability bottleneck identification." },
      { title: "Architecture Design", description: "Target architecture blueprinting with network topology, service design, and disaster recovery planning." },
      { title: "IaC Implementation", description: "Terraform modules for all infrastructure, with state management and drift detection." },
      { title: "CI/CD Pipeline", description: "Automated build, test, and deployment pipelines with canary and blue-green deployment strategies." },
      { title: "Observability Setup", description: "Prometheus + Grafana monitoring, centralised logging, distributed tracing, and on-call runbooks." },
    ],
    testimonial: {
      quote: "Fyxels transformed our chaotic AWS environment into a well-oiled machine. We deploy 10x more frequently with zero downtime. Game-changing.",
      name: "Alex Rivera",
      role: "Head of Engineering, ScaleOps",
    },
  },
};
