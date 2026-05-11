import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >

          <div className="h-3 w-3 rounded-full bg-white" />

          <h1 className="text-2xl font-bold tracking-tight text-white">
            Credex Audit
          </h1>

        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">

          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="transition hover:text-white"
          >
            FAQ
          </a>

        </div>

        {/* CTA Button */}
        <Link
          href="/audit"
          className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
        >

          Start Free Audit

        </Link>

      </div>

    </nav>

  );
}