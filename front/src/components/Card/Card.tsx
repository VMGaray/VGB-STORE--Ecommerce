import Link from "next/link";
//import styles from "./Card.module.css";
import { Product } from "@/app/interfaces";

interface CardProps extends Product {variant?: "primary" | "secondary" };

const Card = ({name, image, price, id, variant = "primary"}: CardProps) => {
  return (
    <Link href={`/products/${id}`}>
    <article className=
    {`transition ease-in-out delay-150 hover:scale-105 text-cyan-950 ${ variant === "primary" ? "bg-quarternary": "bg-secundant"}`}>
      <h3>{name}</h3>
      <img src ={image} alt="title" />
      <p>{price}</p>
      Card
    </article>
      </Link>
  )
};

export default Card;
