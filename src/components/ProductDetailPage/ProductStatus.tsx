import React from 'react';

interface ProductStatusProps {
  shippingFee: number;
  totalPrice: number;
}

const ProductStatus = ({ shippingFee, totalPrice }: ProductStatusProps) => {
  return (
    <div>
      <div className="flex w-full border-b-2 pb-4 border-gray-600">
        <div className="w-1/2">
          <p className="text-sm font-medium text-gray-700 text-left mt-4">
            총 상품금액
          </p>
          <p className="text-sm font-medium text-gray-700 text-left mt-3">
            배송비
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-sm font-bold text-gray-900 text-right mt-4">
            {totalPrice.toLocaleString()} 원
          </p>
          <p className="text-sm font-bold text-gray-900 text-right mt-3">
            + {shippingFee.toLocaleString()} 원
          </p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-1/2">
          <p className="text-sm font-medium text-gray-700 text-left mt-4">
            총 결제금액
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-xl font-extrabold text-gray-700 text-right mt-4">
            {(totalPrice + shippingFee).toLocaleString()} 원
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;
