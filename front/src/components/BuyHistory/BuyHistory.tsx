/*"use client";
import React, { useEffect } from "react";
import useUserDataStore from "@/store";
import { toast } from "sonner";

const Account = () => {
  const { userData, setUserData, purchases, setPurchases } = useUserDataStore(); // Acceder al estado global
  
  useEffect(() => {
    // Función para simular la obtención de compras desde una API
    const fetchPurchases = async () => {
      if (!userData || !userData.token) {
        toast.error("Por favor, inicie sesión para ver su historial de compras.");
        return;
      }

      try {
        const response = await fetch("/api/purchases", {
          headers: { Authorization: `Bearer ${userData.token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setPurchases(data); // Guardar compras en el estado global
        } else {
          throw new Error("Error al obtener las compras");
        }
      } catch (error) {
        console.error("Error al obtener compras:", error);
        toast.error("Hubo un problema al cargar el historial de compras.");
      }
    };

    fetchPurchases(); // Llamar al obtener compras al montar el componente
  }, [userData, setPurchases]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mi Cuenta</h1>
      <h2 className="text-2xl mb-4">Historial de Compras</h2>
      {purchases?.length === 0 ? (
        <div className="text-center mt-6">
          <p className="text-lg text-gray-600">
            No tienes compras registradas aún. ¡Explora nuestra tienda y encuentra algo interesante!
          </p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => window.location.href = "/tienda"}
          >
            Explorar Productos
          </button>
        </div>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100">Número de Pedido</th>
              <th className="border p-2 bg-gray-100">Fecha</th>
              <th className="border p-2 bg-gray-100">Total</th>
              <th className="border p-2 bg-gray-100">Estado</th>
              <th className="border p-2 bg-gray-100">Detalles</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td className="border p-2">{purchase.id}</td>
                <td className="border p-2">{purchase.date}</td>
                <td className="border p-2">{purchase.total}</td>
                <td className="border p-2">{purchase.status}</td>
                <td className="border p-2">
                  <a href={`/detalles/${purchase.id}`} className="text-blue-500 hover:underline">
                    Ver detalles
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Account;

/*"use client";
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

export default BuyHistory;*/
