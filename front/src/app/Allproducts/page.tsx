import Card from "@/components/Card";
import { getProductsDB } from "@/helpers/products.helpers";
import Link from "next/link";

const Page = async () => {
  const products = await getProductsDB();

  if (!products || products.length === 0) {
    return <p className="p-6 text-center text-gray-600">No se encontraron productos</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <Card {...product} />
        </Link>
      ))}
    </div>
  );
};

export default Page;