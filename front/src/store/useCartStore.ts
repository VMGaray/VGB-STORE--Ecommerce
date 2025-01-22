import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface CartProduct {
  id: number; 
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        addProduct: (product) =>
          set((state) => {
            const existingProduct = state.products.find((p) => p.id === product.id);
            if (existingProduct) {
              return {
                products: state.products.map((p) =>
                  p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                ),
              };
            }
            return { products: [...state.products, { ...product, quantity: 1 }] };
          }),
        removeProduct: (productId) =>
          set((state) => ({
            products: state.products.filter((p) => p.id !== productId),
          })),
        clearCart: () => set({ products: [] }),
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useCartStore;

