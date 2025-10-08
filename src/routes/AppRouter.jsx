import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Product from "../pages/Product.jsx";
import NotFound from "../pages/NotFound.jsx";
import Cart from "../pages/Cart.jsx";
import Products from "../pages/Products.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Profile from "../pages/Profile.jsx";
import Login from "../pages/Login.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
