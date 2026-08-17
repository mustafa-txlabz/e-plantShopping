# Paradise Nursery

Paradise Nursery is a React + Vite storefront for browsing and purchasing indoor plants. The app includes a landing page, plant catalog, and shopping cart with dynamic quantity updates and totals.

## Features

- Landing page with a full background image and welcoming company message
- Product catalog with multiple plant categories
- Add-to-cart buttons for each product
- Dynamic cart badge that updates with total item count
- Shopping cart page with:
  - quantity increase/decrease controls
  - delete item action
  - total plant count
  - overall total price
  - continue shopping and checkout buttons

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Router DOM

## Project Structure

- `src/App.jsx` – app routing and page layout
- `src/ProductList.jsx` – plant listings and category layout
- `src/CartItem.jsx` – shopping cart page
- `src/CartSlice.jsx` – Redux cart state logic
- `src/AboutUs.jsx` – company/about text
- `src/App.css` – landing page and storefront styles

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal, usually:
   ```bash
   http://localhost:5173/
   ```

## Build for Production

```bash
npm run build
```

## Project Goal

This application demonstrates a simple e-commerce shopping flow for a plant shop, with a clean storefront interface and interactive cart functionality.
