import React from "react";
import "@/app/globals.css";
import Person from "../components/Person";
import h1 from "@/assets/team/behindTheScene.svg";
import h2 from "@/assets/team/facultyCoordinator.svg";
import h3 from "@/assets/team/dsw.svg";
import h4 from "@/assets/team/executive.svg";
import h5 from "@/assets/team/core.svg";
import h6 from "@/assets/team/deputyCore.svg";
import UmaShankar from "@/assets/team/people/FacultyCoordinator/DrUmashankarRawat.jpg";
import Rohit from "@/assets/team/people/FacultyCoordinator/DrRohitBhatnagar.jpg";
import Sanchit from "@/assets/team/people/DSW/SanchitAnand.jpg";

import Image from "next/image";

const TeamPage = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center pt-[90px] text-[#eeeeee]">
      <div className="justify-self-center">
        <Image height={600} width={600} src={h1} />
      </div>
      {/* Fac cooredinators */}
      <div className="grid grid-flow-col grid-cols-7 items-center justify-evenly w-[100vw] my-20 px-12">
        <Image height={300} width={150} src={h2} className="col-span-1" />
        <div className="justify-self-center col-span-3">
          <Person
            img={Rohit}
            name="Dr. Roheet Bhatnagar"
            post="Directorate of Research"
            link1="https://www.linkedin.com/in/dr-roheet-bhatnagar-79ba8015/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/roheet-bhatnagar.html"
          />
        </div>
        <div className="col-span-3">
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
      {/* dsw */}
      <div className="grid grid-flow-col grid-cols-7 my-20 justify-center items-center">
        <div className="justify-self-center col-span-6">
          <Person
            img={Sanchit}
            name="Dr. Sanchit Anand"
            post="Assistant Director, Directorate of Student's Welfare"
            link1="https://www.linkedin.com/in/dr-sanchit-anand-4a9112105/"
            link2="https://jaipur.manipal.edu/muj/academics/institution-list/foe/schools-faculty/faculty-list/Sanchit-Anand.html"
          />
        </div>
        <Image height={200} width={100} src={h3} className="c col-span-1" />
      </div>
      <div className="pageSeparator" />
      {/* Exec */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <Image
          height={300}
          width={600}
          src={h4}
          className="justify-self-center pb-6"
        />
        <div className="gap-6 ExecGrid justify-evenly w-[100vw]">
          <div className="">
            <Person
              img={UmaShankar}
              name="Aayushman Ranjan"
              post="Chairperson"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Devanshu Kejriwal"
              post="Vice-Chairperson"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Lovish Aneja"
              post="General Secretary"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Anmol Singh Gill"
              post="Treasurer"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
        </div>
      </div>
      <div className="pageSeparator" />
      <div className="grid grid-flow-row justify-center items-center my-20">
        <Image
          height={150}
          width={300}
          src={h5}
          className="pb-6 justify-self-center"
        />
        <div className="gap-6 grid grid-cols-3 justify-evenly w-[100vw]">
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
        </div>
      </div>
      <div className="pageSeparator" />
      <div className="grid grid-flow-row justify-center items-center my-20">
        <Image
          height={350}
          width={700}
          src={h6}
          className="pb-12 justify-self-center"
        />
        <div className="gap-6 grid grid-cols-3 justify-evenly w-[100vw]">
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Dr. Umashankar Rawat"
              post="Professor in Department of CSE"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
