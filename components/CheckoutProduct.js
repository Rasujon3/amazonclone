import { MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import {
  addToBasket,
  decrementQuantity,
  incrementQuantity,
  removeFromBasket,
} from "../slice/basketSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
  quantity,
}) => {
  const ratingFromApi = Math.floor(rating.rate);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
      quantity,
    };
    dispatch(addToBasket(product));
  };

  const increaseProduct = () => {
    dispatch(incrementQuantity(id));
  };
  const decreaseProduct = () => {
    dispatch(decrementQuantity(id));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="image"
      />

      {/* Middle */}
      <div className="col-span-2 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(ratingFromApi)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasPrime && (
          <div>
            <Image
              src="https://links.papareact.com/fdw"
              alt="hasPrime"
              className="w-12"
              height={45}
              width={45}
            />
            <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
          </div>
        )}
      </div>

      {/* Product quantity controller */}
      <div className="flex flex-col sm:flex-row space-x-3 items-center justify-center sm:justify-items-end mr-5">
        <PlusIcon className="h-8 cursor-pointer" onClick={increaseProduct} />
        <span className="font-bold">{quantity}</span>
        <MinusIcon className="h-8 cursor-pointer" onClick={decreaseProduct} />
      </div>

      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
