export const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="sr-only">
      {children}
    </label>
  );
};

export default Label;
