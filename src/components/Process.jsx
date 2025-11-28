"use client";
import React from "react";
import { RiBuilding2Line } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { FaRestroom } from "react-icons/fa";

import { FaPeopleArrows, FaBookReader, FaFileSignature } from "react-icons/fa";
import { IoCloudDone } from "react-icons/io5";

const steps = [
  {
    number: "01.",
    title: "Initial Consultation",
    icon: FaPeopleArrows,
    points: [
      "Contact our team and share your requirements, preferences, and budget.",
      "Our consultants will assess your needs and provide tailored solutions.",
    ],
  },
  {
    number: "02.",
    title: "Explore Options",
    icon: FaBookReader,
    points: [
      "Review a list of recommended properties based on your requirements.",
      "Receive detailed insights about project amenities, locations, and pricing.",
    ],
  },
  {
    number: "03.",
    title: "Site Visit Or Virtual Tour",
    icon: IoCloudDone,
    points: [
      "Visit the property physically or opt for a virtual tour to understand the project better.",
      "Clarify all your questions and ensure the property meets your expectations.",
    ],
  },
  {
    number: "04.",
    title: "Finalize Your Choice",
    icon: FaPeopleArrows,
    points: [
      "Select the property that aligns with your goals.",
      "Receive professional guidance for making an informed decision.",
    ],
  },
  {
    number: "05.",
    title: "Booking And Documentation",
    icon: FaFileSignature,
    points: [
      "Complete the booking process by submitting necessary documents and making the initial payment.",
      "We’ll assist you with all legal and financial formalities for a smooth transaction.",
    ],
  },
  {
    number: "06.",
    title: "Ownership Transfer",
    icon: IoCloudDone,
    points: [
      "Once all processes are verified, ownership is officially transferred to your name.",
      "Receive your documents and enjoy peace of mind as a property owner.",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f8fafc] py-16">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-amber-500 font-semibold text-sm tracking-[0.2em] uppercase">
          Process
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700">
          There is a lengthy and complicated process of finding, getting, and
          transferring a particular property to your name. But you don&apos;t
          have to worry as far as Faisal Hill&apos;s is with you!
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto mt-10 px-4 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {steps.map((step) => {
          const Icon = step.icon; // dynamic icon
          return (
            <div key={step.number} className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-white shadow flex items-center justify-center">
                <Icon className="text-amber-500 text-3xl" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="text-amber-500 mr-1">{step.number}</span>
                  {step.title}
                </h3>

                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  {step.points.map((p, i) => (
                    <li key={i} className="list-disc list-outside ml-4">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    <section className="bg-white py-12 md:py-16">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT: Photo */}
    <div>
      <img
        src="me.jpg"  // update your path
        alt="Rana Waseem"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </div>

    {/* RIGHT: Text */}
    <div className="text-gray-800 text-sm md:text-base leading-relaxed">
      <p>
        For all inquiries, assistance, and reliable dealings regarding Faisal Hills
        Islamabad, Faisal Town, Faisal Hills plots for sale, and associated projects,
        connect with Rana Waseem via WhatsApp at 03218661039. As the primary
        contact for support and transactions, Rana Waseem is known for his
        integrity, expertise, and commitment to ensuring every investment is
        handled with transparency and professionalism. Whether you&apos;re looking to
        buy, sell, or gather more information about properties like Faisal Hills D
        Block, Faisal Residencia, Multi Garden Phase 2, or Faisal Jewel, you can
        trust that your investments are in safe and trustworthy hands.
      </p>

      <p className="mt-4">
        By choosing Faisalhills.com.pk and working with Rana Waseem, you&apos;re
        partnering with a reliable source that prioritizes your interests and
        delivers exceptional service. Your journey towards owning a premium
        property is guided by honesty, reliability, and a deep understanding of the
        real estate market. Reach out today to experience hassle-free support and
        secure dealings that set the foundation for a prosperous future.
      </p>
    </div>

  </div>
</section>
<img src="comingsoon.png" className="w-full mt-10" alt="Coming Soon" />
<section class="bg-[#f8fafc] py-10">
  <div class="max-w-4xl mx-auto text-center px-4">

    <p class="text-sm font-bold tracking-[0.25em] text-amber-500 uppercase">
      Why Choose Faisal Hills?
    </p>

    <h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
      Vision, Opportunity, Trust!
    </h2>

    <p class="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
      By choosing Faisalhills.com.pk and working with Rana Waseem, you’re partnering
      with a reliable source that prioritizes your interests and delivers exceptional
      service. Your journey towards owning a premium property is guided by honesty,
      reliability, and a deep understanding of the real estate market. Reach out today
      to experience hassle-free support and secure dealings that set the foundation
      for a prosperous future.
    </p>
  </div>
<section class="bg-[#f5f5f5] py-10">
  <div class="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
    <div class="bg-white border border-gray-200 shadow-sm rounded-sm p-6 flex flex-col">
      <div class="mb-4">
       <RiBuilding2Line class="w-10 h-10 text-amber-500" />
      </div>
      <h3 class="text-base font-semibold text-gray-900">
        1. Your Gateway To Prime Investments!
      </h3>
      <p class="mt-3 text-sm text-gray-700 leading-relaxed">
        Faisal Hills offers premium residential and commercial plots in ideal
        locations. Our experts are here to guide you in finding the perfect
        investment that maximizes returns and ensures long-term value.
      </p>
    </div>
    <div class="bg-[#e89b2d] text-white border border-[#e89b2d] shadow-sm rounded-sm p-6 flex flex-col">
      <div class="mb-4">
        <CiBadgeDollar class="w-10 h-10 text-white font-bold" />
      </div>
      <h3 class="text-base font-semibold">
        2. Expert Project Management!
      </h3>
      <p class="mt-3 text-sm leading-relaxed">
        Our dedicated team simplifies the process of acquiring property in
        Faisal Hills. From choosing the right project to managing
        documentation, we provide end-to-end support for a seamless experience.
      </p>
    </div>

    <div class="bg-white border border-gray-200 shadow-sm rounded-sm p-6 flex flex-col">
      <div class="mb-4">
                <FaRestroom class="w-10 h-10 text-amber-500" />
      </div>
      <h3 class="text-base font-semibold text-gray-900">
        3. Customer-Centric Approach!
      </h3>
      <p class="mt-3 text-sm text-gray-700 leading-relaxed">
        We prioritize your satisfaction by offering personalized advice,
        transparent processes, and exceptional after-sales service to make
        your property ownership journey stress‑free.
      </p>
    </div>
  </div>
</section>
      
</section>

    </section>
  );
}
