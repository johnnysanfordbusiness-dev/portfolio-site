# Johnny Sanford — Automation Architect Portfolio

Personal portfolio site for Johnny Sanford, Automation Architect & Founder of Sanford's Performance. Built to reflect the discipline behind the work: clean architecture, zero bloat, automation-first thinking.

**Live:** [johnnysanfordbusiness-dev.github.io/portfolio](https://johnnysanfordbusiness-dev.github.io/portfolio/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Form delivery | Web3Forms API |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

---

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── Nav.jsx          # Fixed navigation, scroll-aware blur backdrop
│   │   ├── Hero.jsx         # Typewriter terminal + staggered headline
│   │   ├── About.jsx        # Philosophy pillars
│   │   ├── Stack.jsx        # Animated skill bars + tools dashboard
│   │   ├── CaseStudies.jsx  # Accordion case study cards
│   │   ├── Process.jsx      # 4-step architectural process
│   │   └── Contact.jsx      # Web3Forms contact form
│   ├── App.jsx          # Root layout, ambient background layer
│   ├── index.css        # Global styles, Tailwind entry point
│   └── main.jsx         # React entry point
├── .env.example         # Required environment variables (see setup)
├── index.html           # HTML shell with font imports
└── vite.config.js       # Vite + Tailwind plugin config
```

---

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/johnnysanfordbusiness-dev/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env and add your Web3Forms access key

# 4. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values. **Never commit `.env`.**

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
```

Get a free Web3Forms key at [web3forms.com](https://web3forms.com).

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Deployment

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to your gh-pages branch
```

If deploying to a subdirectory (e.g. `github.com/username/portfolio`), set the `base` in `vite.config.js`:

```js
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
```

---

## Design System

- **Background:** `#05050a` — near-black void with subtle 40px grid overlay
- **Accent:** `#00ff88` — neon green; glows, borders, interactive states
- **Secondary:** `#00d4ff` cyan · `#f59e0b` amber — section differentiation
- **Typography:** Inter (headings/body) · JetBrains Mono (all labels, code, form fields)
- **Motion:** Framer Motion — scroll-triggered fades, staggered reveals, hover lifts, typewriter terminal

---

*Built and maintained by Johnny Sanford | Automation Architect*
