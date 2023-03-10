import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { BurgerIcon } from "../icons/BurgerIcon";

import my_brand from "../assets/my_brand.png";

export const Navbar = () => {
  const { isMobile } = useAppContext() as { isMobile: boolean };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <div className="nav-title">
            <div className="nav-image">
              <img src={my_brand} alt="my_brand" />
            </div>
            <div>
              My Cocktail Bar! <span>Cheers🥂!</span>
            </div>
          </div>
        </Link>
        <ul className="nav-links">
          {isMobile ? (
            <li
              className="nav-container"
              onClick={() => {
                console.log("open burger");
              }}
            >
              <BurgerIcon />
            </li>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </>
          )}

          <li>
            {/* <Link to="/cart" className="nav-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
              </svg>
              <div className="amount-container">
                <p className="total-amount">0</p>
              </div>
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
