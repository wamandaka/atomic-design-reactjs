import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export const FormLogin = () => {
  return (
    <>
      <form
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
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

        <Button variant="bg-indigo-600 w-full">Sign in</Button>

        
      </form>
    </>
  );
};
