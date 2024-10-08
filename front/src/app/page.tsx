import Card from "@/components/Card/Card";
import { Product } from "./interfaces";
import CardList from "@/components/Card/CardList/CardList";

const page = () => {

  const products: Product[] = [
    { id: 1,
      name: "name1",
      description: "description",
      price: 23.45,
      stock: 9876,
      image: "",
      categoryId: 0,
    },
    { id: 2,
      name: "name2",
      description: "description",
      price: 34.56,
      stock: 9876,
      image: "",
      categoryId: 0,
    },
    { id: 3,
      name: "name3",
      description: "description",
      price: 56.21,
      stock: 9876,
      image: "",
      categoryId: 0,
    },
  ];
  return (
    <>
      <h1>Home</h1>
      <CardList>
        {products.map((product, i)=> (
          <Card key={i} {...product} variant = "secondary" />

        ))}
      </CardList>
    </>
      ); 
  };

export default page;
