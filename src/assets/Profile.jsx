import React, { useState,useContext } from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { photoContext } from "./WebPages";

const Profile = () => {
    const [image, setImage] = useContext(photoContext);
    const uploadImage = (e) =>{
  const file = e.target.files[0]
  if(file){
    const reader = new FileReader()
    reader.onloadend = ()=>{
        setImage(reader.result)
    }
    reader.readAsDataURL(file)
  }
    }

  return (
    <>
      <nav className="navbar shadow navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a href="">
            <img
              src="image/logo.png"
              className="rounded logo-img"
              alt="zomato"
            />
          </a>
          <a className="navbar-brand  fs-3 fw-bold" href="">
            Zomato
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-2 m-auto">
              <h5 className="">
                <Link
                  to="/"
                  className="nav-link active  home-text "
                  aria-current="page"
                >
                  Home
                </Link>
              </h5>
              <h5 className="home-text text-white">
                <Link className="home-text nav-link text-dark" to="/cart1">
                  Cart
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </nav>

      {/* profile section  */}
      <div className="mt-5 pt-2 px-2">
        <div className="mt-4  d-flex align-items-center justify-content-between  container profile-card">
          <div style={{width:'210px'}} className=" d-flex justify-content-between align-items-center">
            <img src={image} className="profi1-img" />
            <h5 className="profi1-name">Venugopal</h5>
          </div>

          <button
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn btn-danger d-flex align-items-center"
          >
            <span class="material-symbols-outlined">edit_square</span>Edit
          </button>
        </div>
      </div>

      {/* Edit modal  */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title d-flex align-items-center  "
                id="staticBackdropLabel"
              >
                <span class="material-symbols-outlined ">edit_square</span> Edit
                Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img src={image} className="profi2-img" />
                <label htmlFor="file" className="camera">
                  <span class="material-symbols-outlined">photo_camera</span>
                </label>
                <input
                onChange={uploadImage}
                  className="d-none"
                  type="file"
                  id="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Profile;
