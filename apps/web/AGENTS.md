# AGENT.md – Software Agency Marketing Website

## 1. Role & Objective

Act as a Senior Next.js Developer, Software Architect, and UI/UX Engineer.

Your task is to develop a professional, modern, responsive Software Agency Marketing Website using the existing Next.js frontend codebase.

Follow a component-based architecture, maintain clean code, reuse existing design patterns, and ensure every implemented feature works correctly.

Prioritize server-side rendering, server-side processing, reusable components, performance, security, accessibility, and maintainability.

**Primary Objectives:**
- Build a professional software agency marketing website.
- Maintain the existing project architecture and design system.
- Use reusable and modular components.
- Prioritize Server Components and server-side processing.
- Use Motion as the mandatory React animation library.
- Ensure responsive design across all screen sizes.
- Implement functional and accessible UI elements.
- Test and document every development task.

---

## 2. Existing Project & Technology

### A. Project Architecture

This project follows a Monorepo Architecture.

```text
Fyxels/
├── .github/
├── apps/
│   ├── api/                     # Backend Application
│   └── web/                     # Next.js Frontend
│       ├── app/
│       ├── components/
│       ├── public/
│       ├── agent.md
│       └── package.json
├── doc/
│   ├── Prompt.md
│   └── TaskSummaryDetails.md
├── packages/
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

### B. Frontend Technology

- Framework: Next.js (App Router).
- Language: TypeScript (follow existing project configuration).
- UI: React Components.
- Rendering: Server-Side First Architecture.
- Styling: Follow the existing styling solution.
- Animation: Motion (`motion/react`).
- Package Manager: Detect from the existing lockfile.
- Architecture: Component-based and modular.
- Follow existing dependencies and project conventions.

### C. Project Boundaries

- `apps/web/` is the frontend application.
- `apps/api/` is the backend application.
- `packages/` contains shared packages, if applicable.
- `doc/` contains project-wide development documentation.

**Important Rules:**

- These instructions apply primarily to `apps/web/`.
- Do not modify backend code inside `apps/api/` unless explicitly requested.
- Do not modify shared packages without understanding their impact and obtaining authorization when required.
- Do not change the existing monorepo architecture.
- Do not replace the existing technology stack.
- Do not introduce unnecessary dependencies.
- Keep frontend implementation inside `apps/web/` unless explicitly required otherwise.

---

## 3. Mandatory Development Rules

### A. Existing Codebase Protection

Before implementing anything:

- Analyze the existing frontend project structure.
- Read `README.md`, configuration files, and existing source code.
- Understand the current application architecture.
- Identify existing components, layouts, utilities, hooks, and services.
- Understand the current design system, color palette, typography, spacing, and component patterns.
- Identify existing functionality and dependencies.
- Inspect existing API integrations where relevant.
- Check installed dependencies before installing new packages.

### B. Preservation Rules

- Preserve the existing color schema throughout the website.
- Never unnecessarily modify existing components, functionality, layouts, or styling.
- Do not remove or break existing features.
- Avoid unnecessary refactoring or restructuring.
- Reuse existing components and utilities wherever possible.
- Do not overwrite existing implementations without understanding their purpose.
- Make only changes required by the user's request.
- Preserve existing assets unless replacement is explicitly authorized.
- Maintain compatibility with existing application functionality.

### C. Component-Based Architecture

Build the website using a modular and reusable component-based architecture.

**Rules:**

- Build every independent UI section as a reusable component.
- Keep components modular, maintainable, and reusable.
- Separate UI components, sections, layouts, hooks, utilities, services, and types logically.
- Avoid writing the entire website inside one page component.
- Maintain proper component naming conventions.
- Use TypeScript interfaces and types where appropriate.
- Avoid duplicate code.
- Keep components focused on a single responsibility.
- Use existing shared components instead of creating duplicates.
- Keep business logic separate from presentation wherever appropriate.
- Avoid unnecessary abstractions.

### D. Suggested Organization

Adapt the following structure to the existing project.

```text
apps/web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── other-routes/
├── components/
│   ├── layout/
│   ├── common/
│   ├── sections/
│   └── ui/
├── hooks/
├── lib/
├── services/
├── types/
├── public/
├── agent.md
└── package.json
```

**Important:** Do not create this structure blindly. First inspect the existing project and extend its current architecture appropriately.

---

## 4. Website Development Guidelines

Develop a professional Software Agency Marketing Website with appropriate sections, such as:

- Header and Navigation
- Hero Section
- About Agency
- Services
- Technologies
- Portfolio / Projects
- Why Choose Us
- Development Process
- Testimonials
- Team
- Pricing (if required)
- FAQ
- Contact Section
- Footer

These are suggested sections. First inspect the existing project and design requirements before implementation.

### A. UI/UX Requirements

- Professional and modern agency design.
- Fully responsive across mobile, tablet, laptop, and desktop.
- Consistent existing color scheme.
- Consistent typography and spacing.
- Reusable buttons, cards, forms, and navigation elements.
- Smooth and appropriate transitions and animations.
- Proper loading, hover, focus, and active states.
- Accessible semantic HTML.
- Maintain visual consistency across all pages.
- Optimize layouts for different screen sizes.
- Avoid unnecessary visual complexity.
- Maintain a consistent visual hierarchy.
- Ensure sufficient contrast and readable typography.

### B. Design Preservation

- Always inspect existing designs before implementing changes.
- Reuse existing colors, CSS variables, design tokens, and typography.
- Maintain consistent component styling.
- Do not make unrelated UI changes.
- Do not replace existing assets without approval.
- Do not introduce inconsistent design patterns.
- Do not introduce a new color palette without explicit approval.

**Golden Rule:** Preserve the existing design system unless the user explicitly requests a redesign or visual modification.

---

## 5. Animation Guidelines (Mandatory)

### Primary Animation Library: Motion

Use **Motion (formerly Framer Motion)** as the standard and mandatory React animation library throughout the website.

Official documentation: https://motion.dev/docs/react

### A. Mandatory Rules

- Always use Motion (`motion/react`) when implementing React-based animations.
- Do not introduce alternative animation libraries such as GSAP or React Spring unless explicitly authorized.
- Use CSS/Tailwind transitions only for simple styling effects where Motion is unnecessary.
- Follow the existing design system and preserve the current color schema.
- Keep animations smooth, professional, subtle, and consistent.
- Avoid excessive animations that negatively affect performance or user experience.
- Reuse existing animated components where appropriate.
- Do not create duplicate animation implementations.

### B. Animation Use Cases

Use Motion where appropriate for:

1. Page entrance animations.
2. Section reveal animations.
3. Scroll-triggered animations.
4. Hero section animations.
5. Navigation and mobile menu transitions.
6. Card hover and interaction effects.
7. Modal and dropdown transitions.
8. Button interaction animations.
9. Staggered animations for lists and grids.
10. Image entrance and reveal animations.
11. FAQ accordion transitions.
12. Interactive UI elements.
13. Page transitions where compatible with Next.js App Router.

Do not animate every element unnecessarily. Use animations where they improve the user experience.

### C. Next.js Integration

- Import animation functionality from `motion/react`.
- Use `"use client"` only in components that require Motion's client-side functionality.
- Keep animated components small and isolated.
- Never convert entire pages or layouts into Client Components just to implement animations.
- Preserve Server Components wherever possible.
- Avoid unnecessary React state and effects.
- Keep server-side data fetching outside animated Client Components.
- Pass server-fetched data to isolated interactive components through appropriate props.
- Avoid hydration mismatches.
- Follow Next.js App Router compatibility requirements.

### D. Performance & Accessibility

- Prefer GPU-friendly properties such as `transform` and `opacity`.
- Avoid unnecessary layout-triggering animations.
- Use viewport-based triggers for scroll animations.
- Avoid repeatedly triggering animations unnecessarily.
- Respect `prefers-reduced-motion` accessibility preferences.
- Ensure animations do not interfere with navigation, interactions, or accessibility.
- Avoid excessive animation durations.
- Test animations across mobile, tablet, and desktop.
- Avoid animations that cause layout shifts or unexpected scrolling.

### E. Installation

Before installing Motion:

1. Check whether Motion is already installed.
2. Check the existing package manager.
3. Install it only if missing.
4. Install it in the appropriate frontend workspace.

```bash
npm install motion
```

Use the equivalent workspace command if required by the monorepo package manager.

### F. Mandatory Verification

After implementing animations:

- Verify all animations work correctly.
- Verify responsive behavior.
- Check for hydration errors.
- Check Server Component and Client Component boundaries.
- Verify reduced-motion behavior.
- Ensure animations do not negatively affect page performance.
- Ensure all interactive animations behave correctly.

**Golden Rule:** Motion is the default and mandatory React animation library for this project. Every new React animation implementation must follow these guidelines.

---

## 6. Server-Side First Architecture (Mandatory)

**Primary Rule: Server Components by default. Client Components only when technically necessary.**

This project must prioritize server-side development using Next.js App Router.

### A. Server Components

- Use React Server Components by default.
- Implement pages and layouts as Server Components wherever possible.
- Perform data fetching on the server.
- Keep business logic and data processing on the server.
- Use server-side rendering or static rendering where appropriate.
- Keep sensitive operations on the server.
- Avoid unnecessary client-side rendering.
- Avoid unnecessary browser-side data fetching.
- Keep server-side code separate from client-side UI logic.
- Use appropriate caching and revalidation strategies.
- Avoid exposing internal server implementation details.

### B. Client Components Restrictions

- Do not use `"use client"` unnecessarily.
- Avoid converting entire pages or layouts into Client Components.
- Use Client Components only when browser-side interaction is genuinely required.
- Keep Client Components small and isolated.
- Avoid unnecessary `useState`, `useEffect`, and other client-side hooks.
- Do not move server-side business logic into Client Components.
- Keep interactive functionality isolated from static page content.

Client Components are permitted for functionality that genuinely requires browser-side capabilities, such as:

- Interactive mobile navigation.
- Complex interactive forms.
- Browser APIs.
- Client-side animations requiring React state.
- Interactive UI elements requiring local state.
- Client-side event handlers.
- Components using Motion's client-side functionality.

### C. Server Actions & Forms

- Use Server Actions for appropriate server-side mutations and form submissions.
- Implement server-side validation.
- Handle form submission errors appropriately.
- Return meaningful success and failure responses.
- Do not expose sensitive information to the browser.
- Use appropriate authentication and authorization checks where required.
- Do not use Server Actions as a replacement for every data-fetching operation.
- Follow existing backend API contracts.

### D. Security

- Never expose secret keys, API tokens, or private environment variables.
- Keep sensitive API calls on the server.
- Validate all incoming data.
- Sanitize user-provided data where appropriate.
- Do not trust client-provided values.
- Follow Next.js security best practices.
- Never expose internal server errors or sensitive stack traces to users.
- Apply appropriate rate limiting and abuse protection where required.

**Golden Rule:** Prefer Server Components, server-side data fetching, server-side processing, and Server Actions wherever appropriate. Minimize Client Components without sacrificing required functionality.

---

## 7. Functionality Requirements

Every implemented interactive element must work correctly.

Examples:

- Navigation links and mobile menu.
- Buttons and call-to-action links.
- Contact forms and validation.
- Form submission and appropriate feedback.
- Portfolio navigation or filtering, if implemented.
- FAQ accordion.
- Responsive navigation.
- Animations and interactive components.
- External links and social media links.
- Appropriate loading, success, and error states.
- Internal page navigation.
- Appropriate form submission handling.

### A. Functional Rules

- Do not implement buttons or links that look functional but have no actual behavior.
- Do not use fake or placeholder functionality as a completed implementation.
- Do not invent backend APIs or integrations.
- Inspect existing backend APIs before integrating frontend functionality.
- Follow existing API contracts.
- Do not modify backend endpoints without explicit authorization.
- Clearly identify missing backend integrations.
- Ensure all forms have proper validation and submission handling.
- Handle errors and unexpected responses appropriately.
- Provide user feedback after successful or failed operations.
- Ensure keyboard accessibility for interactive elements.

### B. Contact Forms

When implementing contact forms:

- Validate fields on both client and server where appropriate.
- Validate email formats.
- Prevent empty or invalid submissions.
- Provide loading states.
- Provide meaningful success and error messages.
- Prevent duplicate submissions where appropriate.
- Use existing backend integrations.
- Never claim that a message was successfully sent without a successful response from the actual integration.

---

## 8. Code Quality & Best Practices

- Follow Next.js and React best practices.
- Follow TypeScript best practices.
- Use Server Components by default.
- Use Client Components only when interactivity requires them.
- Use Motion for React-based animations.
- Avoid unnecessary `useEffect` and `useState`.
- Optimize images and assets.
- Use Next.js image optimization where appropriate.
- Avoid unnecessary dependencies.
- Maintain clean, readable, and maintainable code.
- Handle errors appropriately.
- Follow existing TypeScript and ESLint rules.
- Use proper naming conventions.
- Avoid duplicate code and unnecessary abstractions.
- Keep components lightweight and reusable.
- Use appropriate semantic HTML.
- Maintain accessibility standards.
- Optimize performance and loading speed.
- Avoid unnecessary client-side JavaScript.
- Avoid unnecessary network requests.
- Keep environment variables secure.
- Follow existing project conventions.

---

## 9. Testing & Verification

Testing is mandatory after every implementation.

After implementing each feature or section:

1. Verify the component renders correctly.
2. Test all interactive functionality.
3. Test responsive layouts.
4. Verify navigation and internal links.
5. Test form validation and submission behavior.
6. Check browser console for errors.
7. Run TypeScript checks.
8. Run ESLint.
9. Run the production build.
10. Verify server-side functionality.
11. Verify API integrations where applicable.
12. Verify animations and transitions.
13. Check reduced-motion behavior.
14. Check that existing functionality remains unchanged.

### A. Testing Rules

- Detect the actual package manager and available scripts before running commands.
- Run commands from the correct application or workspace directory.
- Do not assume command names without checking `package.json`.
- Fix errors introduced by your changes.
- Do not silently ignore existing errors.
- Distinguish pre-existing errors from newly introduced errors.
- Never claim that a feature works unless it has actually been tested.
- If a test cannot be performed, clearly explain why.
- Do not modify unrelated files just to make tests pass.
- Record exact failures where applicable.

### B. Final Verification

Before completing any task:

- Verify the requested functionality.
- Verify responsive behavior.
- Verify design consistency.
- Verify server-side implementation.
- Verify animation functionality.
- Verify accessibility requirements.
- Verify that no unrelated functionality was broken.
- Verify that documentation has been updated.
- Review all modified and created files.

---

## 10. Mandatory Restrictions

- Do not change the existing color schema.
- Do not redesign existing components unnecessarily.
- Do not remove existing functionality.
- Do not overwrite existing files without understanding their purpose.
- Do not create duplicate components.
- Do not install unnecessary packages.
- Do not use placeholder functionality as a completed feature.
- Do not ignore TypeScript or build errors.
- Do not make unrelated changes.
- Do not modify `apps/api/` without explicit authorization.
- Do not modify shared packages without authorization.
- Do not unnecessarily introduce Client Components.
- Do not expose private environment variables or secrets.
- Do not change existing API contracts without authorization.
- Do not restructure the monorepo.
- Do not introduce alternative React animation libraries without authorization.
- Do not use excessive or inaccessible animations.
- Do not claim untested functionality as completed.
- Do not delete existing documentation history.

---

## 11. Development Workflow

Follow this workflow for every user-requested development task.

### Step 1 – Analyze

- Read these instructions before starting.
- Inspect relevant files and existing implementations.
- Understand dependencies and component relationships.
- Identify the root cause if fixing an issue.
- Understand existing design and functionality.
- Inspect existing API contracts if relevant.
- Check the current Motion installation and usage if animations are involved.

### Step 2 – Plan

- Identify components that need to be created or updated.
- Identify reusable components.
- Define the implementation approach.
- Identify whether Server Components or Client Components are required.
- Identify where Motion is required.
- Identify affected files and dependencies.
- Identify the testing requirements.
- Avoid unnecessary changes.

### Step 3 – Implement

- Work component by component.
- Follow the existing architecture and design system.
- Prefer server-side implementation.
- Keep Client Components isolated.
- Use Motion for React-based animations.
- Keep changes focused on the requested task.
- Preserve existing functionality.
- Reuse existing utilities and components.

### Step 4 – Test

- Test the implemented functionality.
- Check responsiveness and UI consistency.
- Verify server-side behavior.
- Verify animations and accessibility.
- Run available TypeScript, ESLint, and build commands.
- Fix issues introduced by implementation.
- Check existing functionality for regressions.

### Step 5 – Verify

- Ensure existing functionality is preserved.
- Review all modified and created files.
- Verify the original requirement has been fulfilled.
- Confirm testing results.
- Identify any remaining issues.
- Confirm that no unauthorized changes were made.

### Step 6 – Document

- Update `doc/Prompt.md` with the original user prompt.
- Update `doc/TaskSummaryDetails.md` after implementation and testing.
- Record all affected files, solutions, and verification results.
- Preserve existing documentation history.

### Step 7 – Report

Provide a concise final report containing:

- What was implemented.
- What issue was resolved.
- Which files were created or modified.
- What functionality was tested.
- TypeScript results.
- ESLint results.
- Production build results.
- Animation verification results, where applicable.
- Any remaining issues or limitations.

---

## 12. Mandatory Documentation & Task Tracking

The project root already contains a `doc/` folder.

Use this existing directory for all project-wide development documentation.

### Required Documentation Structure

```text
Fyxels/
├── apps/
│   ├── api/
│   └── web/
│       └── agent.md
├── doc/
│   ├── Prompt.md
│   └── TaskSummaryDetails.md
└── packages/
```

**Important:**

- Do not create another `doc/` folder inside `apps/web/`.
- Both documentation files must remain in the root-level `doc/` directory.
- Frontend implementation should remain inside `apps/web/` unless explicitly required otherwise.
- Keep existing documentation records intact.

### A. Prompt.md – Original Prompt History

**Purpose:** Maintain a permanent history of every development prompt provided by the user.

Whenever the user provides a development prompt:

1. Add the exact original user prompt to `doc/Prompt.md`.
2. Preserve original wording and requirements.
3. Do not rewrite, shorten, or modify the original prompt.
4. Briefly explain the purpose of the prompt.
5. Add a date and task title.
6. Append new prompts instead of replacing previous records.

**Suggested Format:**

```markdown
# Development Prompts

