import React, { useState } from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ['로그인', '비회원 주문조회'];

  return (
    <div className="p-4 md:px-16">
      <h1 className="text-2xl font-bold m-12 mb-8">로그인</h1>
      <div className="sm:w-[80%] md:w-[70%] lg:w-[45%] xl:w-[35%] mx-auto p-4">
        <div className="space-y-5">
          {/* Tab Bar: flex로 전체 가로 폭 차지, 중앙 정렬 */}
          <div className="border-b border-b-gray-200">
            <ul className="flex items-center text-md">
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
          <div className="pb-10">
            {/* 로그인 */}
            {selectedTab === 0 && <LoginForm />}
            {/* 비회원 주문조회 */}
            {selectedTab === 1 && (
              <div className="p-4 bg-gray-100 w-full mx-auto justify-center items-center">
                <div className="flex justify-center items-center pt-10">
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

                <p className="p-10 pt-3 text-sm text-gray-400">
                  서비스 준비중입니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
