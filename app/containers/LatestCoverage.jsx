import React from "react";

const LatestCoverage = () => {
  return (
    <div className="grid grid-flow-row ">
      <h1 className="text-white text-7xl mt-20 mb-20 justify-self-center">
        Latest Coverage
      </h1>
      <div className="mx-64 h-[400px] mb-20">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9D9CZKHncK0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LatestCoverage;
