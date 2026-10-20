# Deploying Tiny Turtles Daycare to Cloudflare Pages

This project is fully configured and ready for 1-click or CLI deployment to **Cloudflare Pages**.

---

## Quick Configuration Summary

| Setting | Value |
| --- | --- |
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `dist` |
| **Node.js Version** | `22.0.0` (configured in `.node-version` & `.nvmrc`) |
| **SPA Fallback Routing** | `/* /index.html 200` (configured in `public/_redirects`) |
| **Security & Cache Headers** | Configured in `public/_headers` |
| **Cloudflare Config** | `wrangler.jsonc` |

---

## Deployment Options

### Option 1: Cloudflare Git Integration (Recommended for automatic CI/CD)

1. Push your repository to **GitHub** or **GitLab**.
2. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Compute (Workers) > Pages**.
3. Click **Connect to Git** and choose this repository.
4. Set the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Cloudflare will build and publish your site with global edge caching and free SSL.

---

### Option 2: Deploy from Terminal with Wrangler CLI

You can deploy directly using Wrangler (installed as a project dependency):

```bash
# 1. Build the production assets
npm run build

# 2. Deploy to Cloudflare Pages
npm run deploy
```

Or run directly with npx:

```bash
npx wrangler pages deploy dist --project-name=tiny-turtles-daycare
```

If it's your first time running Wrangler, it will prompt you to authenticate with your Cloudflare account in the browser.

---

### Option 3: Manual Drag & Drop (Zero Install)

1. Run `npm run build` locally.
2. In the [Cloudflare Pages Dashboard](https://dash.cloudflare.com/), choose **Create an application** > **Pages** > **Upload assets**.
3. Drag and drop the `dist` folder directly into Cloudflare.

---

## Included Files for Cloudflare

- `wrangler.jsonc` — Project configuration for Cloudflare Pages and Wrangler CLI.
- `public/_redirects` — Ensures Single Page Application (SPA) client-side routing works for all URLs without 404s.
- `public/_headers` — Adds strict security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) and 1-year immutable caching for static bundled assets (`/assets/*`).
- `.node-version` — Tells Cloudflare's build image to use Node 20 LTS.
- `public/favicon.svg` — Custom vector mascot icon served as the site favicon.
