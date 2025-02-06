import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductImages from '../components/ProductImage';
import ProductDetails from '../components/ProductDetails';

// Define the Product type
interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  description: string;
  features: string[];
  images: { url: string; caption?: string }[];
}

export default function ProductPage() {
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data); // Update the state with fetched product
            
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;
  //console.log(product?.images)

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Render ProductImages only if images are available */}
          {product.images && product.images.length > 0 && (
            <ProductImages
              images={product.images.map((image) => ({
                src: `http://localhost:5000/uploads/${image.url.split('\\').pop()}`,
                alt: image.caption || 'Product image',
              }))}
            />
          )}
          {/* Pass product details to ProductDetails */}
          <ProductDetails {... product} />
        </div>
      </div>
    </div>
  );
}
