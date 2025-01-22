
import { Product } from "@/app/interfaces";
const apiUrl = process.env.API_URL || "http://localhost:3001"
export async function getProducts() {
    try {
      const response = await fetch(`${apiUrl}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data: Product[] = await response.json();
        return data;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }
  
  export async function getProductById(id: string):Promise<Product> {
    try {
      const response = await fetch(`${apiUrl}/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data: Product = await response.json();
        return data;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }
  
