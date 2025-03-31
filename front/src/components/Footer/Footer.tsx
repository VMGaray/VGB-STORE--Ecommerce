import React from 'react';
import styles from './Footer.module.css';


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
     <div className={styles.footerContent}>
       <div className={styles.links}>
        <a href="#">Inicio</a>
        <a href="#">Tienda</a>
        <a href="#">Contacto</a>
        <a href="#">FAQ</a>
        <a href="#">Acerca de Nosotros</a>
       </div>
      <div className={styles.contactInfo}>
        <p>Dirección: Calle Falsa 3579, Villa General Belgrano</p>
        <p>Teléfono: +54 114561 0789</p>
        <p>Email: contacto@vgbstore.com</p>
        <p>Horario: Lun-Vie 9 a 21 hs</p>
      </div>   
      <div className={styles.formal}>
        <a href="#">Términos y Condiciones</a>
        <a href="#">Política de Privacidad</a>
        <a href="#">Devoluciones y Reembolsos</a>
      </div>
     </div>
    </footer>
  );
};

export default Footer;


