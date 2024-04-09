import React, { createContext, useEffect, useState } from "react";
import App from "../App";

export const cart1Context = createContext();
export const profileContext = createContext();
export const photoContext = createContext();

const WebPages = () => {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState('/image/pro-image.png');
  const [text, setText] = useState({ name: 'Profile', phone: '9059746913', address: 'Pagidyala, Kurnool, Andhrapradesh.' });

  useEffect(() => {

    const data = localStorage.getItem("data");
    if (data) {
      setText(JSON.parse(data));
    }

      const imageData = localStorage.getItem("image");
    if (imageData) {
      setPhoto(imageData); // Set image data directly
    }
    
  }, []);



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
