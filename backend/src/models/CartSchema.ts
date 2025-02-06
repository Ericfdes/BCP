import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  quantity: { type: Number, default: 1 }
});

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [cartItemSchema]
});

export default mongoose.model('Cart', cartSchema);