import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import insta from "@/assets/insta.png";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="ham">
        <ul>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Events
            </Link>
          </li>
          <li>
            <a href="/">Membership</a>
          </li>
          <li>
            <Link href="/newsletter" onClick={toggleMenu}>
              Newsletter
            </Link>
          </li>
          <li>
            <a href="/team" onClick={toggleMenu}>
              Team
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/csc_muj/"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              Instagram
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
