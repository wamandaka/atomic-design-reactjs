import React from "react";
import { children } from "react";
import { Link } from "react-router-dom";

export const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>
          {children}
          <p className="text-center text-sm text-gray-500">
            {type === "login" ? "No account? " : "Already have an account? "}
            {type == "login" && (
              <Link className="underline font-bold" to="/register">
                Sign up
              </Link>
            )}
            {type == "register" && (
              <Link className="underline font-bold" to="/login">
                Sign in
              </Link>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
