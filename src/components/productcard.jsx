
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div className="border rounded-lg p-4 shadow-lg max-w-sm text-center">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{productName}</h2>
      <p className="text-gray-600">Price: {productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
