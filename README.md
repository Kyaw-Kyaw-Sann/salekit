# SaleKit

SaleKit is a frontend-only point-of-sale practice project built to learn React and TypeScript fundamentals. It uses mock data and in-memory React state, so no backend or database is required.

## Current Features

- Responsive dashboard with derived product and sales statistics
- Product list and product details
- Create and edit product forms with validation
- Product deletion with confirmation
- React Router navigation and not-found states
- Mock product and sales data
- Reusable layout and UI components

The POS, sales history, and sale details pages are currently placeholders for future frontend-only practice.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React
- React Hot Toast

## Run Locally

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd salekit
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Type-check and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Data Behavior

Products and sales start from the mock data in:

```text
src/data/initialProducts.ts
src/data/initialSales.ts
```

Create, update, and delete operations modify React state only. Refreshing the browser restores the initial mock data. This project does not use localStorage, an API, a backend, authentication, or a database.

## Main Routes

```text
/                         Dashboard
/products                 Product list
/products/new             Create product
/products/:productId      Product details
/products/:productId/edit Edit product
/pos                      POS placeholder
/sales                    Sales history placeholder
/sales/:saleId            Sale details placeholder
```

## Project Purpose

This repository is intentionally kept as a standalone React learning project. Backend-connected authentication, user-specific products, and admin features belong in a separate frontend project.
