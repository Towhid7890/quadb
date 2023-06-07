import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const Home = () => {
  const [shows, setShow] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {shows.map((show) => (
        <ShowCard key={show.score} show={show.show}></ShowCard>
      ))}
    </div>
  );
};

export default Home;
