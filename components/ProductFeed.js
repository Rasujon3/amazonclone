import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  //   console.log("api data", products);
  return (
    <div>
      {products.map(({ id, title, description, category, image, price }) => (
        <Product
          key={id}
          id={id}
          title={title}
          description={description}
          category={category}
          image={image}
          price={price}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
