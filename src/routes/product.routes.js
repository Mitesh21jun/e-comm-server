import express from 'express';
import {
  addProduct,
  editProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  getProductsByCategory
} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', addProduct);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductDetails);
router.get('/category/:categoryId', getProductsByCategory);

export default router;
