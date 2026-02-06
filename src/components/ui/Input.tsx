import type { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="w-full p-2 rounded-md bg-white border
        shadow-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default Input;
