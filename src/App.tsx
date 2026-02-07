import { useState, type ChangeEvent, type FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { IProduct } from './interface';
import { colors, formInputList, productList } from './data';
import { productValidation } from './validation';
import ProductCard from './components/ProductCard';
import Modal from './components/ui/Modal';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import CircleColor from './components/CircleColor';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const defaultProduct: IProduct = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: { name: '', imageURL: '' },
  };

  // ---------State---------
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [isOpen, setIsOpen] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    imageURL: '',
    price: '',
  });

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  // ---------Handlers---------
  const onCancel = () => {
    setProduct(defaultProduct);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'price') {
      setProduct({ ...product, price: value });
      return;
    }

    if (name === 'category') {
      setProduct({
        ...product,
        category: { ...product.category, name: value },
      });
      return;
    }

    setProduct({ ...product, [name]: value });

    setErrors({ ...errors, [name]: '' });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = productValidation(product).errors;

    console.log('Validation Errors:', errors);

    const hasErrorMsg =
      Object.values(errors).some((error) => error !== '') &&
      Object.values(errors).length > 0;

    if (hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, colors: tempColor, id: uuidv4() },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColor([]);
    close();
  };

  // ---------Render---------
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFromInputList = formInputList.map((input) => {
    const value: string | readonly string[] | undefined =
      input.name === 'category'
        ? product.category.name
        : input.name === 'price'
          ? product.price
          : (product as any)[input.name];

    return (
      <div key={input.id} className="mb-4">
        <label
          htmlFor={input.name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {input.label}
        </label>

        <Input
          type={input.type}
          id={input.name}
          name={input.name}
          value={value}
          onChange={onChangeHandler}
        />
        {errors[input.name as keyof typeof errors] && (
          <ErrorMessage msg={errors[input.name as keyof typeof errors]} />
        )}
      </div>
    );
  });

  const renderProductColors = colors.map((color, index) => (
    <CircleColor
      key={index}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((c) => c !== color));
          return;
        }

        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main className="container ">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={open}>
        Add Product
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add A New Product">
        <form className="space-y-3" onSubmit={onSubmitHandler}>
          {renderFromInputList}
          <div className="flex space-x-2 my-4 items-center flex-wrap">
            {renderProductColors}
          </div>

          <div className="flex space-x-2 my-4 items-center flex-wrap">
            {tempColor.map((color, index) => (
              <span
                key={index}
                className="p-1 -mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800" type="submit">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
