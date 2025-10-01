import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleRemoveProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Carrito</Card.Header>
            <Card.Body>
              <Card.Title>Productos en el carrito</Card.Title>
              <Card.Text>
                <ul>
                  {products.map((product) => (
                    <li key={product.id}>
                      {product.name} - {product.price}
                      <Button
                        variant="outline-danger"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Eliminar
                      </Button>
                    </li>
                  ))}
                </ul>
              </Card.Text>
              <Card.Footer>
                <Button variant="primary" onClick={handleCheckout}>
                  Finalizar pedido
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
