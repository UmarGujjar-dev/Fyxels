# Development Prompts

## Task 01 – Implement Fyxels Homepage Sections

**Date:** 2026-11-15

**Purpose:** Add the missing homepage sections between the existing hero and footer, following the provided reference while preserving existing site design and functionality.

### Original User Prompt

# Task: Implement Fyxels Homepage / Landing Page Sections
**Role:** Act as a Senior Next.js Developer and UI/UX Engineer.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS (use the project's existing styling approach).

## Reference Design
Use the attached Fyxels homepage screenshot as the exact visual reference.

## Objective
Implement all missing homepage sections between the existing Hero Banner and Footer, matching the reference design as closely as possible.

### Sections to Implement (In Exact Order)

1. **Trusted Companies:** Company/client logo showcase.
2. **Our Expertise:** Six service cards – Custom Software, Web Applications, Mobile Apps, AI & Automation, UI/UX Design, Cloud & DevOps.
3. **Our Solutions:** Dark section with product visuals, solution description, and key offerings.
4. **Featured Projects:** Project showcase cards with images, names, and categories.
5. **Why Choose Fyxels:** Dark statistics section with company strengths and metrics.
6. **Our Development Process:** Five steps – Discover, Plan, Design, Develop, Launch.
7. **Technology Stack:** Showcase the technologies used by Fyxels.
8. **Testimonials:** Client feedback and testimonial cards.
9. **FAQ:** Frequently asked questions using an interactive accordion.
10. **Final CTA:** Attractive project inquiry section with a Start Your Project button.

## Strict Design Requirements

- Preserve the **exact existing website color scheme**. Inspect the current theme, CSS variables, Tailwind configuration, and existing components before implementation.
- Do not introduce new brand colors or replace existing color variables.
- Match the reference screenshot's orange, yellow, and green gradient accents using the existing website colors.
- Use alternating white and black section backgrounds as shown in the reference.
- Match the reference typography, spacing, card layouts, borders, shadows, and rounded corners.
- Use high-quality visuals relevant to software development and digital products.
- Ensure responsive layouts for desktop, tablet, and mobile.

## Mandatory Restrictions

1. Do NOT modify, redesign, replace, or remove the existing Header.
2. Do NOT modify, redesign, replace, or remove the existing Hero Banner.
3. Do NOT modify, redesign, replace, or remove the existing Footer.
4. Do NOT change existing navigation, routes, functionality, or global styling.
5. Reuse existing components, assets, icons, utilities, and design tokens wherever possible.
6. Create modular, reusable, TypeScript-compatible components.
7. Do not add unnecessary dependencies.
8. Use genuine company/project information where available. Do not present fabricated clients, statistics, or testimonials as real.

## Implementation Workflow

1. Inspect the existing project structure and homepage implementation.
2. Identify existing Header, Hero Banner, Footer, theme variables, and reusable components.
3. Implement only the ten missing sections.
4. Integrate them into the existing homepage in the specified order.
5. Verify responsiveness and visual consistency.
6. Run TypeScript checks, linting, and production build.
7. Fix any issues introduced by your implementation.

## Final Rule: Only implement the missing homepage sections. The existing Header, Hero Banner, Footer, and their functionality must remain completely untouched. Follow the attached screenshot and existing website color scheme as the source of truth.

## Task 02 – Update Homepage Documentation

**Date:** 2026-11-15

**Purpose:** Read the web app instructions and update the root documentation folder as required.

### Original User Prompt

read apps/web/agent.md file update doc folder.

## Task 03 – Modular Homepage Architecture

**Date:** 2026-11-15

**Purpose:** Refactor the homepage into one component per section and move all static section content into typed, section-specific data modules.

### Original User Prompt

**Task: Modular Homepage Architecture – Next.js + TypeScript**

Refactor the Fyxels homepage into a clean, modular, reusable component architecture.

### Requirements

1. Create a separate component for each homepage section:

- TrustedCompanies
- OurExpertise
- OurSolutions
- FeaturedProjects
- WhyChooseFyxels
- DevelopmentProcess
- TechnologyStack
- Testimonials
- FAQ
- FinalCTA
2. Create a dedicated `data` folder to store all dummy/static data separately from UI components.
3. Create individual data files for each section inside the data folder, exporting their respective arrays/objects.
4. Import the relevant data into each component instead of hardcoding content inside JSX.
5. Create a central homepage entry point (`page.tsx`) that imports and renders all section components in the correct order.

### Suggested Folder Structure

```text
src/
├── app/
│   └── page.tsx
├── components/
│   └── home/
│       ├── TrustedCompanies.tsx
│       ├── OurExpertise.tsx
│       ├── OurSolutions.tsx
│       ├── FeaturedProjects.tsx
│       ├── WhyChooseFyxels.tsx
│       ├── DevelopmentProcess.tsx
│       ├── TechnologyStack.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── FinalCTA.tsx
│       └── data/
│           ├── trustedCompanies.ts
│           ├── expertise.ts
│           ├── solutions.ts
│           ├── projects.ts
│           ├── statistics.ts
│           ├── developmentProcess.ts
│           ├── technologyStack.ts
│           ├── testimonials.ts
│           └── faq.ts
```

### Mandatory Rules

- Use TypeScript interfaces/types for all data structures.
- Export data from individual files and import it into corresponding components.
- Keep components focused on UI and presentation only.
- Use `.map()` for rendering repeated data.
- Avoid duplicated code and hardcoded content in components.
- Follow the attached reference screenshot.
- Preserve the exact existing website color scheme.
- Do not modify the existing Header, Hero Banner, Footer, or their functionality.
- Do not change existing routes or global styling.

**Goal:** Clean, maintainable, scalable, reusable component architecture with centralized dummy data, matching the supplied Fyxels homepage reference design.
