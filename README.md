# Kerala Trails

A demonstration website for a travel agency that plans **Kerala holidays** and other **domestic Indian** trips. The brand name Kerala Trails is fictional. Replace it, along with the logo and contact details, before the site is shown to customers as a live business.

There is no database. Enquiries open WhatsApp with a prepared message. Nothing is stored on the website, and a message is not sent until the visitor presses send in WhatsApp.

## Prerequisites

- Node.js 20.9 or newer
- npm

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Update the agency name and contact details

Edit `src/config/site.ts`.

- `name` — agency name, used in the header, footer, and page titles
- `logo` — path under `public/`, for example `/images/branding/logo.svg`
- `logoIncludesWordmark` — set to `true` if the logo image already contains the name
- `productionUrl` — public site origin, without a trailing slash, for canonical links and the sitemap
- `contacts.phone`, `contacts.email`, `contacts.address`, `contacts.hours`
- `contacts.whatsapp` — digits only, country code included, no `+` or spaces. Example: `919876543210`
- `contacts.mapsUrl` — optional Google Maps link
- `social.instagram` and `social.facebook` — full `https` profile URLs

Until `contacts.whatsapp` is a real number, enquiry buttons show the message on the page and do not open a chat. Do not put a stand-in number there.

Phone, email, address, and social links stay hidden or show “Not added yet” while they are empty. A map appears only after an office address is set.

## Add or edit tour packages

Packages live in `src/data/packages.ts`. Destinations live in `src/data/destinations.ts`.

Each package needs a unique `id` and `slug`. The slug becomes the URL: `/packages/your-slug`.

Set `startingPrice` to a number in Indian Rupees only for an illustrative sample, or `null` to show “Contact for price”. Any number is labelled on the site as a demo figure, not an official rate.

`featured: true` places the package on the homepage. `places` should list destination slugs from `src/data/destinations.ts`. `categories` can include `honeymoon`, `family`, `adventure`, `weekend`, and `group`.

After changing a slug, the old URL will 404. The sitemap picks up new slugs on the next build.

## Replace images

Put photographs in:

- `public/images/hero.jpg` — homepage hero
- `public/images/destinations/` — one file per destination, named to match the path in the data file
- `public/images/experiences/` — the Kerala experience grid
- `public/images/branding/logo.svg` — logo

Keep the same file names or update the `image` fields in the data files. Current demo photos are from Wikimedia Commons and are listed in `public/images/CREDITS.txt`. Replace them with the agency’s own licensed pictures before launch.

`scripts/download-demo-images.mjs` can re-download the Commons set. It is only a helper for the sample.

## Push to GitHub

From the project folder, with Git installed and a GitHub repository created:

```bash
git add .
git commit -m "Add the Kerala Trails demonstration site"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

Do not commit `.env` files or secrets. This demo does not need any.

## Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) and choose **Add New Project**.
2. Import the GitHub repository.
3. Leave the framework as Next.js. No environment variables are required for the demo.
4. Deploy.

Set `productionUrl` in `src/config/site.ts` to the live domain, for example `https://www.example.com`, then push again. Canonical URLs, Open Graph links, and `sitemap.xml` use that value. On Vercel, if `productionUrl` is still empty, the production deployment URL is used instead when Vercel provides it.

## Automatic redeployment

Connect the GitHub repository in the Vercel project. Each push to the production branch (usually `main`) starts a new deployment. When that deployment finishes, the live site updates. Pull requests can receive preview deployments if that setting is left on.

## Project map

- `src/app` — pages and routes
- `src/components` — header, footer, cards, forms, and shared UI
- `src/config/site.ts` — branding and contact details
- `src/data` — destinations and sample packages
- `src/lib/whatsapp.ts` — WhatsApp links and message formatting

A database, admin dashboard, payments, and email can be added later beside this data layer. The pages read from the TypeScript files today, so a future API can replace those functions without rewriting the layout.
