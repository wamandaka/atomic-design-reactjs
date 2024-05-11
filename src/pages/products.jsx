import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CardProduct>
              <CardProduct.Image image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
              <CardProduct.Body
                title="Basic Tee"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum ex nisi maiores tempora aspernatur, esse vero doloremque eligendi ducimus."
                price="$32.00"
              />
            </CardProduct>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
