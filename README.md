# E-Commerce Node.js Backend (MongoDB + Express + ES6)

## Features
- Category seeder (Mongoose, 4–5 categories)
- Product CRUD APIs
- Order placement API (stores customer and cart items)
- MongoDB database
- ES6 module syntax

## Setup
1. Ensure MongoDB is running locally on port 27017.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run dev
   # or
   npm start
   ```

## API Endpoints
- `POST /products` — Add product
- `PUT /products/:id` — Edit product
- `DELETE /products/:id` — Delete product
- `GET /products` — View all products
- `GET /products/:id` — View product details
- `POST /orders` — Place an order

---