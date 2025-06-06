"use client"
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IProduct } from "@/interfaces";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const NavBar = () => {
  const {userData, setUserData} = useAuth(); 
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<IProduct[]>([]);
  const router = useRouter();

   const handleLogout = () => {
     setUserData(null);
     localStorage.removeItem("userSession");
     localStorage.removeItem("cart")
     Cookies.remove("userSession")
     alert("Te has deslogueado")
     router.push("/")
    
    
    router.push("/");
    alert("Sesión cerrada correctamente");
  };
  return (
    <nav className="bg-sky-100 p-4 flex items-center justify-between">
      <span className="text-xl font-bold text-blue-950">VGB STORE</span>
      
      {/* Barra de búsqueda más larga */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Links del Navbar */}
      <div className="flex space-x-6">
      { userData?.token ? (
        <>
        <Link href="/cart" className="relative">
              <AiOutlineShoppingCart color="pink" size={38} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </Link>
         <Link href="/" className="text-blue-900 hover:text-blue-700 transition">Inicio</Link>
         <Link href="/dashboard" className="text-blue-900 hover:text-blue-700 transition">Dashboard</Link>
         <button className="text-blue-900 hover:text-blue-700 transition" onClick={handleLogout}>
              Logout
            </button>
        </>
        ) : (
        <>
         <Link href="/" className="text-blue-900 hover:text-blue-700 transition">Inicio</Link>
         <Link href="/login" className="text-blue-900 hover:text-blue-700 transition">Login</Link>
         <Link href="/register" className="text-blue-900 hover:text-blue-700 transition">Nuevo usuario</Link>
             
        </>
         )
      }
        
        
      </div>
    </nav>
  );
};

export default NavBar;


