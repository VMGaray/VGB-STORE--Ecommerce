"use client";
import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { IProduct } from "@/interfaces";


interface CartContextProps {
  cart: IProduct[];
  setCart: Dispatch<SetStateAction<IProduct[]>>;
}

const CartContext = createContext<CartContextProps | null>(null);


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};

