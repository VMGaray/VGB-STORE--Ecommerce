
import { IProduct } from "@/interfaces";

const Card: React.FC<IProduct> =({ name, price, image}) => {
    return (
    
      <article
        className="bg-white shadow-lg p-4 rounded-lg transition hover:scale-105">
        <h3 className="text-lg font-bold mb-2 text-blue-950 ">{name}</h3>
        <img
          src={image}
          alt="title"
          className="w-full aspect-square object-cover rounded-md max-w-[250px] max-h-[250px]"
        />
        <p className="text-base text-blue-900">Precio: ${price}</p> 
        <p className="mt-4 text-blue-950 cursor-pointer border border-blue-950 p-1 rounded-md
                     hover:bg-blue-950 hover:text-white inline-block ">
         Ver producto
        </p>
      </article>
   
  );
   
}

export default Card;