## Task 01 – [Task Title]

**Date:** YYYY-MM-DD

**Purpose:** Brief explanation of the requested task.

### Original User Prompt

[Complete original user prompt]
```

### B. TaskSummaryDetails.md – Implementation History

**Purpose:** Maintain a complete technical history of every implemented and tested task.

Update this file after every implementation and testing cycle.

For every task, document:

**1. Task Overview**
- Task title and date.
- Objective and expected behavior.

**2. Original Prompt**
- Reference the corresponding task in `Prompt.md`.
- Summarize the requested requirements.

**3. Initial Issue / Problem**
- What problem existed?
- Why was the change required?
- What was causing the issue?

**4. Root Cause Analysis**
- Explain the actual root cause.
- Identify affected components, functions, modules, or logic.

**5. Implementation & Solution**
- Explain the solution implemented.
- Describe how the issue was resolved.
- Explain implementation logic and functionality.

**6. Files Changed**
- List every created or modified file.
- Explain what changed in each file and why.
- Include relevant component, function, or module names.
- Mention deleted files only when deletion was explicitly authorized.

**7. Design & Functionality**
- Document UI/design changes, if any.
- Explain new or updated functionality.
- Confirm that the existing color schema and design system were preserved.
- Document Motion animations implemented, if applicable.

**8. Testing & Verification**
- Tests performed.
- TypeScript results.
- ESLint results.
- Production build results.
- Functional testing results.
- Responsive testing results.
- Animation and accessibility testing results, if applicable.
- Remaining errors or limitations.

**9. Final Result**
- Explain what was successfully implemented.
- Confirm whether the original issue was resolved.
- Mention any pending work.

**Suggested Format:**

```markdown
# Task Implementation History

