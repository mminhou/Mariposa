// store/userStore.ts
import { create } from 'zustand';

interface User {
  userId: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'), // localStorage에서 유저 정보 불러오기
  setUser: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user)); // 유저 정보를 localStorage에 저장
    set({ user });
  },
  clearUser: () => {
    localStorage.removeItem('user'); // localStorage에서 유저 정보 삭제
    set({ user: null });
  },
}));

export default useUserStore;
