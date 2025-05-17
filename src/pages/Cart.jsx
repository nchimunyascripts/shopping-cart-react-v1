import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export const Cart = () => {
  const { cart, invoice, removeCart, setInvoice, setCart } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const placeOrder = () => {
    setCart([]);
    setInvoice({ count: 0, subTotal: 0 });
    navigate("/success");
  };
  return (
    <div>
      {cart.length > 0 ? (
        <div className="w-[60%] m-auto">
          {cart.map((prod) => (
            <div
              key={prod.id}
              className="shadow-md p-4 flex items-center gap-4 justify-between rounded-2xl"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-[120px] h-[120px] object-contain"
              />
              <div className="flex flex-col gap-2 2-[450px]">
                <p className="font-bold">{prod.name}</p>
                <p className="text-xs text-gray-500">{prod.smallDescription}</p>
                <p className="text-xs">Qty: {prod.quantity}</p>
              </div>
              <p className="font-semibold">KMW {prod.price}</p>
              <IoIosRemoveCircleOutline
                onClick={() => removeCart(prod)}
                className="text-red-500 text-2xl cursor-pointer"
              />
            </div>
          ))}
          <div className="flex flex-col items-end gap-3 py-4">
            <p className="font-bold">
              Subtotal({invoice.count} {invoice.count > 1 ? "items" : "item"}) :
              KMW{invoice.subTotal.toFixed(2)}
            </p>
            <button
              onClick={placeOrder}
              className="bg-blue-600 text-sm text-white p-2 cursor-pointer w-[200px] rounded-md"
            >
              Order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center text-2xl mt-30 justify-center p-4 gap-2">
          <span>Empty</span>
          <Link to={"/"} className={"text-blue-600"}>
            Add Products
          </Link>
        </div>
      )}
    </div>
  );
};
