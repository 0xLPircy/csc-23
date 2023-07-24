import React from "react";
import Image from "next/image";
import LogoGif from "../../assets/aboutlogo.svg";

const AboutUs = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center text-white">
      <div className="justify-self-center">
        <h1 className="text-7xl mt-24 mb-28">About Us</h1>
      </div>
      <div className="justify-self-center grid grid-flow-col grid-cols-2 justify-center items-center mb-36">
        <div className="justify-self-center">
          <Image src={LogoGif} height={240} width={240} />{" "}
        </div>
        <div className="justify-self-center grid grid-flow-row">
          <h1 className="text-3xl pr-28 pb-6">CYBER SPACE CLUB</h1>
          <p className="text-3xl pr-28 leading-10">
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
