// import { FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { products_categories } from "../data/products";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
export const Navbar = () => {
  const { invoice } = useContext(ProductContext);
  const isActive = (element) => {
    return element?.isActive ? "text-blue-500 border p-2 rounded-sm" : "";
  };
  return (
    <nav className="w-[90%] h-[70px] mb-5 shadow-lg rounded-2xl flex justify-between items-center px-6 fixed top-[5%] left-[5%] z-10 bg-gray-600/95">
      <div className="flex flex-col justify-center items-center">
        <NavLink to={"/"} className={"text-gray-300"}>
          Gizmo Shopping
        </NavLink>
      </div>
      <ul className="flex items-center gap-20 font-bold">
        {products_categories.map((category) => (
          <li key={category.value}>
            <NavLink to={`/${category.value}`} className={isActive}>
              {category.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link className="relative" to={"/cart"}>
        <FaShoppingCart className="text-2xl" />
        {invoice.count > 0 && (
          <div className="absolute -top-2 -right-2 w-4 h-4 text-xs bg-blue-500 text-white flex justify-center items-center rounded-br-full rounded-tl-full font-bold">
            {invoice.count}
          </div>
        )}
      </Link>
    </nav>
  );
};
