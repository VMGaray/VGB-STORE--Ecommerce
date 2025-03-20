import ProductDetail from "@/components/ProductDetail/ProductDetail";

interface PageProps {
  params: Promise<{
    id: string[];

  }>;
}
async function Product({ params } : PageProps) {
  const { id } = await params;
  return <ProductDetail id={id[0]} />;
}

export default Product;

