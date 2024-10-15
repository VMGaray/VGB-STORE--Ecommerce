"use client";
import { Product } from "@/app/interfaces";
import { productsMock } from "@/app/mocks/products";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

const page = ({ params }: { params: { id: string }}) => {
  const { id } = params;
    
  return <ProductDetail product= {productsMock[+id]}/> ;
  };

export default page;
