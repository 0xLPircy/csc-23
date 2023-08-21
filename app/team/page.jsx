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
import devanshu from "@/assets/team/people/exec/Devanshu Kejriwal.JPG";
import anmol from "@/assets/team/people/exec/Anmol Gill.jpg";
import ananyasharma from "@/assets/team/people/exec/ananya.jpeg";
import Ritika from "@/assets/team/people/exec/Ritika Malhotra.jpeg";
import ShivendraGoenka from "@/assets/team/people/exec/shivendra goenka.jpeg";
import AditiJain from "@/assets/team/people/exec/Aditi jain.jpg";
import HarshitVarma from "@/assets/team/people/exec/Harshit Varma.jpeg";
import Anushka from "@/assets/team/people/exec/Anushka Shreya.jpg";
import SRD from "@/assets/team/people/exec/SHIVAM RAJ DUBEY.jpeg";
import Lakshya from "@/assets/team/people/exec/Lakshya Pawar.jpg";
import Navneet from "@/assets/team/people/exec/bully Maguire.jpg";
import Sarvi from "@/assets/team/people/exec/Sarvi Agarwal.jpg";
import AditiSoni from "@/assets/team/people/exec/Aditi Soni.jpeg";
import Akansha from "@/assets/team/people/exec/Akanksha Sinha.jpg";
import ArnavNahar from "@/assets/team/people/exec/Arnav Nahar.jpg";
import Sumit from "@/assets/team/people/exec/res - Sumit.jpeg";
import AnanyaPatel from "@/assets/team/people/exec/Ananya Patel.JPG";
import Karishma from "@/assets/team/people/exec/Karishma Dhyani.jpg";
import Chetna from "@/assets/team/people/exec/Chetna Rai.jpg";
import HarshitRawat from "@/assets/team/people/exec/Harshit Rawat.jpg";
import AvniGoel from "@/assets/team/people/exec/Avni Goel.jpg";
import Chitransh from "@/assets/team/people/exec/Chitransh Saxena.jpg";
import Ayushman from "@\assets\team\people\exec\Aayushman Ranjan.jpeg";
import Lovish from "@\assets\team\people\exec\lovish aneja.jpeg";
import Yatharth from "@\assets\team\people\exec\Yatharth Khanna.jpg";
import Shivang from "@\assets\team\people\exec\Shivang Bansal.jpg";
import Raunak from "@\assets\team\people\exec\raunak.png";
import AdarshDevashish from "@\assets\team\people\exec\Adarsh Devashish.jpg";
import Darshan from "@\assets\team\people\exec\Darshan Baingani.jpg";


import Image from "next/image";

