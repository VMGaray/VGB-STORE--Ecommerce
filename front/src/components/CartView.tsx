"use client";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/helpers/orders.helpers";
import { IProduct } from "@/interfaces";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CartView = () => {
  const { userData } = useAuth();
  const { cart, setCart } = useCart();
  const [total, setTotal] = useState<number>(0);

   const cartGrouped = cart.reduce((acc, product) => {
    const existing = acc.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, [] as (IProduct & { quantity: number })[]);

    useEffect(() => {
    const totalCart = cartGrouped.reduce(
      (acc, producto) => acc + producto.price * producto.quantity,
      0
    );
    setTotal(totalCart);
  }, [cartGrouped]);

   const removeAllFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

   const removeOneFromCart = (productId: number) => {
    let removed = false;
    const updatedCart = cart.filter((product) => {
      if (!removed && product.id === productId) {
        removed = true;
        return false; 
      }
      return true;
    });
    setCart(updatedCart);
  };


  const handleDispatchOrder = async () => {
    if (cart.length > 0 && userData?.token) {
      const productIds = [...new Set(cart.map((product) => product.id))];
      try {
        await createOrder(productIds, userData.token);
        alert("¡Compra realizada con éxito!");
        setCart([]);
      } catch (error) {
        alert("Ocurrió un error al procesar la compra.");
        console.error("Error al crear orden:", error);
      }
    } else {
      alert("Debes iniciar sesión y tener productos en el carrito.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-950">Tus compras</h1>

      <div className="space-y-4">
        {cartGrouped.length > 0 ? (
          <>
            {cartGrouped.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-blue-950">{product.name}</p>
                  <p className="text-sm text-blue-800">Cantidad: {product.quantity}</p>
                  <p className="text-sm text-blue-800">
                    Subtotal: ${product.price * product.quantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => removeOneFromCart(product.id)}
                    className="text-orange-700 text-sm font-bold border border-orange-500 px-2 py-1 rounded hover:bg-yellow-100 transition"
                    >Quitar una
                  </button>
                  <button
                    onClick={() => removeAllFromCart(product.id)}
                    className="text-red-500 text-sm font-bold border border-red-400 px-2 py-1 rounded hover:bg-red-100 transition"
                    >Eliminar todas
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 p-4 bg-gray-200 rounded-lg text-center">
              <p className="text-xl font-bold text-blue-900 tracking-wide">
                Total: <span className="ml-2 text-blue-900">${total}</span>
              </p>
            </div>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <button
                onClick={handleDispatchOrder}
                className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                >Confirmar Compra
              </button>

              <Link
                href="/allProducts"
                className="px-6 py-3 bg-gray-300 text-blue-900 font-bold rounded-lg hover:bg-gray-400 transition duration-300 inline-flex items-center justify-center"
                >Continuar comprando
              </Link>
            </div>
          </>
        ) : (
          <div className="text-gray-500 text-center py-6">
            No hay productos en el carrito
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;




     