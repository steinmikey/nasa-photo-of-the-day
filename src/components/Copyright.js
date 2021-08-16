import React from "react";
// import styled from "styled-components";

export default function Copyright(props) {
  const { apiData } = props;

  const copyright = `${apiData.copyright}`;

  return (
    <div>
      <h2>{copyright}</h2>
    </div>
  );
}
