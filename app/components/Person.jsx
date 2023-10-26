import Image from "next/image";
import Link from "next/link";
import React from "react";
import insta from "@/assets/insta.png";
import linkedin from "@/assets/linkedin.png";

const Person = ({ img, name, post, link1, link2 }) => {
  return (
    <div className="text-white grid grid-flow-row justify-center items-center gap-3">
      {" "}
      <Image
        src={img}
        height={200}
        width={200}
        className="justify-self-center rounded-[100%]
          md:hidden
          sm:hidden
          hidden
          lg:block"
      />
      <Image
        src={img}
        height={180}
        width={180}
        className="justify-self-center rounded-[100%]
          md:block
          sm:hidden
          hidden
          lg:hidden"
      />
      <Image
        src={img}
        height={150}
        width={150}
        className="justify-self-center rounded-[100%]
          md:hidden
          sm:block
          lg:hidden
          hidden"
      />
      <Image
        src={img}
        height={210}
        width={210}
        className="justify-self-center rounded-[100%]
          md:hidden
          sm:hidden
          lg:hidden
          block"
      />
      <h2
        className="justify-self-center 
      lg:text-2xl
      md:text-xl
      sm:text-lg
      text-xl"
      >
        {name}
      </h2>
      <h3
        className="justify-self-center 
      lg:text-xl
      md:text-lg
      sm:text-md
      text-lg"
      >
        {post}
      </h3>
      <div className="team-handle">
      <div className="insta">
        <Image src={insta} height={24} width={24} />
      </div>
      <div className="linkedin">
        <Image src={linkedin} height={24} width={24} />
      </div>
      </div>
    </div>
  );
};

export default Person;
