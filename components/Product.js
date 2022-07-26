/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slice/basketSlice";
import { useDispatch } from "react-redux";

// const MAX_RATING = 5;
// const MIN_RATING = 1;

const Product = ({
  id,
  title,
  description,
  category,
  image,
  price,
  rating,
}) => {
  const ratingFromApi = Math.floor(rating.rate);
  // const hasPrime = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      category,
      image,
      price,
      rating,
      // hasPrime,
    };
    dispatch(addToBasket(product));
  };

  // const rating = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  // );

  return (
    <div className="relative flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="content"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(ratingFromApi)
          .fill()
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {/* {hasPrime && ( */}
      <div className="flex items-center space-x-2 mt-5">
        <img
          className="w-12"
          src="https://links.papareact.com/fdw"
          alt="prime"
        />
        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
      </div>
      {/* )} */}
      <button className="button" onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
