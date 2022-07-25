import { MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";

const CheckoutProduct = () => {
  return (
    <div className="grid grid-cols-5">
      <Image
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        height={200}
        width={200}
        objectFit="contain"
        alt="image"
      />

      {/* Middle */}
      <div className="col-span-2 mx-5">
        <p>Product Title</p>
        <div className="flex">
          {Array(5)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">
          Product Description: Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. At, debitis.{" "}
        </p>
        <Currency quantity={200} currency="GBP" />
      </div>

      {/* Product quantity controller */}
      <div className="flex flex-col sm:flex-row space-x-3 items-center justify-center sm:justify-items-end mr-5">
        <PlusIcon className="h-8 cursor-pointer" />
        <span className="font-bold">5</span>
        <MinusIcon className="h-8 cursor-pointer" />
      </div>

      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button">Add to Basket</button>
        <button className="button">Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
