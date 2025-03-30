"use client";
import React from 'react';
import useUserDataStore from "@/store";
import { toast } from 'sonner';

const Account = () => {
  const { userData } = useUserDataStore();
 
  if (!userData) {
    return <div className="text-center text-quarternary">Por favor, inicie sesión para ver su cuenta.</div>;
  }

  return (
    <div className="flex flex-col items-center bg-tertiary p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">Mi Cuenta</h1>
      <div className="flex flex-col items-center text-center">
        <p className="text-primary"><strong>Nombre:</strong> {userData.name}</p>
        <p className="text-primary"><strong>Email:</strong> {userData.email}</p>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secundant transition duration-300"
          onClick={() => toast.success("Modificación realizada con éxito")}
        >
          Actualizar Información
        </button>
        <button
          className="bg-secundant text-white py-2 px-4 rounded-lg hover:bg-tertiary transition duration-300"
          onClick={() => toast.success("Se modificó tu contraseña")}
        >
          Cambiar Contraseña
        </button>
        
      </div>
    </div>
  );
};

export default Account;



