# Online Store – Frontend (Angular)

Single-page e-commerce app built with Angular. Browse products, view details, manage a cart, register and log in, and place an order. It talks to a Spring Boot REST API with JWT authentication.

- **Live site:** https://online-store-frontend-three.vercel.app
- **Backend repo:** https://github.com/sindhujaganesan1726-bit/online-store-backend

> The backend and database run on free hosting tiers, so the first load after a period of inactivity can take up to about a minute.

## Screenshots

<!-- TODO: add screenshots to a /screenshots folder, then uncomment -->
<!-- ![Home](screenshots/home.png) -->
<!-- ![Cart](screenshots/cart.png) -->
<!-- ![Checkout](screenshots/checkout.png) -->

## Tech Stack

- Angular (standalone components, HttpClient, Router)
- TypeScript, HTML, CSS
- Bootstrap and Bootstrap Icons
- JWT-based authentication (token stored in the browser)
- Deployed on Vercel

## Features

- **Home:** responsive 3-per-row product grid with a live cart counter
- **Product details:** larger view of a product with Add to Cart
- **Cart:** increase or decrease quantity, remove items, running total
- **Checkout:** order summary, delivery name and address, place order
- **Login and Register:** clean centered forms with error messages
- Environment-based API configuration for local and production

## Project Structure

```
src/app
├── home/              # product grid and cart count
├── product-cart/      # reusable product card
├── product-details/   # single product page
├── cart/              # cart page
├── checkout/          # checkout and order placement
├── login/  register/  # authentication pages
└── services/          # auth and cart services
src/environments/      # API URL for development and production
```

## Run Locally

**Prerequisites:** Node.js, Angular CLI, and the [backend](https://github.com/sindhujaganesan1726-bit/online-store-backend) running on `http://localhost:8080`.

```bash
git clone https://github.com/sindhujaganesan1726-bit/online-store-frontend.git
cd online-store-frontend
npm install
ng serve
```

Open http://localhost:4200

The local API URL is set in `src/environments/environment.development.ts` and the production URL in `src/environments/environment.ts`.

## Deployment

Deployed on Vercel from the `main` branch.

- Build output directory: `dist/<project-name>/browser`
- `vercel.json` rewrites all routes to `index.html`, so refreshing on pages like `/cart` works

## Author

Sindhu – Java Full Stack Developer
GitHub: [sindhujaganesan1726-bit](https://github.com/sindhujaganesan1726-bit)

