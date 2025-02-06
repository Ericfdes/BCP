import { Document, Schema, model } from 'mongoose';


interface IProduct extends Document {
  name: string;
  price: number;
  sku?: string;
  description: string;
  images: { url: string, caption?: string }[]; // Image objects in the array
  createdAt: Date;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  sku: { type: String },
  description: { type: String, required: true },
  images: [{ url: { type: String, required: true }, caption: { type: String } }], // Embedded image objects
  createdAt: { type: Date, default: Date.now }
});

const Product = model<IProduct>('Product', productSchema);

console.log('Registering Product model');

export default Product;
export {IProduct};

