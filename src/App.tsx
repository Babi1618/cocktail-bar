import React from "react";
import "./App.css";
import { About } from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CocktailsPage } from "./pages/CocktailsPage";
import { ErrorPage } from "./pages/ErrorPage";
import SingleDrinkPage from "./pages/SingleDrinkPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CocktailsPage />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:id" element={<SingleDrinkPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
