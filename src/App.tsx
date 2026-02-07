import { useState, type ChangeEvent, type FormEvent } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/ui/Modal';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import { formInputList, productList } from './data';
import type { IProduct } from './interface';
import { productValidation } from './validation';
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

  // State
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [isOpen, setIsOpen] = useState(true);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    imageURL: '',
    price: '',
  });

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  // Handlers
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

    alert('Form submitted successfully!');
    setProduct(defaultProduct);
  };

  // Render
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFromInputList = formInputList.map((input) => {
    const value: string | number | readonly string[] | undefined =
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
