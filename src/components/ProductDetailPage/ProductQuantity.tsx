import React from 'react';

interface ProductQuantityProps {
  quantity: number; // 부모로부터 전달받은 수량상태
  setQuantity: React.Dispatch<React.SetStateAction<number>>; // 수량상태를 변경하는 함수
}

const ProductQuantity = ({ quantity, setQuantity }: ProductQuantityProps) => {
  // 수량 변경 함수
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex w-full border-b pt-4 pb-4">
      <div className="flex flex-col w-full bg-gray-100 p-5">
        <p className="text-sm font-medium text-gray-700 text-left mb-3">수량</p>
        <div className="relative flex items-center max-w-[8rem]">
          <button
            onClick={decreaseQuantity}
            className="bg-white border border-gray-300 rounded-sm p-3 h-9"
          >
            <svg
              className="w-2 h-2 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            onKeyDown={(e) => {
              if (
                !(
                  (e.key >= '0' && e.key <= '9') || // 숫자 키
                  e.key === 'Backspace' || // 백스페이스
                  e.key === 'ArrowLeft' || // 왼쪽 화살표
                  e.key === 'ArrowRight' || // 오른쪽 화살표
                  e.key === 'Tab' // Tab 키
                )
              ) {
                e.preventDefault(); // 그 외의 키는 입력되지 않도록 차단
              }
            }}
            className="bg-white border-t border-b border-gray-300 h-9 text-center text-gray-900 text-sm w-full py-2.5"
            placeholder="1"
          />
          <button
            onClick={increaseQuantity}
            className="bg-white border border-gray-300 rounded-sm p-3 h-9"
          >
            <svg
              className="w-2 h-2 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
