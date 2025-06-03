import express from 'express';
import { placeOrder, getAllOrders, getOrdersByCustomerId } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', placeOrder);
router.get('/', getAllOrders);
router.get('/customer/:customerId', getOrdersByCustomerId);

export default router;
