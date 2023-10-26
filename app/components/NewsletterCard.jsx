import React from "react";
import cs from "../../assets/cscmuj.gif";

const NewsletterCard = ({ title, date, description, nlink }) => {
  return (
    <>
      <div className="card backdrop-blur-lg p-3 m-6 text-white rounded-lg grid grid-flow-row justify-center items-center border border-opacity-50 shadow-lg self-newsletter">
        <img src={cs} alt="" />
        <h3 className="text-4xl text-center mb-5">{title}</h3>
        <div className="pageSeparator mb-5" />
        {/* <div className="border w-full bg-slate-900 border-blue-950"></div> */}
        {/* use slice when states */}
        <p className="text-s justify-self-start italic text-[#ffae53] mb-5 ">{date}</p>
        <p className="text-justify text-m">{description}</p>
        <a href={nlink} className=" font-serif justify-self-end text-xs italic text-[#ff8c32] no-underline hover:underline">
          Read more...
        </a>
      </div>
    </>
  );
};

export default NewsletterCard;
