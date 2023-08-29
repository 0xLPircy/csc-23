import React from "react";
import Logo from "../../assets/cs.svg";
import Image from "next/image";
import linkedin from "@/assets/linkedin-icon.webp";
import insta from "@/assets/insta.png";
// import bg from "../../assets/footerBackground.svg";

const Footer = () => {
  return (
    <div className="text-[#f2f2f2] grid md:grid-flow-col grid-flow-row md:grid-cols-3 md:pr-32 py-9 mx-3 bg-[#0e0e0e] text-center">
      <div className="justify-self-center">
        <Image src={Logo} height={150} width={150} />
        <div>
          <h1 className="pt-3">CYBER SPACE CLUB</h1>
        </div>
      </div>
      <div className="md:mt-0 mt-9">
        <h1 className="text-4xl md:mb-6 mb-3 text-[#ff8000]">Contact Us</h1>
        <div className="text-xl mb-3">
          <p>+91-9304504962</p>
          <h2>Ayushman Ranjan</h2>
        </div>
        <div className="text-xl mb-3">
          <p>+91-8825224208</p>
          <h2>Devanshu Kejriwal</h2>
        </div>
        <div className="text-xl">
          <p>cyberspacemuj@gmail.com</p>
        </div>
      </div>
      <div className="md:mt-0 mt-9">
        <div>
          <h1 className="text-4xl md:mb-6 mb-3 text-[#ff8000]">Address</h1>
        </div>
        <div>
          <p className="text-lg mb-3">
            Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza,
            Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
          </p>
        </div>
        <div>
          <h1 className="text-4xl md:mt-0 mt-9 mb:3 text-[#ff8000]">
            Social Media
          </h1>
        </div>
        <div className="flex gap-12 justify-center mt-3">
          <a href="https://www.instagram.com/csc_muj/" rel="noreferrer">
            <Image src={insta} height={27} width={27} />{" "}
          </a>
          <a href="https://www.linkedin.com/in/taveesha-agarwal-4a159a1b9/">
            <Image src={linkedin} height={24} width={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
