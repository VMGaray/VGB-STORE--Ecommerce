import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductById } from "@/service/products"; 

interface PageProps {
  params: {
    id: string[]; 
  };
}

async function Product({ params }: PageProps) {
  const { id } = params; 
  const product = await getProductById(id[0]); 

  if (!product) {
    return <p>Producto no encontrado</p>; 
  }
   return <ProductDetail product={product} />;
}

export default Product;



/*import ProductDetail from "@/components/ProductDetail/ProductDetail";

interface PageProps {
  params: Promise<{
    id: string[];

  }>;
}
async function Product({ params } : PageProps) {
  const { id } = await params;
  return <ProductDetail id={id[0]} />;
}

export default Product;*/

