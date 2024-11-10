import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Elements/Button";
import InputForm from "./components/Elements/Input";
import { FormLogin } from "./components/Fragments/FormLogin";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
// import InputForm from "./components/Elements/Input/index.jsx";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <LoginPage></LoginPage>
        <RegisterPage></RegisterPage>
      </div>
    </>
  );
}

export default App;
