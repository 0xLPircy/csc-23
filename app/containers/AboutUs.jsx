import React from "react";
import Image from "next/image";
import AboutLogo from "../../assets/aboutlogo.svg";

const AboutUs = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center text-white aboutbg">
      <div className="justify-self-center">
        <h1 className="md:text-7xl text-5xl mt-20 mb-16">About Us</h1>
      </div>
      <div className="justify-self-center grid md:grid-flow-col md:grid-cols-2 grid-flow-rowjk  justify-center items-center mb-36">
        <div className="mdlogo justify-self-center">
          {" "}
          <Image src={AboutLogo} height={180} width={180} />{" "}
        </div>
        <div className="lglogo justify-self-center">
          <Image src={AboutLogo} height={240} width={240} />
        </div>
        <div className="justify-self-center grid grid-flow-row">
          <h1 className="md:text-3xl text-2xl md:pr-28 pb-6 md:pt-0 pt-6 md:justify-self-start justify-self-center">
            CYBER SPACE CLUB
          </h1>
          <p className="md:text-3xl text-2xl md:pr-28 md:px-0 px-6 leading-10 md:text-left text-center justify-content-center">
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
