import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import NavigationBar from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import ProgressBar from "./components/ui/ProgressBar";

function App() {
  return (
    <Router>
      <CartProvider>
        <ProgressBar />
        <div className="d-flex flex-column min-vh-100">
          <NavigationBar />
          <main className="flex-grow-1 bg-light">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <ScrollToTop />
    </Router>
  );
}

export default App;
