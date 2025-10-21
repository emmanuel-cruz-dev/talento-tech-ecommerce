import { Modal, Button } from "react-bootstrap";
import { CheckCircle, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import CheckoutSteps from "../ui/CheckoutSteps";
import CheckoutSummary from "../ui/CheckoutSummary";
import { CheckoutModalProps } from "../../types/common.types";

function CheckoutModal({
  show,
  onHide,
  orderTotal,
  itemsCount,
}: CheckoutModalProps) {
  const { user } = useAuth();

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body
        className="text-center position-relative"
        style={{ paddingBlock: "1.5rem" }}
      >
        <button
          onClick={onHide}
          className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle border-0 d-flex align-items-center justify-content-center"
          style={{ width: "2.5rem", height: "2.5rem", padding: 0 }}
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        <figure className="mb-4">
          <CheckCircle size={64} className="text-success" />
        </figure>

        <h2 className="mb-2">¡Compra realizada con éxito!</h2>

        <p className="text-muted mb-4">
          {user && (
            <>
              Gracias por tu compra{" "}
              <span style={{ textTransform: "capitalize" }}>{user}</span>.{" "}
            </>
          )}
          Tu pedido ha sido procesado correctamente.
        </p>

        <CheckoutSummary orderTotal={orderTotal} itemsCount={itemsCount} />
        <CheckoutSteps />
        <Button
          variant="primary"
          onClick={onHide}
          style={{ padding: "0.5rem 3rem" }}
        >
          Entendido
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default CheckoutModal;
