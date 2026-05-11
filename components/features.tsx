export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      {/* Section Header */}
      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Features
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Everything You Need
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">

          Built for startups, engineering teams,
          and founders managing growing AI costs.

        </p>

      </div>

      {/* Feature Cards */}
      <div className="mt-20 grid gap-6 md:grid-cols-3">

        {/* Card 1 */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
            ⚡
          </div>

          <h3 className="text-2xl font-semibold text-white">
            Instant Audit
          </h3>

          <p className="mt-4 leading-relaxed text-gray-400">

            Analyze AI spending across ChatGPT,
            Claude, Cursor, Gemini, Copilot,
            and API subscriptions instantly.

          </p>

        </div>

        {/* Card 2 */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
            📊
          </div>

          <h3 className="text-2xl font-semibold text-white">
            Smart Recommendations
          </h3>

          <p className="mt-4 leading-relaxed text-gray-400">

            Get actionable cost-saving suggestions
            based on usage patterns and team size.

          </p>

        </div>

        {/* Card 3 */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
            🚀
          </div>

          <h3 className="text-2xl font-semibold text-white">
            Shareable Reports
          </h3>

          <p className="mt-4 leading-relaxed text-gray-400">

            Generate clean public reports
            with beautiful summaries and insights.

          </p>

        </div>

      </div>

    </section>
  );
}