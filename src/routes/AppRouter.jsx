import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "lucide-react";

const Home = lazy(() => import("../pages/Home.jsx"));
const Product = lazy(() => import("../pages/Product.jsx"));
const Cart = lazy(() => import("../pages/Cart.jsx"));
const Products = lazy(() => import("../pages/Products.jsx"));
const Profile = lazy(() => import("../pages/Profile.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));
const PrivateRoute = lazy(() => import("./PrivateRoute.jsx"));

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default AppRouter;
