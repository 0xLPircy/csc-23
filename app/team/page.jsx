import React from "react";
import "@/app/globals.css";
import Person from "../components/Person";
import h1 from "@/assets/team/behindTheScene.svg";
import h2 from "@/assets/team/facultyCoordinator.svg";
import h21 from "@/assets/team/facultyCoordinatorStraight.svg";
import h3 from "@/assets/team/dsw.svg";
import h4 from "@/assets/team/executive.svg";
import h5 from "@/assets/team/core.svg";
import h6 from "@/assets/team/deputyCore.svg";
import UmaShankar from "@/assets/team/people/FacultyCoordinator/DrUmashankarRawat.jpg";
import Rohit from "@/assets/team/people/FacultyCoordinator/DrRohitBhatnagar.jpg";
import AmitKumarBairwa from "@/assets/team/people/FacultyCoordinator/AmitKumarBairwa.jpg";
import Sanchit from "@/assets/team/people/DSW/SanchitAnand.jpg";
import vansh from "@/assets/team/people/exec/vansh.jpeg";
import palepu from "@/assets/team/people/exec/palepu.jpeg";
import dhruv from "@/assets/team/people/exec/dhruv.jpeg";
import anurag from "@/assets/team/people/exec/anurag.jpeg";
import salil from "@/assets/team/people/exec/salil.jpg";
import taveesha from "@/assets/team/people/exec/taveesha.jpeg";
import devanshu from "@/assets/team/people/exec/DevanshuKejriwal.JPG";
import anmol from "@/assets/team/people/exec/AnmolGill.jpg";
import ananyasharma from "@/assets/team/people/exec/ananya.jpeg";
import Ritika from "@/assets/team/people/exec/RitikaMalhotra.jpeg";
import ShivendraGoenka from "@/assets/team/people/exec/shivendragoenka.jpeg";
import AditiJain from "@/assets/team/people/exec/Aditijain.jpg";
// import HarshitVarma from "@/assets/team/people/exec/HarshitVarma.jpeg";
import Anushka from "@/assets/team/people/exec/AnushkaShreya.jpg";
import SRD from "@/assets/team/people/exec/SHIVAMRAJDUBEY.jpeg";
import Lakshya from "@/assets/team/people/exec/LakshyaPawar.jpg";
import Navneet from "@/assets/team/people/exec/navneet.jpeg";
import Sarvi from "@/assets/team/people/exec/SarviAgarwal.jpg";
import AditiSoni from "@/assets/team/people/exec/AditiSoni.jpeg";
import Akansha from "@/assets/team/people/exec/AkankshaSinha.jpg";
import ArnavNahar from "@/assets/team/people/exec/ArnavNahar.jpg";
import Sumit from "@/assets/team/people/exec/sumit.jpeg";
import AnanyaPatel from "@/assets/team/people/exec/AnanyaPatel.JPG";
import Karishma from "@/assets/team/people/exec/KarishmaDhyani.jpg";
import Chetna from "@/assets/team/people/exec/ChetnaRai.jpg";
import HarshitRawat from "@/assets/team/people/exec/HarshitRawat.jpg";
import AvniGoel from "@/assets/team/people/exec/AvniGoel.jpg";
import Chitransh from "@/assets/team/people/exec/ChitranshSaxena.jpg";
import Ayushman from "@/assets/team/people/exec/AayushmanRanjan.jpeg";
import Lovish from "@/assets/team/people/exec/lovishaneja.jpeg";
import Shivang from "@/assets/team/people/exec/ShivangBansal.jpg";
import Raunak from "@/assets/team/people/exec/Raunak.jpeg";
import AdarshDevashish from "@/assets/team/people/exec/AdarshDevashish.jpg";
import Darshan from "@/assets/team/people/exec/DarshanBaingani.jpg";
import VishalRai from "@/assets/team/people/exec/VishalRai.jpg";
import AnshPorwal from "@/assets/team/people/exec/AnshPorwal.jpg";
import Kamya from "@/assets/team/people/exec/Kamya.jpg";
import Pratyaksh from "@/assets/team/people/exec/PratyakshSinghal.jpg";
import AryanShah from "@/assets/team/people/exec/AryanShah.jpg";
import AnandGhugare from "@/assets/team/people/exec/AnandGhugare.jpg";
import HarshKamra from "@/assets/team/people/exec/HarshKamra.jpg";
import DhruvRathee from "@/assets/team/people/exec/DhruvRathee.jpg";
import SheryaGupta from "@/assets/team/people/exec/SheryaGupta.jpg";
import JainilShah from "@/assets/team/people/exec/JainilShah.jpeg";
import ParthSarrathi from "@/assets/team/people/exec/ParthSarrathi.jpg";
import RanojitPalit from "@/assets/team/people/exec/RanojitPalit.jpg";
import Kartikey from "@/assets/team/people/exec/Kartikey.jpg";
import Sidharth from "@/assets/team/people/exec/Sidharth.jpg";
import Sarthak from "@/assets/team/people/exec/Sarthak.jpg";
import AnantSharma from "@/assets/team/people/exec/AnantSharma.jpg";





