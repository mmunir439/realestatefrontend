"use client";

import React, { useState } from "react";
import {
  FaMobileAlt,
  FaExchangeAlt,
  FaChartLine,
  FaUserTie,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import axios from "axios";

const FooterLikeComponent = () => {
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

  const menuItems = [
    "Home",
    "Projects",
    "Buy/Sell Plots",
    "Services",
    "About Us",
    "Contact Us",
  ];
  const routes = ["/", "/ourprojects", "/buysellplots", "/services", "/about", "/contact"];

  const projectItems = [
    "Faisal Hills Islamabad",
    "centorous Mall",
    "D17 islamabad",
    "g13 Islamabad",
    "J7 Plaza",
    "Faisal Town Phase 2",
  ];

  return (
    <div className="font-sans bg-green-100 text-gray-800">
     

      {/* Feature Bar */}
      <div className="flex justify-around items-center bg-green-600 p-5 text-white text-center flex-wrap">
        {[
          { icon: <FaMobileAlt />, text: "Easy Booking" },
          { icon: <FaExchangeAlt />, text: "Flexible Plans" },
          { icon: <FaChartLine />, text: "High Returns" },
          { icon: <FaUserTie />, text: "Expert Support" },
          { icon: <FaCheckCircle />, text: "Trusted Deals" },
        ].map((item, index) => (
          <div key={index} className="flex-1 p-3 min-w-[120px]">
            <div className="text-4xl bg-white/30 p-3 rounded-full inline-block">
              {item.icon}
            </div>
            <div className="font-bold text-lg mt-2">{item.text}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between p-10 max-w-6xl mx-auto flex-wrap">
        {/* Main Menu */}
        <div className="min-w-[200px] p-4 flex-1">
          <div className="text-xl font-bold text-green-700 mb-3">Main Menu</div>
          <ul>
            {menuItems.map((item, index) => (
              <li key={item} className="mb-2 text-base">
                <a href={routes[index]} className="text-gray-800">
                  • {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="min-w-[200px] p-4 flex-1">
          <div className="text-xl font-bold text-green-700 mb-3">Projects</div>
          <ul>
            {projectItems.map((item, index) => (
              <li key={item} className="mb-2 text-base">
                <a href={routes[index]} className="text-gray-800">
                  • {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Logo */}
        <div className="flex-1 text-center flex flex-col items-center p-4">
          <div className="text-4xl font-bold text-orange-500 mb-5 leading-tight drop-shadow">
            JAVID HILLS <br /> EXCLUSIVE
          </div>

          <div className="text-left space-y-2">
            <div className="flex gap-2 items-center text-base">
              <FaPhoneAlt /> 03195803212
            </div>
            <div className="flex gap-2 items-center text-base">
              <FaPhoneAlt /> 03417123536
            </div>
            <div className="flex gap-2 items-center text-base">
              <FaEnvelope /> munir.webdev@gmail.com
            </div>
          </div>
        </div>

        {/* Request A Call Back */}
        <div className="min-w-[250px] p-4 flex-1">
          <div className="text-xl font-bold text-green-700 mb-3">
            Request A Call Back
          </div>

          {successMsg && (
            <p className="text-green-700 font-medium mb-3">{successMsg}</p>
          )}

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border rounded-md"
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="w-full p-2 mb-4 border rounded-md"
            />

            <button
              type="submit"
              className="bg-gray-700 text-white px-5 py-2 rounded-md"
              disabled={loading} // disable button while loading
            >
              {loading ? "Requesting..." : "Request a Call Back"} {/* change text */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterLikeComponent;
