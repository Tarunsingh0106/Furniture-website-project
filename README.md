# Furni — Furniture Storefront

A React furniture storefront portfolio project by Tarun Singh, with an Express API,
a browser-persisted cart, and MongoDB-backed contact/demo-order endpoints.

## Features

- Home, shop, about, services, blog, contact, cart, and checkout pages.
- Product catalog served by the Express API.
- Add/remove products, change quantities, and retain the cart after a page reload.
- Shared cart badge and correct quantity-based totals.
- Contact and checkout validation, loading/error states, and server-side price calculation.
- MongoDB/Mongoose persistence once a database connection is configured.
- Vercel configuration for the frontend and API under the same domain.

This is a portfolio demonstration. It does not process payments or fulfil orders.
The catalog and template team/blog content are sample data; there is no user-account,
payment, coupon, newsletter, or inventory-management system.

## Local setup

Use Node.js 22 or newer. From the repository root:

```sh
npm ci
cp .env.example .env
```

Add your MongoDB Atlas connection string as `MONGODB_URI` in `.env`. Keep this value
server-side and never commit it or put it in a `VITE_` variable.

Run the API and frontend in separate terminals:

```sh
npm start
npm run dev
```

The frontend proxies `/api` to port 8000 locally. Without `MONGODB_URI`, browsing and
the local cart work; contact and checkout submissions return an explicit 503 error
instead of claiming that unsaved data was stored.

## Checks

```sh
npm test
npm run build
npm audit --omit=dev
```

The built-in Node tests cover catalog loading, trusted order prices/quantity
validation, invalid input, and the unavailable-database response. They never write
to a real database. Database persistence still needs an end-to-end check after
connecting MongoDB Atlas.

## Deploy to Vercel

Import this repository with its root directory set to the repository root.
`vercel.json` defines a Vite frontend service and an Express backend service on
the same domain. Requests under `/api/*` reach Express with their original path;
SPA routes such as `/shop` and `/cart` resolve to the frontend.

Set `MONGODB_URI` in the Vercel project's environment settings for Production and
Preview, then deploy. Do not upload `.env` files. No client-side API URL is needed
when frontend and backend use the same deployment.

API endpoints:

- `GET /api/health`
- `GET /api/shop/alldata`
- `GET /api/about/teams`
- `POST /api/contact/insert`
- `POST /api/checkout/insert`

## Design attribution

The original Furni/UntreeStore visual template and assets are by
[Untree.co](https://untree.co), distributed by [ThemeWagon](https://themewagon.com).
The supplied stylesheet identifies the design license as
[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Attribution is retained
in the site footer and stylesheet. The React conversion, app integration and
project work are documented in this repository; the underlying visual template
is not claimed as an original design.
