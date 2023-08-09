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
import vansh from "@/assets/team/people/exec/vansh.jpeg";
import palepu from "@/assets/team/people/exec/palepu.jpeg";
import dhruv from "@/assets/team/people/exec/dhruv.jpeg";
import anurag from "@/assets/team/people/exec/anurag.jpeg";
import salil from "@/assets/team/people/exec/salil.jpeg";
import taveesha from "@/assets/team/people/exec/taveesha.jpeg";

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
              name="Yatharth Khanna"
              post="Managing Director"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Vishal Raj"
              post="Deputy Secretary"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Shivang Bansal"
              post="Head of Technical Projects"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Ananya Sharma"
              post="Events Director"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Raunak Saxena"
              post="Human Resource Director"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={vansh}
              name="Vansh Dhingra"
              post="Head of Operation"
              link1="https://www.linkedin.com/in/vansh-dhingra-866799224"
              link2="https://instagram.com/vanshdhingra02?igshid=OGQ5ZDc2ODk2ZA=="
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Adarsh Devashish"
              post="Webmaster"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Ansh Porwal"
              post="Research Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Heads */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="heads justify-self-center">HEADS</h1>
        <div className="gap-6 grid grid-cols-3 justify-evenly w-[100vw]">
          <div>
            <Person
              img={palepu}
              name="Srivatsa Palepu"
              post="Technical Head"
              link1="https://www.linkedin.com/in/srivatsa-palepu-5210a6265"
              link2="https://instagram.com/srivatsa_palepu?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
            />
          </div>
          <div>
            <Person
              img={dhruv}
              name="Dhruv Bansal"
              post="Marketing Head"
              link1="https://www.linkedin.com/in/dhruv-bansal-29b00a168"
              link2="https://instagram.com/dhruvbansal28?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Darshan Baingani"
              post="Logistics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={anurag}
              name="Anurag Modak"
              post="Content Head"
              link1="https://www.linkedin.com/in/anurag-modak-99bb51226"
              link2="https://instagram.com/anurag._.m765?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
          </div>
          <div>
            <Person
              img={salil}
              name="Salil Hiremath"
              post="Graphic Design Head"
              link1="https://www.linkedin.com/in/salil-hiremath-946784212"
              link2="https://instagram.com/saaalil?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Ritika Malhotra"
              post="Curations Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Shivendra Goenka"
              post="Coverage Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://instagram.com/shivendragoenka?igshid=OGQ5ZDc2ODk2ZA=="
            />
          </div>
          <div>
            <Person
              img={taveesha}
              name="Taveesha Agarwal"
              post="Joint Webmaster"
              link1="https://www.linkedin.com/in/taveesha-agarwal-4a159a1b9/ "
              link2="https://github.com/L-Pircy"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Aditi Jain"
              post="Joint Technical Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Harshit Verma"
              post="Joint Technical Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Anushka Shreya"
              post="Joint Marketing Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Shivam Raj Dubey"
              post="Joint Marketing Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Pratyaksh Singhal"
              post="Joint Logistics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Lakshay Pawar"
              post="Joint Logistics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Navneet"
              post="Joint Content Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Sarvi Agarwal"
              post="Joint Content Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Akanksha Sinha"
              post="Joint Graphics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Aditi Soni"
              post="Joint Graphics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name="Arnav Nahar"
              post="Joint Curations Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={UmaShankar}
              name=""
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
