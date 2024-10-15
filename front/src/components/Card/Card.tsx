import Link from "next/link";
import styles from "./Card.module.css";
import { Product } from "@/app/interfaces";

interface CardProps extends Product {variant?: "primary" | "secondary" };

const Card = ({name, image, price, id, variant = "primary"}: CardProps) => {
  return (
    <Link href={`/products/${id}`}>
    <article className={variant === "primary" ? styles.card_primary: styles.card_secondary}>
      <h3>{name}</h3>
      <img src ={image} alt="title" />
      <p>{price}</p>
      Card
    </article>
      </Link>
  )
};

export default Card;
