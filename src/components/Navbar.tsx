 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Hem" },
  { href: "/about", label: "Om mig" },
  { href: "/projects", label: "Projekt" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 pb-4 pt-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass relative flex items-center justify-between rounded-2xl px-4 py-3 shadow-3d sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/60 via-purple-500/60 to-cyan-300/60 text-xl font-semibold text-white shadow-lg shadow-purple-900/40">
              AN
            </div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                Ali Nekzad
              </p>
              <p className="text-lg font-semibold gradient-text">
                Webbutvecklare &amp; IT-tekniker
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-white/10 text-white shadow-3d"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/projects"
              className="hidden rounded-full border border-cyan-400/40 bg-gradient-to-r from-sky-500/40 via-purple-500/40 to-cyan-400/40 px-4 py-2 text-sm font-semibold text-white shadow-3d transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20 sm:inline-flex"
            >
              Se projekt
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-50 shadow-inner transition hover:border-white/20 hover:bg-white/10 sm:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 rounded-full bg-white transition ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded-full bg-white transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded-full bg-white transition ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {open && (
            <div className="absolute left-0 top-[calc(100%+12px)] w-full rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-3d sm:hidden">
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive(link.href)
                        ? "bg-white/10 text-white"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-sky-500 via-purple-500 to-cyan-400 px-4 py-3 text-center text-sm font-semibold text-white shadow-3d transition hover:-translate-y-0.5"
                >
                  Kontakta mig
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

