import Link from "next/link";

type ResultPageProps = {
  params: {
    id: string;
  };
};

export default function ResultPage({
  params,
}: ResultPageProps) {

  return (

    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="border-b border-white/10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div>

            <h1 className="text-3xl font-bold">
              Audit Report
            </h1>

            <p className="mt-2 text-gray-400">
              AI spend optimization summary and savings analysis.
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

      {/* Report Content */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Report ID */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Report ID
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {params.id}
          </h2>

        </div>

        {/* Analytics Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Annual Spend */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Annual Spend
            </p>

            <h3 className="mt-4 text-4xl font-bold">
              $12,000
            </h3>

            <p className="mt-3 text-gray-400">
              Current yearly AI software operational cost.
            </p>

          </div>

          {/* Savings */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Estimated Savings
            </p>

            <h3 className="mt-4 text-4xl font-bold text-green-400">
              $2,400
            </h3>

            <p className="mt-3 text-gray-400">
              Potential yearly optimization savings identified.
            </p>

          </div>

          {/* Optimization Score */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Optimization Score
            </p>

            <h3 className="mt-4 text-4xl font-bold text-green-400">
              87%
            </h3>

            <p className="mt-3 text-gray-400">
              Strong opportunity for AI cost optimization.
            </p>

          </div>

        </div>

        {/* Recommendations */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10">

          <h2 className="text-3xl font-bold">
            Optimization Recommendations
          </h2>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl bg-black/40 p-6">

              <h3 className="text-xl font-semibold">
                ChatGPT Team
              </h3>

              <p className="mt-3 text-gray-400">
                Downgrade smaller teams from Team plans to Plus subscriptions to reduce unnecessary operational cost.
              </p>

            </div>

            <div className="rounded-2xl bg-black/40 p-6">

              <h3 className="text-xl font-semibold">
                Cursor Business
              </h3>

              <p className="mt-3 text-gray-400">
                Cursor Pro may better align with your current engineering team size and usage patterns.
              </p>

            </div>

            <div className="rounded-2xl bg-black/40 p-6">

              <h3 className="text-xl font-semibold">
                Claude Usage
              </h3>

              <p className="mt-3 text-gray-400">
                Remove inactive AI seats and monitor enterprise usage trends quarterly.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>

  );
}