import type { IProduct } from '../interface';
import { textSlicer } from '../utils/functions';
import Image from './image';
import Button from './ui/Button';

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, price, imageURL, category, colors } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt={title}
        className="w-full h-48 object-cover mb-2 rounded-md"
      />

      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>

      <div className="flex space-x-2 my-4 items-center">
        {/* make the colors */}
        {colors.map((color, index) => (
          <span
            key={index}
            className="w-5 h-5 rounded-full cursor-pointer border"
            style={{ backgroundColor: color }}
          />
        ))}{' '}
      </div>

      <div className="flex justify-between items-center">
        <span>${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 hover:bg-indigo-800">Edit</Button>
        <Button className="bg-red-700 hover:bg-red-800">Destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
