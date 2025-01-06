import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="hidden md:block pt-2 pb-2 bg-gray-100 flex">
      <div className="flex space-x-4 justify-end pr-10 lg:pr-32">
        <Link to={`/login`}>
          <p className="text-xs font-medium text-gray-700 flex items-center">
            로그인
          </p>
        </Link>
        <Link to={`/register`}>
          <p className="text-xs font-medium text-gray-700 flex items-center">
            회원가입
          </p>
        </Link>
        <Link to={`/mypage`}>
          <p className="text-xs font-medium text-gray-700 flex items-center">
            마이페이지
          </p>
        </Link>
        <Link to={`/cart`}>
          <p className="text-xs font-medium text-gray-700 flex items-center">
            장바구니
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
