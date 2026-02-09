import { useMemo } from 'react';
import { productList } from '../../data';
import type { IProduct } from '../../interface';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Label,
} from '@headlessui/react';

import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';

type Category = IProduct['category'];

type Props = {
  value: Category;
  onChange: (category: Category) => void;
};

const Select = ({ value, onChange }: Props) => {
  const categories = useMemo<Category[]>(() => {
    return Array.from(
      new Map(productList.map((p) => [p.category.name, p.category])).values(),
    );
  }, []);

  return (
    <Listbox value={value} onChange={onChange}>
      <Label className="block text-sm">Category</Label>

      <div className="relative mt-2">
        <ListboxButton className="relative w-full rounded-md bg-white py-2 pl-3 pr-10 text-left ring-1 ring-gray-300">
          <span className="flex items-center gap-3">
            {value.imageURL && (
              <img
                src={value.imageURL}
                alt={value.name}
                className="h-5 w-5 rounded-full"
              />
            )}
            <span>{value.name || 'Select category'}</span>
          </span>

          <ChevronUpDownIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-500" />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full rounded-md bg-white py-1 shadow ring-1 ring-black/5">
          {categories.map((category) => (
            <ListboxOption
              key={category.name}
              value={category}
              className="group cursor-pointer py-2 pl-3 pr-9 data-[focus]:bg-gray-100"
            >
              <div className="flex items-center">
                <img
                  src={category.imageURL}
                  alt={category.name}
                  className="h-5 w-5 rounded-full"
                />
                <span className="ml-3 group-data-[selected]:font-semibold">
                  {category.name}
                </span>
              </div>

              <span className="absolute right-4 hidden group-data-[selected]:block text-indigo-600">
                <CheckIcon className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default Select;
