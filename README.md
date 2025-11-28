📊 RevenuePulse – SaaS Growth & Revenue Analytics Dashboard

A modern, production-grade SaaS analytics dashboard built with Next.js 14, shadcn/ui, Tailwind CSS, React Query, and Recharts.

RevenuePulse provides a unified view of:

Monthly Recurring Revenue (MRR)

Plan-wise revenue breakdown

Customer retention

Cohort analysis

Product feature usage

Customer subscription information

Team & API settings

Built with a clean, enterprise-level UI similar to Mixpanel, Vercel, Stripe dashboards.

🌟 Features
📈 Revenue Dashboard

Latest MRR

MRR month-over-month %

Daily active users (sample)

Stacked revenue chart (Basic / Pro / Enterprise)

Subscriptions table

👥 Customers

Customer list with search

Plan, MRR, status (Active / Trial / Cancelled)

Country & last active date

🧩 Cohort Analysis

M0–M3 cohort grid

Retention patterns across groups

🔁 Retention Analytics

Month-1 retention

Month-3 retention

3-month churn

Smooth retention curve

📦 Product Analytics

Total feature events

Features breakdown (bar chart)

Recent product events feed

⚙ Settings

Account info UI

API key display + copy

Team members UI

🛠 Tech Stack

Next.js 14 – App Router

React 18

TypeScript

Tailwind CSS

shadcn/ui

Recharts

React Query

Mock API layer for sample SaaS data

📂 Project Structure
revenuepulse/
│── app/                 # App Router pages
│── components/          # UI, charts, tables
│── data/                # Mock SaaS data
│── lib/                 # API + types
│── public/
│── README.md
│── package.json


📄 License

MIT License.



🧠 Architecture
Mock API Layer

All metrics and analytics data come from /lib/api.ts.

Client Data Fetching

React Query handles:

caching

network states

smooth UI updates

Charts

All charts are built using Recharts
Responsive & production-ready.

🎨 Design Principles

Clean, professional dashboard

Modern SaaS layout

Subtle animations

Proper spacing & typography

Consistent card & chart design

📘 Why This Project Is Valuable

RevenuePulse demonstrates:

Real-world dashboard architecture

Analytics visualization

Strong TypeScript usage

Component-driven UI

Advanced React Query

Next.js App Router proficiency

Clean design and UX thinking



