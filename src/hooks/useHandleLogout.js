import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const useHandleLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return handleLogout;
};
