import { Outlet, useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useContext, useEffect } from "react";
import { ProductContext } from "./context/ProductContext";

function App() {
  const { filterProducts } = useContext(ProductContext);
  const { category } = useParams();
  useEffect(() => {
    filterProducts(category);
  }, [category]);
  return (
    <div className="min-h-screen h-auto mt-20">
      <Navbar />
      <div className="m-auto p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
