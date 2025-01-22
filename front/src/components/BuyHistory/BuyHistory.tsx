"use client";
import React, { useEffect, useState } from "react";
import useUserDataStore from "@/store";
import { getBuyHistory } from "@/service/authServices";

const BuyHistory = () => {
  const { userData } = useUserDataStore();
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        if (!userData || !userData.token) {
          throw new Error("Usuario no autenticado. Por favor, inicie sesión.");
        }
        const data = await getBuyHistory(userData.token);
        setHistory(data);
      } catch (error) { if (error instanceof Error) { setError(error.message); } 
      else { setError("Ocurrió un error inesperado."); }
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [userData]);

  if (loading) {
    return <div>Cargando el historial de compras...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (history.length === 0) {
    return <div>No has realizado compras.</div>;
  }

  return (
    <div>
      <h1>Historial de Compras</h1>
      <ul>
        {history.map((order) => (
          <li key={order.id}>
            <h2>Orden ID: {order.id}</h2>
            <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
            <ul>
              {order.products.map((product:any) => (
                <li key={product.id}>
                  <p>Producto: {product.name}</p>
                  <p>Cantidad: {product.quantity}</p>
                  <p>Precio: ${product.price}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyHistory;
