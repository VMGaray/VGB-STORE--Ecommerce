
import { Product } from "@/app/interfaces";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
 

export async function getProducts() {
    try {
      const res = await fetch(`${apiUrl}/products`, {
        method: "GET",
        next: { revalidate: 3600},
      });
      const products : Product[] = await res.json();
      return products; 
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
      
  export async function getProductById(id: string, ) {
    try {
      const products = await getProducts() 
      const product = products.find((product) => product.id == id);
      if (!product) throw new Error("Producto no encontrado");
      return product;
      } catch (error) {
        throw new Error(error as string);
      }
    }
          
  
      
  
