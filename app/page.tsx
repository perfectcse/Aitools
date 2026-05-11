"use client";

import { useState } from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import SpendForm from "../components/spend-form";
import AuditResult from "../components/audit-result";
import Footer from "../components/footer";

type AuditData = {
  tool: string;
  monthlySpend: number;
  teamSize: number;
  yearlySpend: number;
  estimatedSavings: number;
  recommendation: string;
};

export default function HomePage() {

  const [result, setResult] =
    useState<AuditData | null>(null);

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <Features />

      <SpendForm onAnalyze={setResult} />

      <AuditResult result={result} />

      <Footer />

    </main>

  );
}