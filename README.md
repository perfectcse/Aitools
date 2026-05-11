# Credex AI Audit

Credex AI Audit is a modern AI spend optimization platform built with Next.js, TypeScript, and Tailwind CSS.

The platform helps organizations analyze AI software spending, estimate yearly savings, and generate optimization recommendations for tools like ChatGPT, Claude, Cursor, Gemini, and GitHub Copilot.

---

## Features

- ✨ AI spend audit dashboard
- 📊 AI tool cost analysis
- 💰 Savings estimation engine
- 🎯 Optimization recommendations
- 📄 Dynamic audit report pages
- 📱 Responsive SaaS-style UI
- 📈 Analytics cards and metrics
- 🏢 Audit workspace dashboard
- 🚀 Next.js App Router architecture

---

## Tech Stack

- **Next.js** 16
- **React** 18+
- **TypeScript** 5+
- **Tailwind CSS** 3+
- **Supabase** (Database)

---

## Project Structure

```bash
app/
 ├── audit/              # Audit workspace dashboard
 ├── result/[id]/        # Dynamic audit report pages
 ├── layout.tsx          # Root layout component
 ├── page.tsx            # Landing page
 └── globals.css         # Global styles

components/
 ├── audit-result.tsx    # Audit result display
 ├── features.tsx        # Features showcase
 ├── footer.tsx          # Footer component
 ├── hero.tsx            # Hero section
 ├── navbar.tsx          # Navigation bar
 ├── spend-form.tsx      # AI spend form
 └── ui/                 # UI components
     ├── button.tsx
     ├── card.tsx
     ├── input.tsx
     └── select.tsx

lib/
 ├── ai-summary.ts       # AI summary generation
 ├── audit-engine.ts     # Core audit logic
 ├── pricing-data.ts     # Pricing information
 ├── supabase.ts         # Database client
 └── utils.ts            # Utility functions
```

---

## Main Pages

| Route          | Description                    |
| -------------- | ------------------------------ |
| `/`            | Landing page and AI spend form |
| `/audit`       | AI audit workspace dashboard   |
| `/result/[id]` | Dynamic audit report page      |

---

## Core Functionality

### AI Spend Analysis

Users can:
- Select AI tools they use
- Enter monthly spend amounts
- Input team size

The system calculates:
- Yearly spend projections
- Estimated cost savings
- Optimization recommendations

### Supported AI Platforms

- 🤖 ChatGPT
- 🧠 Claude
- ✏️ Cursor
- 🔍 Gemini
- 🚀 GitHub Copilot

### UI Highlights

- Modern SaaS dashboard design
- Dark theme interface
- Responsive mobile layout
- Analytics overview cards
- Professional audit workflow

---

## Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/credex-ai-audit.git
cd credex-ai-audit
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Getting Started

### For Users

1. Visit the landing page at `/`
2. Fill in your AI tool spending and team size in the spend form
3. Submit to generate an audit report
4. View detailed analysis and optimization recommendations in the results page

### For Developers

1. **Modify components** in `components/` folder
2. **Update pricing data** in `lib/pricing-data.ts`
3. **Extend audit logic** in `lib/audit-engine.ts`
4. **Add new pages** following Next.js App Router conventions

---

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_public_anon_key

# Optional: API Keys
# OPENAI_API_KEY=your_api_key
# ANTHROPIC_API_KEY=your_api_key
```

---

## Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting & Formatting
npm run lint             # Run ESLint
npm run format           # Format code with Prettier (if configured)
```

---

## API Reference

### Audit Engine

The `audit-engine.ts` module provides core calculation functions:

```typescript
// Example usage
import { calculateSavings, generateRecommendations } from '@/lib/audit-engine'

const savings = calculateSavings(spend, toolType)
const recommendations = generateRecommendations(auditData)
```

### AI Summary

The `ai-summary.ts` module generates intelligent summaries:

```typescript
import { generateAuditSummary } from '@/lib/ai-summary'

const summary = await generateAuditSummary(auditResults)
```

---

## Database

This project uses **Supabase** for data persistence. Key tables include:

- `audits` - Stores audit submissions
- `results` - Stores audit analysis results
- `recommendations` - Stores optimization recommendations

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Deploy to Other Platforms

The application can be deployed to any Node.js hosting:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Support

For issues, questions, or suggestions, please:
- Open an issue on GitHub
- Contact the development team

---

## Roadmap

- [ ] User authentication and accounts
- [ ] Advanced analytics and reporting
- [ ] API for third-party integrations
- [ ] Mobile app
- [ ] Export reports (PDF, CSV)
- [ ] Team collaboration features

---

**Last Updated:** May 11, 2026

