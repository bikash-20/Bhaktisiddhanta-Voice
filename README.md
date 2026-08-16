# Bhaktisiddhanta Voice

The official website of **Bhaktisiddhanta Voice — ISKCON Youth Forum, Sylhet**, conducted by LYFE, Sylhet (Estd. 2009).

A multi-page Next.js site built with Tailwind CSS and Framer Motion, designed to be deployed to Vercel.

---

## ✨ Features

- **8 pages** — Home, About, Temple & Deities, Programs, Courses, Alumni, Gallery, Contact
- **Hare Krishna Maha-mantra** rendered in Devanagari with a sacred gradient
- **Custom palette** — saffron, maroon, royal, gold, cream — tuned to the temple photography
- **Framer Motion** scroll reveals, hero transitions, lightbox, mobile nav
- **Filterable gallery** with lightbox (keyboard + touch friendly)
- **Course registration** + **Alumni reconnect** forms, with server-side email + Google Sheet logging
- **Static Contact** page with embedded map of Sylhet
- **Responsive**, accessible, **prefers-reduced-motion** aware
- **SEO-ready** metadata, OG tags, sitemap, robots

---

## 🗂️ Project Structure

```
bhaktisiddhanta-voice/
├── app/
│   ├── about/page.jsx
│   ├── alumni/page.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Mantra.jsx
│   │   ├── PageHero.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── Reveal.jsx
│   ├── contact/page.jsx
│   ├── courses/page.jsx
│   ├── gallery/page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   ├── not-found.jsx
│   ├── page.jsx              (Home)
│   ├── programs/page.jsx
│   └── temple/page.jsx
├── public/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── section-2.jpg
│   │   ├── section-3.jpg
│   │   └── form-submission.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── .env.example
├── .eslintrc.json
├── .gitignore
├── apps-script.gs            (Google Apps Script — paste this into your Sheet)
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vercel.json
```

---

## 🚀 Run Locally

```bash
cd "bhaktisiddhanta-voice"
npm install
npm run dev
```

Open <http://localhost:3000>.

To create a production build:

```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel (via GitHub)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bhaktisiddhanta Voice website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/bhaktisiddhanta-voice.git
   git push -u origin main
   ```

2. **Import in Vercel**
   - Go to <https://vercel.com/new>
   - Import the GitHub repo
   - Vercel will auto-detect Next.js. No config changes needed — `vercel.json` is already provided.
   - Click **Deploy**.

3. **Custom domain** (optional)
   - In Vercel → Project → Settings → Domains, add your domain and follow the DNS instructions.

---

## 📝 Forms (Google Sheet + Email notifications)

The Course and Alumni forms POST to a Google Apps Script Web App backend, which:

1. Appends the row to your Google Sheet.
2. Emails both: `biplobgolder600@gmail.com` and `bikashtalukder040@gmail.com`.

### Setup (one-time)

1. Open <https://sheets.google.com> and create a new spreadsheet.
2. Add these headers in row 1:
   ```
   Timestamp | Form Type | Full Name | WhatsApp | Phone | Email | University | Graduation Year | Course | Message
   ```
3. Click **Extensions → Apps Script**. Delete any starter code and **paste the contents of `apps-script.gs`** from this repo.
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, copy the Web App URL.
5. In your project, create `.env.local`:
   ```
   NEXT_PUBLIC_FORMS_ENDPOINT=<paste the Web App URL>
   ```
6. Restart `npm run dev`. Submit a test form — a row should appear in the sheet and both inboxes should receive an email.

> If `NEXT_PUBLIC_FORMS_ENDPOINT` is not set, the forms fall back to opening the user's mail client with a prefilled message to `biplobgolder600@gmail.com`.

---

## 🖼️ Replacing Images

All site images live in `public/images/`:

| Slot              | Current file          | Notes                                      |
| ----------------- | --------------------- | ------------------------------------------ |
| Hero (Home, etc.) | `hero.jpg`            | Replace with a wide, high-quality temple photo |
| Section 2         | `section-2.jpg`       | Replace with portrait / portrait of service |
| Section 3         | `section-3.jpg`       | Replace with kirtan / festival image       |
| Form backdrop     | `form-submission.jpg` | Replace with people joining / prayer scene |

Keep the same filenames and the site will pick them up automatically.

### Founder photo

To add Dr. Gitendranath Adhikary's photo, drop the file into `public/images/` (e.g. `founder.jpg`) and update `app/about/page.jsx` — replace the gradient placeholder block with:

```jsx
<Image
  src="/images/founder.jpg"
  alt="Dr. Gitendranath Adhikary"
  width={480}
  height={560}
  className="absolute inset-0 h-full w-full object-cover"
/>
```

---

## 🛠️ Customization

- **Colors** — `tailwind.config.js` → `theme.extend.colors`
- **Fonts** — `app/layout.jsx` (`Cormorant_Garamond`, `Inter`, `Tiro_Devanagari_Hindi`)
- **Navigation** — `app/components/Header.jsx` (the `Nav` array)
- **Mantra text** — `app/components/Mantra.jsx`
- **Contact details** — `app/components/Footer.jsx` and `app/contact/page.jsx`

---

## 📜 License

© Bhaktisiddhanta Voice — ISKCON Youth Forum, Sylhet. Conducted by LYFE, Sylhet. Estd. 2009.
Website developed by **Bikash Talukder**.
