import { IProduct } from "@/interfaces";

const ProductDetail: React.FC<IProduct> = ({ name, id, price, image, description, stock }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h1 className="text-2xl font-bold text-blue-950 mb-4">{name}</h1>
      <img className="w-full h-48 object-cover rounded-md" src={image} alt={`imagen del producto ${name}`} />
      <p className="text-blue-950 mt-2">{description}</p>
      <p className="text-blue-950 font-medium mt-2">Stock: <span className="font-bold">{stock}</span></p>
      <p className="text-blue-800 text-lg font-semibold mt-2">Precio: ${price}</p>
    </div>
  );
};

export default ProductDetail;
