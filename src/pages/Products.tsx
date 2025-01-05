

import ProductCard from "../components/product-card";
import { Product } from "../types/Product";


const Products = () => {

  const products: Product[] = [

    {
      id: '1',
      name: 'Product 1',
      price: '$10.00',
      imageSrc: 'https://picsum.photos/seed/picsum/200/300',
      imageAlt: 'Product 1 Image',
      href: '/product/1',
    },
    {
      id: '2',
      name: 'Product 2',
      price: '$20.00',
      imageSrc: 'https://picsum.photos/seed/picsum/50/50',
      imageAlt: 'Product 2 Image',
      href: '#',
    },



  ]
    return (
      <div className="products-page">
      <h1 className="text-3xl text-center font-bold mb-6">Our Products</h1>
      <ProductCard products={products} />
    </div>
    );
  };
  
  export default Products;
  