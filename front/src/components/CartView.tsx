"use client";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext"; 
import { createOrder } from "@/helpers/orders.helpers";
import { IProduct } from "@/interfaces";
import React, { useEffect, useState } from "react";

const CartView = () => {
   
  const { userData } = useAuth();
  const { cart, setCart } = useCart(); 
  const [total, setTotal] = useState<number>(0);

  const removeFromCart = (productId: number) => {
   setCart((prevCart) => prevCart.filter((product) => product.id !== productId)); 
  };

  useEffect(() => {
    const totalCart = cart.reduce((acc: number, producto: IProduct) => acc + producto.price, 0);
    setTotal(totalCart);
  }, [cart]); 

  const handleDispatchOrder = async () => {
    if (cart.length > 0 && userData?.token) {
      const idProducts = cart.map((product) => product.id);
      await createOrder(idProducts, userData?.token);
      setCart([]); 
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-950">Tus compras</h1>

      <div className="space-y-4">
        {cart.length ? (
         <>
          {cart.map((product, index) => ( 
           <div key={`${product.id}-${index}`} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <p className="text-lg font-medium text-blue-950">{product.name}</p>
            <p className="text-lg font-semibold text-blue-950">${product.price}</p>
            <button
              className="text-red-500 text-sm font-bold"
              onClick={() => removeFromCart(product.id)}
              >Eliminar
            </button>
           </div>
            ))
          }
          <div className="mt-6 p-4 bg-gray-200 rounded-lg text-center">
            <p className="text-xl font-bold text-blue-900 tracking-wide">
              Total: <span className="ml-2 text-blue-900">${total}</span>
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleDispatchOrder}
              className="mt-4 px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
              >Confirmar Compra
            </button>
          </div>
         </>
        ) : (
         <div className="text-gray-500 text-center py-6">No hay productos en el carrito</div>
        )}
      </div>
    </div>
  );
};

export default CartView;



     