import Card from "../components/Card/Card";
import { productsMock } from "./mocks/products";
import CardList from "../components/Card/CardList/CardList";
import Hero from "../components/Hero/Hero";

const page = () => {

    return (
    <>
      <Hero/>
      <CardList>
        {productsMock.slice(0, 3).map((product, i)=> (
          <Card key={i} {...product} variant = "secondary" />

        ))}
      </CardList>
    </>
      ); 
  };

export default page;
