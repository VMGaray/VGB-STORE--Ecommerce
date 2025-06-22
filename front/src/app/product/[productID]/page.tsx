import ProductDetail from "@/components/ProductDetail";
import { getProductsById } from "@/helpers/products.helpers";

const DetailProduct = async ({ params }: { params: { productID: string } }) => {
  const productID = params.productID;
  const product = await getProductsById(productID);

  return <ProductDetail {...product} />;
};

export default DetailProduct;


