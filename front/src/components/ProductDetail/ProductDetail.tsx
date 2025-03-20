import { getProductById } from "@/service/products";

async function ProductDetail({ id } : {id:string}) {
  const dataProduct = await getProductById(id);
  return (
    <div>
      <h1>{dataProduct.name}</h1>
      <p>{dataProduct.description}</p>
      <p>{dataProduct.price}</p>
      <img src={dataProduct.image} alt={dataProduct.name}/>

    </div>
  )
}
export default ProductDetail;