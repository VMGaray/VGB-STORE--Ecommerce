import { ILoginProps, IRegisterProps } from "@/interfaces";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function register(userData: IRegisterProps )  {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("Usuario registrado con exito")
            return response.json()
        } else {
            throw new Error("Fallo el servidor al registrar el usuario, vuelva a intentar más tarde")
        }
      
    } catch(error: any) {
        alert(`Ocurrió un error al registrar el usuario: ${error}`)
        throw new Error(error)
    }
};

export async function login(userData: ILoginProps )  {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("Usuario logueado con exito")
            return response.json()
        } else {
            throw new Error("Fallo el servidor al loguear al usuario, vuelva a intentar más tarde")
        }
      
    } catch(error: any) {
        alert(`Ocurrió un error al loguear el usuario: ${error}`)
        throw new Error(error)
    }
};


