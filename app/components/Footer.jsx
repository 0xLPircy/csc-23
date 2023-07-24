import React from "react";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="footer__logo">
        {/* <img src={csc} alt="csc" /> */}
        <div>
          <h1 className="header-text-orange">CYBER </h1>
          <h1 className="header-text-white">SPACE</h1>
          <h1 className="header-text-orange"> CLUB</h1>
        </div>
      </div>
      <div className="contact">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div>
          <p>+91-9988013355</p>
          <h2>Homedeep Singh Saggu</h2>
        </div>
        <div>
          <p>+91-9818622192</p>
          <h2>Sayantan Mondal</h2>
        </div>
        <div>
          <p>cyberspacemuj@gmail.com</p>
        </div>
      </div>
      <div className="address">
        <div>
          <h1>Address</h1>
        </div>
        <div>
          <p>
            Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza,
            Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
          </p>
        </div>
        <div>
          <h1>Social Media</h1>
        </div>
        <div className="links">
          <a href="https://www.instagram.com/csc_muj/" rel="noreferrer">
            {/* <AiOutlineInstagram color="white" size={30} /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
