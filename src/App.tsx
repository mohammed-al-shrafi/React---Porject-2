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
import Select from './components/ui/Select';

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
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    imageURL: '',
    price: '',
  });

  // ---------Modal Handlers---------
  const open = () => {
    setProduct(defaultProduct);
    setTempColor([]);
    setErrors({ title: '', description: '', imageURL: '', price: '' }); // مسح الأخطاء
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const closeEditModal = () => setIsOpenEditModal(false);

  // ---------Form Handlers---------
  const onCancel = () => {
    setProduct(defaultProduct);
    setTempColor([]);
    setErrors({ title: '', description: '', imageURL: '', price: '' });
    close();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' ? value : value,
    }));
    setErrors({ ...errors, [name]: '' });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!editProduct) return;
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
    setProduct({ ...editProduct, [name]: value }); // keep form in sync
    setErrors({ ...errors, [name]: '' });
  };

  // ---------Add Product---------
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = productValidation(product);
    if (Object.values(validation.errors).some((err) => err !== '')) {
      setErrors(validation.errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuidv4(), colors: tempColor },
      ...prev,
    ]);
    onCancel();
    close();
  };

  // ---------Edit Product---------
  const submitEditHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editProduct) return;

    const validation = productValidation(product);
    if (Object.values(validation.errors).some((err) => err !== '')) {
      setErrors(validation.errors);
      return;
    }

    setProducts((prev) =>
      prev.map((item) =>
        item.id === editProduct.id
          ? { ...product, id: editProduct.id, colors: tempColor }
          : item,
      ),
    );

    setEditProduct(null);
    onCancel();
    closeEditModal();
  };

  // ---------Render Inputs---------
  const renderInputs = (isEdit: boolean) =>
    formInputList.map((input) => {
      const value = isEdit
        ? editProduct?.[input.name as keyof IProduct] || ''
        : product[input.name as keyof IProduct];

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
            value={value as string}
            onChange={isEdit ? onChangeEditHandler : onChangeHandler}
          />
          {errors[input.name as keyof typeof errors] && (
            <ErrorMessage msg={errors[input.name as keyof typeof errors]} />
          )}
        </div>
      );
    });

  // ---------Render Colors---------
  const renderColors = (
    selectedColors: string[],
    setColors: (colors: string[]) => void,
  ) =>
    colors.map((color) => (
      <CircleColor
        key={color}
        color={color}
        selected={selectedColors.includes(color)}
        onClick={() =>
          selectedColors.includes(color)
            ? setColors(selectedColors.filter((c) => c !== color))
            : setColors([...selectedColors, color])
        }
      />
    ));

  // ---------Render Product List---------
  const renderProductList = products.map((prod) => (
    <ProductCard
      key={prod.id}
      product={prod}
      setEditProduct={(prodToEdit) => {
        setEditProduct(prodToEdit);
        setProduct(prodToEdit); // fill form
        setTempColor(prodToEdit.colors);
        openEditModal();
      }}
      openEditModal={openEditModal}
    />
  ));

  // ----------Return----------
  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={open}>
        Add Product
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      {/* Add Product Modal */}
      <Modal isOpen={isOpen} close={close} title="Add A New Product">
        <form className="space-y-3" onSubmit={onSubmitHandler}>
          {renderInputs(false)}
          <Select
            value={product.category}
            onChange={(cat) =>
              setProduct((prev) => ({ ...prev, category: cat }))
            }
          />
          <div className="flex flex-wrap space-x-2 my-4">
            {renderColors(tempColor, setTempColor)}
          </div>
          <div className="flex items-center space-x-3">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              type="button"
              onClick={onCancel}
              className="bg-gray-400 hover:bg-gray-500"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        isOpen={isOpenEditModal}
        close={closeEditModal}
        title="Edit Product"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderInputs(true)}
          <Select
            value={product.category}
            onChange={(cat) =>
              setProduct((prev) => ({ ...prev, category: cat }))
            }
          />
          <div className="flex flex-wrap space-x-2 my-4">
            {renderColors(tempColor, setTempColor)}
          </div>
          <div className="flex items-center space-x-3">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800">
              Update
            </Button>
            <Button
              type="button"
              onClick={closeEditModal}
              className="bg-gray-400 hover:bg-gray-500"
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
