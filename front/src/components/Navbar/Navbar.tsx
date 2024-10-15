import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
     <nav className={styles.navbar}>
      <div className="container">
        <Link href="/" >Navbar</Link>
      </div>
     </nav>
     
  );
};

export default Navbar; 
