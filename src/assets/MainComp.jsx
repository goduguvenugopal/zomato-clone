import React from "react";
import "../App.css";

const MainComp = () => {
  return (
    <>
      <div className="container pt-4">
        <h3 className=" ">Collections</h3>
        <h5 className="explore">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          India, based on trends
        </h5>
      </div>
      <div className="pb-5 pt-3 non-map-card">
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/11.jpeg" className="card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Biryani</h5>
            <p className="card-text">Andhra, Biryani</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/10.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Biryani</h5>
            <p className="card-text">Telangana,biryani</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/9.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Fried Chicken</h5>
            <p className="card-text">North indian</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/8.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Fried Rice</h5>
            <p className="card-text">Andhra,Rice</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/13.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Rice Dal</h5>
            <p className="card-text">South Indian, Food</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/15.jpg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Rice Meals</h5>
            <p className="card-text">South Indian, Food</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/16.jpg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Dosa</h5>
            <p className="card-text">Andhra, Dosa</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/17.jpg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Idly</h5>
            <p className="card-text">South,Indian Food</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/4.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Rice</h5>
            <p className="card-text">Andhra,Food</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/3.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Burger</h5>
            <p className="card-text">Burger,Fast Food</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/2.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Fish Fry</h5>
            <p className="card-text">Fast Food</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
        <div className="card1" style={{ width: "18rem" }}>
          <img src="image/1.jpeg" className=" card-img" alt="..." />
          <div className="card-b">
            <h5 className="card-title">Pista House Bakery</h5>
            <p className="card-text">Bakery,Desserts</p>
            <a className="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComp;
