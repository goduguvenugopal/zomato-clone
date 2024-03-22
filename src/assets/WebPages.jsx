import React, { createContext, useState } from "react";
import App from "../App";

export const cart1Context = createContext();
export const profileContext = createContext();
export const photoContext = createContext();

const WebPages = () => {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState( '/image/pro-image.png');
  const [text, setText] = useState({ name:'venugopal', phone:'9059746913', address:'9-585 pagidyala , kurnool , andhra pradesh' });
  return (
    <div>
      <cart1Context.Provider value={[data, setData]}>
        <profileContext.Provider value={[text, setText]}>
          <photoContext.Provider value={[photo, setPhoto]}>
            <App />
          </photoContext.Provider>
        </profileContext.Provider>
      </cart1Context.Provider>
    </div>
  );
};

export default WebPages;
