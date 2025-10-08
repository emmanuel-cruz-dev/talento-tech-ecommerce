import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <h1>Bienvenido usuario</h1>
      <Button variant="primary" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </Container>
  );
}

export default Profile;
