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
      "You can contact us on our number 032186661039. You can also visit our offices located in Lahore and Islamabad.",
  },
  {
    question: "Why should we trust Faisal Hills Exclusive?",
    answer:
      "Faisal Hills Exclusive focuses on research, verification and long‑term client value before recommending any project.",
  },
];

const ContactPage = () => {
  const [showCallback, setShowCallback] = useState(false); // <-- show/hide popup
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/callback/register", form);

      setSuccessMsg("Your request has been submitted successfully!");
      setForm({ username: "", email: "", phone: "" });

      setTimeout(() => {
        setSuccessMsg("");
        setShowCallback(false); // hide popup after success
      }, 3000);
    } catch (err) {
      console.log(err);
      setSuccessMsg("Failed! Try again.");
      setTimeout(() => setSuccessMsg(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f6f7]">
        {/* Hero Section */}
        <section className="relative w-full">
          <img
            src="/hero.png"
            alt="Contact Banner"
            className="w-full h-[320px] object-cover"
          />
        </section>

        {/* CTA Buttons */}
        <section className="py-10 flex flex-col items-center gap-4">
          <p className="text-3xl font-bold text-[#022b3a]">Got Any Questions?</p>
          <p className="max-w-xl text-center text-gray-600">
            We would love to answer any questions you might have.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="/ourprojects"
              className="px-6 py-3 bg-[#f4a340] text-white font-semibold rounded"
            >
              Our Projects
            </Link>
            <button
              className="px-6 py-3 bg-[#022b3a] text-white font-semibold rounded"
              onClick={() => setShowCallback(true)}
            >
              Book a call
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#f4a340] font-semibold">- Questions -</p>
            <h2 className="mt-2 text-center text-3xl font-bold text-[#022b3a]">
              Popular Questions
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Ask us what you really want to know and let us help you.
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

        {/* Callback Form Popup */}
        {showCallback && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setShowCallback(false)}
              >
                ×
              </button>

              <h2 className="text-xl font-bold text-green-700 mb-3">Request A Call Back</h2>

              {successMsg && <p className="text-green-700 font-medium mb-3">{successMsg}</p>}

              <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full p-2 mb-4 border rounded-md text-black"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 mb-4 border rounded-md text-black"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-full p-2 mb-4 border rounded-md text-black"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-700 text-white px-5 py-2 rounded-md w-full"
                  disabled={loading}
                >
                  {loading ? "Requesting..." : "Request a Call Back"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <FooterLikeComponent />
    </>
  );
};

export default ContactPage;
