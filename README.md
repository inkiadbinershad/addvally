# AdBoost.pk — Frontend (React + Vite)

Pakistan's AI-powered ad management platform — frontend only.

## Tech Stack
- **React 18** with hooks
- **Vite 5** for fast dev server + bundling
- **React Router v6** for client-side routing
- **CSS Variables** for day/night theming
- **Google Fonts** — Syne (headings) + DM Mono (data/numbers)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx       — App shell (sidebar + topbar + outlet)
│   ├── Sidebar.jsx      — Navigation sidebar
│   └── Topbar.jsx       — Header with theme toggle
├── context/
│   └── ThemeContext.jsx  — Day/night theme state
├── data/
│   └── dummy.js         — All dummy/mock data
├── pages/
│   ├── Dashboard.jsx    — Overview with charts + stats
│   ├── Campaigns.jsx    — Campaign list + filters
│   ├── CreateCampaign.jsx — 5-step wizard
│   └── pages.jsx        — Notifications, Billing, AI,
│                           Settings, Growth, Onboarding
├── App.jsx              — Router setup
├── main.jsx             — Entry point
└── index.css            — Global styles + theme variables
```

## Pages Included (Modules 2–10)
| Route | Page | Module |
|---|---|---|
| `/onboarding` | Guided setup wizard | Module 2 |
| `/campaigns` | Campaign list + filters | Module 4 |
| `/create` | Create campaign (5-step wizard) | Module 3 |
| `/dashboard` | Stats, charts, live data | Module 5 |
| `/notifications` | Alerts + notification settings | Module 6 |
| `/billing` | Plans, payments, billing history | Module 7 |
| `/ai` | AI copywriter, image gen, coach | Module 8 |
| `/settings` | Profile, connected accounts, language | Module 9 |
| `/growth` | Referral program + add-ons | Module 10 |

## Day/Night Toggle
Click the moon/sun icon in the top-right of the topbar to switch themes.  
Theme is saved to `localStorage` and persists on reload.

## Connecting to Backend (MERN)
When you're ready to connect to the Express/MongoDB backend:

1. Replace dummy data in `src/data/dummy.js` with API calls
2. Set `VITE_API_URL=http://localhost:5000` in `.env`
3. Create `src/services/api.js` for Axios/fetch wrappers
4. Add JWT token storage in `ThemeContext` or a new `AuthContext`

## Design System
- Primary blue: `#0F52BA` (light) / `#4D9EFF` (dark)
- Accent green: `#16A34A` (light) / `#00E676` (dark)
- All colors via CSS variables in `index.css`
- Two font families: Syne (headings) + DM Mono (data)
