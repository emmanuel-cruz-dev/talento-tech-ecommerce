import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-3">
      <Container>
        <p className="mb-0 small">
          © 2025 ShopZone · Desarrollado por{" "}
          <a
            href="https://emmanuel-cruz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none"
            aria-label="Emmanuel Cruz"
            title="Emmanuel Cruz Portfolio"
          >
            Emmanuel
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
