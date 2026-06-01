# BuilderKaki.sg – Validation Landing Page

Education-first platform for Singapore construction subcontractors.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Connect the waitlist form (Formspree)

1. Go to https://formspree.io and create a free account
2. Create a new form — you'll get a URL like `https://formspree.io/f/abcdefgh`
3. Copy the ID (e.g. `abcdefgh`)
4. Open `src/components/WaitlistForm.jsx` and replace `YOUR_FORM_ID` with your ID:
   ```js
   const FORMSPREE_ID = 'abcdefgh'
   ```
5. Update `WAITLIST_COUNT` in the same file as your real waitlist grows

## Deploy to Vercel (free)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → **Add New Project** → import your repo
3. Vercel auto-detects Vite — just click **Deploy**
4. Your site gets a live URL instantly (e.g. `builderkaki.vercel.app`)

To use your own domain (builderkaki.sg), add it in Vercel → Project Settings → Domains.

## Deploy to Netlify (alternative)

```bash
npm run build
# Drag the dist/ folder to https://app.netlify.com/drop
```

## Project structure

```
src/
  components/
    Hero.jsx          – Dark navy hero with headline + waitlist form
    ProblemSection.jsx – 3 problem cards + S$15k stat callout
    WhatYouGet.jsx    – 3 benefit cards on dark navy background
    CtaBanner.jsx     – Repeated waitlist CTA
    WaitlistForm.jsx  – Form logic + Formspree integration (edit here)
    Footer.jsx        – Tagline + "get in touch" link
  App.jsx
  index.css
```

## Brand colours

| Name   | Hex       | Usage                        |
|--------|-----------|------------------------------|
| Orange | `#E8630A` | CTAs, accents, headlines     |
| Navy   | `#1A1A2E` | Hero, What You Get, footer   |
| Cream  | `#FFF8F3` | Page background, light sections |
