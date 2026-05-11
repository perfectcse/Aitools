# Credex AI Audit

Credex AI Audit is a modern AI spend optimization platform built with Next.js, TypeScript, and Tailwind CSS.

The platform helps organizations analyze AI software spending, estimate yearly savings, and generate optimization recommendations for tools like ChatGPT, Claude, Cursor, Gemini, and GitHub Copilot.

---

# Features

- AI spend audit dashboard
- AI tool cost analysis
- Savings estimation engine
- Optimization recommendations
- Dynamic audit report pages
- Responsive SaaS-style UI
- Analytics cards and metrics
- Audit workspace dashboard
- Next.js App Router architecture

---

# Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS

---

# Project Structure

```bash
app/
 ├── audit/
 ├── result/[id]/
 ├── components/
 ├── lib/
 ├── globals.css
 ├── layout.tsx
 └── page.tsx

lib/
 ├── audit-engine.ts
 ├── pricing-data.ts
 ├── supabase.ts
 └── utils.ts

 Main Pages
 | Route          | Description                    |
| -------------- | ------------------------------ |
| `/`            | Landing page and AI spend form |
| `/audit`       | AI audit workspace dashboard   |
| `/result/[id]` | Dynamic audit report page      |

Core Functionality

AI Spend Analysis

 Users can:
.select AI tools
.enter monthly spend
.enter team size

The system calculates:

.yearly spend
.estimated savings
.optimization recommendations

Supported AI Platforms

.ChatGPT
.Claude
.Cursor
.Gemini
.GitHub Copilot

UI Highlights

Modern SaaS dashboard design
Dark theme interface
Responsive mobile layout
Analytics overview cards
Professional audit workflow

