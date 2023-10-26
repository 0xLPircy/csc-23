// "use client";
// import React from "react";
// import Link from "next/link";
// import NewsletterCard from "../components/NewsletterCard";
// import { useState, useEffect } from "react";

// const NewsletterPage = () => {
//   const [newsletters, setNewsletters] = useState([]);
//   useEffect(() => {
//     // Fetch the JSON data when the component mounts
//     fetchNewsletters();
//   }, []);

//   const fetchNewsletters = async () => {
//     try {
//       const response = await fetch("./newsletters.json");
//       // console.log(response);
//       const data = await response.json();
//       // console.log(data);
//       setNewsletters(data);
//     } catch (error) {
//       console.error("Error fetching JSON:", error);
//     }
//   };
//   return (
//     <>
//       <div
//         id="main"
//         className="text-[#f3f3f3] grid justify-center items-center"
//       >
//         <h1 className="mt-32 justify-self-center text-4xl">Newsletters</h1>
//         <div className="nlDisplay">
//           {newsletters.map((newsletter) => (
//             <div
//               key={newsletter.title}
//               className="newsletter-card text-[#f3f3f3]"
//             >
//               <NewsletterCard
//                 title={newsletter.title}
//                 date={newsletter.date}
//                 description={newsletter.description}
//                 nlink={newsletter.link}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsletterPage;
import React from "react";

const fourofourpage = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] grid grid-cols-1 justify-center items-center coveragebg">
        <h1 className="justify-self-center text-7xl text-[#eeeeee]">
          Previous Events to be displayed......
        </h1>
      </div>
      <div className="pageSeparator"></div>
    </>
  );
};

export default fourofourpage;
