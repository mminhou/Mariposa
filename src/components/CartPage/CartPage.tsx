import React from 'react';
import { useState } from 'react';
import useCartStore from '../../stores/useCartStore';
import EmptyCart from './EmptyCart';
import CartListItem from './CartListItem';
import CalculateCart from './CalculateCart';

const CartPage = () => {
  const { items } = useCartStore();
  const calcPrice = useCartStore((state) => state.totalPrice());
  // const handleAddItem = () => {
  //   const newItem = {
  //     id: Math.random(), // 임시 id로 랜덤 값 사용
  //     name,
  //     imgUrl,
  //     price,
  //     quantity,
  //   };
  //   addItem(newItem);
  //   setName('');
  //   setPrice(0);
  //   setQuantity(1);
  // };

  return (
    <div className="p-4 md:px-16">
      <h1 className="text-2xl font-bold m-12 mb-8">장바구니</h1>
      <div className="lg:w-[70%] mx-auto p-4">
        <p className="pb-2 border-b-2 border-gray-600 text-left">
          총 {items.length}개
        </p>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="mb-6">
            {/* 장바구니 상품 목록 */}
            {items.map((item, idx) => (
              <CartListItem idx={idx} item={item} calcPrice={calcPrice} />
            ))}

            {/* 총 상품금액 계산 */}
            <CalculateCart calcPrice={calcPrice} />
          </div>
        )}
      </div>

      {/* 아이템 추가 입력 */}
      {/* <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="아이템 이름"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="아이템 가격"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="수량"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2"
        >
          아이템 추가
        </button>
      </div> */}
    </div>
  );
};

export default CartPage;
