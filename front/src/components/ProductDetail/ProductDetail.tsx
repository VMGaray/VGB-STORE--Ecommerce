"use client";
import React from "react";
import styles from "./ProductDetail.module.css";
import { Product } from "@/app/interfaces";
import useUserDataStore from "@/store";
import useCartStore from "@/store/useCartStore";
import { useRouter } from "next/navigation";


interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { name, price, image, description } = product;
  const { userData } = useUserDataStore();
  const { addProduct } = useCartStore();
  const { clearCart } = useCartStore();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!userData) {
      
      router.push('/login');
      return;
    }

    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, 
    });

 
  };
  

  return (
    <article>
      <h1>{name}</h1>
      <div className={styles.productDetail}>
        <img src={image} alt={name} />
        <div className={styles.info}>
          <p>{description}</p>
          <div className={styles.widget}>
            <button>Comprar</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;




