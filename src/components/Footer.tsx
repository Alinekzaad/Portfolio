import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "Om mig" },
  { href: "/projects", label: "Projekt" },
  { href: "/contact", label: "Kontakt" },
];

const socials = [
  { href: "https://github.com/Alinekzaad", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ali-nekzad-8a8ba3238/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950/60 py-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-950/40 to-transparent" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="gradient-text text-lg font-semibold">Ali Nekzad</p>
          <p className="text-sm text-slate-400">
            Webbutvecklare &amp; IT-tekniker. Next.js, React, TypeScript, Tailwind.
          </p>
          <p className="text-xs text-slate-500">
            A © 2025 – Ali Nekzad. Webbutvecklare &amp; IT-tekniker.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          {socials.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

