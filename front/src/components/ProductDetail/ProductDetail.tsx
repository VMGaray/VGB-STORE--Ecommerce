"use client";
import { toast } from "sonner";
import useUserDataStore from "@/store";
import { Product } from "@/app/interfaces";


function ProductDetail({ product }: { product: Product }) {
  const { id, name, price, image } = product; 

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



/*import useUserDataStore from "@/store";
import { toast } from "sonner";
import { Product } from "@/app/interfaces";

function ProductDetail({ id, name, price }: { id: string; name: string; price: number }) {
  
  const userData = useUserDataStore((state) => state.userData);
  const cart = useUserDataStore((state) => state.cart);
  const setCart = useUserDataStore((state) => state.setCart);

  
  const isProductInCart = (productId: string) => {
    return cart.some((product) => product.id === productId);
  };

  const addProductToCart = (product: Product) => {
    if (!isProductInCart(product.id)) {
       const updatedCart: Product[] = [...cart, product]; 
      setCart(updatedCart); 
      toast.success("Producto agregado al carrito correctamente.");
    } else {
      toast.error("Este producto ya está en el carrito.");
    }
  };
  
  // Función para comprar (puedes ajustar la lógica según lo necesites)
  const buyProduct = () => {
    if (userData) {
      toast.success("¡Gracias por tu compra!");
      // Aquí podrías añadir lógica para procesar la compra
    } else {
      toast.error("Debes iniciar sesión para comprar.");
    }
  };

  return (
    <div>
      <h1>Detalles del producto</h1>
      <p>ID del producto: {id}</p>
      <p>Nombre: {name}</p>
      <p>Precio: ${price}</p>
      <p>Usuario actual: {userData?.name || "Invitado"}</p>
      <p>Carrito actual: {cart.length} productos</p>

      <button
        onClick= { addProductToCart}
        disabled={!userData} // Botón deshabilitado si el usuario no está logueado
      >
        Agregar al carrito
      </button>

      <button
        onClick={buyProduct}
        disabled={!userData} // Botón deshabilitado si el usuario no está logueado
      >
        Comprar
      </button>
    </div>
  );
}

export default ProductDetail;



/*"use client"
import { useState, useEffect } from "react";
import { getProductById } from "@/service/products";
import useUserDataStore from "@/store";
import { toast } from "sonner";
import { Product } from "@/app/interfaces";

function isUserAuthenticated() {
  const userData = useUserDataStore.getState().userData;
  return !!userData; 
}

function ProductDetail({ id } : {id:string}) {
  const [dataProduct, setDataProduct] = useState<Product | null>(null)
  const userAuthenticated = isUserAuthenticated();
  const cart =  useUserDataStore((state) => state.cart);
  const setCart = useUserDataStore((state) => state.setCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id); // Llama al servicio
        setDataProduct(product); // Guarda el producto en el estado local
      } catch (error) {
        toast.error("Error al obtener el producto:");
        toast.error("No se pudo cargar el producto");
      }
    };
    fetchProduct();
  }, [id]); // Solo se ejecuta cuando `id` cambia


  const handleAddToCart = () => {
    if (!userAuthenticated) {
      toast.error("Inicia sesión para agregar productos al carrito"); 
      return;
    }
    const updatedCart = [...cart, dataProduct]; // Agregamos el producto al carrito
    setCart(updatedCart); // Actualizamos el carrito en el store
    toast.success("Producto agregado al carrito correctamente"); 
    console.log("Carrito actualizado:", updatedCart);
  };

  
  return (
    <div>
      <h1>{dataProduct.name}</h1>
      <p>{dataProduct.description}</p>
      <p>{dataProduct.price}</p>
      <img src={dataProduct.image} alt={dataProduct.name}/>
      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-slate-400 text-white rounded-md hover:bg-slate-500" 
          >
          Comprar
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
          onClick={handleAddToCart}>
            
          Agregar al carrito
        </button>
      </div>



    </div>
  )
}

export default ProductDetail; */