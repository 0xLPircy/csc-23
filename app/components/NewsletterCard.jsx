import React from "react";
import cs from "../../assets/cscmuj.gif";

const NewsletterCard = ({ title, date, description, nlink }) => {
  return (
    <>
      <div className="card backdrop-blur-lg p-3 m-6 text-white rounded-lg grid grid-flow-row justify-center items-center border border-opacity-50 shadow-lg self-newsletter">
        <img src={cs} alt="" />
        <h3 className="text-4xl text-center">{title}</h3>
        <div className="border w-full bg-slate-900 border-blue-950"></div>
        {/* use slice when states */}
        <p className="text-xs justify-self-start italic">{date}</p>
        <p className="text-justify text-m">{description}</p>
        <a href={nlink} className="justify-self-end text-xs italic">
          Read more...
        </a>
      </div>
    </>
  );
};

export default NewsletterCard;
