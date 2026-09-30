# Pawlet website

Static showcase site for www.pawlet.in. No build step, no backend. Open `index.html` to preview.

## Files
- `index.html`, `styles.css`, `script.js`: the site
- `assets/img/`: pack images (webp + jpg fallback), logo, badges, WhatsApp QR, icons, social share image
- `assets/pawlet-catalogue.pdf`: downloadable catalogue (replace when the catalogue changes)
- `CNAME`, `robots.txt`, `sitemap.xml`, `favicon.ico`: hosting / SEO files

## Deploy (pick one)
**GitHub Pages**: push this folder to a repo, Settings → Pages → deploy from `main` / root. `CNAME` already sets `www.pawlet.in`.
At your domain registrar add:
- `CNAME` record: `www` → `<your-github-username>.github.io`
- `A` records for the apex `pawlet.in`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

**Netlify / Cloudflare Pages**: drag-and-drop this folder (or connect the repo), then add `www.pawlet.in` as a custom domain and follow their DNS instructions. Delete `CNAME` if not using GitHub Pages.

## Editing
- Prices: search `399` / `299` in `index.html` (product cards, compare table, and the JSON-LD block in `<head>`).
- WhatsApp number: search `917855994065`.
