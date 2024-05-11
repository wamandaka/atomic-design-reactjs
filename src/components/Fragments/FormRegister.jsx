import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export const FormRegister = () => {
  return (
    <>
      <form
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <InputForm
          type="text"
          placeholder="Type your name here.."
          label="Full Name"
          name="fullname"
        />
        <InputForm
          type="email"
          placeholder="Enter email"
          label="Email"
          name="email"
        />
        <InputForm
          type="password"
          placeholder="Enter password"
          label="Password"
          name="password"
        />
        <InputForm
          type="password"
          placeholder="Enter password"
          label="Confirm Password"
          name="confirmPassword"
        />

        <Button variant="bg-indigo-600 w-full">Sign up</Button>
      </form>
    </>
  );
};
