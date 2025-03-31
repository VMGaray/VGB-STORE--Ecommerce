"use client";
import { toast } from "sonner";
import useUserDataStore from "@/store";
import { Product } from "@/app/interfaces";

function ProductDetail({ product }: { product: Product }) {
  const { id, name, price, image } = product; 
  //const { userData, cart, setCart } = useUserDataStore();
  const userData = useUserDataStore((state) => state.userData);
  const cart = useUserDataStore((state) => state.cart);
  const setCart = useUserDataStore((state) => state.setCart);
  const userAuthenticated = !!userData;

  const isProductInCart = (productId: string) =>
    cart.some((item) => item.id === productId);
  
  const addProductToCart = () => {
    if (!userAuthenticated) {
      toast.error("Inicia sesión para agregar productos al carrito.");
      return;
    }
    if (!isProductInCart(id)) {
      setCart([...cart, product]); 
      toast.success("Producto agregado al carrito.");
    } else {
      toast.error("Este producto ya está en el carrito.");
    }
  };
  const purchaseProduct = () => {
    if (!userAuthenticated) {
      toast.error("Inicia sesión para realizar la compra."); 
      return;
    }
    // Implementa la lógica para comprar el producto
    toast.success(`¡Has comprado el producto "${name}"!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-fuchsia-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{name}</h1>
      <p className="text-lg text-gray-600 mb-4">Precio: ${price}</p>
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full max-h-96 object-contain rounded-lg mb-6 shadow-lg"
        />
      )}
      <div className="flex space-x-4 mt-4">
        {/* Botón Comprar */}
        <button
          disabled={!userAuthenticated}
          className={`px-4 py-2 font-semibold rounded-md ${
            userAuthenticated
              ? "bg-primary text-white hover:bg-secundant"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={purchaseProduct}
        >
          Comprar
        </button>
  
        {/* Botón Agregar al carrito */}
        <button
          disabled={!userAuthenticated}
          className={`px-4 py-2 font-semibold rounded-md ${
            userAuthenticated
              ? "bg-primary text-white hover:bg-secundant"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={addProductToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
export default ProductDetail;



