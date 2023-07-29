import React from "react";
import cs from "../../assets/cscmuj.gif";

const NewsletterCard = ({ title, date, description, nlink }) => {
  return (
    <>
      <div className="card bg-[#e3e3e3] p-3 m-6 text-[#121212] rounded-lg grid grid-flow-row justify-center items-center">
        <img src={cs} alt="" />
        <h3 className="text-3xl justify-self-center">{title}</h3>
        {/* use slice when states */}
        <p className="text-xs justify-self-start">{date}</p>
        <p className="justify-self-center text-sm">{description}</p>
        <a href={nlink} className="justify-self-end text-xs italic">
          Read more...
        </a>
      </div>
    </>
  );
};

export default NewsletterCard;
