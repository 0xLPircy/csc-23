import React from "react";
import Logo from "../../assets/cs.svg";
import Image from "next/image";
// import bg from "../../assets/footerBackground.svg";

const Footer = () => {
  return (
    <div className="text-[#f2f2f2] grid grid-flow-col grid-cols-3 pl-48 pr-32 py-9 bg-[#0e0e0e]">
      <div className="">
        <Image src={Logo} height={150} width={150} />
        <div>
          <h1 className="pt-3">CYBER SPACE CLUB</h1>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl mb-6">Contact Us</h1>
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
      <div className="">
        <div>
          <h1 className="text-4xl mb-6">Address</h1>
        </div>
        <div>
          <p className="text-lg mb-3">
            Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza,
            Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
          </p>
        </div>
        <div>
          <h1 className="text-4xl mt-9">Social Media</h1>
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
