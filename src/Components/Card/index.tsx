import { Product } from "../../Types/product";

interface CardProps {
  data: Product;
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="w-56 h-60 rounded-lg my-4">
      <img src={data.images[0]} alt={data.title} />
      <p className="flex justify-between items-center"> <span>{data.title}</span> <span className="font-bold">${data.price}</span></p>
    </div>
  );
};

export default Card;