const TeamPage = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center pt-[90px] text-[#eeeeee]">
      <div className="justify-self-center">
        <Image height={600} width={600} src={h1} />
      </div>
      {/* Fac cooredinators */}
      <div className="grid grid-flow-col grid-cols-7 items-center justify-evenly w-[100vw] mt-3 mb-12 px-12">
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
              img={Ayushman}
              name="Aayushman Ranjan"
              post="Chairperson"
              link1="https://www.linkedin.com/in/aayushmanranjan"
              link2="https://instagram.com/aayushman024?igshid=NjIwNzIyMDk2Mg=="
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
          <div>
            <Person
              img={Lovish}
              name="Lovish Aneja"
              post="General Secretary"
              link1="https://www.linkedin.com/in/lovish-aneja-b71023269"
              link2="https://instagram.com/lovish_aneja?igshid=OGQ5ZDc2ODk2ZA=="
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
          <div>
            <Person
              img={Yatharth}
              name="Yatharth Khanna"
              post="Managing Director"
              link1="https://www.linkedin.com/in/yatharth-khanna-960ab224b"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html" //Only one link is available
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
          <div>
            <Person
              img={Shivang}
              name="Shivang Bansal"
              post="Head of Technical Projects"
              link1="https://www.linkedin.com/in/shivang-bansal-7a14661bb"
              link2="https://instagram.com/bansalshivang.52?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
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
          {/* Fill it */}
          <div>
            <Person
              img={Raunak} //Image is having some issues with the extension   
              name="Raunak Saxena"
              post="Human Resource Director"
              link1="https://www.linkedin.com/in/raunaksaxena193"
              link2="https://instagram.com/raunak.saxena.50?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
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
              img={AdarshDevashish}
              name="Adarsh Devashish"
              post="Webmaster"
              link1="https://www.instagram.com/adarsh_2403/"
              link2="https://github.com/AdarshDevashish"
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
          <div>
            <Person
              img={Darshan}
              name="Darshan Baingani"
              post="Logistics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //only one link given
              link2="https://instagram.com/darshanj13"
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
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //Only one link is available
              link2="https://www.instagram.com/raymamarey/"
            />
          </div>
          <div>
            <Person
              img={ShivendraGoenka}
              name="Shivendra Goenka"
              post="Coverage Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" // No second link found in Google sheets
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
              img={Lakshya}
              name="Lakshay Pawar"
              post="Joint Logistics Head"
              link1="https://instagram.com/_.laksh_07?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              link2="https://www.linkedin.com/in/lakshya-pawar-165b81265"
            />
          </div>
          <div>
            <Person
              img={Navneet}
              name="Navneet"
              post="Joint Content Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //No link is found in Google sheets
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={Sarvi}
              name="Sarvi Agarwal"
              post="Joint Content Head"
              link1="https://instagram.com/sarvi.agarwal?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/sarvi-agarwal"
            />
          </div>
          <div>
            <Person
              img={Akansha}
              name="Akanksha Sinha"
              post="Joint Graphics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //Only Insta userID is provided
              link2="https://www.linkedin.com/in/akanksha-sinha-a9638a268"
            />
          </div>
          <div>
            <Person
              img={AditiSoni}
              name="Aditi Soni"
              post="Joint Graphics Head"
              link1="https://instagram.com/_wtf.adu?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/er-aditi-soni"
            />
          </div>
          <div>
            <Person
              img={ArnavNahar}
              name="Arnav Nahar"
              post="Joint Curations Head"
              link1="https://instagram.com/arnavnahar_28?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              link2="https://in.linkedin.com/in/arnav-n-1297a421b"
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
      {/* Senior Coordinator */}
      {/* SUMIT😅😅😅 */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="heads justify-self-center">Co-ords</h1>
        <div className="gap-6 grid grid-cols-3 justify-evenly w-[100vw]">
          <div>
            <Person
              img={Sumit}
              name="Sumit Kumar"
              post="Senior Coordinator of Web-Dev"
              link1="https://www.linkedin.com/in/er-sumit-kr/"
              link2="https://github.com/07sumit1002"
            />
          </div>
          <div>
            {" "}
            <Person
              img={Karishma}
              name="Karishma Dhyani"
              post="Senior Coordinator of Content"
              link1="https://www.linkedin.com/in/karishma-dhyani-6726661ba"
              link2="https://instagram.com/karishma_dhyani?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
            />
          </div>
          {/* No details */}
          <div>
            <Person
              img={UmaShankar}
              name="Kamya Singh"
              post="Senior Coordinator of Content"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={Chetna}
              name="Chetna Vijay Rai"  
              post="Senior Coordinator of Research"
              link1="https://www.linkedin.com/in/chetnarai682004"
              link2="https://instagram.com/chetna_rai.684?igshid=MzRlODBiNWFlZA=="
            />
          </div>
          <div>
            <Person
              img={AnanyaPatel}
              name="Ananya Patel"
              post="Senior Coordinator of Research"
              link1="https://www.linkedin.com/in/ananya-p-23a641208" //Insta userId shared 
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          {/* No details */}
          <div>
            <Person
              img={UmaShankar}
              name="Atharv Pawar"
              post="Senior Coordinator of Events"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
            />
          </div>
          <div>
            <Person
              img={HarshitRawat}
              name="Harshit Rawat"
              post="Senior Coordinator of Events"
              link1="https://www.linkedin.com/in/harshit-rawat-6730571b3?trk=contact-info"
              link2="https://instagram.com/harshitt_rawat?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
          </div>
          <div>
            <Person
              img={AvniGoel}
              name="Avni Goel"
              post="Senior Coordinator of Graphic Design"
              link1="https://www.linkedin.com/in/avni-goel-57041816a"
              link2="https://instagram.com/goelverse_avni?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
          </div>
          <div>
            <Person
              img={Chitransh}
              name="Chitransh Saxena"
              post="Senior Coordinator of Technical"
              link1="www.linkedin.com/in/chitranshatlkdin"
              link2="https://www.instagram.com/_.chitransh_saxena._/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
