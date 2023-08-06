import React from "react";
import Logo from "../../assets/cs.svg";
import Image from "next/image";
// import bg from "../../assets/footerBackground.svg";

const Footer = () => {
  return (
    <div className="text-[#f2f2f2] grid md:grid-flow-col grid-flow-row md:grid-cols-3  md:pr-32 py-9 bg-[#0e0e0e] text-center">
      <div className="justify-self-center">
        <Image src={Logo} height={150} width={150} />
        <div>
          <h1 className="pt-3">CYBER SPACE CLUB</h1>
        </div>
      </div>
      <div className="md:mt-0 mt-9">
        <h1 className="text-4xl md:mb-6 mb-3 text-[#ff8000]">Contact Us</h1>
        <div className="text-xl mb-3">
          <p>+91-9988013355</p>
          <h2>Homedeep Singh Saggu</h2>
        </div>
        <div className="text-xl mb-3">
          <p>+91-9818622192</p>
          <h2>Sayantan Mondal</h2>
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
        <div className="">
          insta
          <a href="https://www.instagram.com/csc_muj/" rel="noreferrer">
            {/* <AiOutlineInstagram color="white" size={30} /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
