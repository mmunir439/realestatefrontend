"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const topontext = {
    heading: "Find Your Dream Property with Faisal Hills Exclusive",
    subheading:
      "Trusted by thousands for creating value-driven real estate journeys",
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/front.png"
          alt="Faisal Hills hero image"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg leading-tight">
            {topontext.heading}
          </h1>

          <p className="mt-3 text-lg md:text-2xl max-w-2xl drop-shadow-md">
            {topontext.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/ourprojects"
              className="px-6 py-3 bg-[#f4a340] text-white font-semibold rounded hover:bg-[#d88d2f]"
            >
              Explore Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#022b3a] font-semibold rounded hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* TEXT BELOW IMAGE */}
      <div className="text-center p-2 text-sm text-green-900 tracking-widest font-semibold bg-[#f1f5f9]">
        FOR IIUI BSCS F22 INTRODUCTION TO MANAGEMENT QUERY PLEASE VISIT HERE
      </div>
    </>
  );
}
