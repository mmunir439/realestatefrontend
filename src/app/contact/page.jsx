"use client";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "@/components/Header";
import FooterLikeComponent from "@/components/Footer";
const faqs = [
  {
    question: "How can we contact Faisal Hills Exclusive?",
    answer:
      "You can contact us on our number 03218661039. You can also visit our offices located in Lahore and Islamabad.",
  },
  {
    question: "Why should we trust Faisal Hills Exclusive?",
    answer:
      "Faisal Hills Exclusive focuses on research, verification and long‑term client value before recommending any project.",
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", phone: "", message: "" }); // reset form
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f6f7]">
        {/* Hero */}
        <section className="relative w-full">
  <img
    src="/hero.png"
    alt="Contact Banner"
    className="w-full h-[320px] object-cover"
  />
</section>


      {/* CTA buttons */}
      <section className="py-10 flex flex-col items-center gap-4">
        <p className="text-3xl font-bold text-[#022b3a]">Got Any Questions?</p>
        <p className="max-w-xl text-center text-gray-600">
          We would love to answer any questions you might have and provide you
          with possible answers and solutions.
        </p>
        <div className="mt-4 flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-[#f4a340] text-white font-semibold rounded"
          >
            Our Projects
          </Link>
          <Link
            href="/book-call"
            className="px-6 py-3 bg-[#022b3a] text-white font-semibold rounded"
          >
            Book a call
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#f4a340] font-semibold">- Questions -</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-[#022b3a]">
            Popular Questions
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Ask us what you really want to know and let us help you with the most
            reasonable solution.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((item, i) => (
              <details key={i} className="bg-[#022b3a] text-white rounded">
                <summary className="cursor-pointer px-4 py-3 font-semibold">
                  {item.question}
                </summary>
                <div className="bg-white text-gray-800 px-4 py-3">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Offices + Form */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Offices */}
          <div>
            <p className="text-gray-700 mb-6">
              We would be happy to answer any questions you might have and provide you with further information.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#022b3a]">Head Office</h3>
                <p className="text-sm text-gray-600">+923218661039</p>
              </div>
              <div>
                <h3 className="font-bold text-[#022b3a]">Islamabad Office</h3>
                <p className="text-sm text-gray-600">+923218661039</p>
              </div>
              <div>
                <h3 className="font-bold text-[#022b3a]">Rawalpindi Office</h3>
                <p className="text-sm text-gray-600">+923218661039</p>
              </div>
            </div>

            <p className="mt-6 font-semibold text-[#022b3a]">Follow Us On Social Media</p>
            <div className="mt-3 flex gap-3">
<div className="mt-3 flex gap-3">
  <a
    href="https://www.linkedin.com/in/munirdev/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:bg-[#084c8c] transition"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/munirdev"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#333] text-white hover:bg-[#111] transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.facebook.com/munirdev"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:bg-[#0f5ac1] transition"
  >
    <FaFacebook />
  </a>
</div>

            </div>
          </div>

          {/* Form */}
          {/* Form */}
<form
  onSubmit={handleSubmit}
  className="bg-white p-6 rounded shadow text-black"
>
  <div className="space-y-4">
    {/* Name full width */}
    <div>
      <label className="block text-sm font-semibold mb-1">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f4a340]"
        placeholder="Name"
        required
      />
    </div>

    {/* Email + Phone in two columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-semibold mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f4a340]"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f4a340]"
          placeholder="Your Phone"
          required
        />
      </div>
    </div>

    {/* Message full width */}
    <div>
      <label className="block text-sm font-semibold mb-1">
        Message <span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f4a340]"
        placeholder="Your Message"
        required
      />
    </div>

    {/* Submit button aligned left like screenshot */}
    <button
      type="submit"
      className="inline-block px-10 py-2 bg-[#f4a340] text-white font-semibold rounded shadow-sm hover:bg-[#d88b2f] transition"
    >
      Submit
    </button>
  </div>
</form>

        </div>
      </section>
    </main>
    <FooterLikeComponent/>
    </>
  );
};

export default ContactPage;
