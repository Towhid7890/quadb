import React from "react";

const ShowSummary = ({ show }) => {
  console.log(show);
  return (
    <div>
      <h2>{show?.name}</h2>
      {show?.summary}
    </div>
  );
};

export default ShowSummary;
