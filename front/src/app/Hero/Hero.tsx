import Link from "next/link";
import styles from "./hero.module.css"

const Hero = () => {
  return (
    <header className={styles.hero}>
       <h1>Bienvenidos a mi página</h1>
       <Link href="/products"> Ir a productos</Link>
    </header>
  );  
}

export default Hero
