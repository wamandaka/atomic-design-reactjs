// import { useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export const FormLogin = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    // alert("email", +email);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    window.location.href = "/products";
    // console.log("login");
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
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

        <Button variant="bg-indigo-600 w-full" type="submit">
          Sign in
        </Button>
      </form>
    </>
  );
};
