import React from "react";

export default function Explanation(props) {
  const { apiData } = props;

  const explanation = `${apiData.explanation}`;

  return (
    <div>
      <p>{explanation}</p>
    </div>
  );
}
