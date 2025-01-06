import React from 'react';

interface CalculateCartProps {
  calcPrice: number;
}

const CalculateCart = ({ calcPrice }: CalculateCartProps) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <div className="flex mt-5 mb-1">
        <div className="w-1/2">
          <p className="text-sm text-left">상품금액</p>
        </div>
        <div className="w-1/2 text-right">
          <p className="text-sm text-right font-bold">
            {calcPrice.toLocaleString()} 원
          </p>
        </div>
      </div>

      <div className="flex mb-3">
        <div className="w-1/2">
          <p className="text-sm text-left">배송비</p>
        </div>
        <div className="w-1/2 text-right">
          <p className="text-sm text-right font-bold">
            {(calcPrice >= 70000 ? 0 : 3000).toLocaleString()} 원
          </p>
        </div>
      </div>

      <div className="flex mb-1">
        <div className="w-1/2">
          <p className="text-md text-left font-bold">총 주문금액</p>
        </div>
        <div className="w-1/2 text-right">
          <p className="text-xl text-right font-bold text-red-500">
            {(calcPrice >= 70000
              ? calcPrice
              : calcPrice + 3000
            ).toLocaleString()}{' '}
            원
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculateCart;
