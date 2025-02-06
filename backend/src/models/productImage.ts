import { Document, Schema, model } from 'mongoose';

interface IProductImage extends Document {
  url: string;
  product: Schema.Types.ObjectId;
  createdAt: Date;
}

const productImageSchema = new Schema<IProductImage>({
  url: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  createdAt: { type: Date, default: Date.now }


});
// Debugging Log
console.log('Registering ProductImage model');
const ProductImage = model<IProductImage>('ProductImage', productImageSchema);

export default ProductImage;
export { IProductImage };