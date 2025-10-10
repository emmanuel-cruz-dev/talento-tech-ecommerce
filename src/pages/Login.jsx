import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { UserLock } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      login(userName);
      navigate("/");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Card
        className="shadow-lg border-0 text-center p-4"
        style={{
          maxWidth: "420px",
          width: "100%",
          background: "linear-gradient(145deg, #ffffff, #f3f4f7)",
        }}
      >
        <Card.Body>
          <header className="mb-4">
            <UserLock size={64} className="text-primary mb-3" />
            <h2 className="fw-bold mb-2">Iniciar sesión</h2>
            <p className="text-muted mb-4">Accede a tu cuenta de usuario</p>
          </header>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-semibold" htmlFor="userName">
                Nombre de usuario
              </Form.Label>
              <Form.Control
                id="userName"
                type="text"
                placeholder="Ingresa tu nombre*"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="py-2"
                autoComplete="off"
                style={{
                  border: "1px solid #ced4da",
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 fw-semibold py-2"
            >
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
