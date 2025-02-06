import { useState } from 'react';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductImagesProps {
  images: ProductImage[];
}

export default function ProductImages({ images }: ProductImagesProps) {
    console.log(images)
  
  const [mainImage, setMainImage] = useState(images[0].src);

  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      <img
        src={mainImage}
        alt="Product"
        className="w-full h-auto rounded-lg shadow-md mb-4"
      />
      <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onClick={() => setMainImage(image.src)}
          />
        ))}
      </div>
    </div>
  );
}