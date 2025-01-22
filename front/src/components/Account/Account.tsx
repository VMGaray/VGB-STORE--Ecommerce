"use client";
import React from 'react';
import useUserDataStore from "@/store";
import styles from "./Account.module.css";

const Account = () => {
  const { userData } = useUserDataStore();

  if (!userData) {
    return <div>Por favor, inicie sesión para ver su cuenta.</div>;
  }
  

  return (
    <div className={styles.accountContainer}>
      <h1>Mi Cuenta</h1>
      <div className={styles.userInfo}>
        {userData.avatar && <img src={userData.avatar} alt="User Avatar" className={styles.avatar} />}
        <p><strong>Nombre:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
      <button className={styles.button} onClick={() => alert("Funcionalidad de actualización implementada aquí")}>
        Actualizar Información
      </button>
      <button className={styles.button} onClick={() => alert("Funcionalidad de cambio de contraseña implementada aquí")}>
        Cambiar Contraseña
      </button>
      <button className={styles.button} onClick={() => alert("Funcionalidad de logout implementada aquí")}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Account;
