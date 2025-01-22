import { RegisterFormType, FormData } from "@/app/interfaces";

const apiUrl = process.env.API_URL || "http://localhost:3001";

export async function registerUser(userData: RegisterFormType) {
    try {
        const response = await fetch(`${apiUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function loginService(userData: FormData) {
    try {
        const response = await fetch(`${apiUrl}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if(response.ok) {
            const data = await response.json();
            console.log('Datos del usuario recibidos:', data);
            return data;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error as string);
    }
}


export async function logoutService() {
    try {
        const response = await fetch(`${apiUrl}/users/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function dispatchOrder(token: string, products: { id: number }[]) {
    try {
      const response = await fetch(`${apiUrl}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify({ products }),
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
  export async function getBuyHistory(token: string) {
    try {
      const response = await fetch(`${apiUrl}/orders/history`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
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
  
  
  
