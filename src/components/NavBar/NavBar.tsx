import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSidebarStore from '../../stores/useSidebarStore';
import Sidebar from './Sidebar';
import useCartStore from '../../stores/useCartStore';

const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();
  const [isScroll, setIsScroll] = useState(false);
  const { items } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120 && !isScroll) {
        setIsScroll(true);
      } else if (window.scrollY <= 50 && isScroll) {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScroll]);

  return (
    <nav
      className={`bg-white ${
        isScroll
          ? 'p-3 lg:pl-32 lg:pr-32 fixed top-0 w-full'
          : 'p-3 md:p-10 lg:pl-32 lg:pr-32 relative'
      } sticky top-0 z-50 border-b border-b-gray-200`}
    >
      <div className="max-w-10xl mx-auto flex justify-between items-center">
        {/* 왼쪽 메뉴 */}
        <div className="flex space-x-3 md:space-x-5">
          <button onClick={toggleSidebar} className="text-black text-6xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 md:size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* 중앙 로고 */}
        <Link
          to="/"
          className="text-black text-2xl font-bold absolute left-1/2 transform -translate-x-1/2"
        >
          M A R I P O S A
        </Link>

        {/* 오른쪽 네비게이션 메뉴 */}
        <div className="flex space-x-3 md:space-x-5 items-center">
          <Link to="/cart" className="relative inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 md:size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {items.length > 0 && (
              <span className="absolute top-[-4px] right-[-4px] inline-flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full">
                {items.length}
              </span>
            )}
          </Link>
          <button onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 md:size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 사이드메뉴 토글 */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
