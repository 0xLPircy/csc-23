import React from "react";
import Person from "../components/Person";
import h1 from "@/assets/team/behindTheScene.svg";
import h2 from "@/assets/team/facultyCoordinator.svg";
import h3 from "@/assets/team/dsw.svg";
import h4 from "@/assets/team/executive.svg";
import h5 from "@/assets/team/core.svg";
import UmaShankar from "@/assets/team/people/FacultyCoordinator/DrUmashankarRawat.jpg";

import Image from "next/image";

const TeamPage = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center pt-[90px] text-[#eeeeee]">
      <div className="justify-self-center">
        <Image height={600} width={600} src={h1} />
      </div>
      <div className="grid grid-flow-col grid-cols-7 items-center justify-evenly my-20">
        <Image height={300} width={150} src={h2} className="col-span-1" />
        <div className="justify-self-center col-span-3">
          <Person
            img={UmaShankar}
            name="Dr. Umashankar Rawat"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
          />
        </div>
        <div className="j col-span-3">
          <Person
            img={UmaShankar}
            name="Dr. Umashankar Rawat"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
          />
        </div>
      </div>
      <div className="pageSeparator" />
      <div className="grid grid-flow-col grid-cols-7 my-20 justify-center items-center">
        <div className="justify-self-center col-span-6">
          <Person
            img={UmaShankar}
            name="Dr. Umashankar Rawat"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
          />
        </div>
        <Image height={200} width={100} src={h3} className="c col-span-1" />
      </div>
      <div className="pageSeparator" />
      <div>
        <Image height={300} width={600} src={h4} />
        <div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
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
      </div>
      <div className="pageSeperator" />
      <div>
        <Image height={300} width={600} src={h5} />
        <div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
          <div>
            <Image height={120} width={120} />
            <h3>Dr. Roheet Bhatnagar</h3>
            <h4>Director of Research</h4>
            <div>
              <Image height={60} width={60} />
              <Image height={60} width={60} />
            </div>
          </div>
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
      </div>
      <div className="pageSeperator" />
    </div>
  );
};

export default TeamPage;
