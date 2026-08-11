# Workspace Agent Rules & Guidelines - MaaJanki Web Tech

This document establishes the official project-scoped rules, architectural principles, coding standards, and agent directives for **MaaJanki Web Tech**. All automated agent operations, feature implementations, and code refactorings in this workspace must adhere to these 28 domain guidelines.

---

## 1. 🤖 AEO Foundations & AI Engine Optimization
- **AI Crawlers Policy**: Maintain AI-friendly access rules in `public/robots.txt` for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, and `Applebot-Extended`.
- **Machine-Readable Discovery**: Maintain up-to-date `/llms.txt` and `/llms-full.txt` files for AI search engines and browsing agents.
- **Token Budgeting**: Ensure site content is clean, structured in Markdown/HTML5, and optimized for LLM context windows.

## 2. 🧊 3D Scene Developer & WebGL Graphics
- **Performance Budgeting**: Maintain 60fps rendering for WebGL/Three.js 3D canvas components.
- **Progressive Loading**: Use low-poly lods and lazy-load heavy 3D assets on mobile devices.

## 3. 🔍 Agentic Search Optimizer
- **Structured Data**: Automatically inject Schema.org JSON-LD (`Organization`, `LocalBusiness`, `Service`, `BreadcrumbList`, `FAQPage`) on all marketing pages.
- **Entity Linking**: Connect brand entity references to Wikidata, LinkedIn, Google Business Profiles, and official registers.

## 4. 📜 AI Citation Strategist
- **E-E-A-T Validation**: Include verifiable trust badges (DPIIT Startup India, Udyam MSME Registration Number `UDYAM-BR-38-0014113`).
- **Factual Clarity**: Use clear statistical summaries, data tables, and direct answers to capture AI search citations across ChatGPT and Perplexity.

## 5. 📊 Analytics & Conversion Reporter
- **Event Tracking**: Log website lead form submissions, popup clicks, and chatbot interactions to GA4 and Microsoft Clarity.
- **Conversion Metrics**: Monitor funnel conversion rates across all 8 capture forms.

## 6. 🏗️ Backend Architect
- **Next.js API Routes**: Secure all `/api/admin/*` endpoints using Clerk server-side `auth()` and bearer tokens.
- **Database Resilience**: Use connection pooling and automatic reconnect handling for MongoDB Atlas via Mongoose (`lib/db.js`).

## 7. 🌏 Baidu & Asian Market SEO Specialist
- **Mobile-First Indexing**: Optimize site rendering for Asian and global mobile networks.
- **Localization**: Support multi-region tags (`geo.region`, `geo.placename`).

## 8. 🎨 Brand Guardian
- **Color Palette**: Primary Orange `#FD6A02` (Accent `#FF6B00`), Deep Navy `#042544`, Dark Surface `#0f172a` / `#020617`.
- **Typography System**: Primary Display Font `Outfit`, Body `Poppins`, UI `Inter`.
- **Visual Consistency**: Maintain glassmorphism card elevation, smooth gradients, and sleek dark modes.

## 9. 🛡️ Code Reviewer & Quality Standards
- **Empirical Evidence**: Base all bug fixes on un-truncated logs and verified tracebacks.
- **No Superficial Patches**: Never mask errors with silent empty try/except blocks or dummy fallbacks without fixing the underlying contract.

## 10. ⚡ Database & MongoDB Optimizer
- **Index Optimization**: Index frequently queried fields (`createdAt`, `status`, `source`, `email`) in Mongoose schemas.
- **Query Efficiency**: Select only necessary projection fields for table views to optimize payload sizes.

## 11. 📚 Developer Advocate
- **Documentation Integrity**: Maintain clear, copy-pasteable README instructions and self-documenting code.

## 12. ✉️ Email Intelligence Engineer
- **Lead Email Processing**: Sanitize and validate lead email inputs automatically before saving to MongoDB Atlas.

## 13. 📩 Email Marketing Strategist
- **Follow-up Triggers**: Log inquiry timestamps to trigger rapid sales response workflows (< 15 minutes).

## 14. 💻 Frontend Developer
- **Next.js 15 App Router**: Build modular React client and server components with clean separation of concerns.
- **Responsive Design**: Ensure mobile-first responsive layouts across desktop, tablet, and mobile screens.

## 15. 🔀 Git Workflow Master
- **Traceable Commits**: Follow conventional commit conventions (`feat:`, `fix:`, `docs:`, `perf:`).

## 16. 🏢 Government & Enterprise Digital Consultant
- **Compliance Badges**: Display official Udyam MSME and DPIIT Startup India credentials for enterprise credibility.

## 17. 🚀 Growth Hacker & CRO
- **Form Optimization**: Maintain non-intrusive capture popups (`PromoPopup`, `FooterPopup`) with mobile viewport rules.
- **Clear CTAs**: Use high-contrast primary buttons with strong action verbs ("Get Free Audit", "Book Call").

## 18. 🌐 Language & Multilingual Translator
- **i18n Readiness**: Prepare string tables for bilingual support (`EN` / `HI`).

## 19. ⚡ Performance Benchmarker & Core Web Vitals
- **Lighthouse Goals**: LCP < 2.5s, INP < 200ms, CLS < 0.1.
- **Asset Optimization**: Deliver AVIF and WebP images with 1-year immutable HTTP cache headers.
- **Deferred Rendering**: Use `content-visibility: auto` for off-screen sections.

## 20. 💰 Pricing Analyst
- **Transparent Tiering**: Present transparent pricing cards and ROI calculators on product & service pages.

## 21. 🔎 Search Query Analyst
- **Keyword Intent**: Map commercial and transactional search queries to dedicated service and location pages.

## 22. 🔒 Security Architect & SecOps
- **Security Headers**: Enforce `X-Frame-Options: DENY`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy`.
- **Authentication Guard**: Protect all administrative routes (`/admin/*`) with email domain verification (`ALLOWED_ADMIN_EMAILS`).

## 23. 🛠️ Senior Developer
- **Clean Architecture**: Follow DRY principles, reusable UI components, and maintainable state management (`AdminShell`).

## 24. 📋 Senior Project Manager
- **Scope Management**: Plan multi-step features thoroughly with verified implementation and walkthrough documentation.

## 25. 🔑 Senior SecOps Engineer
- **Zero-Trust Credential Hygiene**: Keep all API keys, database secrets, and JWT tokens in `.env.local` — never commit plain text credentials.

## 26. 🚀 SEO Specialist (Technical & Programmatic)
- **Indexing Standards**: Maintain clean XML sitemaps, IndexNow submission scripts, dynamic metadata, and canonical URLs.

## 27. 🧪 Test Results Analyzer & QA
- **Runtime Validation**: Verify code changes by building (`npm run build`) and testing functionality before completion.

## 28. ✨ UI & Aesthetic Designer
- **State-of-the-Art UX**: Provide rich aesthetics, custom scrollbars, micro-interactions, dark/light theme toggles, and polished dashboard tables.
