import React from "react";
// import styled from "styled-components";

export default function Explanation(props) {
  const { apiData } = props;

  const explanation = `${apiData.explanation}`;

  return (
    <div>
      <p>{explanation}</p>
    </div>
  );
}
