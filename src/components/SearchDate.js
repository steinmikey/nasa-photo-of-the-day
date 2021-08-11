import React, { useState, useEffect } from "react";

export function SearchDate() {
  const [searchDate, setSearchDate] = useState("");

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
      <input />
    </div>
  );
}
