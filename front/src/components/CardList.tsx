import Card from "@/components/Card";
import { getProductsDB } from "@/helpers/products.helpers";
import Link from "next/link";

const CardList = async () => {
  const productsToPreLoad = await getProductsDB(); 
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {
       productsToPreLoad && productsToPreLoad?.map((product) => {
        return (
         <Link key={product.id} href={`/product/${product.id}`}>
           <Card {...product} key={product.id} />
         </Link>
        )
        })
      }
    </div>
  )
}

export default CardList
