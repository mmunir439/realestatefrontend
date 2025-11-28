"use client";
import Image from "next/image";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Header from "@/components/Header";
import FooterLikeComponent from "@/components/Footer";
export default function Home() {
  async function getUser() {
  try {
    const response = await axios.get("http://localhost:5000/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  getUser();
}, []);

  return (
    <>
      <Header />
      <h1>welcome to realestate app</h1>
      <FooterLikeComponent />
    </>
  );
}
