import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.div`
  color: ${(sc) => sc.theme.secondaryColor};
`;

export default function Copyright(props) {
  const { apiData } = props;

  const copyright = `${apiData.copyright}`;

  return (
    <StyledCopyright>
      <h2>{copyright}</h2>
    </StyledCopyright>
  );
}
