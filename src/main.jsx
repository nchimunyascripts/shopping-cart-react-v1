import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Products } from "./pages/Products.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Success } from "./pages/Success.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:category?",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  </StrictMode>
);
