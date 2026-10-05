# www.hdeazy.com

Website for Highly Distinguish Pty Ltd — safe, practical AI for Sydney's small professional firms.

A static [Next.js](https://nextjs.org) site (English at `/`, Chinese at `/zh/`), deployed to GitHub Pages by GitHub Actions.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # static site in out/, including the legacy archive
```

## Where things live

| What | Where |
|---|---|
| Company facts (phone, ABN, email) | `src/content/site.ts` |
| Page copy — English / Chinese | `src/content/en.ts` / `src/content/zh.ts` (same shape, type-checked) |
| Insights articles | `src/content/insights/<slug>.<en\|zh>.md` — add both languages |
| Privacy policy and terms | `src/content/legal/*.md` |
| Page layouts | `src/views/` |
| Routes (thin wrappers) | `src/app/(en)/` and `src/app/(zh)/zh/` |
| AI-assistant summary | `public/llms.txt` |

## Legacy archive

`legacy/` is a frozen copy of the pre-2022 Jekyll site's built pages (tech blog posts, `/blog_tech/`, `/blog_chn/`), so old URLs keep working. `npm run build` copies it into `out/` after the Next.js build; new pages win on any clash. The original Jekyll source is in git history before the Next.js migration.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**, and keep `www.hdeazy.com` as the custom domain.
