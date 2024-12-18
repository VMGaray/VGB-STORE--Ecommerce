import Link from "next/link";
import styles from "./hero.module.css"

const Hero = () => {
  return (
    <header className="h-[12.5rem] flex items-center justify-center flex-col bg-secundant rounded-2xl my-3 text-cyan-900">
       <h1>Bienvenidos a mi página</h1>
       <Link href="/products"> Ir a productos</Link>
    </header>
  );  
}

export default Hero
