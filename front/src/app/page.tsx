import Card from "../components/Card/Card";
import { productsMock } from "./mocks/products";
import CardList from "../components/Card/CardList/CardList";
import Hero from "../components/Hero/Hero";
import { getProducts } from "@/service/products";


export default async function page() {
  const dataProducts = await getProducts();

    return (
    <>
      <Hero/>
      <CardList>
        {dataProducts.slice(0, 3).map((product, i)=> (
          <Card key={i} {...product} variant = "secondary" />

        ))}
      </CardList>
    </>
      ); 
  };

 
