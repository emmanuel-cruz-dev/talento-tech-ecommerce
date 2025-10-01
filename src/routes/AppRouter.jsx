import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Product from "../pages/Product.jsx";
import NotFound from "../pages/NotFound.jsx";
import Cart from "../pages/Cart.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
