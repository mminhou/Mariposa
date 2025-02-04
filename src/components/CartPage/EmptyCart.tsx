import React from 'react';

const EmptyCart = () => {
  return (
    <div>
      <div className="flex justify-center items-center pt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="size-14 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>

      <p className="p-20 pt-3 text-sm text-gray-400 border-b border-gray-200">
        장바구니에 담긴 상품이 없습니다.
      </p>
    </div>
  );
};

export default EmptyCart;
