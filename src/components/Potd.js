import React from "react";
import styled from "styled-components";

const StyledPotd = styled.div`
  border: solid red 2px;

  img {
    width: 90%;
  }
`;

export default function Potd(props) {
  const { apiData } = props;

  const potd = `${apiData.url}`;
  const photoAlt = `${apiData.title}`;

  return (
    <StyledPotd>
      <img className="potd" src={potd} alt={photoAlt} />
    </StyledPotd>
  );
}
