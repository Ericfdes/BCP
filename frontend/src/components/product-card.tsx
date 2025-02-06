import { Product } from "../types/Product.ts";
import astImage from "../assets/alt.jpg";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const altI = astImage;
  const getImageUrl = (imageUrl: string) => {
    if (!imageUrl) return altI;
    // Convert file path to URL
    const filename = imageUrl.split('\\').pop(); // Handle Windows paths
    return `http://localhost:5000/uploads/${filename}`;
  };
  console.log(product._id)
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <a key={product._id} href={product.href} className="group">
        <img
          alt={product.imageAlt}
          src={product.images && product.images[0] ? getImageUrl(product.images[0].url) : altI}
          className="w-full h-56 object-cover rounded-t-lg group-hover:opacity-75"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
        </div>
      </a>
    </div>
  );
}
