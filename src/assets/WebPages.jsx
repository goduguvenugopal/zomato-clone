import React, { createContext, useState } from "react";
import App from "../App";

export const cart1Context = createContext();
export const profileContext = createContext();

const WebPages = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState({
    name: "",
    phone: "",
    address: "",
  });
  return (
    <div>
      <cart1Context.Provider value={[data, setData]}>
        <profileContext.Provider value={[text, setText]}>
          <App />
        </profileContext.Provider>
      </cart1Context.Provider>
    </div>
  );
};

export default WebPages;
