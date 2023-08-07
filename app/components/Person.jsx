import Image from "next/image";
import Link from "next/link";
import React from "react";

const Person = ({ img, name, post, link1, link2 }) => {
  return (
    <div className="text-white grid grid-flow-row justify-center items-center gap-3">
      <Image
        src={img}
        height={200}
        width={200}
        className="justify-self-center rounded-[100%]"
      />
      <h2 className="justify-self-center text-2xl">{name}</h2>
      <h3 className="justify-self-center text-xl">{post}</h3>
      <div className="justify-self-center">
        <Link href={link1}>Link1</Link>
        <Link href={link2}>Link2</Link>
      </div>
    </div>
  );
};

export default Person;
