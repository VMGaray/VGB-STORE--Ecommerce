import Link from "next/link";
import { Product } from "@/app/interfaces";

interface CardProps extends Product {
  variant?: "primary" | "secondary";
}

const Card = ({ name, image, price, id, variant = "primary" }: CardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <article
        className={`transition ease-in-out delay-150 hover:scale-105 text-cyan-950 p-4 rounded-lg ${
          variant === "primary" ? "bg-quarternary" : "bg-secundant"
        }`}
      >
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <img
          src={image}
          alt="title"
          className="w-full h-48 object-cover rounded-md mb-2"
        />
        <p className="text-base text-gray-800">Precio: ${price}</p> 
        <p className="mt-4 text-blue-500">Ver producto</p>
      </article>
    </Link>
  );
};

export default Card;