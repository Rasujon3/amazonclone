import Image from "next/image";
import React from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";

const CheckOut = () => {
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
          <div>
            {Array(5)
              .fill()
              .map((item, index) => (
                <CheckoutProduct key={index} />
              ))}
          </div>
        </div>

        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};

export default CheckOut;
