"use client";
import React, { useEffect, useState } from "react";
import useUserDataStore from "@/store";
import { getBuyHistory } from "@/service/orderServices";
import { error } from "console";

const UserDashboard = () => {
  const { userData } = useUserDataStore();
  const [ orders, setOrders ] = useState([]);
  
  const getOrders = async () => {
    try {
      const orders = await getBuyHistory(userData?.token as string);
      setOrders(orders);
    } catch(error) {
    console.log(error)
  }
}
  useEffect(() => {
    getOrders();

  }, [userData]); 

  if (!userData) {
    return <div>Por favor loguearse para ver la información...</div>;
      }

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 py-8">
      <header className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text 4xl font-bold text-gray-600">Perfil</h1>
      </header>
        { }
      <main className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold">Nombre</h2>
          <p className="text-lg">{userData?.user?.name || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Correo electrónico</h2>
          <p className="text-lg">{userData?.user?.email || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Dirección</h2>
          <p className="text-lg">{userData?.user?.address || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Telefono</h2>
          <p className="text-lg">{userData?.user?.phone || "N/A"}</p>
        </div>
                  
      </main>
      
      <section>
        <h2 className="text 4xl font-bold text-gray-600">Historial de compras</h2>
        <div>
          {orders.map((order:any) => (
            <div key={order.id}>
              <h3 className="text-lg font-semibold">Orden #{order.id}</h3>
              <p className="text-gray-700">Fecha: {order.date}</p>
              <p className="text-gray-700">Estado: {order.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default UserDashboard;
