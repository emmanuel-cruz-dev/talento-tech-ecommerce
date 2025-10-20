import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { CircleUserRound } from "lucide-react";
import { useHandleLogout } from "../hooks/useHandleLogout";

function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleLogout = useHandleLogout();

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Card
        className="shadow-lg border-0 text-center p-4"
        style={{
          maxWidth: "440px",
          width: "100%",
        }}
      >
        <Card.Body>
          <header className="mb-3">
            <CircleUserRound size={64} className="text-primary mb-3" />
            <h2
              className="fw-bold mb-2"
              style={{ textTransform: "capitalize" }}
            >
              Hola, {user}!
            </h2>
            <p className="text-muted">Bienvenido a tu perfil personal</p>
          </header>

          <hr className="my-4 w-50" style={{ margin: "auto" }} />

          <footer className="d-flex flex-column gap-3">
            <Button
              variant="outline-primary"
              onClick={() => navigate("/")}
              className="fw-semibold"
            >
              Ir al inicio
            </Button>
            <div className="d-flex gap-3 w-100">
              <Button
                variant="outline-primary w-100"
                onClick={() => navigate("/products")}
                className="fw-semibold"
              >
                Ir a productos
              </Button>
              <Button
                variant="outline-primary w-100"
                onClick={() => navigate("/cart")}
                className="fw-semibold"
              >
                Ver carrito
              </Button>
            </div>
            <Button
              variant="danger"
              onClick={handleLogout}
              className="fw-semibold"
            >
              Cerrar sesión
            </Button>
          </footer>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
