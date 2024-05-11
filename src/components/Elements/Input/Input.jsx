export const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <>
      <input
        type={type}
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
