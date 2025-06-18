"use client";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext"; 
import { IProduct } from "@/interfaces";
import Link from "next/link";

const ProductDetail: React.FC<IProduct> = ({ name, id, price, image, description, stock, categoryId }) => {
  const { userData } = useAuth();
  const { cart, setCart } = useCart();

  const handleAddToCart = () => {
    if (userData?.token) {
      setCart((prevCart) => [...prevCart, { name, id, price, image, description, stock, categoryId }]);
      alert("Producto agregado al carrito");
    } else {
      alert("Debes loguearte para agregar un producto al carrito");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h1 className="text-2xl font-bold text-blue-950 mb-4">{name}</h1>
      <img className="w-full h-48 object-cover rounded-md" src={image} alt={`imagen del producto ${name}`} />
      <p className="text-blue-950 mt-2">{description}</p>
      <p className="text-blue-950 font-medium mt-2">Stock: <span className="font-bold">{stock}</span></p>
      <p className="text-blue-950 text-lg font-semibold mt-2">Precio: ${price}</p>
    
    <div className="flex gap-4 mt-4">
      <button
        className="px-6 py-3 text-blue-900 border border-blue-900 font-bold rounded-lg hover:bg-blue-900 hover:text-white transition duration-300"
        onClick={handleAddToCart}
        >Agregar al carrito
      </button>
  
      <Link
        href="/"
        className="px-6 py-3 text-blue-900 border border-blue-900 font-bold rounded-lg hover:bg-blue-900 hover:text-white transition duration-300"
        >Volver al inicio
      </Link>
    </div>

      
      
    </div>
  );
};

export default ProductDetail;

