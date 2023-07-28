import React from "react";
import cs from "../../assets/cscmuj.gif";

const NewsletterCard = ({ title, date, description, nlink }) => {
  return (
    <>
      <div className="card">
        <img src={cs} alt="" />
        <h3>{title}</h3>
        {/* use slice when states */}
        <p>{date}</p>
        <p>{description}</p>
        <a href={nlink}>Read more</a>
      </div>
    </>
  );
};

export default NewsletterCard;
