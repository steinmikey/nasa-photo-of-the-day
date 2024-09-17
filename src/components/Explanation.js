import React from "react";
import styled from "styled-components";

const StyledExplanation = styled.div`
  display: flex;
  justify-content: center;

  div {
    background-color: ${(pr) => pr.theme.quinaryColor};
    color: ${(pr) => pr.theme.white};
    width: 75%;
  }

  p {
    padding: 40px;
    text-align: justify;
  }
`;

export default function Explanation(props) {
  const { apiData } = props;

  const explanation = `${apiData.explanation}`;

  return (
    <StyledExplanation>
      <div>
        <p>{explanation}</p>
      </div>
    </StyledExplanation>
  );
}
