import React from "react";
import "../App.css";
import SearchSection from "./SearchSection";

const Navbar = () => {
  return (
    <div className="header  pt-2">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <img src="image/logo.png" className="logo-img" alt="zomato" />
          <a className="navbar-brand text-white fs-3" href="#">
            Zomato
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <a
                className="nav-link active text-white fs-5"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-white fs-5" href="#">
                Restuarant
              </a>
              <a className="nav-link  text-white fs-5" href="#">
                Log In
              </a>
              {/* <a className="nav-link  text-white fs-5" href="#">
                More
              </a> */}
            </div>
          </div>
        </div>
      </nav>
      <SearchSection />
    </div>
  );
};

export default Navbar;
