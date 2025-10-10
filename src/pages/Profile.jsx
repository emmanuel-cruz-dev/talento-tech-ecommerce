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
              className="fw-semibold "
            >
              Ir al inicio
            </Button>
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
