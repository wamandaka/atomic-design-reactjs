import React, { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { IoMdCart } from "react-icons/io";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    title: "Lumine Art Book 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100000,
    image: "../lumine-1.jpg",
  },
  {
    id: 2,
    title: "Lumine Art Book 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ducimus quas exercitationem dolore provident, rem adipisci rerum libero alias autem!",
    price: 150000,
    image: "../lumine-2.jpg",
  },
  {
    id: 3,
    title: "Lumine Art Book 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ducimus quas exercitationem dolore provident, rem adipisci rerum libero alias autem!",
    price: 100000,
    image: "../lumine-1.jpg",
  },
  {
    id: 4,
    title: "Lumine Art Book 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ducimus quas exercitationem dolore provident, rem adipisci rerum libero alias autem!",
    price: 150000,
    image: "../lumine-2.jpg",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <section>
        <div className="bg-indigo-600 px-4 py-3 text-white flex justify-end items-center gap-5 fixed top-0 w-full z-50">
          <Counter />
          <p className="text-center text-sm font-medium">
            Welcome back, {email}
          </p>
          <div className="cursor-pointer" onClick={handleCart}>
            <IoMdCart size={24} />
          </div>
          <Button variant="bg-red-600 hover:opacity-90" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div
          className={
            showCart
              ? "md:w-screen w-80 right-10 max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 fixed top-20 md:right-10 z-50 overflow-y-scroll h-64"
              : "hidden"
          }
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div className="relative">
            <button
              onClick={handleCart}
              className="fixed right-14 top-24 p-2 md:right-16 text-gray-600 transition hover:scale-110"
            >
              <span className="sr-only">Close cart</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 space-y-6">
            <ul className="space-y-4">
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <li key={item.id} className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt=""
                      className="size-16 rounded object-cover"
                    />
                    <div>
                      <h3 className="text-sm text-gray-900">{product.title}</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Price: </dt>
                          <dt className="inline">
                            {product.price.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })}
                          </dt>
                        </div>
                        <div>
                          <dt className="inline">Quantity: </dt>
                          <dt className="inline">{item.qty}</dt>
                        </div>
                        <div>
                          <dt className="inline">Total: </dt>
                          <dt className="inline">
                            {(item.qty * product.price).toLocaleString(
                              "id-ID",
                              { style: "currency", currency: "IDR" }
                            )}
                          </dt>
                        </div>
                      </dl>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-end gap-4 font-bold">
              <p>Total Price</p>
              <p>
                {totalPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-10`}
        >
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Image image={product.image} />
                <CardProduct.Body
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
