import React from "react";
import LogoGif from "../../assets/cscmuj.gif";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="grid grid-flow-row justify-center items-center content-center text-[#fefefe]">
        <div className="justify-self-center">
          <Image src={LogoGif} height={420} width={420} />
        </div>
        <div className="justify-self-center">
          <h1 className="text-4xl font">CYBER SPACE CLUB</h1>
        </div>
        <div className="text-4xl justify-self-center">
          <h1>Manipal University Jaipur</h1>
        </div>
        <div className="grid grid-flow-col items-center justify-around my-6">
          <a href="https://www.w3schools.com/tags/tag_a.asp">
            <button className="border-[#fe8d32] rounded-sm border-2 py-3 px-11 text-2xl mx-24">
              Events
            </button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-14BOqnJc69J0BP7zSaLcetjyQ4r05oaAuEbYQQ5aNDOpOg/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" bg-[linear-gradient(152deg,_#dd7009,_#f8be19)] rounded-sm py-3 px-11 text-2xl mx-24">
              Join Us
            </button>
          </a>
          {/* <div class="area"> */}
          {/* <ul class="circles">
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
          </ul> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
