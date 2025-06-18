"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter(); 

  const handleChangePassword = () => {
    if (password === confirmPassword) {
      alert("Contraseña modificada correctamente");     
      router.push("/dashboard");
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold text-blue-950 mb-4">Cambiar Contraseña</h1>
      
      <label className="block text-blue-950 font-semibold">Nueva Contraseña</label>
      <input className="w-full p-2 border rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label className="block text-blue-950 font-semibold mt-4">Confirmar Contraseña</label>
      <input className="w-full p-2 border rounded" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <div className="flex justify-between mt-6 space-x-6">
        <button className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-700"
          onClick={handleChangePassword}>
          Guardar Contraseña
        </button>        
        <button className="px-6 py-3 bg-gray-300 text-blue-900 font-bold rounded-lg hover:bg-gray-400"
          onClick={() => router.push("/dashboard")}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default ChangePass;