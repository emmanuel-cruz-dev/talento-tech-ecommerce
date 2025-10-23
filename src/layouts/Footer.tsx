import { Container } from "react-bootstrap";
import ECLogo from "../assets/e-logo.avif";

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
            className="text-white footer__developer-link"
            aria-label="Emmanuel Cruz"
            title="Emmanuel Cruz Portfolio"
          >
            <img
              src={ECLogo}
              alt="Emmanuel Cruz Logo"
              style={{ width: "1.5rem", height: "auto", objectFit: "cover" }}
              width="320"
              height="320"
            />
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
