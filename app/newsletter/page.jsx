"use client";
import React from "react";
import Link from "next/link";
import NewsletterCard from "../components/NewsletterCard";
import { useState, useEffect } from "react";

const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState([]);
  useEffect(() => {
    // Fetch the JSON data when the component mounts
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await fetch("./newsletters.json");
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      setNewsletters(data);
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  };
  return (
    <>
      <div
        id="main"
        className="text-[#f3f3f3] grid justify-center items-center newsbg"
      >
        <h1 className="mt-32 mb-5 justify-self-center text-6xl text-[#ff8c32]">Newsletter</h1>
        <div className="pageSeparator" />
        <div className="mb-8"></div>
        <div className="nlDisplay">
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
        </div>
        <div className="mb-5"></div>
        <div className="pageSeparator" />
      </div>
    </>
  );
};

export default NewsletterPage;
