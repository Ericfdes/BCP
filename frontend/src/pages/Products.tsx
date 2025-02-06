import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { Product } from "../types/Product";

const Products = () => {
  const [product, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page p-14">
      <h1 className="text-3xl text-center font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {product.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
