"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const UserDashboard = () => {
  const { userData } = useAuth();

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 py-8 relative">
      
      <header className="flex justify-between items-center mb-8 border-b pb-4">
       <h1 className="text-4xl font-bold text-blue 950">Mis datos:</h1>
      
       <div className="flex space-x-4">
         <Link
          href="/dashboard/edit-info"
          className="px-4 py-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition text-blue-950 font-semibold text-sm"
          >✏️ Modificar Información
         </Link>
         <Link
          href="/dashboard/change-password"
          className="px-4 py-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition text-blue-950 font-semibold text-sm"
          > 🔒 Cambiar Contraseña
         </Link>
       </div>
      </header>

      <main className="space-y-6 text-blue-950">
        <div>
          <h2 className="text-xl font-semibold">Nombre</h2>
          <p className="text-lg">{userData?.user?.name || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Correo electrónico</h2>
          <p className="text-lg">{userData?.user?.email || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Domicilio de entrega</h2>
          <p className="text-lg">{userData?.user?.address || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Teléfono</h2>
          <p className="text-lg">{userData?.user?.phone || "N/A"}</p>
        </div>
      </main>

      <Link
        href="/dashboard/orders"
        className="mt-6 block p-6 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition"
      >
        <div className="flex items-center space-x-4">
          <span className="text-xl text-blue-950 font-semibold">
            🛒 Ver tu Historial de Compras
          </span>
        </div>
      </Link>
    </div>
  );
};

export default UserDashboard;
