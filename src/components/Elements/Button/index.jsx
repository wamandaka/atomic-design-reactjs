const Button = (props) => {
  const { children, variant = "bg-black" } = props;
  return (
    <button
      className={`block rounded-lg ${variant} px-5 py-3 text-sm font-medium text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
