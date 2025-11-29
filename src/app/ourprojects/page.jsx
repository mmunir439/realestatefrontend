"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";
import Link from "next/link";

const projects = [
  {
    id: 1,
    img: "/j7plaza.png",
    title: "J7 Plaza",
    location: "GT Road, Islamabad",
    description:
      "J7 Plaza is a modern commercial complex offering premium office spaces and retail outlets.",
  },
  {
    id: 2,
    img: "/faisal.png",
    title: "Porium Mall faisal hills",
    location: "Main faisal hills ",
    description:
      "A beautifully designed fountain at the center of Faisal Hills, perfect for relaxation and social gatherings.",
  },
  {
    id: 3,
    img: "/centorous.png",
    title: "Centorous Tower",
    location: "Prime City Cente in islamabad",
    description:
      "High-end commercial tower designed for branded outlets and businesses.",
  },
  {
    id: 4,
    img: "/d17.png",
    title: "d17 Commercial",
    location: "D17 islamabad",
    description:
      "Spacious commercial units with modern facilities and ample parking.",
  },
  {
    id: 5,
    img: "/hills.png",
    title: "Faisal Hills Mall",
    location: "Faisal Hills Main Boulevard",
    description:
      "Retail-focused project with wide shopfronts and high customer footfall.",
  },
  {
    id: 6,
    img: "/g13.png",
    title: "G13 housing commercial society",
    location: "G13 housing society islamabad",
    description:
      "Avenue-style commercial spaces ideal for showrooms and franchises.",
  },
];

export default function OurProjectsPage() {
  return (
    <section className="bg-[#f8fafc] py-16 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-lg font-bold tracking-[0.2em] text-amber-500 uppercase">
          Our Projects
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          Featured Projects
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-700">
          Discover the Finest Real Estate Opportunities
        </p>

        <p className="mt-2 text-sm md:text-base text-gray-600">
          We specialize in premium real estate developments, providing secure
          and profitable investment avenues.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto mt-10 px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <Link key={project.id} href={`/ourprojects/${project.id}`}>
      <div
        className="bg-gray-100 rounded-xl shadow-sm overflow-hidden
                   transition-all duration-300 ease-out
                   hover:bg-gray-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-40 object-cover transition-transform duration-300 ease-out hover:scale-105"
        />
        <div className="p-4 text-left">
          <h3 className="text-lg font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{project.location}</p>
          <p className="text-sm text-gray-700 mt-2">{project.description}</p>
        </div>
      </div>
    </Link>
  ))}
</div>


    </section>
  );
}
