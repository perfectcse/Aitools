import Link from "next/link";

export default function Hero() {

  return (

    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300">

          AI Spend Optimization Platform

        </div>

        {/* Heading */}
        <h1 className="mt-10 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">

          Stop Overspending
          <br />

          <span className="text-gray-400">
            on AI Tools
          </span>

        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">

          Analyze spending across ChatGPT,
          Claude, Cursor, Gemini, Copilot,
          and AI API subscriptions instantly.

        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/audit"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >

            Generate Free Audit

          </Link>

          <Link
            href="/result/123"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white transition hover:bg-white/10"
          >

            View Example Report

          </Link>

        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-4xl font-bold text-white">
              $8k+
            </h3>

            <p className="mt-3 text-gray-400">
              Average annual savings identified
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-4xl font-bold text-white">
              10+
            </h3>

            <p className="mt-3 text-gray-400">
              AI tools analyzed instantly
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-4xl font-bold text-white">
              5 min
            </h3>

            <p className="mt-3 text-gray-400">
              To generate a complete spend audit
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}