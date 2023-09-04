import React from "react";
import Logo from "../../assets/cs.svg";
import Image from "next/image";
import insta from "@/assets/insta.png";
import linkedin from "@/assets/linkedin.png";
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
      <div className="md:mt-0 mt-9 contact">
        <h1 className="text-4xl md:mb-6 mb-3 text-[#ff8000]">Contact Us</h1>
        <div className="text-xl mb-3">
          <p><a href="tel:8825224208">+91-88252 24208</a></p>
          <h2>Devanshu Kejriwal</h2>
          <h6>Vice Chairperson</h6>
        </div>
        <div className="text-xl mb-3">
          <p><a href="tel:9034953199">+91-90349 53199</a></p>
          <h2>Lovish Aneja</h2>
          <h6>General Secretary</h6>
        </div>
        <div className="text-xl">
          <p><a href="mailto:cyber.space@muj.manipal.edu">cyber.space@muj.manipal.edu</a></p>
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
        <div className="social-media">
          <a href="https://www.instagram.com/csc_muj/" rel="noreferrer" className="insta">
            <Image src={insta} height={24} width={24} />
          </a>
          <a href="https://www.linkedin.com/company/cyber-space-club/" rel="noreferrer" className="linkedin">
            <Image src={linkedin} height={24} width={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
