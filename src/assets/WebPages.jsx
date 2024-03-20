import React, { createContext, useState } from "react";
import App from "../App";

export const cart1Context = createContext();

const WebPages = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <cart1Context.Provider value={[data, setData]}>
        <App />
      </cart1Context.Provider>
    </div>
  );
};

export default WebPages;
