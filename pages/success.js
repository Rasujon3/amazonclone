import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Header from "../components/Header";

const success = () => {
  return (
    <div>
      <Header />
      <main className="bg-green-100 h-screen">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 text-green-500">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-3xl">
              Thank you, Your order has been confirmed
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est,
            ex provident laboriosam ab dicta consequuntur delectus expedita
            ducimus blanditiis.
          </p>
          <button className="button mt-8">Go to My Order</button>
        </div>
      </main>
    </div>
  );
};

export default success;
