import React from "react";
import Navbar from "./assets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route index element={<Navbar />} />
        </Routes>
        
      </BrowserRouter>
     
    </>
  );
};

export default App;
