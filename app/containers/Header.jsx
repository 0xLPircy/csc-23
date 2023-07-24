import React from "react";
import LogoGif from "../../assets/cscmuj.gif";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="" id="home">
        <div className="">
          <Image src={LogoGif} height={30} width={30} />
        </div>
        <div className="">
          <h1 className="">CYBER </h1>
          <h1 className="">SPACE</h1>
          <h1 className=""> CLUB</h1>
        </div>
        <div className="">
          <h1>Manipal University Jaipur</h1>
        </div>
        <div className="">
          <a href="#latestevents" rel="noreferrer">
            <button className="">Events</button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-14BOqnJc69J0BP7zSaLcetjyQ4r05oaAuEbYQQ5aNDOpOg/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="">Join Us</button>
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
