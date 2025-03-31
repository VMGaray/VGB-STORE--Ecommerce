"use client";
import React, { useEffect, useState } from "react";
import useUserDataStore from "@/store";

const UserDashboard = () => {
  const { userData } = useUserDataStore();
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
      
    </div>
  );
};
export default UserDashboard;
