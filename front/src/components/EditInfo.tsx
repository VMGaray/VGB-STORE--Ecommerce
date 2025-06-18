"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation"; 

const EditInfoData = () => {
  const { userData, setUserData } = useAuth();
  const router = useRouter(); 

  const [name, setName] = useState(userData?.user?.name || "");
  const [email, setEmail] = useState(userData?.user?.email || "");
  const [address, setAddress] = useState(userData?.user?.address || "");
  const [phone, setPhone] = useState(userData?.user?.phone || "");

  const handleUpdate = () => {
    if (!userData || !userData.user) {
      console.error("No hay datos de usuario disponibles");
      return;
    }
     setUserData({...userData, user: {
        ...userData.user, name, email, address, phone
      }
    });
     alert("Información actualizada correctamente");
     router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold text-blue-950 mb-4">Modificar Información</h1>
      
      <label className="block text-blue-950 font-semibold">Nombre</label>
      <input className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />

      <label className="block text-blue-950 font-semibold mt-4">Correo Electrónico</label>
      <input className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label className="block text-blue-950 font-semibold mt-4">Domicilio</label>
      <input className="w-full p-2 border rounded" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label className="block text-blue-950 font-semibold mt-4">Teléfono</label>
      <input className="w-full p-2 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <div className="flex justify-between mt-6 space-x-6">  
        <button className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-700"
          onClick={handleUpdate}>
          Guardar Cambios
        </button>        
        <button className="px-6 py-3 bg-gray-300 text-blue-900 font-bold rounded-lg hover:bg-gray-400"
          onClick={() => router.push("/dashboard")}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default EditInfoData;