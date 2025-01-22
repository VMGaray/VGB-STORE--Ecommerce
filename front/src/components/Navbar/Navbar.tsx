"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import useUserDataStore from "@/store";
import { logoutService } from "@/service/authServices";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { userData, setUserData } = useUserDataStore();
  
  
  const handleLogout = () => {
    setUserData(null);
    router.push("/");
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        <Link href="/" className={styles.linkBox}>Inicio</Link>
        {userData ? (
          <>
        
        <Link href="/account" className={styles.linkBox}>Mi Cuenta</Link>
        <Link href="/dashboard" className={styles.linkBox}>Dashboard</Link>
        <Link href="/cart" className={styles.linkBox}>Carrito de compra</Link>
            {userData.avatar && (
              <img src={userData.avatar} alt="User Avatar" className={styles.avatar} />
            )}
            <button className={styles.linkBox} onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
        
        <Link href="/login" className={styles.linkBox}>Login</Link>
        
        <Link href="/register" className={styles.linkBox}>Nuevo usuario</Link>

        
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

