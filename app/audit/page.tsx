import Link from "next/link";

export default function AuditPage() {

  return (

    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="border-b border-white/10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div>

            <h1 className="text-3xl font-bold">
              AI Audit Workspace
            </h1>

            <p className="mt-2 text-gray-400">
              Analyze and optimize your organization&apos;s AI software spending.
            </p>

          </div>

          <Link
            href="/"
            className="rounded-2xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
          >

            Back to Home

          </Link>

        </div>

      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Top Stats */}
        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Active Audits
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              12
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Estimated Savings
            </p>

            <h2 className="mt-4 text-4xl font-bold text-green-400">
              $24K
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              AI Tools
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              5
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Optimization Score
            </p>

            <h2 className="mt-4 text-4xl font-bold text-green-400">
              87%
            </h2>

          </div>

        </div>

        {/* Workspace Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* Recent Audits */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:col-span-2">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                Recent Audits
              </h2>

              <button className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-200">

                New Audit

              </button>

            </div>

            <div className="mt-8 space-y-4">

              {/* Audit Row */}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-5">

                <div>

                  <h3 className="text-lg font-semibold">
                    ChatGPT Team Audit
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Last analyzed 2 hours ago
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-bold text-green-400">
                    Save $240/year
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Optimization Found
                  </p>

                </div>

              </div>

              {/* Audit Row */}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-5">

                <div>

                  <h3 className="text-lg font-semibold">
                    Cursor Business Audit
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Last analyzed yesterday
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-bold text-green-400">
                    Save $480/year
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Pricing Optimization
                  </p>

                </div>

              </div>

              {/* Audit Row */}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-5">

                <div>

                  <h3 className="text-lg font-semibold">
                    Claude Team Audit
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Last analyzed 3 days ago
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-bold text-green-400">
                    Save $360/year
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Unused Seats Detected
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Insights */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="text-2xl font-bold">
                AI Insights
              </h2>

              <div className="mt-6 space-y-5">

                <div className="rounded-2xl bg-black/40 p-5">

                  <p className="text-sm text-gray-400">
                    Recommendation
                  </p>

                  <p className="mt-2 font-medium">
                    Reduce unused enterprise AI seats.
                  </p>

                </div>

                <div className="rounded-2xl bg-black/40 p-5">

                  <p className="text-sm text-gray-400">
                    Cost Trend
                  </p>

                  <p className="mt-2 font-medium">
                    AI operational spend increased 18% this quarter.
                  </p>

                </div>

              </div>

            </div>

            {/* Action Card */}
            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">

              <h2 className="text-2xl font-bold text-green-300">
                Potential Savings
              </h2>

              <p className="mt-4 text-gray-300">
                Your organization may reduce AI operational costs by up to 22% through optimization strategies.
              </p>

              <Link
                href="/result/123"
                className="mt-6 inline-block rounded-2xl bg-green-400 px-5 py-3 font-semibold text-black transition hover:bg-green-300"
              >

                Generate Full Report

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>

  );
}