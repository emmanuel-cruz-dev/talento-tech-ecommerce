import { Button } from "react-bootstrap";
import { getMessageError } from "../../utils/utils";

const ErrorMessage = ({ error, entity, onRetry }) => {
  const message = getMessageError(error, entity);

  if (!message) return null;

  return (
    <article
      className="alert alert-warning"
      role="alert"
      style={{ maxWidth: "460px" }}
    >
      <p className="text-danger">
        <strong>Atención:</strong> {message}
      </p>
      {onRetry && (
        <footer className="mt-3">
          <Button
            className="btn-sm btn-warning"
            onClick={onRetry}
            type="button"
          >
            Reintentar
          </Button>
        </footer>
      )}
    </article>
  );
};

export default ErrorMessage;
