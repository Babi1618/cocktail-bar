import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { About } from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./sections/Navbar";
import { Home } from "./pages/Home";
import { CocktailsPage } from "./pages/CocktailsPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CocktailsPage />} />
          <Route path="about" element={<About />} />
          {/* <Route path="cocktail/:id" element={<SingleCocktail />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
