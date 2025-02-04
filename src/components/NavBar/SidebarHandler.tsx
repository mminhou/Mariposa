import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSidebarStore from '../../stores/useSidebarStore';

const SidebarHandler = () => {
  const location = useLocation();
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]); // 라우트가 변경될 때마다 실행

  return null;
};

export default SidebarHandler;
