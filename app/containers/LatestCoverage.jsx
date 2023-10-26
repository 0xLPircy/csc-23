import React from "react";

const LatestCoverage = () => {
  return (
    <div className="grid grid-flow-row coveragebg">
      <h1 className="text-white md:text-7xl text-4xl mt-20 mb-20 justify-self-center">
        Latest Coverage
      </h1>
      <div className="justify-self-center h-fit w-fit mb-20">
        <iframe
          className="coverage-video"
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
