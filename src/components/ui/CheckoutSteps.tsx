import React from "react";
import { steps } from "../../data/checkoutSteps";

function CheckoutSteps() {
  return (
    <ul className="list-unstyled d-flex gap-3 justify-content-center mb-4">
      {steps.map(({ icon: Icon, text }) => (
        <li key={text} className="text-center">
          <Icon size={32} className="text-primary mb-2" />
          <p className="small text-muted mb-0">{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default CheckoutSteps;
