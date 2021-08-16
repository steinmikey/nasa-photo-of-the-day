import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/index";
// import styled from "styled-components";

export default function SearchDate() {
  const [apiData, setApiData] = useState(null);

  const [error, setError] = useState(null);
  const [searchDate, setSearchDate] = useState(null);

  useEffect(() => {
    if (!searchDate) {
      return;
    }
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${searchDate}`)
      .then((res) => {
        console.log(res.data);
        setApiData(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError(`Sorry, something went wrong! Make sure to select today's date or earlier`);
        setApiData(null);
      });
  }, [searchDate]);

  const dateHandler = (event) => {
    setError(null);
    setSearchDate(event.target.value);
  };
  const photo = apiData ? apiData.url : null;
  const photoAlt = apiData ? apiData.title : null;
  return (
    <div className="App">
      <input type="date" onChange={dateHandler} />
      {error && <h2>{error}</h2>}
      {searchDate && <div>{photo && photoAlt && <img src={photo} alt={photoAlt} />}</div>}
    </div>
  );
}
