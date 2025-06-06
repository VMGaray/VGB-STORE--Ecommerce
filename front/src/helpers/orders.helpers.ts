
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function createOrder(products: number[], token: string)  {
    try {
        const response = await fetch(`${BASE_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({products})
        })
        if(response.ok) {
            alert("Compra exitosa!")
            return response.json()
        } 
    } catch(error: any) {
        alert(error)
        throw new Error(error)
    }
};

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




