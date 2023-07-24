import React from "react";
import WhatEye from "../../assets/what.jpg";
import Image from "next/image";

const CyberSec = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center text-[#f2f2f2] mb-20 mx-24">
      <h1 className="justify-self-center text-6xl mt-24 mb-12">
        What is Cyber Security
      </h1>
      <div className="grid grid-flow-col grid-cols-2">
        <p className="justify-self-center text-2xl leading-10">
          Technologies, processes, and practices designed to protect networks,
          devices, programs, and data from attack, damage, or unauthorized
          access. The cyberattacks are usually aimed at accessing, changing, or
          destroying sensitive information; extorting money from users; or
          interrupting normal business processes.
        </p>
        <Image
          className="justify-self-center border border-[#fe8c32]"
          src={WhatEye}
          height={500}
          width={500}
        />
      </div>
      <div>
        <h3 className="text-3xl text-[#fe8c32] mt-6 mb-3">
          Why is Cyber Security Important?
        </h3>
        <p className="text-2xl leading-10">
          Cybersecurity is important because it protects all categories of data
          from theft and damage. This includes sensitive data, personally
          identifiable information (PII), protected health information (PHI),
          personal information, intellectual property, data, and governmental
          and industry information systems.
        </p>
      </div>
    </div>
  );
};

export default CyberSec;
