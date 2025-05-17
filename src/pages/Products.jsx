import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const Products = () => {
  const { products, addCart } = useContext(ProductContext);
  return (
    <div className="flex justify-center flex-wrap gap-6 my-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[200px] border border-gray-900 rounded-sm p-4 hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.namer}
            className="w-[200px] h-[150px] object-contain transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
          />
          <div className="flex flex-col gap-2 my-4">
            <p className="text-center font-bold">{product.name}</p>
            <p className="text-center">{product.price}</p>
            <p className="text-xs text-gray-500">{product.smallDescription}</p>
          </div>
          <button
            className="w-full rounded-sm bg-blue-600 text-center text-xs p-2"
            onClick={() => addCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
