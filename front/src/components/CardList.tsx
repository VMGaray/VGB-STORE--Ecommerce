import Card from "@/components/Card";
import productsToPreLoad from "@/helpers/preLoadProducts";
const CardList = () => {
  return (
    <div>
      {
       productsToPreLoad && productsToPreLoad?.map((product) => {
        return (
         <Card {...product} key={product.id} />
        )
        })
      }
    </div>
  )
}

export default CardList
