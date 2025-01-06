import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/types';

// 샘플대이터
const products: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (i + 1) * 1000, // price를 숫자 타입으로 설정
  imgUrl:
    'https://madeleesul.blogpay.io/img/g/madeleesul/0470347001732766430.jpg',
}));

const ProductListPage = () => {
  const [visibleCount, setVisibleCount] = useState(12); // 초기 표시 제품 수

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); // 12개씩 더 불러오기
  };

  return (
    <div className="p-4 lg:px-32">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.slice(0, visibleCount).map((product) => (
          <Link to={`/products/${product.id}`} state={product}>
            <div key={product.id}>
              <img
                src={product.imgUrl}
                alt={product.name}
                className="object-cover w-full h-full rounded-lg"
              />
              {/* 상품명 (왼쪽 정렬) */}
              <p className="mt-4 text-md font-bold text-gray-800 text-left w-full">
                {product.name}
              </p>
              {/* 가격 (천 단위 콤마 추가) */}
              <p className="mt-1 mb-10 text-sm font-bold text-gray-500 text-left w-full">
                {/* 천 단위 구분 */}
                {product.price.toLocaleString()} 원
              </p>
            </div>
          </Link>
        ))}
      </div>
      {visibleCount < products.length && ( // 모든 제품이 표시되면 버튼 숨기기
        <button
          onClick={handleLoadMore}
          className="mt-4 w-full px-6 py-3 bg-white-500 text-black rounded-lg hover:bg-gray-100 focus:outline-none border border-gray-200"
        >
          더보기
        </button>
      )}
    </div>
  );
};

export default ProductListPage;
