import { useState } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/ui/Modal';
import { formInputList, productList } from './data';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

function App() {
  // State
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Render
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFromInputList = formInputList.map((input) => (
    <div key={input.id} className="mb-4">
      <label
        htmlFor={input.name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {input.label}
      </label>

      <Input type={input.type} id={input.name} name={input.name} />
    </div>
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
        <form className="space-y-3">
          {' '}
          {renderFromInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-gray-400 hover:bg-gray-500" onClick={close}>
              {' '}
              Cancel{' '}
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
