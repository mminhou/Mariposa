import React from 'react';
import useCartStore from '../../stores/useCartStore';
import { Link } from 'react-router-dom';

interface CartListItemProps {
  idx: number;
  item: any;
  calcPrice: number;
}

const CartListItem = ({ idx, item, calcPrice }: CartListItemProps) => {
  const { removeItem, updateQuantity } = useCartStore();

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    // 수량을 0보다 작게는 설정 안되도록 함
    if (newQuantity <= 0) {
      return; // 함수 실행을 중단
    }
    updateQuantity(id, newQuantity);
  };

  return (
    <div
      key={item.id}
      className="flex pt-4 pb-4 border-b border-gray-300 h-[150px] items-center"
    >
      {/* 상품 이미지 */}
      <div className="w-[120px]">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="h-auto object-cover rounded-sm"
        />
      </div>

      {/* 상품 정보 */}
      <div className="w-full pl-4 mt-1">
        {/* 상품 이름, X 버튼 */}
        <div className="flex mb-1">
          <div className="w-1/2">
            <Link to={`/products/${item.id}`} state={item}>
              <p className="text-sm text-left">
                미니베어 딱핀
                {item.name}
              </p>
            </Link>
          </div>
          <div className="w-1/2 text-right">
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-gray-800 hover:bg-red-300"
            >
              x
            </button>
          </div>
        </div>

        {/* 상품 수량 */}
        <div className="flex items-center bg-gray-100 p-1.5 mb-2">
          <div className="w-1/2 text-left">
            <p className="text-xs text-left">수량</p>
          </div>
          <div className="w-1/2">
            <div>
              <div className="flex items-center w-[6rem] ml-auto">
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                  className="bg-white border border-gray-300 rounded-sm p-1.5 h-6"
                >
                  <svg
                    className="w-1.5 h-1.5 text-gray-900 dark:text-white"
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
                  value={item.quantity}
                  // onChange={(e) =>
                  //   setQuantity(Number(e.target.value))
                  // }
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
                  className="bg-white border-t border-b border-gray-300 h-6 text-center text-gray-900 text-xs w-full py-1.5"
                  placeholder="1"
                />
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }
                  className="bg-white border border-gray-300 rounded-sm p-1.5 h-6"
                >
                  <svg
                    className="w-1.5 h-1.5 text-gray-900 dark:text-white"
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
        </div>

        {/* 상품금액 */}
        <div className="flex mb-1">
          <div className="w-1/2">
            <p className="text-xs font-bold text-left">상품금액</p>
          </div>
          <div className="w-1/2">
            <p className="text-xs font-bold text-right">
              {(item.price * item.quantity).toLocaleString()} 원
            </p>
          </div>
        </div>

        {/* 배송비 */}
        <div className="flex mb-1">
          <div className="w-1/2">
            <p className="text-xs text-left">배송비</p>
          </div>
          <div className="w-1/2">
            <p className="text-xs text-right">
              {idx === 0 && calcPrice < 70000 ? (3000).toLocaleString() : 0} 원
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
