import React from 'react';
import useSidebarStore from '../../stores/useSidebarStore';

const Sidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();

  return (
    <div
      className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transform ${
        isOpen ? 'block' : 'hidden'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li onClick={toggleSidebar}>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              x
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
