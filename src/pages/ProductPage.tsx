import ProductImages from '../components/ProductImage';
import ProductDetails from '../components/ProductDetails';

const productImages = [
  {
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    alt: 'Product 1',
  },
  {
    src: 'https://unsplash.com/photos/tilt-shift-lens-photo-of-stainless-steel-chain-PDxYfXVlK2M',
    alt: 'Product 2',
  },
  // Add more images
];

const productDetails = {
  name: 'Premium Wireless Headphones',
  sku: 'WH1000XM4',
  price: 23 ,
  originalPrice: 399.99,
  rating: 4.5,
  reviews: 120,
  description: 'Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.',
  features: [
    'Industry-leading noise cancellation',
    '30-hour battery life',
    'Touch sensor controls',
    'Speak-to-chat technology',
  ],
};

export default function ProductPage() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <ProductImages images={productImages} />
          <ProductDetails {...productDetails} />
        </div>
      </div>
    </div>
  );
}