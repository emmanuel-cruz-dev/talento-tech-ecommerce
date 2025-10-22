import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useCart } from "./useCart";

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
