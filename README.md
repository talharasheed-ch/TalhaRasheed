# Talha Rasheed — Portfolio

Static, frontend-only portfolio (HTML + CSS + JS). There is no build step and no backend.

## Deploy to Vercel
**Option A: drag & drop.** Go to vercel.com/new, choose "Deploy" and upload this folder.
**Option B: GitHub.** Push this folder to a repo, import it in Vercel, set Framework Preset to **Other**, and leave the build command empty.
**Option C: CLI.** Run `npm i -g vercel`, then `vercel --prod` inside this folder.

## Files
- `index.html`: page markup only
- `assets/css/style.css`: all styles
- `assets/js/main.js`: all site logic, plus the `RESUME` data used by every export
- `assets/js/gsap.min.js`, `ScrollTrigger.min.js`, `lenis.min.js`: animation libraries, stored locally
- `assets/vendor/`: html2canvas and jsPDF for the PDF export
- `assets/talha.jpg`, `assets/Talha_Rasheed_Resume.pdf` (original CV)
- `vercel.json`

Upload the files exactly as they are. Don't paste the code into an online editor or site builder, because these can change or cut off the scripts.

## Editing content
- **Resume exports:** edit the `RESUME` object at the top of `assets/js/main.js`. All export formats are generated from it.
- **Page content:** edit the matching HTML sections (`#about`, `#experience`, `#skills`, `#work`, `#education`, `#contact`).
- **Brand colour:** change `--accent` at the top of `assets/css/style.css`.

## Resume export formats (all generated in the browser)
PDF (Modern, Classic or Minimal template, 5 accent colours, photo and projects can be turned on or off, page breaks avoid splitting sections), Word `.doc`, the original CV (PDF), Print / Save as PDF, Markdown, plain text (ATS), JSON Resume (jsonresume.org schema) and standalone HTML.

## Libraries
- GSAP 3.12 + ScrollTrigger and Lenis are stored locally in assets/js, so the site works offline and when opened as a local file
- html2canvas + jsPDF (PDF export) are in assets/vendor/, with a CDN fallback

