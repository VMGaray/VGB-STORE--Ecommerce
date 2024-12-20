import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.linkBox}>Inicio</Link>
        <Link href="/login" className={styles.linkBox}>Login</Link>
        <Link href="/login" className={styles.linkBox}>Nuevo usuario</Link>
      </div>
    </nav>
  );
};

export default Navbar;

