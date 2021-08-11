import React from "react";

export default function Title(props) {
  const { apiData } = props;

  const title = `${apiData.title}`;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
