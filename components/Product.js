import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, description, category, image, price }) => {
  const rating = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const hasPrime = useState(Math.random() < 0.5);
  return (
    <div>
      <p>{category}</p>
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="content"
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p>{description}</p>

      <div>
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div>
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime"
          />
        </div>
      )}
    </div>
  );
};

export default Product;