## Task 01 – [Task Title]

**Date:** YYYY-MM-DD

**Status:** Completed / Partially Completed / Blocked

### 1. Task Overview
[Task objective]

### 2. Original Prompt
[Reference to Prompt.md]

### 3. Initial Issue
[Problem description]

### 4. Root Cause Analysis
[Actual reason behind the issue]

### 5. Implementation & Solution
[Complete solution explanation]

### 6. Files Changed

| File | Change | Reason |
|------|--------|--------|
| path/file.tsx | Modified | Explanation |

### 7. Design & Functionality
[UI and functionality details]

### 8. Testing & Verification
- TypeScript:
- ESLint:
- Production Build:
- Functional Testing:
- Responsive Testing:
- Animation Testing:

### 9. Final Result
[Outcome and remaining issues]
```

### C. Documentation Preservation Rules

- Never delete or overwrite previous task records.
- Always append new task records.
- Maintain chronological task history.
- Document actual changes, not planned or assumed changes.
- If an issue remains unresolved, clearly document it.
- If testing fails, record the exact failure.
- Do not claim success without verification.
- Keep both documentation files synchronized.
- Never expose passwords, tokens, API keys, or other secrets in documentation.
- Do not add implementation results before the implementation and testing are completed.

### D. Mandatory Task Completion Sequence

For every development task:

1. Read `apps/web/agent.md`.
2. Read existing documentation when relevant.
3. Analyze the relevant existing code.
4. Save the original user prompt in root `doc/Prompt.md`.
5. Investigate the issue and identify its root cause.
6. Implement the requested solution.
7. Test all implemented functionality.
8. Verify existing functionality and design remain intact.
9. Update root `doc/TaskSummaryDetails.md` with complete implementation and testing details.
10. Review both documentation files for accuracy.
11. Provide the user with a final implementation and testing report.

**Golden Rule:** Every development task must have two records: its original prompt in `Prompt.md` and its complete implementation history in `TaskSummaryDetails.md`.

---

## 13. Final Objective

Build a high-quality, professional Software Agency Marketing Website with:

- Reusable component-based architecture.
- Server-Side First Architecture.
- Minimal and justified Client Components.
- Consistent existing design and color schema.
- Fully responsive UI.
- Working functionality.
- Motion-powered animations.
- Secure server-side processing.
- Clean and maintainable TypeScript code.
- Optimized performance.
- Accessible user experience.
- Proper testing and verification.
- Complete development documentation.

### Final Golden Rules

1. Understand the existing codebase before making changes.
2. Preserve existing functionality and design.
3. Implement only what the user requests.
4. Prefer server-side implementation wherever possible.
5. Keep frontend and backend responsibilities separate.
6. Build reusable components instead of monolithic components.
7. Use Motion for all new React-based animation implementations.
8. Keep Client Components minimal and isolated.
9. Test every implemented feature.
10. Document every development task.
11. Never report untested functionality as completed.

**Your priority is to deliver reliable, maintainable, secure, performant, and professionally implemented software without breaking the existing project.**