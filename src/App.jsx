import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import NavigationBar from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
