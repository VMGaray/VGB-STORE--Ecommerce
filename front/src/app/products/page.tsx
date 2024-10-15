import CardList from "@/components/Card/CardList/CardList";
import { productsMock } from "../mocks/products";
import Card from "@/components/Card/Card";

const page = () => {
  return (
    <div>
      <CardList>
        {productsMock.map((product, i)=> (
        <Card key={i} {...product} variant = "secondary" />

         ))}
      </CardList>
    </div>

   );
    
  };

export default page;
