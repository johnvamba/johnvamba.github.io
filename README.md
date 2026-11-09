# John Vincent A. Amba — Portfolio

Personal portfolio built with **Next.js 16 + React 19** (App Router, static export) and styled with the
**AsclepXCare design system**: Source Serif 4 headings, Barlow body, one steel-blue accent, zero radius,
2px ink section rules and blueprint frames with "+" corner marks. It deploys to **GitHub Pages** through
GitHub Actions.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in ./out
npm start            # serves ./out
```

Requires Node.js 20.9 or newer.

## Edit content

All text lives in `src/data/profile.ts`: profile, metrics, skills, experience, projects and education.
Change the data and the page updates; no component edits needed.

| Path | What it holds |
| --- | --- |
| `src/data/profile.ts` | All portfolio content |
| `src/app/globals.css` | Design tokens and component classes (AsclepXCare) |
| `src/app/page.tsx` | Page sections |
| `src/components/` | Header, project filter, reveal motion, logo mark, brand icons |
| `.github/workflows/deploy.yml` | CI and GitHub Pages deploy |

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/johnvamba/<repo-name>.git
   git push -u origin main
   ```
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow runs on every push to `main` and publishes the site. The URL appears in the
   **Actions** run summary and under **Settings → Pages**. If the first run failed because Pages was not
   enabled yet, open it in the **Actions** tab and choose **Re-run all jobs**.

### How the pipeline works

- **Pull requests:** install, typecheck and build. Nothing is deployed.
- **Push to `main` (or manual run):** the same checks, then the `out/` folder is uploaded and deployed with
  `actions/deploy-pages`.
- **Base path:** a project repo (for example `new-portfolio`) is served at
  `https://johnvamba.github.io/new-portfolio/`, so the build sets `NEXT_PUBLIC_BASE_PATH=/new-portfolio`
  automatically. A repo named `johnvamba.github.io` is served from the root.
- **Custom domain:** add the domain under **Settings → Pages**, then add a repository variable
  `BASE_PATH` with the value `/` (**Settings → Secrets and variables → Actions → Variables**).

Dependabot opens monthly update PRs for npm packages and GitHub Actions; the CI job checks each one.
