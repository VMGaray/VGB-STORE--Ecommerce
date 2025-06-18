"use client";
import { useAuth } from "@/context/AuthContext";
import { getOrder } from "@/helpers/orders.helpers";
import { IOrder } from "@/interfaces";
import React, { useEffect, useState } from "react";

const OrdersView = () => {

  const {userData} = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);
  
  const loadOrders = async () => {
    if(userData?.token) {
      const response = await getOrder(userData.token);
      setOrders(response)
    }
  }
  
  useEffect(() => {
    if (userData?.token) {
    loadOrders();
    }
  }, [userData?.token]); 
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
     <h1 className="text-2xl font-bold mb-4 text-blue-950">Tus compras</h1>

   {orders?.length ? (
     orders.map((order: IOrder, index) => (
      <div
        key={order.id}
        className={`p-4 mb-4 rounded-lg shadow-md ${
        index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
       
       <div className="flex justify-between items-center mb-2">
        <p className="text-lg font-medium text-blue-950">
          Fecha de compra: {new Date(order.date)?.toLocaleDateString()}
        </p>
        <p className="text-lg font-medium text-blue-950">Estado: {order.status}</p>
       </div>

       <div className="space-y-2">
        {order.products.map((product) => (
         <div
           key={product.id}
           className="border border-blue-200 p-3 rounded-md bg-white text-blue-950">
           <p className="text-base font-medium">Producto: {product.name}</p>
         </div>
        ))}
       </div>
      </div>
     ))
   ) : (
      <div className="text-center text-blue-950">No hay compras registradas</div>
   )}
    </div>
  )
}
export default OrdersView;

