import React, { createContext, useState } from "react";
import "../App.css";
import SearchSection from "./SearchSection";
import { Link } from "react-router-dom";
import Footer from "./Footer";










export const cartContext = createContext();
const Navbar = () => {
  const [check, setCheck] = useState(true);
  const [order, setOrder] = useState(false);
  const checkFunc = () => {
    setCheck(!check);
  };

  const orderFunc = () => {
    setOrder(!order);
  };
  return (
    <div className="header  pt-2">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a href="" > <img src="image/logo.png" className="rounded logo-img" alt="zomato" /></a>
          <a className="navbar-brand text-white fs-3 fw-bold" href="">
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
              <h5 onClick={orderFunc} className="">
                <Link
                  to="/"
                  className="nav-link active text-white home-text "
                  aria-current="page"
                >
                  Home
                </Link>
              </h5>
              <h5
                onClick={orderFunc}
                style={{ cursor: "pointer" }}
                className="home-text nav-link text-white"
              >
                Cart
              </h5>

              <h5
                className="nav-link text-white home-text"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
              >
                Log in
              </h5>

              {/* login and signup modal  */}

              <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalToggleLabel">
                        Login
                      </h3>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="pt-4 modal-body">
                      <div className="form-floating mb-4">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Phone Number</label>
                      </div>

                      <button
                        style={{ height: "45px" }}
                        className="btn btn-danger w-100"
                      >
                        Send One Time Password
                      </button>
                      <div className="py-3 text-center ">
                        <h5 className="mb-3">or</h5>
                        <div
                          className="border d-flex justify-content-center rounded-2  w-100 align-items-center"
                          style={{ height: "45px", cursor: "pointer" }}
                        >
                          <span class="material-symbols-outlined text-danger ">
                            mail
                          </span>
                          <h6 className="mt-2 " style={{ marginLeft: "10px" }}>
                            Continue with Email
                          </h6>
                        </div>
                        <div
                          style={{ height: "45px", cursor: "pointer" }}
                          className="mt-3 border d-flex justify-content-center rounded-2  w-100 align-items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-google text-primary "
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                          </svg>
                          <h6 className="mt-2" style={{ marginLeft: "10px" }}>
                            Sign in with Google
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        className="border-0 bg-white fs-6"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        New to Zomato?
                        <span className="text-danger"> Create account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalToggleLabel2">
                        Sign up
                      </h3>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="form-floating mb-4 mt-2">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Full Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email</label>
                      </div>

                      <input
                        value={check}
                        onClick={checkFunc}
                        style={{ marginRight: "5px" }}
                        type="checkbox"
                        className="mb-3"
                      />
                      <span className="" style={{ lineHeight: "1" }}>
                        I agree to Zomato's
                        <span
                          style={{ marginLeft: "5px", marginRight: "2px" }}
                          className="text-danger"
                        >
                          Terms of service . Privacy policy
                        </span>
                        and
                        <span
                          style={{ marginLeft: "2px" }}
                          className="text-danger "
                        >
                          Content Policies
                        </span>
                      </span>
                      <button
                        disabled={check === true}
                        style={{ height: "45px" }}
                        className=" mt-3 btn btn-primary w-100"
                      >
                        Create account
                      </button>
                      <div className="py-3 text-center ">
                        <h5 className="mb-3">or</h5>

                        <div
                          style={{ height: "45px", cursor: "pointer" }}
                          className="mt-3 border d-flex justify-content-center rounded-2  w-100 align-items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-google text-primary "
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                          </svg>
                          <h6 className="mt-2" style={{ marginLeft: "10px" }}>
                            Sign in with Google
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="border-0 bg-white"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        Already have an account?
                        <span className="text-danger"> Log in</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <cartContext.Provider value={order}>
        <SearchSection />
      </cartContext.Provider>
      <Footer />
    </div>
  );
};

export default Navbar;
