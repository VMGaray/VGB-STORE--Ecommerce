"use client"

import { useAuth } from "@/context/AuthContext"
import Link from "next/link";

const UserDashboard = () => {
  
    const {userData} = useAuth();
  
  
    return (
            
     <div className="max-w-4xl mx-auto my-8 px-4 py-8">
      <header className="flex justify-between items-center mb-8 border-b pb-4">
       <h1 className="text 4xl font-bold text-gray-600">Datos personales de: {userData?.user?.name}</h1>
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
      <Link href= "/dashboard/orders">Historial de compras</Link>
      
     </div>
     
  )
}

export default UserDashboard;
