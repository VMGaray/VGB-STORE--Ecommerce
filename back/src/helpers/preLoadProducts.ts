import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 16 Pro",
    price: 699,
    description:
      "El iPhone 16 Pro se destaca por su diseño de titanio de grado 5, que lo hace más resistente y liviano. Introduce una nueva textura microgranallada y ofrece cuatro acabados, incluido el llamativo Desert Titanium. Su estructura interna mejorada, con aluminio reciclado y optimización del vidrio trasero, permite un rendimiento sostenido hasta un 20 % superior al del iPhone 15 Pro, ideal para sesiones intensas de juego. Además, presenta una pantalla Super Retina XDR más grande (6.3 y 6.9 pulgadas) con bordes ultradelgados. Es resistente al agua, polvo y golpes, incorporando el Ceramic Shield de última generación, que duplica la resistencia del vidrio de otros smartphones. Un dispositivo elegante y potente.",
    image:
      "https://www.apple.com/v/iphone-16-pro/f/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_large.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "El MacBook Air es el portátil más popular del mundo por una razón. En realidad, por muchas razones. Cumple Hasta 18 horas de duración de la batería.1 El chip M4 desbloquea un nivel completamente nuevo de rendimiento para trabajar y jugar. Apple Intelligence está integrado para ayudarte a hacer las cosas sin esfuerzo.2 Y ahora viene en un impresionante color Azul Cielo. Con el MacBook Air perfectamente portátil, estarás listo para enfrentarte a casi cualquier cosa, en cualquier lugar.",
    image:
      "https://th.bing.com/th/id/OIP.p2gZTfafaNAF2jQOS2do_QHaFi?w=229&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "El nuevo iPad Pro tiene una potencia asombrosa en un diseño increíblemente delgado, liviano y portátil. Supera los límites de lo que es posible en el iPad con un modelo superportátil de 11 pulgadas y un modelo expansivo de 13 pulgadas que es el producto más delgado que Apple haya creado.",
    image:
      "https://www.apple.com/v/ipad-pro/as/images/overview/closer-look/space-black/slide_3A__fmel0mesnxqq_large.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 10",
    price: 399,
    description:
      "La Serie 10 es un hito importante para el Apple Watch. Cuenta con nuestra pantalla más grande y avanzada hasta el momento,3 mostrando más información en pantalla que nunca. Con la primera pantalla OLED gran angular de Apple, la pantalla es más brillante cuando se ve desde un ángulo, lo que facilita la lectura con un vistazo rápido.",
    image:
      "https://www.apple.com/v/apple-watch-series-10/d/images/overview/finishes-aluminum/gallery/finish_alum_black_02__cfbupf7b9rte_large.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Max",
    price: 249,
    description:
      "Los AirPods Max ofrecen un audio increíblemente detallado y de alta fidelidad para una experiencia auditiva incomparable. Cada parte del controlador personalizado funciona para producir sonido con una distorsión ultrabaja en todo el rango audible, por lo que escuchará cada nota con una nueva sensación de claridad.",
    image:
      "https://www.apple.com/v/airpods-max/i/images/overview/bento/blue/bento_1_airpod_max_blue__blqgkfdancya_large.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Repleto de innovación, el HomePod mini ofrece un sonido inesperadamente grande para un altavoz de su tamaño. Con solo 3.3 pulgadas de alto, casi no ocupa espacio, pero llena toda la habitación con un rico audio de 360 grados que suena increíble desde todos los ángulos. Agrega más de un HomePod mini para obtener un sonido realmente expansivo.",
    image:
      "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod__cnpc7icpf1aq_large.png",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
