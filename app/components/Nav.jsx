"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-center items-center fixed py-3 border-b-[1px] border-[#f9672d3c] text-white w-full">
      <div className="">
        <Link href="/">
          {/* <img src={ } alt="logo" /> */}
          <Image width={210} height={210} src="./nav_logo.svg" />
        </Link>
      </div>
      <ul className="flex justify-center items-center">
        <li className="p-[12px]" key={`home`}>
          <Link href="/">
            Home
            <div />
          </Link>
        </li>
        <li className="p-[12px]" key={`events`}>
          <Link href="/">
            Events
            <div />
          </Link>
        </li>
        <li className="p-[12px]" key={`membership`}>
          <Link
            legacyBehavior
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-14BOqnJc69J0BP7zSaLcetjyQ4r05oaAuEbYQQ5aNDOpOg/viewform?usp=sf_link"
          >
            <a>Membership</a>
          </Link>
        </li>
        <li className="p-[12px]" key={`newsletter`}>
          <Link href="/">
            Newsletter
            <div />
          </Link>
        </li>
        <li className="p-[12px]" key={`events`}>
          <Link href="/">
            Team
            <div />
          </Link>
        </li>
        <li key={`insta`}>
          <a
            href="https://www.instagram.com/csc_muj/"
            target="_blank"
            rel="noreferrer"
          ></a>
        </li>
      </ul>

      <div className="">
        {/* {toggle && (
                    <div>
                        <ul>
                            <li key={`mobile-home`}>
                                <Link href="/" onClick={() => setToggle(false)}>
                                    home
                                </Link>
                            </li>
                            <li key={`mobile-events`}>
                                <Link href="/" onClick={() => setToggle(false)}>
                                    Events
                                </Link>
                            </li>
                            <li key={`mobile-membership`}>
                                < Link href="/" onClick={() => setToggle(false)}>
                                    membership
                                </Link>
                            </li>
                            <li key={`mobile-newsletter`}>
                                <Link href="/" onClick={() => setToggle(false)}>
                                    newsletter
                                </Link>
                            </li>
                            <li key={`mobile-team`}>
                                <Link href="/" onClick={() => setToggle(false)}>
                                    team
                                </Link>
                            </li>
                            <li key={`mobile-insta`}>
                                <Link href="/">
                                    insta
                                </Link>
                            </li>
                        </ul>
                    </div>
                )} */}
      </div>
    </nav>
  );
};

export default Navbar;
