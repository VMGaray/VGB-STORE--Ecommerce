import { productsMock } from "@/app/mocks/products";

const ffProductsMock = process.env.FF_PRODUCTS_MOCK ||  false;
const apiUrl = process.env.API_URL || "http://localhost:3001"

export const getProducts = async () => {
    let isFetchFailing = false;
    const res = await fetch (apiUrl + "/products", { 
        cache: "no-store",
    })
        .then((res) => res.json())
        .catch(() => (isFetchFailing = true));
        
        if(isFetchFailing && ffProductsMock) {
            return productsMock;
        }

  
        return Array.isArray(res) ? res : [];
};
