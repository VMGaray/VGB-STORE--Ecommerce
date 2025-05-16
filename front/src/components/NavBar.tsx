import Link from "next/link";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className="bg-sky-100">
      VGB STORE
      <Link href="/" className={styles.linkBox}>Inicio</Link>
      <Link href="/dashboard" className={styles.linkBox}>Dashboard</Link>
      <Link href="/login" className={styles.linkBox}>Login</Link>
      <Link href="/register" className={styles.linkBox}>Nuevo usuario</Link>
    </div>
  )
}

export default NavBar
