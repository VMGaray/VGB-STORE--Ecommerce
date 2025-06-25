"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext"; 
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { MdLogout } from "react-icons/md"; 


const NavBar = () => {
 
  const { userData, setUserData } = useAuth();
  const { cart, setCart } = useCart(); 
  const router = useRouter();

 
  const handleLogout = () => {
    if (userData?.user?.email && cart.length > 0) {
    localStorage.setItem("cart_" + userData.user.email, JSON.stringify(cart));
  }

    setUserData(null);
    setCart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("userSession");
    Cookies.remove("userSession");

    alert("Sesión cerrada correctamente");
    router.push("/");
  };

  
  return (
    <nav className="bg-sky-100 p-4 flex items-center justify-between">
      <span className="text-xl font-bold text-blue-950 logo-3d hover:animate-none">
       VGB STORE
      </span>
      
      <div className="overflow-hidden bg-blue-100 py-2">
       <div className="marquee text-blue-900 text-lg font-bold">
       🎉 ¡6 cuotas sin interés! | 🔥 SuperLunes 25% off 🔥 | 🚀 Envío gratis a todo el país 🚀
       </div>
      </div>

      <div className="flex space-x-6">
        {userData?.token ? (
         <>
          <Link href="/cart" className="relative">
           <AiOutlineShoppingCart color="pink" size={38} />
           {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-400 text-white text-xs rounded-full px-2 py-1">
            {cart.length}
                </span>
           )}
          </Link>
          <Link href="/" className="text-blue-900 hover:text-blue-700 transition">Inicio</Link>
          <Link href="/aboutUs" className="text-blue-900 hover:text-blue-700 transition">Nosotros</Link>
          <Link href="/dashboard" className="text-blue-900 hover:text-blue-700 transition">Dashboard</Link>
          <button
            onClick={handleLogout}
            className="group flex items-center gap-2 text-blue-900 hover:text-blue-700 transition font-medium text-base leading-[1.5] relative"
            >
            <MdLogout
            size={22}
            className="transition-transform duration-200 group-hover:rotate-[-15deg]"
            />
            Logout
          </button>
         </>
        ) : (
         <>
          <Link href="/" className="text-blue-900 hover:text-blue-700 transition">Inicio</Link>
          <Link href="/aboutUs" className="text-blue-900 hover:text-blue-700 transition">Nosotros</Link>
          <Link href="/login" className="text-blue-900 hover:text-blue-700 transition">Login</Link>
          <Link href="/register" className="text-blue-900 hover:text-blue-700 transition">Nuevo usuario</Link>
         </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

