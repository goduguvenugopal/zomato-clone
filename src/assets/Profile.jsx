import React, { useState, useContext } from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { photoContext, profileContext } from "./WebPages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Your Profile Has Been Updated SuccessFully ");

//  form function
const Profile = () => {
  const [image, setImage] = useContext(photoContext);
  const [text, setText] = useContext(profileContext);

  const [name, setName] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [address, setAddress] = useState("");

  const formFunc = (e) => {
    e.preventDefault();
    setText({ name, phone, address });
    setName(" ");
    setPhone(" ");
    setAddress(" ");
    notify();
  };

  // preview image function
  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ToastContainer />
      <nav className="navbar  shadow navbar-expand-lg navbar-light bg-light fixed-top">
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
              <h5
                style={{ textTransform: "capitalize" }}
                className="text-dark nav-link"
              >
                <img src={image} className="logo-img1" alt="zomato" />
                {text.name}
              </h5>
            </div>
          </div>
        </div>
      </nav>

      {/* profile section  */}
      <div className="profile-section">
        <div className="mt-4  d-flex align-items-center justify-content-between  container profile-card">
          <div className="image-card d-flex flex-wrap justify-content-between align-items-center">
            <img src={image} className="profi1-img" />
            <h5
              style={{ textTransform: "capitalize" }}
              className="profi1-name text-white"
            >
              {text.name}
            </h5>
          </div>

          <button
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn fw-bold btn-danger d-flex align-items-center"
          >
            <span className="material-symbols-outlined edit-icon">
              edit_square
            </span>
            Edit
          </button>
        </div> 
        <div className="online-card  container">
          <div className="online-list"> 
          <h5   className="timer-txt">ONLINE ORDERING</h5>
          <h6 style={{cursor:'pointer'}} className="">Order History</h6>
          <h6 style={{cursor:'pointer'}} className="">My Addresses</h6>
          <h6  style={{cursor:'pointer'}}className="">Favorite Orders</h6>
          </div>
          <div className="text-start">
            <h4 className="">My Addresses</h4>
            <hr/>
            <h5 style={{textTransform:'capitalize'}}  className="mt-4">Name : <b className="timer-txt"> {text.name}</b></h5>
            <h5 className="">Phone :<b className="timer-txt"> {text.phone}</b> </h5>
            <h5 style={{textTransform:'capitalize'}} className="">Address : <b className="timer-txt"> {text.address}</b> </h5>
          </div>
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
                <span className="material-symbols-outlined edit-icon1">
                  edit_square
                </span>
                Edit Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="text-center modal-card">
                <img src={image} className="profi2-img" />
                <label htmlFor="file" className="camera">
                  <span
                    style={{ cursor: "pointer" }}
                    className="text-white material-symbols-outlined"
                  >
                    photo_camera
                  </span>
                </label>
                <input
                  onChange={uploadImage}
                  className="d-none"
                  type="file"
                  id="file"
                  accept="image/*"
                />
              </div>
              <hr />
              <form className="" onSubmit={formFunc}>
                <div className="form-floating mb-3">
                  <input
                    required
                    style={{ textTransform: "capitalize" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Enter Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Enter Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    style={{ textTransform: "capitalize" }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Enter Address</label>
                </div>
                <h6 className="text-dar timer-txt">
                  <b className="text-dark">Note :</b> This address will be used
                  for delivary{" "}
                </h6>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
