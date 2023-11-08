import React from "react";
import Link from "next/link";
import LogoGif from "../../assets/cscmuj.gif";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="grid grid-flow-row justify-center items-center content-center text-[#fefefe]">
        <div className="mdlogo justify-self-center">
          {" "}
          <Image src={LogoGif} height={270} width={270} />{" "}
        </div>
        <div className="lglogo justify-self-center">
          <Image src={LogoGif} height={420} width={420} />
        </div>
        <div className="justify-self-center">
          <h1 className="md:text-4xl font text-center text-3xl">CYBER SPACE CLUB</h1>
          <h1 className="md:text-2xl font text-center text-xl">Manipal University Jaipur</h1>
        </div>
        <div className="grid grid-flow-col items-center justify-around my-6">
          <Link href="/previousevent">
            <button className="border-[#fe8d32] rounded-sm border-2 md:w-40 md:h-16 h-9 w-32 md:py-3 md:px-11 md:text-2xl text-sm px-6 py-1 md:mx-24 mx-6">
              Events
            </button>
          </Link>
          <a
            href="/notfound"
            
            rel="noreferrer"
          >
            <button className=" bg-[linear-gradient(152deg,_#dd7009,_#f8be19)] rounded-sm md:w-40 md:h-16 h-9 w-32 md:py-3 md:px-11 md:text-2xl text-sm px-6 py-1 md:mx-24 mx-6">
              JoinUs
            </button>
          </a>
          {/* <div class="area"> */}
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
