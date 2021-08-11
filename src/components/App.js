import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/index";
import Potd from "./Potd";
import Explanation from "./Explanation";
import Title from "./Title";
import Artist from "./Artist";

function App() {
  const [apiData, setApiData] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
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
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      {error && <h2>{error}</h2>}
      <div className="photo-container">
        <Potd apiData={apiData} />
        <div>
          <Title apiData={apiData} />
          <Artist apiData={apiData} />
        </div>
      </div>
      <div>
        <Explanation apiData={apiData} />
      </div>
    </div>
  );
}

export default App;
