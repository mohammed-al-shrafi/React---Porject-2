import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width, ...rest }: IProps) => {
    console.log({rest})
  return (
    <div
      className={` ${width || "w-full"} text-center cursor-pointer text-white px-4 py-2 rounded-md ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Button;
