# Pathivara Tech website

Complete source for the immersive Pathivara Tech website, ready for GitHub and
Cloudflare Workers Builds. It includes the animated trident loader, responsive
layouts, future-technology visuals, services, work, metrics, FAQs, and a working
online project-enquiry form.

## Run locally

Requirements: Node.js 20 or newer.

```powershell
npm install
npm run dev
```

Open the local URL shown by Vite.

## Replace the old GitHub website

1. Extract this ZIP.
2. Open your existing local `Pathivara-Tech` repository folder.
3. Keep the hidden `.git` folder, but remove the old website files.
4. Copy every file and folder from this extracted package into the repository
   root.
5. Make sure the old `_redirects` file is deleted. This package intentionally
   does not contain one because the old catch-all rule caused Cloudflare's
   infinite-loop deployment error.
6. Run:

```powershell
git add -A
git commit -m "Replace website with immersive Pathivara Tech redesign"
git push origin main
```

If Git says the remote contains newer work, first run:

```powershell
git pull origin main --no-rebase
git push origin main
```

## Cloudflare settings

Use these settings for the existing Cloudflare Workers Builds project:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |
| Node version | `22` |

`wrangler.jsonc` tells Cloudflare to publish the generated `dist` directory and
handle site routes as a single-page application. Do not recreate `_redirects`.

If the same Cloudflare project and custom domain are reused, no DNS change is
needed. A push to `main` triggers a new build and replaces the old website.

## Project-enquiry form

The contact form submits over HTTPS to FormSubmit and sends enquiries to
`Techpathivara@gmail.com`. The first real form submission triggers a confirmation
email from FormSubmit. Open that email and click the activation link once.
Subsequent enquiries will arrive normally.

If the activation email is not visible, check the Gmail Spam folder. The form
also displays a direct email fallback if an online submission fails.

## Production check

Before pushing, you can verify the package locally:

```powershell
npm install
npm run build
```

The build output must finish successfully and create the `dist` folder.
