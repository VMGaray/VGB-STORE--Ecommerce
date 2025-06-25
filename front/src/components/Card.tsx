import { IProduct } from "@/interfaces";

 const Card: React.FC<IProduct> =({name, price, image}) => {
    
  return (
    <article
      className="bg-white shadow-lg p-4 rounded-lg transition hover:scale-105">
      <h3 className="text-lg font-bold mb-2 text-blue-950 ">{name}</h3>
      <img
        src={image}
        alt={name}
        className="w-full aspect-square object-cover rounded-md max-w-[250px] max-h-[250px]"
      />
      <p className="text-base text-blue-900">Precio: ${price}</p> 
  

    </article>
  );
}

export default Card;

