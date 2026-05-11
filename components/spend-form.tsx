"use client";

import { useState } from "react";
import { runAudit } from "../lib/audit-engine";

type SpendFormProps = {
  onAnalyze: (data: {
    tool: string;
    monthlySpend: number;
    teamSize: number;
    yearlySpend: number;
    estimatedSavings: number;
    recommendation: string;
  }) => void;
};

export default function SpendForm({
  onAnalyze,
}: SpendFormProps) {

  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    const audit = runAudit({
      tool,
      monthlySpend: Number(monthlySpend),
      teamSize: Number(teamSize),
    });

    onAnalyze({
      tool,
      monthlySpend: Number(monthlySpend),
      teamSize: Number(teamSize),
      yearlySpend: audit.yearlySpend,
      estimatedSavings: audit.estimatedSavings,
      recommendation: audit.recommendation,
    });
  };

  return (

    <section className="mx-auto max-w-4xl px-6 py-24">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-3xl font-bold text-white">
          Start Your AI Spend Audit
        </h2>

        <p className="mt-3 text-gray-400">
          Select your AI tools and current monthly spending.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-6"
        >

          {/* AI Tool */}
          <div>

            <label className="mb-2 block text-sm text-gray-300">
              AI Tool
            </label>

            <select
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
            >

              <option value="">
                Select AI Tool
              </option>

              <option value="ChatGPT">
                ChatGPT
              </option>

              <option value="Claude">
                Claude
              </option>

              <option value="Cursor">
                Cursor
              </option>

              <option value="Gemini">
                Gemini
              </option>

              <option value="GitHub Copilot">
                GitHub Copilot
              </option>

            </select>

          </div>

          {/* Monthly Spend */}
          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              placeholder="99"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
            />

          </div>

          {/* Team Size */}
          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Team Size
            </label>

            <input
              type="number"
              placeholder="5"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
            />

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-gray-200"
          >

            Analyze Spend

          </button>

        </form>

      </div>

    </section>
  );
}