import Image from "next/image";

const TeamPage = () => {
  return (
    <div
      className="grid grid-flow-row justify-center items-center pt-[90px] text-[#eeeeee]
    g:bg-slate-800
    d:bg-slate-600
    m:bg-slate-400"
    >
      <div className="justify-self-center">
        <Image
          alt="our team"
          height={600}
          width={600}
          src={h1}
          className="
          hidden
          md:hidden
          sm:hidden
          lg:block"
        />{" "}
        <Image
          height={500}
          width={500}
          src={h1}
          className="
          hidden
        md:block
        sm:hidden
        lg:hidden"
        />{" "}
        <Image
          height={400}
          width={400}
          src={h1}
          className="
          md:hidden
          block
          lg:hidden"
        />
      </div>
      {/* Fac cooredinators */}
      <div
        className="grid grid-flow-row items-center justify-evenly mt-3 mb-12 px-12
      md:grid-cols-7 w-[100vw] sm:grid-cols-2 grid-cols-1"
      >
        <Image
          height={300}
          width={150}
          src={h2}
          className="col-span-1 md:block hidden"
        />{" "}
        <Image
          height={300}
          width={150}
          src={h4}
          className="sm:col-span-3 my-6 justify-self-center md:hidden sm:block"
        />
        {/* <h1 className="md:hidden sm:block fc place-content-center">
          FACULTY COORDINATORS
        </h1> */}
        <div className="justify-self-center md:col-span-2">
          <Person
            img={Rohit}
            name="Dr. Roheet Bhatnagar"
            post="Directorate of Research"
            link1="https://www.linkedin.com/in/dr-roheet-bhatnagar-79ba8015/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/roheet-bhatnagar.html"
          />
        </div>
        <div className="md:col-span-2">
          <Person
            img={UmaShankar}
            name="Dr. Umashankar Rawat"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
          />
        </div>
        <div className="md:col-span-2">
          <Person
            img={AmitKumarBairwa}
            name="Dr. Amit Kumar Bairwa"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/dr-amit-kumar-bairwa-460aaaa9/?originalSubdomain=in"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/Amit-Kumar-Bairwa.html"
          />
        </div>
      </div>
      <div className="pageSeparator" />
      {/* dsw */}
      <div className="grid grid-flow-col grid-cols-7 my-20 justify-center items-center mx-12">
        <div className="justify-self-center col-span-6">
          <Person
            img={Sanchit}
            name="Dr. Sanchit Anand"
            post="Assistant Director, Directorate of Student's Welfare"
            link1="https://www.linkedin.com/in/dr-sanchit-anand-4a9112105/"
            link2="https://jaipur.manipal.edu/muj/academics/institution-list/foe/schools-faculty/faculty-list/Sanchit-Anand.html"
          />
        </div>
        <Image height={200} width={100} src={h3} className="col-span-1" />
      </div>
      <div className="pageSeparator" />
      {/* Exec */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <Image
          height={300}
          width={600}
          src={h4}
          className="justify-self-center pb-6
          md:hidden
          hidden
          lg:block"
        />{" "}
        <Image
          height={300}
          width={500}
          src={h4}
          className="justify-self-center pb-6
        md:block
        hidden
        lg:hidden"
        />{" "}
        <Image
          height={300}
          width={400}
          src={h4}
          className="justify-self-center pb-6
          md:hidden
          block
          lg:hidden"
        />
        <div className="gap-6 grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 justify-evenly w-[100vw]">
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
              img={Raunak}
              name="Raunak Saxena"
              post="Managing Director"
              link1="https://www.linkedin.com/in/raunaksaxena193"
              link2="https://instagram.com/raunak.saxena.50?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
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
          <div>
            <Person
              img={VishalRai}
              name="Vishal Rai"
              post="Human Resource Director"
              link1="https://www.linkedin.com/in/vishal-rai-770464222"
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
              img={AdarshDevashish}
              name="Adarsh Devashish"
              post="Webmaster"
              link1="https://www.instagram.com/adarsh_2403/"
              link2="https://github.com/AdarshDevashish"
            />
          </div>
          <div>
            <Person
              img={AnshPorwal}
              name="Ansh Porwal"
              post="Research Head"
              link1="https://www.linkedin.com/in/ansh-porwal-b428211b8"
              link2="https://instagram.com/anshporwal31?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
          </div>
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Core */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="heads justify-self-center md:text-8xl text-7xl mb-6">
          HEADS
        </h1>
        <div className="gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-evenly w-[100vw]">
        <div>
            <Person
              img={AryanShah}
              name="Aryan Shah"
              post="Deputy Secretary"
              link1="https://www.linkedin.com/in/vishal-rai-770464222"
              link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html" //Insta USerId is given Need Link Instead
            />
          </div>
          <div>
            <Person
              img={Kartikey}
              name="Kumar Kartikay"
              post="Community Manager" 
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={Darshan}
              name="Darshan Baingani"
              post="Logistics Head"
              link1="https://www.linkedin.com/in/darshan-baingani/"
              link2="https://instagram.com/darshanj13"
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
              link1="https://instagram.com/aditijain.thv?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/aditi-jain-09ab53244"
            />
          </div>
          
          <div>
            <Person
              img={HarshKamra}
              name="Harsh Kamra" 
              post="Joint Head of Graphic Design"
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={JainilShah}
              name="Jainil Shah"
              post="Joint Head of Research"
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={Chitransh}
              name="Chitransh Saxena"
              post="Joint Head Technical"
              link1="www.linkedin.com/in/chitranshatlkdin"
              link2="https://www.instagram.com/_.chitransh_saxena._/"
            />
          </div>
          <div>
            <Person
              img={RanojitPalit}
              name="Ranojit Palit"
              post="Joint Head of Curations" 
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={Sarthak}
              name="Sarthak"
              post="Head of Finance Registration" 
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={Sidharth}
              name="Siddharth Pahwa"
              post="Head of Corporate Affairs" 
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={Anushka}
              name="Anushka Shreya"
              post="Joint Marketing Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //Only Insta userID is provided Need Link instead
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
          <div>
            <Person
              img={Pratyaksh} 
              name="Pratyaksh Singhal"
              post="Joint Logistics Head"
              link1="https://instagram.com/_pratyaksh01?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/pratyaksh-singhal-491799236"
            />
          </div>
          
          <div>
            <Person
              img={Navneet}
              name="Navneet"
              post="Joint Content Head"
              link1="https://www.linkedin.com/in/k-navneet-vishnu-932a5424a"
              link2="https://www.instagram.com/navneetk_1147/"
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
              img={HarshitRawat}
              name="Harshit Rawat"
              post="Joint Head of Events"
              link1="https://www.linkedin.com/in/harshit-rawat-6730571b3?trk=contact-info"
              link2="https://instagram.com/harshitt_rawat?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
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
          {/* ADD MORE HEADS */}
          
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Senior Coordinator */}
      {/* SUMIT😅😅😅 ---> ok bro, Adarsh was here */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="senior justify-self-center">Senior Co-ordinators</h1>
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
            <Person
              img={DhruvRathee}
              name="Dhruv Rathee"
              post="Senior Coordinator Events" 
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={SheryaGupta}
              name="Shreya Gupta"
              post="Senior Coordinator Marekting" 
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={ParthSarrathi}
              name="Parth Sarrathi"
              post="Senior Coordinator Logistics" 
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={AnandGhugare}
              name="Anand Ghugare"
              post="Senior Coordinator Events"
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
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
          <div>
            <Person
              img={Kamya}
              name="Kamya Singh"
              post="Senior Coordinator of Content"
              link1="https://www.instagram.com/invites/contact/?i=554xnfi473ic&utm_content=pj8tkfy"
              link2="https://www.linkedin.com/in/kamya-singh-11b317219"
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
              link1="https://www.linkedin.com/in/ananya-p-23a641208"
              link2="https://instagram.com/ananyaaa_16?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
          </div>
          
          
          <div>
            <Person
              img={AnantSharma}
              name="Anant Sharma"
              post="Senior Coordinator of Technical"
              link1="www.linkedin.com/in/"
              link2="https://www.instagram.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
