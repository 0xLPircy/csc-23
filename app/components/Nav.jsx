"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import insta from "@/assets/insta.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="grid grid-flow-col grid-cols-4 fixed justify-center px-6 py-3 border-b-[1px] border-[#f9672d3c] text-white w-[100vw] nav">
      <div className="col-span-1">
        <Link href="/">
          {/* <img src={ } alt="logo" /> */}
          <Image width={210} height={210} src="./nav_logo.svg" />
        </Link>
      </div>
      <ul className="flex col-span-3 justify-self-end justify-center items-center navList self-end">
        <li
          className="px-[12px] hover:text-[#fe8d32] hover:border-b border-[#fe8d32] rounded-sm"
          key={`home`}
        >
          <Link href="/">
            Home
            <div />
          </Link>
        </li>
        <li
          className="px-[12px] hover:text-[#fe8d32] hover:border-b border-[#fe8d32] rounded-sm"
          key={`events`}
        >
          <Link href="/">
            Events
            <div />
          </Link>
        </li>
        <li
          className="px-[12px] hover:text-[#fe8d32] hover:border-b border-[#fe8d32] rounded-sm"
          key={`membership`}
        >
          <a href="/">Membership</a>
        </li>
        <li
          className="px-[12px] hover:text-[#fe8d32] hover:border-b border-[#fe8d32] rounded-sm"
          key={`newsletter`}
        >
          <Link href="/newsletter">
            Newsletter
            <div />
          </Link>
        </li>
        <li
          className="px-[12px] mr-3 hover:text-[#fe8d32] hover:border-b border-[#fe8d32] rounded-sm"
          key={`events`}
        >
          <a href="/team">
            Team
            <div />
          </a>
        </li>
        <li key={`insta`}>
          <a
            href="https://www.instagram.com/csc_muj/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={insta} height={24} width={24} />
          </a>
        </li>
      </ul>

      {/* <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link href="/">
                    Home
                    <div />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Events
                    <div />
                  </Link>
                </li>
                <li>
                  <a href="https://www.w3schools.com/tags/tag_a.asp">
                    Membership
                  </a>
                </li>
                <li>
                  <Link href="/newsletter">
                    Newsletter
                    <div />
                  </Link>
                </li>
                <li>
                  <a href="/team">
                    Team
                    <div />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/csc_muj/"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className=""> */}
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
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
