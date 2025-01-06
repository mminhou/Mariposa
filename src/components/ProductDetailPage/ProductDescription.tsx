import React, { useState } from 'react';

const ProductDescription = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['상세정보', '상품문의'];

  return (
    <div className="space-y-5 mt-5 lg:mt-10 xl:mt-16">
      {/* Tab Bar: flex로 전체 가로 폭 차지, 중앙 정렬 */}
      <div className="border-b border-b-gray-200">
        <ul className="flex items-center text-sm">
          {tabs.map((tab, index) => (
            <li className="flex-1">
              <p
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`
                relative flex items-center justify-center gap-2 px-1 py-3 text-gray-700 
                ${selectedTab === index ? 'after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-gray-700 font-extrabold' : ''} 
                hover:font-extrabold
              `}
              >
                {tab}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="pt-5 pb-10">
        {/* 상세정보 */}
        {selectedTab === 0 && (
          <div className="p-4 bg-gray-100 w-full lg:w-[70%] mx-auto justify-center items-center">
            <img
              src="https://madeleesul.shop.blogpay.co.kr/img/editor/madeleesul/0458530001718607639.jpg"
              className="w-full"
            />
          </div>
        )}
        {/* 상품문의 */}
        {selectedTab === 1 && (
          <div className="p-4 bg-gray-100 w-full lg:w-[70%] mx-auto justify-center items-center">
            <div className="flex justify-center items-center pt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="size-14 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>

            <p className="p-20 pt-3 text-sm text-gray-400">
              서비스 준비중입니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
