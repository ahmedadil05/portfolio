# Ahmed Adil Mohamed — Portfolio Site

A plain HTML/CSS/JS site — no build step, no framework, no cost. Three files do all the work:

- `index.html` — all the content (text, links, sections)
- `styles.css` — all the visual styling (colors, fonts, layout)
- `script.js` — the contact form behavior

## Deploy it for free (GitHub Pages — recommended)

You already have a GitHub account (`github.com/ahmedadil05`), so this is the fastest free option and gives you a URL like `ahmedadil05.github.io/portfolio`. No command line needed — everything below happens in the browser.

1. Go to [github.com/new](https://github.com/new) and create a new repository named `portfolio` (public, no README/license needed — you already have these files).
2. On the new repo's page, click **"uploading an existing file"** (or drag-and-drop) and upload `index.html`, `styles.css`, and `script.js` (and your `assets` folder with your photo, once you add one). Commit the upload.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", pick branch **main** and folder **/ (root)**, then **Save**.
5. Wait about a minute, then refresh — GitHub shows your live URL at the top of that page (something like `https://ahmedadil05.github.io/portfolio/`).

To update the site later: edit the files (on GitHub.com directly — click a file, then the pencil/edit icon — or re-upload changed files), commit, and the live site updates automatically within a minute or two.

## Alternative: Netlify Drop (no account, drag-and-drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `ahmed-portfolio-site` folder onto the page.
3. Netlify gives you a live URL immediately, free, no signup required (create a free account if you want to keep the site and update it later instead of it being temporary).

## Alternative: Vercel

Import the same GitHub repo at [vercel.com/new](https://vercel.com/new) (free tier, connects with your GitHub login) — it deploys automatically and redeploys every time you push a change.

---

## How to edit things

### Add or change your photo
Add an image file to an `assets` folder next to `index.html` and name it exactly `profile.jpg` (any photo works — it just needs that filename). Until you add one, the site shows a colored "AM" avatar instead — nothing looks broken either way. Want a different filename or a `.png`? Change the `src="assets/profile.jpg"` in `index.html`'s `<img class="avatar" ...>` tag to match.

### Change the background / colors
Open `styles.css` and look at the top section labeled `1. COLORS & BACKGROUND` (inside the `:root { ... }` block). Every color on the site is defined once there as a variable — change a hex value and it updates everywhere that color is used. There's also a commented example showing how to swap the flat background for a gradient or a photo.

### Add/edit text (About, Experience, Projects, Skills, Certifications, Contact)
Open `index.html` — each section is wrapped in an HTML comment like `<!-- EDIT: Projects — ... -->` telling you what's safe to change and how to duplicate a block (e.g. copy one `.proj-card` to add another project card, or one `.tl-item` to add another job).

### Change where the contact form goes
It currently opens the visitor's email app addressed to `badaw0840@gmail.com`. To change that address, edit the `toAddress` line near the top of `script.js`.

### Custom domain (optional, usually a small paid cost)
GitHub Pages, Netlify, and Vercel all support pointing a custom domain (like `ahmedadil.dev`) at your free-hosted site — the hosting stays free, only the domain name itself costs money if you want one instead of the default `*.github.io` / `*.netlify.app` URL.
