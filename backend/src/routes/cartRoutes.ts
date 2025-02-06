import express from 'express';
import { getCart, addToCart, removeFromCart } from '../controllers/cartController';

const router = express.Router();

// GET: /api/cart/:username
router.get('/:username', getCart);

// POST: /api/cart/add
router.post('/add', addToCart);

// Optional: remove item by ID
router.delete('/:username/:itemId', removeFromCart);

export default router;