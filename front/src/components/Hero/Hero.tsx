import Link from "next/link";

const Hero = () => {
  return (
    <header className="h-[12.5rem] flex items-center justify-center flex-col bg-secundant rounded-2xl my-3 #272727">
       <h1>VGB STORE</h1>
       <Link href="/products"> Ir a productos</Link>
    </header>
  );  
}

export default Hero

