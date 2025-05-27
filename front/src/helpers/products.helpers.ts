import { IProduct } from "@/interfaces";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getProductsDB() : Promise<IProduct[]> {
    try {
        const response = await fetch(`${BASE_URL}/products` , {
            next: { revalidate : 3600}
        })
        const products = await response.json();
        return products;
    } catch(error: any) {
        throw new Error(error)
    }
}


export async function getProductsById(id: string) : Promise<IProduct> {
    try {
         const products = await getProductsDB();
         const productFiltered = products.find((product) => product.id.toString() === id)
         if(!productFiltered) throw new Error("Producto no encontrado");
         return productFiltered;
    } catch(error: any) {
        throw new Error(error)
    }
}