import React from "react";
import { MdDoneOutline } from "react-icons/md";

export const Success = () => {
  return (
    <div className="flex items-center justify-center font-bold gap-2 text-2xl mt-30">
      <MdDoneOutline className="text-green-600" />
      Your order was Successfully placed
    </div>
  );
};
