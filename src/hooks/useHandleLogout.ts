import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export const useHandleLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { handleClearCart } = useCart();

  const handleLogout = () => {
    handleClearCart();
    logout();
    navigate("/");
  };

  return handleLogout;
};
