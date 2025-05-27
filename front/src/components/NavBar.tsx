"use client"
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

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
        <Link href="/" className="text-blue-900 hover:text-blue-700 transition">Inicio</Link>
        <Link href="/dashboard" className="text-blue-900 hover:text-blue-700 transition">Dashboard</Link>
        <Link href="/login" className="text-blue-900 hover:text-blue-700 transition">Login</Link>
        <Link href="/register" className="text-blue-900 hover:text-blue-700 transition">Nuevo usuario</Link>
      </div>
    </nav>
  );
};

export default NavBar;


