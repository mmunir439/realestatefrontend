"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center px-4 md:px-6 lg:px-8">
        {/* LEFT: Image */}
        <div className="w-full">
          <img
            src="welcome.png" // your image path
            alt="Munir Hills"
            className="w-full h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* RIGHT: Text */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Welcome To Munir Hills
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            your trusted gateway to premium real estate projects, including the
            renowned Munir Hills Islamabad. As the leading platform for real
            estate opportunities, we offer an extensive selection of Munir
            Hills plots for sale that cater to both investors and homebuyers.
            Explore prime locations such as Munir Hills D Block, known for its
            modern infrastructure and scenic surroundings. With seamless
            connectivity to key areas like Munir Town, Munir Margalla City,
            and Munir Town Phase 2, we ensure a lifestyle of convenience,
            comfort, and unparalleled growth potential.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            we also feature other esteemed developments such as Munir
            Residencia, Multi Garden, and Multi Garden Phase 2, providing
            diverse options for those seeking quality living spaces or lucrative
            investment opportunities. Discover the elegance of Munir Jewel, a
            project designed to deliver sophistication and contemporary living.
            With a focus on affordability, sustainability, and innovation,
            Munirhills.com.pk remains your trusted partner in navigating
            Islamabad’s thriving real estate market. Visit us today to explore
            the best of Munir Hills and beyond!
          </p>
        </div>
      </div>
    </section>
  );
}
