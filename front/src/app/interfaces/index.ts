
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface RegisterFormType {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}


export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
   
}

export interface FormData {
    email:string,
    password:string,
  }