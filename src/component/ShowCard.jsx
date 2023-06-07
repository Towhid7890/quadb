import React, { useState } from "react";
import ShowSummary from "./ShowSummary";

const ShowCard = ({ show }) => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowClick = (show) => {
    console.log(show);
    setSelectedShow(show);
  };

  return (
    <div>
      <div className="border shadow-xl p-10">
        <img src={show.image.medium} alt="" />
        <p className="text-2xl font-bold mt-3">{show.name}</p>
        <p>Language: {show.language}</p>

        <button
          onClick={() => handleShowClick(show)}
          type="button"
          class="text-gray-900 bg-gradient-to-r mt-3 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Show Summary
        </button>
      </div>
      <ShowSummary show={selectedShow}></ShowSummary>
    </div>
  );
};

export default ShowCard;
