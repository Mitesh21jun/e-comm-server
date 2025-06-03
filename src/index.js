import express from 'express';
import { seedCategories } from './seeders/category.seeder.js';
import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';
import categoryRoutes from './routes/category.routes.js';
import customerRoutes from './routes/customer.routes.js';
import './models/index.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  await connectDB();
  await seedCategories();

  app.use('/categories', categoryRoutes);
  app.use('/products', productRoutes);
  app.use('/orders', orderRoutes);
  app.use('/customers', customerRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
