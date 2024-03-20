import React from "react";
import Navbar from "./assets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart1 from "./assets/Cart1";
 

const App = () => {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/cart1" element={<Cart1 />} />
          
        </Routes>
        
      </BrowserRouter>
     
    </>
  );
};

export default App;
