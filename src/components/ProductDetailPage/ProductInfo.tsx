import React from 'react';

interface ProductInfoProps {
  shippingFee: number;
}

const ProductInfo = ({ shippingFee }: ProductInfoProps) => {
  return (
    <div>
      {/* 제조사, 원산지, 브랜드 */}
      <div className="flex w-full border-b pb-4 border-gray-200">
        {/* 첫 번째 열 (7: 비율로 설정) */}
        <div className="w-4/12">
          <p className="text-sm font-medium text-gray-700 text-left mt-4">
            원산지
          </p>
          <p className="text-sm font-medium text-gray-700 text-left mt-3">
            제조사
          </p>
          <p className="text-sm font-medium text-gray-700 text-left mt-3">
            브랜드
          </p>
        </div>

        {/* 두 번째 열 (3: 비율로 설정) */}
        <div className="w-8/12">
          <p className="text-sm font-medium text-gray-700 text-left mt-4">
            대한민국
          </p>
          <p className="text-sm font-medium text-gray-700 text-left mt-3">
            MARIPOSA
          </p>
          <p className="text-sm font-medium text-gray-700 text-left mt-3">
            MARIPOSA
          </p>
        </div>
      </div>
      {/* 배송비 */}
      <div className="flex w-full border-b pb-4 border-gray-200">
        <div className="w-4/12">
          <p className="text-sm font-medium text-gray-700 text-left mt-4">
            배송비
          </p>
        </div>
        <div className="w-8/12">
          <p className="text-sm font-extrabold text-left mt-4">
            {shippingFee.toLocaleString()} 원
          </p>
          <p className="text-sm font-medium text-gray-700 text-left mt-2">
            ( 주문시 결제 / 70,000원 이상 구매 시 무료 )
          </p>
          <p className="text-sm font-medium text-gray-700 text-left">
            제주 추가 3,000원 / 제주 외 도서산간 추가 4,000원
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
