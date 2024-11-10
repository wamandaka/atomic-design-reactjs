import React from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <Link
        href="#"
        className="group flex flex-col justify-between overflow-hidden"
      >
        {children}
      </Link>
    </>
  );
};

const Image = (props) => {
  const { children, image } = props;
  return (
    <img
      src={image}
      alt=""
      className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 "
    />
  );
};

const Body = (props) => {
  const { children, title, description } = props;
  return (
    <div className="relative bg-white pt-3 h-full">
      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
        {title}
      </h3>

      <h4 className="mt-2 text-sm font-medium">{description}</h4>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <p className="mt-5 flex justify-between items-center">
      <span className="sr-only"> Regular Price </span>

      <span className="tracking-wider text-gray-900">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>

      <Button
        variant="bg-indigo-600 hover:opacity-90 py-2"
        onClick={() => handleAddToCart(id)}
      >
        Add to cart
      </Button>
    </p>
  );
};

CardProduct.Image = Image;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
