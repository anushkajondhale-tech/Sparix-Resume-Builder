# SPARIX Resume Builder

**Study. Build. Grow.**

A premium, frontend-only resume builder built with React + Vite + Tailwind CSS.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## File Structure

```
sparix-resume/
├── index.html                          # HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                        # React root mount
    ├── App.jsx                         # App wrapper
    ├── styles.css                      # Global styles + Tailwind
    ├── api.js                          # Backend API placeholders
    └── components/
        └── ResumeBuilder.jsx           # Main builder (form + preview)
```

---

## Connecting a Backend

Edit `src/api.js`:

1. Set `VITE_API_BASE_URL` in a `.env` file:
   ```
   VITE_API_BASE_URL=https://your-backend.com/api
   ```
2. All placeholder functions are already wired — just implement the endpoints on your server.

---

## PDF Export

Click **Download PDF** in the header. This triggers `window.print()`.  
The print stylesheet hides the form and shows only the resume preview.

---

## Design

- **Colors:** Mocha palette — Ivory Lace, Warm Biscotti, Antique Wood, Soft Linen, Deep Espresso  
- **Type:** DM Serif Display (headings) + Plus Jakarta Sans (body)  
- **Feel:** Minimal, luxury, academic — inspired by Notion, Linear, Stripe

---

## License

SPARIX © 2025. All rights reserved.
