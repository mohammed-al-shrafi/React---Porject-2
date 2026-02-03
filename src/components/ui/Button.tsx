import type { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: 'w-full' | 'w-fit';
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      type="button"
      className={`
        ${width || 'w-full'}
        text-center
        cursor-pointer
        text-white
        px-4 py-2
        rounded-md
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
