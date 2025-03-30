import { Product } from "@/app/interfaces";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface EcommerceStore {
  cart: Product[];
  setCart: (data: Product[]) => void;
  userData: any;
  setUserData: (data: any) => void;
  purchases: any[]; 
  setPurchases: (data: any[]) => void; // 
}

const useUserDataStore = create<EcommerceStore>()(
  devtools(
    persist(
      (set) => ({
        userData: null,
        cart: [],
        purchases: [], 
        setUserData: (data) => set({ userData: data }),
        setCart: (data) => set({ cart: data }),
        setPurchases: (data) => set({ purchases: data }), 
      }),
      {
        name: "ecommerce-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
export default useUserDataStore;
