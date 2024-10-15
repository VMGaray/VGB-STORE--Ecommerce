import styles from "./ProductDetail.module.css";
import { Product } from "@/app/interfaces";

interface ProductDetailProps {
   product: Product;
}
const ProductDetail = ({ product }: ProductDetailProps) => {
    const { name, price, image, description } = product;
  return (
     <article >
       <h1>{name}</h1>
       <div className={styles.productDetail}>
         <img src= {image} alt={name}/>
          <div className={styles.info}>
           <p>{description}</p>
          <div className={styles.widget}> 
           <button>Agregar al carrito</button> 
           <p>{price}</p>
          </div> 
          </div>
       </div>

     </article>
  );
};

export default ProductDetail
