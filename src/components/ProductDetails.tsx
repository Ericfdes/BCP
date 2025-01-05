interface ProductDetailsProps {
    name: string;
    sku: string;
    price?: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    description: string;
    features: string[];
  }
  
  export default function ProductDetails({
    name,
    sku,
    price,
    originalPrice,
    description,
    features,
  }: ProductDetailsProps) {
    return (
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">SKU: {sku}</p>
        <div className="mb-4">
        {price?(<>
          <span className="text-2xl font-bold mr-2">${price}</span>
          (<span className="text-gray-500 line-through">${originalPrice}</span>)
        </>)
        
      :(<span className="text-2xl font-bold mr-2">${originalPrice}</span>)}
        
        
          
       
        </div>
        {/* Rating Stars */}
        
        <p className="text-gray-700 mb-6">{description}</p>
        {/* Features List */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }