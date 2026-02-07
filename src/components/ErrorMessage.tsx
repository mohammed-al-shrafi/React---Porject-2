interface IProps {
  msg: string;
}

const ErrorMessage = ({ msg }: IProps) => {
  return (
    <span className="text-red-700 block font-semibold text-sm">{msg}</span>
  );
};

export default ErrorMessage;
