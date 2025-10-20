import ShopZoneLogo from "../../assets/shop-zone-banner.avif";
import { pulseKeyframes, pulseStyle } from "../../constants/pulseStyles";

function Loader() {
  return (
    <>
      <style>{pulseKeyframes}</style>
      <section
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <article className="text-center">
          <figure style={{ maxWidth: "220px" }}>
            <img
              className="img-fluid"
              src={ShopZoneLogo}
              alt="Logo de Dragon Ball"
              loading="lazy"
              width="760"
              height="760"
              style={pulseStyle}
            />
          </figure>
          <p>Cargando...</p>
        </article>
      </section>
    </>
  );
}

export default Loader;
