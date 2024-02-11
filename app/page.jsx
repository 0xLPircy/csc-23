"use client";
import NewsletterCard from "./components/NewsletterCard";
import AboutUs from "./containers/AboutUs";
import CyberSec from "./containers/CyberSec";
import Header from "./containers/Header";
import InstaPosts from "./containers/InstaPosts";
import LatestCoverage from "./containers/LatestCoverage";
import { useEffect, useState } from "react";

export default function Home() {  
  return (
    <>
      <div className="pt-12">
        <Header />
        <div className="pageSeparator"></div>
        <AboutUs />
        <div className="pageSeparator"></div>
        <CyberSec />
        <div className="pageSeparator"></div>
        <InstaPosts />
        {/* <div className="pageSeparator"></div>
        <div className="landingNewsletter grid grid-flow-col grid-cols-3">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.title}
              className="newsletter-card text-[#f3f3f3]"
            >
              <NewsletterCard
                title={newsletter.title}
                date={newsletter.date}
                description={newsletter.description}
                nlink={newsletter.link}
              />
            </div>
          ))}
        </div> */}
        <div className="pageSeparator"></div>
        <LatestCoverage />
        <div className="pageSeparator"></div>
      </div>
    </>
  );
}
