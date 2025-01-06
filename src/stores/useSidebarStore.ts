import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false, // 기본값은 닫힘 상태
  toggleSidebar: () =>
    set((state) => ({
      isOpen: !state.isOpen, // 현재 상태를 반전
    })),
  closeSidebar: () =>
    set(() => ({
      isOpen: false, // 사이드바 닫기
    })),
  openSidebar: () =>
    set(() => ({
      isOpen: true, // 사이드바 열기
    })),
}));

export default useSidebarStore;
