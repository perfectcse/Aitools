export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 md:flex-row">

        <p>
          © 2026 Credex Audit. All rights reserved.
        </p>

        <div className="flex items-center gap-6">

          <a
            href="#"
            className="transition hover:text-white"
          >
            Privacy
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Terms
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
}