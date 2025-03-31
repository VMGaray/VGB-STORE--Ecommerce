"use client";
import React, { useEffect, useState } from "react";
import useUserDataStore from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Product } from "@/app/interfaces";
import { dispatchOrder } from "@/service/orderServices";

const Cart = () => {
  //const { userData, setUserData, cart, setCart } = useUserDataStore();
  const userData = useUserDataStore((state) => state.userData);
  const cart = useUserDataStore((state) => state.cart);
  const setCart = useUserDataStore((state) => state.setCart);
  const router = useRouter();
  const [loading, setLoading] = useState(false); 
  const [total, setTotal] = useState(0)

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    toast.success("Producto eliminado del carrito.");
  };

  const handleDispatchOrder = async () =>{
    setLoading(true)
    try{
      const productsIds =cart.map((product:Product) =>Number(product.id));
      const response = await dispatchOrder(productsIds, userData?.user.id as string, userData?.token as string);
      if(response.statusCode === 400) {
        toast.error(response.message);
      }
      if(response) {
        toast.success("order creada correctamente");
      }
      setLoading(false);
      setTotal(0);
      setCart([]);
    } catch(error) {
      setLoading(false)
      toast.error("Hubo un error")
    };
  };
  useEffect(() => {
    let total =0;
    cart.forEach((product:Product) => {
      total += product.price;
    });
    setTotal(total);
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
     <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      <ul>
       {cart.map((product) => (
        <li
         key={product.id}
         className="flex items-center justify-between mb-4 border-b pb-2">
          <div className="flex items-center space-x-4">
           {product.image && (
           <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-cover rounded-md"/>
              )}
           <div>
           <h2>{product.name}</h2>
           <p>Precio: ${product.price}</p>
           </div>
          </div>
          <button onClick={() => removeFromCart(product.id)}
            className="px-2 py-1 bg-red-400 text-white text-sm rounded-md hover:bg-red-500">
            Eliminar
          </button>
        </li>
        ))}
      </ul>  
      { }
      <div className="mt-4 p-4 border-t border-gray-300">
        <h2 className="text-xl font-bold">Total: ${total}</h2>
      </div>  
      <button
        onClick={handleDispatchOrder}
        disabled={loading}
        className={`mt-4 px-4 py-2 ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-primary hover:bg-secundant"
        } text-white rounded`}
      >
        {loading ? "Procesando..." : "Comprar"}
      </button>
    </div>
  );
  };

  export default Cart;
    
      



