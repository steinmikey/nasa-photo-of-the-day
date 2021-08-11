import React from "react";

export default function Potd(props) {
  const { apiData } = props;

  const potd = `${apiData.url}`;
  const photoAlt = `${apiData.title}`;

  return (
    <div>
      <img className="potd" src={potd} alt={photoAlt} />
    </div>
  );
}
