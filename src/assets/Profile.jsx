import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { photoContext, profileContext, tokenContext } from "./WebPages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Your Profile Has Been Updated SuccessFully ");
const notify1 = () => toast("Your Profile Has not Been Updated ");


//  form function
const Profile = () => {
  const [token, setToken] = useContext(tokenContext);
  const [image, setImage] = useContext(photoContext);
  const [text, setText] = useContext(profileContext);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zoomin, setZoomin] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  
  
  
  const toggleFunc1 = () => {
    setToggle1(true);
    setToggle2(false);
    setToggle3(false);
  };
  const toggleFunc2 = () => {
    setToggle1(false);
    setToggle2(true);
    setToggle3(false);
  };
  const toggleFunc3 = () => {
    setToggle1(false);
    setToggle2(false);
    setToggle3(true);
  };

  const formData = { name, phone, address }

  const formFunc = async (e) => {
    e.preventDefault();

    try {
      setUpdate(true)
      const response = await fetch(
        "https://zomato-server-z2lm.onrender.com/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        notify();
        setName("");
        setPhone("");
        setAddress("");
        setText({ name, phone, address });
        setUpdate(false)
        var data = { name: name, phone: phone, address: address };
        localStorage.setItem("data", JSON.stringify(data));
      } else {
        notify1();
        setUpdate(false)
        console.error(`HTTP error! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };



  // preview image function
  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("image", reader.result)
        setImage(reader.result);
       
        
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate()

  useEffect(() => {

    if (!token) {
      return navigate("/login")
    }
  }, [])

  
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
            <img src={image} style={{ cursor: "pointer" }} onClick={() => setZoomin(true)} className="profi1-img" />
            <h5
              style={{ textTransform: "capitalize" }}
              className="profi1-name text-white"
            >
              {text.name}
            </h5>
          </div>
          {zoomin ? <div onClick={() => setZoomin(false)} className="zoomcard">
            <img src={image} className="zoom-img" />
          </div> : ""}
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
            <h5 className="timer-txt">ONLINE ORDERING</h5>
            <h6
              style={{ cursor: "pointer" }}
              className=""
              onClick={() => toggleFunc3()}
            >
              Order History
            </h6>
            <h6
              style={{ cursor: "pointer" }}
              className=""
              onClick={() => toggleFunc2()}
            >
              My Addresses
            </h6>
            <h6
              style={{ cursor: "pointer" }}
              className=""
              onClick={() => toggleFunc1()}
            >
              Favorite Orders
            </h6>
          </div>
          {toggle2 && (
            <div className="text-start">
              <h4 className="">My Addresses</h4>
              <hr />
              <h5
                style={{ textTransform: "capitalize", fontSize: "18px" }}
                className="mt-4"
              >
                Name : <b className="timer-txt"> {text.name}</b>
              </h5>
              <h5 style={{ fontSize: "18px" }} className="">
                Phone :<b className="timer-txt"> {text.phone}</b>{" "}
              </h5>
              <h5
                style={{ textTransform: "capitalize", fontSize: "18px" }}
                className=""
              >
                Address : <b className="timer-txt"> {text.address}</b>{" "}
              </h5>
            </div>
          )}
          {toggle3 && (
            <div className="text-start">
              <h4 className="">Order History</h4>
              <hr />

              <div className="text-center">
                <span
                  style={{ fontSize: "45px" }}
                  className="material-symbols-outlined"
                >
                  shopping_cart
                </span>
                <br />
                empty
              </div>
            </div>
          )}
          {toggle1 && (
            <div className="text-start">
              <h4 className="">Favourite Orders</h4>
              <hr />

              <div className="text-center">
                <span
                  style={{ fontSize: "45px" }}
                  className="material-symbols-outlined"
                >
                  favorite
                </span>
                <br />
                empty
              </div>
            </div>
          )}
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
                    name="name"
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
                    name="phone"
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
                    name="address"
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
                  {update ? <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" style={{ marginRight: "5px" }} role="status" aria-hidden="true"></span>
                    Updating...
                  </button> : <button type="submit" className="btn btn-primary">
                    Update
                  </button>}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
