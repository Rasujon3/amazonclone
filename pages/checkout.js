import Image from "next/image";
import React from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slice/basketSlice";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Currency from "react-currency-formatter";

const CheckOut = () => {
  const items = useSelector(selectItems);
  const session = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div>
          <div className="text-center">
            <Image
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
              alt="Image"
            />
          </div>
          {/* Cart div */}
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Basket is Empty" : "Shopping basket"}
            </h1>
            {items.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        {/* Right */}

        {session.data && (
          <div className="flex flex-col bg-white shadow-md p-10">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap font-bold">
                  Subtotal ({items.length} items)
                  <span className="font-bold">
                    <Currency quantity={55} currency="GBP" />
                  </span>
                </h2>
                <button className="button from-gray-300 to-gray-500 border-gray-200 text-gray-300">
                  Process to Checkout
                </button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CheckOut;
