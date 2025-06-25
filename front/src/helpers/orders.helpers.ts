
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token 
      },
      body: JSON.stringify({ products })
    });

    const data = await response.json();

    if (response.ok) {
        return data;
    } else {
     
      alert(`Error al crear la orden: ${data.message || "Error desconocido"}`);
      throw new Error(data.message || "Error desconocido");
    }

  } catch (error: any) {
    alert("Error inesperado: " + error.message);
    console.error("Error en createOrder:", error);
    throw error;
  }
}


export async function getOrder(token: string)  {
    try {
        const response = await fetch(`${BASE_URL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
          
        })
         return response.json()
        
    } catch(error: any) {
         throw new Error(error)
    };
}




