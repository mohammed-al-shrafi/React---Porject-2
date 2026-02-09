import type { IProduct } from '../interface';
import { textSlicer, formatPrice } from '../utils/functions';
import Image from './image';
import Button from './ui/Button';

interface IProps {
  product: IProduct;
  setEditProduct: (product: IProduct) => void;
  openEditModal: () => void;
}

const ProductCard = ({ product, setEditProduct, openEditModal }: IProps) => {
  const { title, description, price, imageURL, category, colors } = product;

  const renderProductColors = colors.map((color, index) => (
    <span
      key={index}
      className="w-5 h-5 rounded-full border"
      style={{ backgroundColor: color }}
    />
  ));

  const onEdit = () => {
    setEditProduct(product);
    openEditModal();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt={title}
        className="w-full h-48 object-cover mb-2 rounded-md"
      />

      <h3 className="font-semibold">{title}</h3>
      <p>{textSlicer(description)}</p>

      <div className="flex space-x-2 my-2 items-center">{renderProductColors}</div>

      <div className="flex justify-between items-center">
        <span>${formatPrice(price)}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-4">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          Edit
        </Button>
        <Button className="bg-red-700 hover:bg-red-800">Destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
