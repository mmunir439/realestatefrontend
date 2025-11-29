"use client";
import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RiBuilding2Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { RiTeamFill } from "react-icons/ri";
import Vision from "@/components/Vision";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Aboutpage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      {/* Top banner image */}
      <div>
        <img className="w-full h-auto" src="/about.png" alt="About banner" />
      </div>

      {/* Content section: text left, video right */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 items-start">
        {/* Left: text */}
        <div>
          <h1 className="text-orange-500 text-2xl md:text-3xl font-semibold flex items-center gap-2 mb-3">
            <TfiLayoutLineSolid />
            Javid Hills Exclusive
            <TfiLayoutLineSolid />
          </h1>

          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
            Welcome To Faisal Hill&apos;s
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
            Nestled against the majestic Margalla Hills, Faisal Hills is a premium
            residential community that offers a harmonious blend of modern living
            and natural serenity. Strategically located near Taxila and easily
            accessible from the GT Road, this housing society provides a peaceful
            escape from the hustle of the city while remaining well-connected to
            Islamabad and Rawalpindi.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mt-3">
            Developed by Zedem International, Faisal Hills promises quality
            infrastructure, wide roads, lush green parks, and a secure environment
            that meets the lifestyle needs of families and investors alike.
            With a variety of residential and commercial plots, it is designed to
            cater to both contemporary living and long-term investment.
          </p>
        </div>

        {/* Right: responsive YouTube video */}
        <div className="w-full">
          <div className="relative w-full overflow-hidden rounded-lg shadow-md aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/yna_o7cCjew"
              title="Faisal Hills Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-evenly gap-6 py-8 bg-[#f9f9f9]">
  {/* Current Projects */}
  <div className="flex items-center gap-3">
    <RiBuilding2Line size={40} className="text-orange-500" />
    <p className="text-sm md:text-base text-gray-900">
      Current Projects{" "}
      <span className="font-semibold">4+</span>
    </p>
  </div>

  {/* Client Satisfaction */}
  <div className="flex items-center gap-3">
    <IoIosPeople size={40} className="text-orange-500" />
    <p className="text-sm md:text-base text-gray-900">
      Client Satisfaction{" "}
      <span className="font-semibold">100+</span>
    </p>
  </div>

  {/* Awards Winning */}
  <div className="flex items-center gap-3">
    <LiaAwardSolid size={40} className="text-orange-500" />
    <p className="text-sm md:text-base text-gray-900">
      Awards Winning{" "}
      <span className="font-semibold">2+</span>
    </p>
  </div>

  {/* Professional Team */}
  <div className="flex items-center gap-3">
    <RiTeamFill size={40} className="text-orange-500"/>
    <p className="text-sm md:text-base text-gray-900">
      Professional Team{" "}
      <span className="font-semibold">40+</span>
    </p>
  </div>
</div>
<Vision/>
<Footer />
    </div>
  );
}
