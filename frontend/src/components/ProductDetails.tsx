import { Button } from "flowbite-react";
import { useCart } from "../context/CartContex";
import toast, { Toaster } from 'react-hot-toast';

interface ProductDetailsProps {
    id: string;
    name: string;
    sku: string;
    price: number;
    description: string;
    features: string[];
    images: { url: string; caption?: string }[];
  }
  
  export default function ProductDetails({
    id,
    name,
    sku,
    price,
    description,
    features,
   
  }: ProductDetailsProps) {

    const {addToCart} = useCart();
    const handelAddToCart = async() =>{
      try {
        await addToCart({
          id,
          name,
          price,
          quantity: 1
        });
        toast.success(`${name} added to cart`);
      } catch (error) {
        toast.error('Failed to add item to cart');
      }
      
    };

    return (
      <div className="w-full md:w-1/2 px-4 mx-auto">
         <Toaster />  
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-500 mb-4 italic">SKU: {sku}</p>
        <div className="mb-4">
          <span className="text-2xl font-bold text-green-600 mr-2">
            ₹{price.toLocaleString()}
          </span>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        {features && features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Features:</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <Button onClick={handelAddToCart}>add to cart</Button>
        </div>
     
      </div>
    );
  }
  