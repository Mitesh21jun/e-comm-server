# E-Commerce Node.js Backend (MongoDB + Express + ES6)

## Features
- Category seeder (Mongoose, 4–5 categories)
- Product CRUD APIs (with image and discount fields)
- Category CRUD APIs
- Order placement API (supports customer by ID or object, calculates discounts)
- Customer CRUD APIs
- MongoDB database
- ES6 module syntax
- CORS enabled

## Setup
1. Update your `.env` with your MongoDB URI. 
   e.g: 
   ```MONGO_URI=localhost:27017/ecomm```
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
### Category
- `GET /categories` — View all categories
- `POST /categories` — Add category

### Product
- `POST /products` — Add product (name, description, price, discount, image, category)
- `PUT /products/:id` — Edit product
- `DELETE /products/:id` — Delete product
- `GET /products` — View all products
- `GET /products/:id` — View product details
- `GET /products/category/:categoryId` — View products by category

### Order
- `POST /orders` — Place an order (by customerId or customer object)
- `GET /orders` — View all orders
- `GET /orders/customer/:customerId` — View orders by customer

### Customer
- `POST /customers` — Add customer
- `GET /customers` — View all customers
- `GET /customers/:id` — View customer details
- `PUT /customers/:id` — Edit customer
- `DELETE /customers/:id` — Delete customer

---

