import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-600 p-5">
      <div className="flex flex-wrap justify-between">
        <div className="m-2 flex-1">
          <h3 className="text-lg font-semibold">Dirección: Julio A. Roca 83, Villa General Belgrano</h3>
          <p>Teléfono: +54 3546-4561 0789</p>
          <p>Email: contacto@vgbstore.com</p>
          <p>Horario: Lun-Vie 9 a 21 hs</p>

        </div>
        <div className="m-2 flex-1">
          <h3 className="text-lg font-semibold">Legales</h3>
          <p>Términos y Condiciones.</p>
          <p>Política de Privacidad.</p>
          <p>Devoluciones y Reembolsos.</p>
        </div>
        <div className="m-2 flex-1">
          <h3 className="text-lg font-semibold">FAQ</h3>
          <p>Trabaja con nosotros.</p>
          <p>Ayuda.</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start mt-5">
  <Link href="/" className="text-gray-600 hover:underline">
    Inicio
  </Link>
  <Link href="/product" className="text-gray-600 hover:underline">
    Tienda
  </Link>
  <Link href="/about-us" className="text-gray-600 hover:underline">
    Acerca de nosotros
  </Link>
</div>

    </footer>
  );
};

export default Footer;


