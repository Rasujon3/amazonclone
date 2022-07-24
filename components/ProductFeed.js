/* eslint-disable @next/next/no-img-element */
import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  //   console.log("api data", products);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto md: -mt-52">
      {products
        .slice(0, 4)
        .map(({ id, title, description, category, image, price, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
      <img
        src="https://images.unsplash.com/photo-1643560237570-3a53c6b9b8e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        alt="banner image"
        className="md:col-span-full"
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, description, category, image, price, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
              rating={rating}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, description, category, image, price, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
