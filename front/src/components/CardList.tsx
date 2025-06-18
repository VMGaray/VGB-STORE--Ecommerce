import Card from "@/components/Card";
import { getProductsDB } from "@/helpers/products.helpers";
import Link from "next/link";

const CardList = async () => {
  const productsToPreLoad = await getProductsDB();
  const featuredProducts = productsToPreLoad.slice(0, 3);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card {...product} />
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/Allproducts"
          className="inline-block px-6 py-3 bg-blue-950 text-white font-bold rounded-lg hover:bg-blue-900 transition"
          >Ver todos los productos
        </Link>
      </div>
    </div>
  );
};

export default CardList;

