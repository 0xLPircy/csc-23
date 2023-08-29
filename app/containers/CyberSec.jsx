import React from "react";
import WhatEye from "../../assets/what.jpg";
import Image from "next/image";

const CyberSec = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center text-[#f2f2f2] mb-20 md:mx-24 mx-12 whatbg">
      <h1 className="justify-self-center md:text-6xl text-4xl mt-24 mb-12 md:text-left text-center">
        What is Cyber Security
      </h1>
      <div className="grid md:grid-flow-col grid-flow-row md:grid-cols-2">
        <p className="justify-self-center md:text-2xl text-xl md:leading-10 leading-8 md:text-left text-center md:mb-0 mb-3">
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
        <h3 className="md:text-3xl text-2xl text-[#fe8c32] mt-6 mb-3 md:text-left text-center">
          Why is Cyber Security Important?
        </h3>
        <p className="md:text-2xl text-xl md:leading-10 leading-8 md:text-left text-center">
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
