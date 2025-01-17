import React from 'react';
import { Link } from 'react-router-dom';
import useUserStore from '../../stores/useUserStore';
import useAuthStore from '../../stores/useAuthStore';

const Topbar = () => {
  const { user, clearUser } = useUserStore();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    clearUser();
    console.log('로그아웃 성공');
  };

  return (
    <div className="hidden md:block pt-2 pb-2 bg-gray-100 flex">
      <div className="flex space-x-4 justify-end pr-10 lg:pr-32">
        {user ? (
          <Link onClick={handleLogout} to={`/login`}>
            <p className="text-xs font-medium text-gray-700 flex items-center">
              로그아웃
            </p>
          </Link>
        ) : (
          <div className="flex space-x-4">
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
          </div>
        )}

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
