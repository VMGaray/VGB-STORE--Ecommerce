"use client";
import React from "react";
import useUserDataStore from "@/store";

const UserDashboard = () => {
  const { userData } = useUserDataStore();

  if (!userData) {
    return <div>Cargando los datos del usuario...</div>;
  }

  return (
    <div>
      <h1>Dashboard de Usuario</h1>
      <div>
        <p><strong>Nombre:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Dirección:</strong> {userData.address}</p>
        <p><strong>Telefono:</strong> {userData.phone}</p>
      </div>
    </div>
  );
};

export default UserDashboard;

