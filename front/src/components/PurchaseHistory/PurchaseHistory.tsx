"use client";
import React, { useEffect, useState } from "react";
import useUserDataStore from "@/store";
import { getBuyHistory } from "@/service/orderServices";

const PurchaseHistory = () => {
  const { userData } = useUserDataStore();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const orders = await getBuyHistory(userData?.token as string);
      setOrders(orders); // Asegúrate de que los pedidos incluyan los productos comprados
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [userData]);

  if (!userData) {
    return <div>Por favor loguearse para ver la información...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 py-8">
      <section>
        <h2 className="text-4xl font-bold text-gray-600">Historial de Compras</h2>
        <div>
          {orders.length > 0 ? (
            orders.map((order: any) => (
              <div
                key={order.id}
                className="mb-6 p-4 border border-gray-300 rounded-md shadow-sm"
              >
                <h3 className="text-lg font-semibold">Orden #{order.id}</h3>
                <p className="text-gray-700">Fecha: {order.date}</p>
                <p className="text-gray-700">Estado: {order.status}</p>
                <h4 className="mt-4 font-bold text-gray-800">Productos:</h4>
                <ul className="list-disc pl-5">
                  {order.products.map((product: any) => (
                    <li key={product.id} className="text-gray-700">
                      {product.name} - Cantidad: {product.quantity} - Precio: $
                      {product.price}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No se encontraron órdenes.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PurchaseHistory;

