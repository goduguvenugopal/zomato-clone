import React, { useContext, useState } from "react";
import "../App.css";
import SearchSection from "./SearchSection";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { photoContext, profileContext, tokenContext } from "./WebPages";
// import '../index.css'

const Navbar = () => {
  const [token, setToken] = useContext(tokenContext);
  const [image, setImage] = useContext(photoContext);
  const [text, setText] = useContext(profileContext)


  return (
    <div className="header  pt-2">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a href="">
            <img
              src="image/logo.png"
              className="rounded logo-img"
              alt="zomato"
            />
          </a>
          <a className=" navbar-brand text-white fs-3 fw-bold" href="">
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
            <div className="navbar-nav mt-2 m-auto">
              <h5 className="">
                <Link
                  to="/"
                  className="nav-link active text-white home-text "
                  aria-current="page"
                >
                  Home
                </Link>
              </h5>
              <h5 className="home-text text-white">
                <Link className="home-text nav-link text-white" to="/cart1">
                  Cart
                </Link>
              </h5>

              {!token ? <h5 onClick={() => setToken(null)}
                className=" text-white nav-link home-text">
                Log out
              </h5> : <h5
                className=" text-white home-text">
                <Link className="home-text nav-link text-white" to="/login">
                  Log in
                </Link>
              </h5>}
              <h5
                className=" text-white home-text">
                <Link className="home-text nav-link text-white" to="/login">
                  Log in
                </Link>
              </h5>

              <h5 style={{ textTransform: 'capitalize' }} className="home-text text-white">
                <Link style={{ textTransform: 'capitalize' }} className="home-text nav-link text-white" to="/profile">
                  <img src={image} className="logo-img1" alt="zomato" />
                  {text.name}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </nav>

      <SearchSection />
      <Footer />
    </div>
  );
};

export default Navbar;
