import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { BurgerIcon } from "../icons/BurgerIcon";
export const Navbar = () => {
  const { isMobile } = useAppContext() as any;
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects/6574161e31be78f1f4a6171b98f7f002d6fb0130/15-cocktails/final/src/logo.svg"
            alt="my logo"
            className="logo"
          />
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
