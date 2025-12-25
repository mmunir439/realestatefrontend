"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 text-gray-800">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Munir Smart Properties
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/contact">Buy/Sell plots</Link>
          <Link href="/ourprojects">Projects</Link>
          {/* <Link href="/blog">Blog</Link> */}
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/login">Login</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden text-gray-800 bg-white px-4 pb-4 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/sell" className="block">Sell</Link>
          <Link href="/buy" className="block">Buy</Link>
          <Link href="/login" className="block">login</Link>
        </nav>
      )}
    </header>
  );
}
