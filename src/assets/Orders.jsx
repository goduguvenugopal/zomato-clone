import React from "react";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <img src="image/logo.png" className="logo-img rounded" alt="zomato" />
          <a className="navbar-brand text-dark fs-3 fw-bold" href="#">
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
              <Link
                to="/"
                className="home-text  nav-link active text-dark fs-5"
                aria-current="page"
              >
                Home
              </Link>
              <Link to="/orders" className="home-text  nav-link text-dark fs-5">
                Orders
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Orders;
