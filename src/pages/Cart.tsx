import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import OrderSummary from "../components/ui/cart/OrderSummary";
import EmptyCartCard from "../components/ui/cart/EmptyCartCard";
import CartItem from "../components/ui/cart/CartItem";

function Cart() {
  const { cart, getCartItemsCount, handleClearCart } = useCart();
  const { user } = useAuth();

  return (
    <Container className="py-5">
      <header className="mb-4">
        <h1 className="display-5 fw-bold mb-2">Mi carrito</h1>
        <p className="text-muted">
          {cart.length > 0 && (
            <>
              {user && (
                <span style={{ textTransform: "capitalize" }}>{user}</span>
              )}{" "}
              tienes {getCartItemsCount()}{" "}
              {getCartItemsCount() === 1 ? "producto" : "productos"} en tu
              carrito
            </>
          )}
        </p>
      </header>

      <Row className="g-4" style={{ position: "relative" }}>
        <Col lg={8}>
          {cart.length > 0 ? (
            <Card className="shadow-sm border-0">
              <Card.Body className="p-0">
                {cart.map((product, index) => (
                  <CartItem key={product.id} product={product} index={index} />
                ))}
              </Card.Body>

              <Card.Footer className="bg-white border-top py-4">
                <Button
                  variant="outline-danger d-inline-flex align-items-center gap-2 px-3"
                  size="sm"
                  onClick={handleClearCart}
                >
                  <Trash2 size={16} />
                  Vaciar carrito
                </Button>
              </Card.Footer>
            </Card>
          ) : (
            <EmptyCartCard />
          )}
        </Col>

        <OrderSummary />
      </Row>
    </Container>
  );
}

export default Cart;
