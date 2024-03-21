import React from "react";
import Navbar from "./assets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart1 from "./assets/Cart1";
import Profile from "./assets/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/cart1" element={<Cart1 />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
