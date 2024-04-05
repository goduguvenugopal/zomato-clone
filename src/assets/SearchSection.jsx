import React, { useState, useRef } from "react";
import axios from "axios";
import MainComp from "./MainComp";
import MapComp from "./MapComp";
import { states } from "./data";
import "../App.css";

const SearchSection = () => {
  const [state, setStaet] = useState(states);
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const recognition = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [retry, setRetry] = useState(false);

  const accessKey = "80961f9e5f7483595ad990f02d1e6425";
  const id = "de66da03";
  const url = `https://api.edamam.com/search?q=${text}&app_id=${id}&app_key=${accessKey}&from=0&to=100&calories=591-722&health=alcohol-free`;

  // data fetch function
  const fetchFunction = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const submitFunc = (e) => {
    e.preventDefault();
    fetchFunction();
  };

  // dropdown function
  const dropDown = (drop) => {
    const selected = state.find((pic) => pic === drop);
    setLocation(selected);
  };

  // speech recognition function
  const startRecognition = () => {
    setRetry(false);
    setTimeout(() => {
      setRetry(true);
    }, 6000);

    setText("");
    setToggle(true);
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in your browser");
      return;
    }

    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.onresult = handleResult;
    recognition.current.start();
  };

  const handleResult = (event) => {
    const transcript = event.results[0][0].transcript;
    setText(transcript);

    setTimeout(() => {
      setToggle(false);
    }, 1500);
  };

  return (
    <>
      {toggle ? (
        <div className="speechtext-card">
          <div>
            {retry ? (
              <button
                onClick={() => startRecognition()}
                className="btn text-white bg-primary"
              >
                retry...
              </button>
            ) : text ? (
              <h4
                style={{ textTransform: "capitalize" }}
                className="text-white"
              >
                {text}
              </h4>
            ) : (
              <div className="text-center">
                 <h5 className="text-white mt-2">Listening...</h5>
                <div class=" spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow   text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow   text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow   text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow   text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow   text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                
              </div>
            )}
          </div>
          <button
            onClick={() => setToggle(false)}
            className="btn bg-white cardbtn-close"
          >
            Close
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="pb-5 text-center pt-5">
        <h1 className="text-white zomato-heading">Zomato</h1>
        <h3 className="text-white">
          Discover the best food & drinks in Hyderabad
        </h3>
        <div className="form-main-div">
          <form className="form " onSubmit={submitFunc}>
            <div className="search-card ">
              <div className=" search-sub-div1">
                <div className="btn-group">
                  <button
                    className="btn bg-white btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul
                    className="dropdown-menu mt-1 p-2"
                    style={{
                      overflow: "scroll",
                      height: "250px",
                      width: "270px",
                    }}
                  >
                    {state.map((item) => (
                      <li
                        onClick={() => dropDown(item)}
                        className="list-states"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <input
                  type="text"
                  placeholder="Location"
                  className="input-box"
                  value={location}
                />

                <span className="material-symbols-outlined">location_on</span>
              </div>

              <div className="search-sub-div2">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Search for Food"
                  className="input-box"
                />
                <div
                  style={{ width: "60px" }}
                  className=" d-flex justify-content-between align-items-center"
                >
                  <span
                    onClick={startRecognition}
                    class="material-symbols-outlined"
                  >
                    mic
                  </span>
                  <button type="submit" className=" sub-bt">
                    <span className="material-symbols-outlined pt-1 search-icon">
                      search
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" bg-comp ">
        {data.length >= 1 ? <MapComp data={data} /> : <MainComp />}
      </div>
    </>
  );
};

export default SearchSection;
