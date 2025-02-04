import React, { useState } from 'react';
import texts from '../../constants/texts';

// 샘플 제품 데이터
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `$${(i + 1) * 10}`,
  image: 'https://via.placeholder.com/100',
}));

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(12); // 초기 표시 제품 수

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); // 12개씩 더 불러오기
  };

  return (
    <div className="p-4 md:px-16">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 mb-2"
            />
            <h2 className="text-lg font-medium">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
      {visibleCount < products.length && ( // 모든 제품이 표시되면 버튼 숨기기
        <button
          onClick={handleLoadMore}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {texts.showMore}
        </button>
      )}
    </div>
  );
};

export default ProductList;
