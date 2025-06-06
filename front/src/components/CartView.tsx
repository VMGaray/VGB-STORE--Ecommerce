"use client";
import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/helpers/orders.helpers";
import { IProduct } from "@/interfaces";
import React, { useEffect, useState } from "react";

const CartView = () => {
  const {userData} = useAuth();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      const totalCart = storedCart.reduce(
        (acc: number, producto: IProduct) => acc + producto.price,
        0
      );
      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handleDispatchOrder = async () =>{
    if(cart && userData?.token) {
      const idProducts = cart.map((product) => product.id)
      await createOrder(idProducts, userData?.token)
      setCart([])
      setTotal(0)
      localStorage.setItem("cart", "[]")
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-950">Tus compras</h1>

      <div className="space-y-4">
        {cart.length ? (
          <>
            {cart.map((product: IProduct) => (
              <div
                key={product.id}
                className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
              >
                <p className="text-lg font-medium text-blue-950">{product.name}</p>
                <p className="text-lg font-semibold text-blue-950">${product.price}</p>
              </div>
            ))}
            {/* Total debajo de los productos */}
            <div className="mt-6 p-4 bg-gray-200 rounded-lg text-center">
              <p className="text-xl font-bold text-blue-900 tracking-wide">
                Total: <span className="ml-2 text-blue-900">${total}</span>
              </p>
              
            </div>
            <div className="mt-6 flex justify-center">
              <button onClick={handleDispatchOrder}className="mt-4 px-6 py-3 bg-blue-900 text-white font-bold 
                     rounded-lg hover:bg-blue-700 transition duration-300">Comprar</button>
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

/*"use client"
import { IProduct } from '@/interfaces'
import React, {useEffect, useState} from 'react'

const CartView = () => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);
    
    useEffect (() =>{
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
      if(storedCart) {
        let totalCart= 0;
        storedCart.map((producto: IProduct) => {
          totalCart = totalCart + producto.price
        })
        setTotal(totalCart);
        setCart(storedCart);
      }
    }, [])

  return (
    <div>
      <div>
        <h1>Tus compras</h1>
        {cart?.length ? cart?.map((product: IProduct) => {
          return (
            <div key={product.id}> 
            <p>{product.name}</p>
            <p>${product.price}</p>
            </div>
          )
        }) : (<div>No hay productos en el carrito</div>)
        }   
      </div> 
      <div>Total: ${total}</div>
    </div>
  )
}

export default CartView;*/
