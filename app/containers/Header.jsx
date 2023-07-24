import React from "react";

const Header = () => {
  return (
    <>
      <div className="header section__padding" id="home">
        <div className="header-logo">{/* <img src={cs} alt="cs" /> */}</div>
        <div className="header-text">
          <h1 className="header-text-orange">CYBER </h1>
          <h1 className="header-text-white">SPACE</h1>
          <h1 className="header-text-orange"> CLUB</h1>
        </div>
        <div className="header-subtext">
          <h1>Manipal University Jaipur</h1>
        </div>
        <div className="header-button">
          <a href="#latestevents" rel="noreferrer">
            <button className="button-events">Events</button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-14BOqnJc69J0BP7zSaLcetjyQ4r05oaAuEbYQQ5aNDOpOg/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-join-us">Join Us</button>
          </a>
          {/* <div class="area"> */}
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
