import React from 'react';
import useSidebarStore from '../../stores/useSidebarStore';

interface SidebarProps {
  isScroll: boolean;
}

const Sidebar = ({ isScroll }: SidebarProps) => {
  const { isOpen } = useSidebarStore();

  return (
    <div>
      {isOpen && (
        <div
          className={`absolute left-0 w-full mt-10 bg-white shadow-lg border p-4 rounded-md ${
            isScroll ? 'mt-3' : 'mt-10'
          }`}
        >
          <p>Sidebar content</p>
          <p>카테고리 / 게시판 / 마이페이지 등</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
