import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductStatus from './ProductStatus';
import useCartStore from '../../stores/useCartStore';
import ProductDescription from './ProductDescription';
import { Product } from '../../types/types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1); // 수량 상태 관리
  const [shippingFee, setShippingFee] = useState(3000); // 기본 배송비 3000원

  useEffect(() => {
    /**
     * 임시코드 -> 나중에 api에서 데이터 가져올 때 수정할 것
     */
    if (!id) {
      navigate('/'); // 상품이 없으면 홈으로 리디렉션
    } else {
      if (Number(id) > 50) {
        // 상품이 없는경우 예외처리로 null값 임시할당
        setProduct(null);
      } else {
        const product = {
          id: Number(id + 1),
          name: `Product ${id + 1}`,
          price: Number(id) * 1000, // price를 숫자 타입으로 설정
          imgUrl:
            'https://madeleesul.blogpay.io/img/g/madeleesul/0470347001732766430.jpg',
        };

        setProduct(product); // state에서 상품을 가져옴
      }
    }
  }, [id, navigate]); // dependency array에 location.state와 navigate 추가

  // 배송비 계산
  const totalPrice = product ? product.price * quantity : 0; // 가격 * 수량 계산

  useEffect(() => {
    if (totalPrice >= 70000) {
      setShippingFee(0); // 70,000원 초과 시 배송비 무료
    } else {
      setShippingFee(3000); // 70,000원 이하일 경우 3,000원
    }
  }, [totalPrice]); // totalPrice가 변경될 때마다 배송비를 계산

  // 카트 처리 함수
  const handleAddItem = () => {
    if (product) {
      const newItem = {
        id: product.id,
        imgUrl: product.imgUrl,
        name: product.name,
        price: product.price,
        quantity: quantity,
      };
      addItem(newItem);
      alert('장바구니에 상품을 담았습니다.');
    }
  };

  // 제품이 없는경우
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto flex flex-col lg:flex-row p-4">
        {/* 상품 이미지 */}
        <div className="w-full lg:w-7/12 p-4">
          <ProductImage image={product.imgUrl} />
        </div>

        {/* 상품 정보 */}
        <div className="w-full lg:w-5/12 p-4 md:pl-8">
          {' '}
          {/* md 이상일 때 왼쪽 패딩 추가 */}
          {/* 상품이름 */}
          <ProductName name={product.name} />
          {/* 상품가격 */}
          <ProductPrice price={product.price} />
          {/* 원산지, 제조사, 브랜드 */}
          <ProductInfo shippingFee={shippingFee} />
          {/* 수량 조절 */}
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
          {/* 제품 주문하기 전 상태 */}
          <ProductStatus totalPrice={totalPrice} shippingFee={shippingFee} />
          {/* 구매 버튼 */}
          <div className="flex gap-4 mt-8">
            <div className="w-1/2">
              <button
                onClick={handleAddItem}
                className="w-full p-4 mr-2 bg-white-600 text-black text-sm font-bold rounded-md border border-gray-800 hover:bg-gray-200 transition"
              >
                장바구니
              </button>
            </div>
            <div className="w-1/2">
              <button className="w-full p-4 bg-gray-800 text-white text-sm font-bold rounded-md border border-gray-800">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 상품 상세정보 */}
      <ProductDescription />
    </div>
  );
};

export default ProductDetailPage;
