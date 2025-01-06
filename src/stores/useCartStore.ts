import { create } from 'zustand'; // zustand의 create 함수 임포트

interface CartItem {
  id: number;
  imgUrl: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalPrice: () => number; // 총합 계산 함수
}

const useCartStore = create<CartStore>((set) => ({
  items: [],
  // 장바구니에 아이템 추가
  addItem: (newItem) =>
    set((state) => {
      // 이미 장바구니에 있는 아이템인지 확인
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // 이미 있으면 수량만 증가
        return {
          items: state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item,
          ),
        };
      } else {
        // 없으면 새로운 아이템 추가
        return { items: [...state.items, newItem] };
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    })),

  // 총합 계산
  totalPrice: () => {
    const items: CartItem[] = useCartStore.getState().items;
    return items.reduce<number>((total: number, item: CartItem) => {
      return total + item.price * item.quantity;
    }, 0);
  },
}));

export default useCartStore;
