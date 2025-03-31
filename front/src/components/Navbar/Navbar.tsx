"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import useUserDataStore from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();
  const { userData, setUserData, cart, setCart } = useUserDataStore();
   

  const handleLogout = () => {
    setCart([]);
    setUserData(null);
    router.push("/");
    toast.success("Sesión cerrada correctamente");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.linkBox}>Inicio</Link>

        {userData?.token ? (
          <>
            <Link href="/account" className={styles.linkBox}>Mi Cuenta</Link>
            <Link href="/purchaseHistory" className={styles.linkBox}>Historial de compras</Link>
            <Link href="/dashboard" className={styles.linkBox}>Dashboard</Link>
            
            {     }
            <Link href="/cart" className="relative">
              <AiOutlineShoppingCart color="pink" size={38} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </Link>
            
            <button className={styles.linkBox} onClick={handleLogout}>
              Logout
            </button>
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