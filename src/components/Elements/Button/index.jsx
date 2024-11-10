const Button = (props) => {
  const {
    children,
    variant = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`block rounded-lg ${variant} px-5 py-3 text-sm font-medium text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
