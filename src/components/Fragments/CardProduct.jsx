import React from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <li>
        <a href="#" className="group block overflow-hidden">
          {children}
        </a>
      </li>
    </>
  );
};

const Image = (props) => {
  const { children, image } = props;
  return (
    <img
      src={image}
      alt=""
      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    />
  );
};

const Body = (props) => {
  const { children, title, description, price } = props;
  return (
    <div className="relative bg-white pt-3">
      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
        {title}
      </h3>

      <h4 className="mt-2 text-sm font-medium">{description}</h4>

      <p className="mt-2 flex justify-between items-center">
        <span className="sr-only"> Regular Price </span>

        <span className="tracking-wider text-gray-900"> {price} </span>
        <Button variant="bg-indigo-600 hover:opacity-90">Add to cart</Button>
      </p>
    </div>
  );
};

CardProduct.Image = Image;
CardProduct.Body = Body;

export default CardProduct;
