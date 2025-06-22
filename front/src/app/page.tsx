import CardList from "@/components/CardList";


export default function Home() {
  return (
    <div>
      <CardList/>
    </div>
  )
}


/* opciones segun chat gpt
import Head from "next/head";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Tienda Online</title>
        <meta name="description" content="Los mejores productos en un solo lugar. Comprá fácil, rápido y seguro." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Productos Destacados</h1>
        <CardList />
      </main>
    </>
  );
}*/
