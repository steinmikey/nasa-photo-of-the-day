import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/index";
import Potd from "./Potd";
import Explanation from "./Explanation";
import Title from "./Title";
import Copyright from "./Copyright";
import SearchDate from "./SearchDate";

function App() {
  const [apiData, setApiData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("running...");
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        setApiData(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Sorry, something went wrong!");
      });
  }, []);

  return (
    <div>
      <div className="App">
        {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
        {error && <h2>{error}</h2>}
        {apiData && (
          <div>
            <div className="photo-container">
              <Potd apiData={apiData} />
              <div>
                <Title apiData={apiData} />
                <Copyright apiData={apiData} />
              </div>
            </div>
            <div>
              <Explanation apiData={apiData} />
            </div>
          </div>
        )}
      </div>
      <div>
        <SearchDate />
      </div>
    </div>
  );
}

export default App;
