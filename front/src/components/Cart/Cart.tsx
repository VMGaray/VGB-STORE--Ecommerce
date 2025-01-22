"use client";
import React, { useState } from "react";
import useCartStore from "@/store/useCartStore";
import { dispatchOrder } from "@/service/authServices";
import useUserDataStore from "@/store";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { products, clearCart } = useCartStore();
  const { userData } = useUserDataStore(); 
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null); 

  const handleDispatchOrder = async () => {
    try {
      if (!userData || !userData.token) {
        setMessage("Usuario no autenticado. Por favor, inicie sesión.");
        return;
      }

      const productIds = products.map(product => ({ id: product.id }));
      const response = await dispatchOrder(userData.token, productIds); 
      console.log("Compra registrada:", response);
      clearCart(); 
      setMessage("Compra registrada con éxito. ¡Gracias por tu compra!");
      router.push("/"); 
    } catch (error) {
      console.error("Error al registrar la compra:", error);
      setMessage("Hubo un error al registrar la compra. Por favor, inténtalo de nuevo.");
    }
  };

  if (products.length === 0) {
    return <div>Tu carrito está vacío.</div>;
  }

  return (
    <div>
      <h1>Tu Carrito de Compras</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
          </li>
        ))}
      </ul>
      {message && <div className="message">{message}</div>} {}
      <button onClick={handleDispatchOrder}>Comprar</button>
    </div>
  );
};

export default Cart;

