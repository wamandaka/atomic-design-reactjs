import { Label } from "./Label.jsx";
import { Input } from "./Input.jsx";

const InputForm = ({ label, name, placeholder, type }) => {
  // const { label, name, placeholder, type } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}  />
    </div>
  );
};

export default InputForm;
