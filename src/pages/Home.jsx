import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  window.addEventListener("load", handleLoad);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Tech E-Commerce</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum, nulla sit amet elementum molestie, nisl risus tincidunt
            nisl, sit amet ullamcorper risus nisl id nisl. Sed elementum, nulla
            sit amet elementum molestie, nisl risus tincidunt nisl, sit amet
            ullamcorper risus nisl id nisl. Sed elementum, nulla sit amet
            elementum molestie, nisl risus tincidunt nisl, sit amet ullamcorper
            risus nisl id nisl. Sed elementum, nulla sit amet elementum
            molestie, nisl risus tincidunt nisl, sit amet ullamcorper risus nisl
            id nisl. Sed elementum, nulla sit amet elementum molestie, nisl
            risus tincidunt nisl, sit amet ullamcorper risus nisl id nisl.
          </p>
        </div>
      </div>
      {isLoading ? (
        <div className="row">
          <div className="col-12 text-center">
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/products" className="btn btn-primary">
              View Products
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
