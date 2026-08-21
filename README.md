# Fyxels — Premium Software House Website

A full-stack, enterprise-grade software agency website built with **Next.js 16 (App Router)** and **Node.js/Express** backend.

## 🏗️ Project Structure

```
fyxels/
├── apps/
│   ├── web/          ← Next.js 16 frontend (App Router, TypeScript, Tailwind CSS v4)
│   └── api/          ← Node.js + Express backend
├── packages/
│   └── db/           ← Prisma schema + MySQL
└── package.json      ← npm workspaces root
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MySQL 8+ running locally
- npm 9+

### 1. Install Dependencies

```bash
# Root (installs all workspaces)
npm install

# Or individually
cd apps/web && npm install
cd apps/api && npm install
cd packages/db && npm install
```

### 2. Configure Environment

**API** (`apps/api/.env`):
```env
PORT=4000
DATABASE_URL="mysql://root:your-password@localhost:3306/fyxels_db"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SALES_EMAIL=your-sales@company.com
FRONTEND_URL=http://localhost:3000
```

**Web** (`apps/web/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 3. Setup Database

```bash
# Create the MySQL database
mysql -u root -p -e "CREATE DATABASE fyxels_db;"

# Install Prisma client and push schema
cd packages/db
npm install
npx prisma db push

# (Optional) Open Prisma Studio
npx prisma studio
```

### 4. Run Development Servers

```bash
# Terminal 1 — Frontend
cd apps/web
npm run dev
# → http://localhost:3000

# Terminal 2 — Backend API
cd apps/api
npm run dev
# → http://localhost:4000
```

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About Us |
| `/services` | Services Index |
| `/services/[slug]` | Service Detail (11 pages) |
| `/technologies` | Tech Stack |
| `/industries` | Industries |
| `/industries/[slug]` | Industry Detail (4 pages) |
| `/work` | Case Studies |
| `/work/[slug]` | Case Study Detail |
| `/insights` | Blog |
| `/insights/[slug]` | Blog Post |
| `/careers` | Careers |
| `/contact` | Contact |
| `/get-a-quote` | Multi-step Quote Wizard |

## 🛠️ Service Pages (full 8-section anatomy)

All 11 service pages at `/services/[slug]`:
- `custom-software-development`
- `web-application-development`
- `mobile-app-development`
- `ecommerce-solutions`
- `api-integration-services`
- `ui-ux-design`
- `brand-identity`
- `product-design`
- `technical-seo`
- `digital-marketing`
- `cloud-devops`

## 🔌 API Endpoints

```
GET  /health         — Health check
POST /api/leads      — Submit a quote request (inserts to DB, sends emails)
GET  /api/leads      — List all leads (internal)
POST /api/contact    — Contact form submission
```

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account → Security → App Passwords
3. Create an App Password for "Mail"
4. Add to `SMTP_PASS` in `apps/api/.env`

## 🎨 Design System

- **Dark mode** (default): `#080B14` background, `#6C63FF` violet, `#00D9FF` cyan
- **Light mode**: `#ffffff` background, same accent colors
- Toggle via the sun/moon button in the navbar
- Powered by `next-themes` with `class` attribute strategy

## 🔍 SEO

- JSON-LD Organization schema on all pages
- Service schema on all `/services/*` pages
- Article schema on `/insights/*` pages
- BreadcrumbList on deep pages
- Dynamic sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Per-page `generateMetadata` functions

## 🗄️ Database Schema

```prisma
model Lead          { id, name, email, phone, company, service, budget, message, status, source, createdAt }
model CaseStudy     { id, slug, title, client, industry, services, coverImage, content, metrics, featured }
model BlogPost      { id, slug, title, excerpt, content, category, author, coverImage, featured }
model ContactMessage{ id, name, email, subject, message, createdAt }
```
