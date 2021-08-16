import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  font-size: 1.2rem;
`;

export default function Title(props) {
  const { apiData } = props;

  const title = `${apiData.title}`;

  return (
    <StyledTitle>
      <h2>{title}</h2>
    </StyledTitle>
  );
}
