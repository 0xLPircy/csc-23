import React from "react";

const AboutUs = () => {
  return (
    <div className="about section__padding">
      <div>
        <h1 className="about_title">About Us</h1>
      </div>
      <div className="about__content">
        <div className="about__content__image">
          {/* <img src={csc} alt="csc" /> */}
        </div>
        <div className="about__content__text">
          <div>
            <h1 className="header-text-orange">CYBER </h1>
            <h1 className="header-text-white">SPACE</h1>
            <h1 className="header-text-orange"> CLUB</h1>
          </div>
          <p>
            {" "}
            We aim to buid an active society for students interested in the
            domain of cyber security and uplift this culture in MUJ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
