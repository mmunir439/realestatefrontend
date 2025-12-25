"use client";
import Image from "next/image";
import axios from "axios";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import FooterLikeComponent from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from '@/components/Projects';
import Process  from '@/components/Process';
import Welcome from '@/components/Welcome';
export default function Home() {
  // async function Munir() {
  //   try {
  //     const response = await axios.get("http://localhost:5000/");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   Munir();
  // }, []);

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Welcome />
      <Process />
      <FooterLikeComponent />
    </>
  );
}
