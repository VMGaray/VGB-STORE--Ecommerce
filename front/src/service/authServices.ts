import { RegisterFormType, FormData } from "@/app/interfaces";
import { apiUrl } from "./config";


export async function registerUser(userData: RegisterFormType) {
    try {
        const response = await fetch(`${apiUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
      const data = await response.json();
      return data;
    } catch ( error ) {
      throw new Error((error as Error).message)
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


  
  
  
  
