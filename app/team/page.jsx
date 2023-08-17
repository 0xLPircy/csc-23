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
import devanshu from "@/assets/team/people/exec/IMG_3949 - Devanshu Kejriwal.JPG";
import anmol from "@\assets\team\people\exec\IMG_6608 - Anmol Gill.jpg";
import ananyasharma from "@assets\team\people\exec\IMG_4139 - ananya.jpeg";
import Ritika from "@\assets\team\people\exec\IMG_2453 - Ritika Malhotra.jpeg"
import ShivendraGoenka from "@\assets\team\people\exec\IMG_7885 - shivendra goenka.jpeg";
import AditiJain from "@/assets\team\people\exec\Snapchat-2000395962 - Aditi jain.jpg";
import HarshitVarma from "@/assets\team\people\exec\IMG_3375 - Harshit Varma.jpeg";
import Anushka from "@/assets\team\people\exec\IMG20221215143527 - Anushka Shreya.jpg";
import SRD from "@/assets\team\people\exec\WhatsApp Image 2023-07-22 at 10.40.13 AM - SHIVAM RAJ DUBEY.jpeg"

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
          {/* No details */}
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
              img={devanshu}
              name="Devanshu Kejriwal"
              post="Vice-Chairperson"
              link1="https://www.linkedin.com/in/devanshu-kejriwal-71700921b"
              link2="https://instagram.com/dev.kejriwal06?igshid=MjEwN2IyYWYwYw=="
            />
          </div>
          {/* No details */}
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
              img={anmol}
              name="Anmol Singh Gill"
              post="Treasurer"
              link1="https://www.instagram.com/anmol._gill/"
              link2="https://www.linkedin.com/in/anmol-singh-gill-247506224/"
            />
          </div>
          {/* No details */}
          <div>
            <Person
              img={UmaShankar}
              name="Yatharth Khanna"
              post="Managing Director"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          {/* No details */}
          <div>
            <Person
              img={UmaShankar}
              name="Vishal Raj"
              post="Deputy Secretary"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          {/* No details */}
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
              img={ananyasharma}
              name="Ananya Sharma"
              post="Events Director"
              link1="https://instagram.com/ananyaaaa21?igshid=MmIzYWVlNDQ5Yg=="
              link2="https://www.linkedin.com/in/ananya-sharma-85a57b231"
            />
          </div>
          {/* No details */}
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
          {/* No details */}
          <div>
            <Person
              img={UmaShankar}
              name="Adarsh Devashish"
              post="Webmaster"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          {/* No details */}
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
          {/* No details */}
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
              img={Ritika}
              name="Ritika Malhotra"
              post="Curations Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //No link is available in Google sheets
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={ShivendraGoenka}
              name="Shivendra Goenka"
              post="Coverage Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"  // No second link found in Google sheets
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
              img={AditiJain}
              name="Aditi Jain"
              post="Joint Technical Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //Only Insta userID is provided
              link2="https://www.linkedin.com/in/aditi-jain-09ab53244"
            />
          </div>
          <div>
            <Person
              img={HarshitVarma}
              name="Harshit Varma"
              post="Joint Technical Head"
              link1="https://instagram.com/harshuvarma_737?igshid=OGQ5ZDc2ODk2ZA=="
              link2="https://www.linkedin.com/in/harshit-varma-721920203"
            />
          </div>
          <div>
            <Person
              img={Anushka}
              name="Anushka Shreya"
              post="Joint Marketing Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //Only Insta userID is provided
              link2="https://www.linkedin.com/in/anushka-shreya-2a5b86253"
            />
          </div>
          <div>
            <Person
              img={SRD}
              name="Shivam Raj Dubey"
              post="Joint Marketing Head"
              link1="https://www.instagram.com/shivam.raj.dubey/"
              link2="https://www.linkedin.com/in/shivam-raj-dubey-5610361ba/"
            />
          </div>
          {/* No details */}
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
          {/* No details */}
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

        {/* No details in the whole div*/}

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
