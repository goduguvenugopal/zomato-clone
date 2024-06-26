import React, { createContext, useEffect, useState } from "react";
import App from "../App";
import { json } from "react-router-dom";

export const cart1Context = createContext();
export const profileContext = createContext();
export const photoContext = createContext();
export const tokenContext = createContext();


const WebPages = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState('/image/pro-image.png');
  const [text, setText] = useState({ name: 'Profile', phone: '9059746913', address: 'Pagidyala, Kurnool, Andhrapradesh.' });

  useEffect(() => {

    const data = localStorage.getItem("data");
    if (data) {
      setText(JSON.parse(data));
    }

    const token = localStorage.getItem("token")
    if (token) {
      setToken(JSON.parse(token))
    }


    const items = localStorage.getItem("cart")
    if(items){
      setData(JSON.parse(items))
    }


    const imageData = localStorage.getItem("image");
    if (imageData) {
      setPhoto(imageData);  
    }

  }, []);



  return (
    <div>
      <tokenContext.Provider value={[token, setToken]}>
        <cart1Context.Provider value={[data, setData]}>
          <profileContext.Provider value={[text, setText]}>
            <photoContext.Provider value={[photo, setPhoto]}>
              <App />
            </photoContext.Provider>
          </profileContext.Provider>
        </cart1Context.Provider>
      </tokenContext.Provider>
    </div>
  );
};

export default WebPages;
