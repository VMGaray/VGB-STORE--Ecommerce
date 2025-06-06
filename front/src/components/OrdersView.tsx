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
    loadOrders();    
  }, []);

  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-950">Tus compras</h1>

       { orders?.length? orders?.map((order: IOrder) => {
        return (
          <div key={order.id} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
             <p className="text-lg font-medium text-blue-950">Fecha de compra: {new Date(order.date)?.toLocaleDateString()}</p>
             <p className="text-lg font-medium text-blue-950">Estado: {order.status}</p>
             {
              order.products.map((product) => {
                return (
                  <div key= {product.id}className="p-4 bg-gray-100 rounded-lg flex justify-between 
                  items-center text-lg font-medium text-blue-950">Producto: {product.name}</div>
                )
              })
             }
          </div>
        );
        }) : (<div>No hay compras registradas</div>)
       }

    </div>
  )
}
export default OrdersView;

