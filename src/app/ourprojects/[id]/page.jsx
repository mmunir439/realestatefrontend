"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import axios from "axios";
import Footer from "@/components/Footer";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
    title: "Porium Mall Munir Hills",
    location: "Main Munir Hills Boulevard",
    description:
      "A beautifully designed fountain at the center of Munir Hills, perfect for relaxation and social gatherings.",
  },
  {
    id: 3,
    img: "/centorous.png",
    title: "Centorous Tower",
    location: "Prime City Center in Islamabad",
    description:
      "High-end commercial tower designed for branded outlets and businesses.",
  },
  {
    id: 4,
    img: "/d17.png",
    title: "D17 Commercial",
    location: "D17 Islamabad",
    description:
      "Spacious commercial units with modern facilities and ample parking.",
  },
  {
    id: 5,
    img: "/hills.png",
    title: "Munir Hills Mall",
    location: "Munir Hills Main Boulevard",
    description:
      "Retail-focused project with wide shopfronts and high customer footfall.",
  },
  {
    id: 6,
    img: "/g13.png",
    title: "G13 Housing Commercial Society",
    location: "G13 Islamabad",
    description:
      "Avenue-style commercial spaces ideal for showrooms and franchises.",
  },
];

export default function ProjectDetailsPage() {
    const [form, setForm] = useState({
        email: "",
        phone: "",
        username: "",
      });
       const [successMsg, setSuccessMsg] = useState("");
        const [loading, setLoading] = useState(false); // <-- New loading state
      
        const handleChange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true); // Start loading
      
          try {
            const res = await axios.post("http://localhost:5000/callback/register", form);
      
            setSuccessMsg("Your request has been submitted successfully!");
            setForm({ email: "", phone: "", username: "" });
            setTimeout(() => setSuccessMsg(""), 3000);
          } catch (err) {
            console.log(err);
            setSuccessMsg("Failed! Try again.");
          } finally {
            setLoading(false); // Stop loading
          }
        };
      
    const residentialPrices = [
  { size: "5.56 Marla", totalPrice: "2,780,000", registration: "15,000", booking: "595,000" },
  { size: "8 Marla", totalPrice: "3,810,000", registration: "15,000", booking: "725,000" },
  { size: "10.8 Marla", totalPrice: "4,910,000", registration: "15,000", booking: "845,000" },
  { size: "14.2 Marla", totalPrice: "6,080,000", registration: "15,000", booking: "1,125,000" },
  { size: "1 Kanal", totalPrice: "8,040,000", registration: "15,000", booking: "1,265,000" },
  { size: "2 Kanal", totalPrice: "15,080,000", registration: "15,000", booking: "1,555,000" },
];
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p className="text-center p-10">Project not found!</p>;

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
          <img
            src={project.img}
              alt={project.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6 text-gray-900">
          {project.title}
        </h1>

        <p className="text-gray-600 mt-2">{project.location}</p>

        <p className="text-gray-700 mt-4">{project.description}</p>
      </div>
    </section>
    <section className="bg-[#f9f5ec] text-[#2d2d2d] py-16">
      <div className="max-w-4xl mx-auto px-4 leading-relaxed">
        {/* Small label */}
        <p className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
          Overview
        </p>

        {/* Big title */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          {project.title}
        </h1>

        {/* Body text */}
        <p className="mb-4 text-[15px] md:text-base text-gray-700">
          {project.title} is an exclusive residential project in the heart
          of Islamabad. It is one of the few projects that gained popularity
          and attention soon after its inception. Some of the major reasons
          behind its popularity are its prime location and the novel facilities
          offered by its developers. It is primarily located at Thalian
          Interchange on the Lahore Islamabad M2 motorway. Moreover, it has
          close accessibility from the Rawalpindi Ring Road and Chakri Road
          interchange. Interestingly, these access points make it the only
          society equally connected to Islamabad and Rawalpindi.
        </p>

        <p className="text-[15px] md:text-base text-gray-700">
          Furthermore, it has been designed to have world-class architecture
          with picturesque surroundings. Its master plan comprises various
          residential blocks and a specified Commercial Business District. All
          of these have been designed according to international standards with
          state-of-the-art facilities. The developers have also made sure to
          present this project as one of the most affordable. So {project.title}
          is a perfect blend of luxury and affordability.
        </p>
      </div>
    </section>
    <section className="bg-[#f5faf7] text-[#222] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Big title (same font feel as screenshot) */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          {project.title} Master Plan
        </h2>

        {/* Intro paragraph */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-2 text-center">
          {project.title} master plan has been recently revealed
          by the authorities. Being designed by an experienced team of
          architects, it depicts an excellent implementation of modern
          infrastructure principles and quality development.
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-10 text-center">
          The master plan comprises various purpose-built mixed-use multiple
          types and sizes. {project.title} covers a massive area of
          approximately.
        </p>

        {/* Three columns like screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
          {/* Blocks */}
          <div>
            <div className="bg-[#e9fff5] px-4 py-2 font-semibold border-b border-[#e0f7ec]">
              Blocks
            </div>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-800">
              <li>General Block</li>
              <li>Overseas Block</li>
            </ul>
          </div>

          {/* Districts */}
          <div>
            <div className="bg-[#e9fff5] px-4 py-2 font-semibold border-b border-[#e0f7ec]">
              Districts
            </div>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-800">
              <li>Commercial Business District</li>
              <li>Lake District</li>
              <li>Education City</li>
            </ul>
          </div>

          {/* Features (right column bullets) */}
          <div className="mt-7 md:mt-0">
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              <li>A mix of residential and commercial plots</li>
              <li>Green belts, parks, and community spaces</li>
              <li>State-of-the-art infrastructure and road networks</li>
            </ul>
          </div>
        </div>

        {/* Bottom line text */}
        <p className="text-sm md:text-base text-gray-700 mt-10">
          The available plot sizes in this town are listed below:
        </p>
      </div>
    </section>
    <section className="bg-[#f5faf7] text-[#222] py-12">
      <div className="max-w-5xl mx-auto px-4 text-sm md:text-base">
        {/* Optional: connect title with previous sections */}
        {/* <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          {project.title} Plot Sizes
        </h2> */}

        {/* Two-column plots heading + lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Residential Plots */}
          <div>
            <div className="bg-[#e9fff5] px-4 py-2 font-semibold border-b border-[#e0f7ec]">
              Residential Plots
            </div>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-800">
              <li>5 Marla</li>
              <li>10 Marla</li>
              <li>1 Kanal</li>
            </ul>
          </div>

          {/* Commercial Plots */}
          <div>
            <div className="bg-[#e9fff5] px-4 py-2 font-semibold border-b border-[#e0f7ec]">
              Commercial Plots
            </div>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-800">
              <li>2 Kanal</li>
              <li>4 Kanal</li>
              <li>8 Kanal</li>
              <li>12 Kanal</li>
            </ul>
          </div>
        </div>

        {/* Bottom description line */}
        <p className="text-gray-700 leading-relaxed">
          The most distinct feature of these plots is that they are available
          in 12 multiple categories to let you have multiple options to choose
          from. Consider visiting the{" "}
          <span className="font-semibold">
            {project.title} Commercial Plots
          </span>{" "}
          for further details about the payment plan, or the booking procedure.
        </p>
      </div>
    </section>
    <section className="bg-[#f5f5f5] py-10">
      <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          {/* Header */}
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-3 text-left w-1/4">Size</th>
              <th className="px-4 py-3 text-left w-1/4">
                Total Price <span className="font-normal text-[11px] md:text-xs">
                  (Excluding Registration Fee)
                </span>
              </th>
              <th className="px-4 py-3 text-left w-1/4">Registration Fee</th>
              <th className="px-4 py-3 text-left w-1/4">Booking</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {residentialPrices.map((row, idx) => (
              <tr key={idx} className="border-b border-[#f0e0b5]">
                {/* Size */}
                <td className="px-4 py-3 bg-[#ffecc4] text-black">{row.size}</td>

                {/* Total Price */}
                <td className="px-4 py-3 bg-[#ffecc4] text-black">{row.totalPrice}</td>

                {/* Registration Fee (orange column) */}
                <td className="px-4 py-3 bg-[#ffb53c] text-black font-medium">
                  {row.registration}
                </td>

                {/* Booking */}
                <td className="px-4 py-3 bg-[#ffecc4] text-black">{row.booking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    <section className="bg-[#fff7e6] py-16">
 <section className="bg-[#fff7e6] py-16">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
    {/* Left: heading + form */}
    <div className="w-full md:w-2/3">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222]">
        For Booking
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        If you want to book a plot in {project.title}, let&apos;s submit your
        phone number to request a call from{" "}
        <span className="font-semibold">{project.title}</span>.
      </p>

      {/* Success message (shows after submit) */}
      {successMsg && (
        <p className="mb-4 text-sm font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded">
          {successMsg}
        </p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div className="text-black">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffb53c]"
          />
        </div>

        <div className="text-black">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffb53c]"
          />
        </div>

        <div className="text-black">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffb53c]"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-40 bg-[#ffb53c] hover:bg-[#ffaa21] text-white font-medium py-2 rounded-sm transition-colors"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>

    {/* Right: image + contact card */}
    <div className="w-full md:w-1/3 flex md:justify-end">
      <div className="relative">
        {/* Random placeholder image for now */}
        <img
          src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Booking representative"
          className="w-full max-w-xs rounded-md object-cover"
        />

        {/* Floating contact card */}
        <div className="absolute -bottom-6 left-4 bg-white shadow-md rounded-md px-5 py-4 text-sm text-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#14a44d] text-white text-lg">
              <FaPhoneSquareAlt />
            </span>
            <span>+92 321-8661039</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#14a44d] text-white text-lg">
              <SiGmail />
            </span>
            <span>munir.webdev@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</section>

    <Footer />
    </>
  );
}
