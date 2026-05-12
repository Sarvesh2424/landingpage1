"use client";

import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import React, { useState } from "react";
import FeaturesList from "@/components/FeaturesList";
import RealTime from "@/components/RealTime";
import AIFeatures from "@/components/AIFeatures";
import CompleteSystem from "@/components/CompleteSystem";
import WhyChoose from "@/components/WhyChoose";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BuiltByExperts from "@/components/BuiltByExperts";
import Footer from "@/components/Footer";

// ── Page ──────────────────────────────────────────────────────────
export default function HRLandingPage() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <FeaturesList />
      <RealTime />
      <AIFeatures />
      <CompleteSystem />
      <WhyChoose />
      <Pricing />
      <Testimonials />
      <BuiltByExperts />
      <Footer />
    </div>
  );
}