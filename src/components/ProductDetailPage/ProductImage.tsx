import React from 'react';

interface ProductImageProps {
  image: string;
}

const ProductImage = ({ image }: ProductImageProps) => {
  return (
    <img
      src={image}
      // alt={product.name}
      className="w-full h-auto rounded-sm"
    />
  );
};

export default ProductImage;
