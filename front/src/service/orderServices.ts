import { apiUrl } from "./config";
export async function dispatchOrder(products: number[], userId: string, token: string) {
    try {
      const response = await fetch(`${apiUrl}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token, 
        },
        body: JSON.stringify({ products, userId }),
      });
  
        const data = await response.json();
        return data;
      } catch (error) {
      throw new Error(error as string);
    }
  }

  export async function getBuyHistory(token: string) {
    try {
      const response = await fetch(`${apiUrl}/users/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token, 
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
        throw new Error(error as string);
    }
  }