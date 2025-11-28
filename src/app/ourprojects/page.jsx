"use client";
import React from "react";
import Projects from '@/components/Projects';
import Header from '@/components/Header';
import FooterLikeComponent from '@/components/Footer';
export default function OurProjectsPage() {
  return (
    <>
      <Header />
      <Projects />
      <FooterLikeComponent />
    </>
  );
}