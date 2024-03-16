import React from "react";
import Navbar from "./assets/Navbar";
import LogIn from "./assets/LogIn";
import Orders from "./assets/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
        <Route index element={  <Navbar />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
