import React from 'react';

interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => {
  return (
    <p className="text-lg font-medium text-gray-900 text-left mt-4 border-b-2 pb-2 border-gray-600">
      {String(price).toLocaleString()} 원
    </p>
  );
};

export default ProductPrice;
