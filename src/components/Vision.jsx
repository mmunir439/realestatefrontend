"use client";

import React from "react";
import { RiBuilding2Line } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { FaRestroom } from "react-icons/fa";

export default function Vision() {
  return (
    <section className="bg-[#f8fafc] py-10">
      {/* Top heading + description */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-500 uppercase">
          Why Choose Munir Hills?
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          Vision, Opportunity, Trust!
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          By choosing Munirhills.com.pk and working with Rana Waseem, you&apos;re
          partnering with a reliable source that prioritizes your interests and
          delivers exceptional service. Your journey towards owning a premium
          property is guided by honesty, reliability, and a deep understanding of
          the real estate market. Reach out today to experience hassle-free
          support and secure dealings that set the foundation for a prosperous
          future.
        </p>
      </div>

      {/* Cards section */}
      <section className="bg-[#f5f5f5] py-10 mt-8">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 flex flex-col">
            <div className="mb-4">
              <RiBuilding2Line className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              1. Your Gateway To Prime Investments!
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Munir Hills offers premium residential and commercial plots in
              ideal locations. Our experts are here to guide you in finding the
              perfect investment that maximizes returns and ensures long-term
              value.
            </p>
          </div>

          {/* Card 2 (highlighted) */}
          <div className="bg-[#e89b2d] text-white border border-[#e89b2d] shadow-sm rounded-sm p-6 flex flex-col">
            <div className="mb-4">
              <CiBadgeDollar className="w-10 h-10 text-white font-bold" />
            </div>
            <h3 className="text-base font-semibold">
              2. Expert Project Management!
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Our dedicated team simplifies the process of acquiring property in
              Munir Hills. From choosing the right project to managing
              documentation, we provide end-to-end support for a seamless
              experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 flex flex-col">
            <div className="mb-4">
              <FaRestroom className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              3. Customer-Centric Approach!
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              We prioritize your satisfaction by offering personalized advice,
              transparent processes, and exceptional after-sales service to make
              your property ownership journey stress‑free.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
