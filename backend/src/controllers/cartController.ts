import { Request, Response } from 'express';
import Cart from '../models/CartSchema';
import User from '../models/user';
import mongoose from 'mongoose';

export const getCart = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    console.log('Fetching cart for user:', username);
    
    // Find user
    const user = await User.findOne({ username });
    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    }

    // Find cart by user._id (or use username if that's your cart key)
   //const cart = await Cart.findOne({ user: user._id }).populate('items.productId');
   const carts = await Cart.find({ userId: username });

   if (!carts.length) {
     res.status(200).json({ items: [] });
     return;
   }

   // Merge all cart items into a single array
   const allItems = carts.flatMap(cart => cart.items);

   res.status(200).json({ items: allItems });
   

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { userId, item } = req.body;
    
    let cart = await Cart.findOne({ username:   userId });
    
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ ...item, quantity: 1 }]
      });
    } else {
      const existingItemIndex = cart.items.findIndex(i => i.id === item.id);
      
      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const existingItem = cart.items[existingItemIndex];
        if (existingItem) {
          existingItem.quantity = (existingItem.quantity || 0) + 1;
        }
      } else {
        // Add new item
        cart.items.push({ ...item, quantity: 1 });
      }
    }
    
    await cart.save();
    res.status(200).json({ items: cart.items });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
};
export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const { username, itemId } = req.params;

    // Validate itemId
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
       res.status(400).json({ message: 'Invalid item ID' });
       return;

    }

    // Find the cart document for the user
    const cart = await Cart.findOne({ userId: username });
    if (!cart) {
       res.status(404).json({ message: 'Cart not found for this user' });
       return;
    }

    // Check if the item exists in the cart
    const itemIndex = cart.items.findIndex(item => item._id.toString() === itemId);
    if (itemIndex === -1) {
       res.status(404).json({ message: 'Item not found in the cart' });
       return;
    }

    // Remove the item from the cart array
    cart.items.splice(itemIndex, 1);

    // If the cart is empty, delete the entire cart document
    if (cart.items.length === 0) {
      await Cart.deleteOne({ userId: username });
       res.status(200).json({ message: 'Cart is now empty and deleted' });
       return;
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Item removed successfully', items: cart.items });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Failed to remove item from cart', error });
  }
};

