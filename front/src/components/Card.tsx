import React from "react";
import { IProduct } from "@/interfaces";

const Card: React.FC<IProduct> =({ name, price, image}) => {
    return(
        <div>
          <h3>{name}</h3>
          <p>Precio: ${price}</p>
          <img src={image} alt="product image"/>
        </div>
    )
}

export default Card;