type AuditResultProps = {
  result: {
    tool: string;
    monthlySpend: number;
    teamSize: number;
    yearlySpend: number;
    estimatedSavings: number;
    recommendation: string;
  } | null;
};

export default function AuditResult({
  result,
}: AuditResultProps) {

  if (!result) {
    return null;
  }

  return (

    <section className="mx-auto max-w-5xl px-6 py-24">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Estimated Savings
          </p>

          <h2 className="mt-4 text-6xl font-bold text-white">
            ${result.estimatedSavings}
          </h2>

          <p className="mt-4 text-gray-400">
            Potential annual savings identified
          </p>

        </div>

        {/* Main Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {/* Tool Summary */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <h3 className="text-xl font-semibold text-white">
              {result.tool}
            </h3>

            <p className="mt-4 text-gray-400">
              Team Size: {result.teamSize}
            </p>

            <p className="mt-3 text-gray-400">
              Monthly Spend: ${result.monthlySpend}
            </p>

            <p className="mt-3 text-gray-400">
              Annual Spend: ${result.yearlySpend}
            </p>

            <p className="mt-6 text-2xl font-bold text-green-400">
              Save ${result.estimatedSavings}/year
            </p>

          </div>

          {/* Recommendation */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <h3 className="text-xl font-semibold text-white">
              Optimization Recommendation
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              {result.recommendation}
            </p>

            <div className="mt-8 rounded-2xl bg-green-500/10 p-4">

              <p className="text-sm text-green-400">
                Estimated yearly savings:
              </p>

              <p className="mt-2 text-3xl font-bold text-green-300">
                ${result.estimatedSavings}
              </p>

            </div>

          </div>

        </div>

        {/* Analytics Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Optimization Score */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Optimization Score
            </p>

            <h3 className="mt-4 text-4xl font-bold text-green-400">
              87%
            </h3>

            <p className="mt-3 text-gray-400">
              Strong opportunity for reducing AI operational costs.
            </p>

          </div>

          {/* Savings Percentage */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Savings Percentage
            </p>

            <h3 className="mt-4 text-4xl font-bold text-white">

              {Math.round(
                (result.estimatedSavings / result.yearlySpend) * 100
              )}%

            </h3>

            <p className="mt-3 text-gray-400">
              Estimated yearly reduction in AI software spend.
            </p>

          </div>

          {/* Annual Spend */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Annual Spend
            </p>

            <h3 className="mt-4 text-4xl font-bold text-white">
              ${result.yearlySpend}
            </h3>

            <p className="mt-3 text-gray-400">
              Current estimated yearly operational AI cost.
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}