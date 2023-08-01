import React from "react";
import h1 from "@/assets/team/behindTheScene.svg";
import h2 from "@/assets/team/facultyCoordinator.svg";
import p1 from "@/assets/";

import Image from "next/image";

const TeamPage = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center pt-[90px]">
      <div className="justify-self-center">
        <Image height={600} width={600} src={h1} />
      </div>
      <div>
        <Image height={600} width={300} src={h2} />
        <div>
          <Image height={120} width={120} />
          <h3>Dr. Roheet Bhatnagar</h3>
          <h4>Director of Research</h4>
          <div>
            <Image height={60} width={60} />
            <Image height={60} width={60} />
          </div>
        </div>
      </div>
      <div className="pageSeperator" />
    </div>
  );
};

export default TeamPage;
