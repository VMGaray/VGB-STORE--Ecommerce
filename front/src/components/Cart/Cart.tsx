"use client";
import React, { useEffect, useState } from "react";
import useUserDataStore from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Product } from "@/app/interfaces";
import { dispatchOrder } from "@/service/orderServices";

const Cart = () => {
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
      setCart([]);
    } catch(error) {
      setLoading(false)
      toast.error("Hubo un error")
    };
  };
  useEffect(() => {
    if(cart.length == 0) return;
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
            className="flex items-center justify-between mb-4 border-b pb-2"
          >
            <div className="flex items-center space-x-4">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
              )}
              <div>
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
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
            : "bg-blue-600 hover:bg-blue-700"
        } text-white rounded`}
      >
        {loading ? "Procesando..." : "Comprar"}
      </button>
    </div>
  );
  
  /*const handleDispatchOrder = async () => {
    if (!userData || !userData.token) {
      toast.error("Por favor, inicie sesión para completar la compra.");
      return;
    }
    const userId = userData.id; // ID del usuario desde el estado
    const token = userData.token; // Token para autenticación
    setLoading(true); // Activa el indicador de carga
    try {
      const response = await dispatchOrder(cart, userData.id, userData.token); // Llamada al servicio
      toast.success("Compra registrada con éxito. ¡Gracias por tu compra!");
      setCart([]); // Vacía el carrito después de registrar la compra
      //router.push("/resumen"); // Redirige al resumen de compra
    } catch (error) {
      toast.error("Hubo un error al registrar la compra. Por favor, inténtalo de nuevo."
      );
    } finally {
      setLoading(false); // Desactiva el indicador de carga
    } 
  
  if (cart.length === 0) {
    return <div>Tu carrito está vacío.</div>;
  };
}; */
  /*return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      <ul>
        {cart.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between mb-4 border-b pb-2"
          >
            <div className="flex items-center space-x-4">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
              )}
              <div>
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleDispatchOrder}
        disabled={loading}
        className={`mt-4 px-4 py-2 ${
         loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white rounded`}
      >
        {loading ? "Procesando..." : "Comprar"}
      </button>
    </div>
  );*/
};

export default Cart;

