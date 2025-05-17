import { createContext, useEffect, useState } from "react";
import { products_data } from "../data/products";

export const ProductContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(products_data);
  const [cart, setCart] = useState([]);
  const [invoice, setInvoice] = useState({ count: 0, subTotal: 0 });
  const [message, setMessage] = useState("");

  const addCart = (product) => {
    setMessage(`${product.name} was added.`);
    setCart((oldCart) => {
      let previous = [...oldCart];
      if (previous.length < 1) {
        previous.push({ ...product, quantity: 1 });
      } else {
        const isProduct = previous.find((prod) => prod.id === product.id);
        if (!isProduct) {
          previous.push({ ...product, quantity: 1 });
        } else {
          previous = previous.map((prod) => {
            return prod.id === isProduct.id
              ? { ...isProduct, quantity: isProduct.quantity + 1 }
              : prod;
          });
        }
      }
      return previous;
    });
  };

  const removeCart = (product) => {
    setMessage(`${product.name} was removed.`);
    setCart((oldCart) => {
      let previous = [...oldCart];
      const isProduct = previous.find((prod) => prod.id === product.id);
      if (isProduct) {
        const index = previous.indexOf(isProduct);
        previous.splice(index, 1);
      }
      return previous;
    });
  };
  const filterProducts = (category) => {
    if (category) {
      const filteredProducts = products_data.filter((product) => {
        if (product.category === category) {
          return product;
        }
      });
      setProducts(filteredProducts);
    } else {
      setProducts(products_data);
    }
  };
  const setInvoiceData = () => {
    setInvoice((prev) => {
      let newInvoice = { ...prev, count: 0, subTotal: 0 };
      cart.forEach((prod) => {
        newInvoice.count += prod.quantity;
        newInvoice.subTotal += prod.quantity * prod.price;
      });
      return newInvoice;
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setMessage(""), 1000);
    setInvoiceData();
    return () => clearTimeout(timeout);
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filterProducts,
        addCart,
        invoice,
        cart,
        removeCart,
        setCart,
        setInvoice,
      }}
    >
      {message && (
        <div className="absolute rounded-md shadow-lg left-[50%] -translate-[50%] bg-green-500 text-white min-w-[600px] mt-20 p-2 text-center">
          {message}
        </div>
      )}
      {children}
    </ProductContext.Provider>
  );
};
