# Pathivara Tech website

Production-ready React and Vite source for the Pathivara Tech company website.
It is configured for GitHub and Cloudflare Pages.

## Local development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable website is generated in `dist/`.

## Upload to GitHub

1. Create a new GitHub repository named `pathivara-tech`.
2. Extract this ZIP file.
3. Upload everything inside the `pathivara-tech-cloudflare` folder to the
   repository. Do not upload `node_modules` or `dist`.
4. Commit the files to the `main` branch.

You can also use Git:

```bash
git init
git add .
git commit -m "Add Pathivara Tech website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pathivara-tech.git
git push -u origin main
```

## Deploy with Cloudflare Pages

1. Open Cloudflare Dashboard.
2. Go to **Workers & Pages**.
3. Choose **Create application → Pages → Import an existing Git repository**.
4. Connect GitHub and select the `pathivara-tech` repository.
5. Use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |

6. Choose **Save and Deploy**.

Every new push to `main` will automatically deploy a new production version.

## Connect pathivaratech.com.np

The root domain must be added to the same Cloudflare account as the Pages
project.

1. Add `pathivaratech.com.np` as a Cloudflare website/zone.
2. Before changing nameservers, copy any existing MX, SPF, DKIM, DMARC, or
   other email-related DNS records into Cloudflare.
3. Replace `ns1.hosting.net.np` and `ns2.hosting.net.np` at the domain registry
   with the two nameservers assigned by Cloudflare.
4. In the Pages project, open **Custom domains → Set up a domain**.
5. Enter `pathivaratech.com.np` and complete the checks.
6. Add `www.pathivaratech.com.np` as another custom domain if desired.

Cloudflare will provision HTTPS automatically after the DNS becomes active.

## Contact form

The form opens the visitor's email application with a prepared message addressed
to `Techpathivara@gmail.com`. No form data is stored on the website.

To change the email address, search `src/App.jsx` for
`Techpathivara@gmail.com` and replace both occurrences.

## Editing content

- Main page content and sections: `src/App.jsx`
- Colors, layout, and responsive design: `src/styles.css`
- Logo/reference asset: `public/pathivara-brand-reference.png`
- SEO title and description: `index.html`
