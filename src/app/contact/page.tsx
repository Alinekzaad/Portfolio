import type { Metadata } from "next";
import Link from "next/link";

const formspreeEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/mqargpeb";

export const metadata: Metadata = {
  title: "Kontakt | Ali Nekzad",
  description:
    "Kontakta Ali Nekzad för projektförfrågningar, samarbeten eller juniorroller inom webbutveckling. Formspree-formulär, GitHub och LinkedIn.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <header className="glass rounded-3xl p-6 shadow-3d sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
          Kontakt
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Jag tar gärna emot förfrågningar kring projekt, samarbeten eller juniorroller inom webbutveckling.
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Hör av dig så återkommer jag inom 24 timmar. E-post går också bra:
          <span className="ml-1 font-semibold text-white">ali.nekzad@gmail.com</span>
        </p>
      </header>

      <section className="glass rounded-3xl p-6 shadow-3d sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-slate-300">
                Tillgänglighet
              </p>
              <p className="text-lg font-semibold text-white">
                Öppen för projekt och samarbeten
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Tillgänglig för juniorroller och uppdrag. Remote eller hybrid. Fokus på moderna webblösningar och tydlig UX.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-slate-300">
                Länkar
              </p>
              <div className="mt-2 flex flex-col gap-2 text-sm text-slate-200">
                <Link
                  href="https://github.com/Alinekzaad"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-300/30 hover:bg-white/10"
                >
                  GitHub: github.com/Alinekzaad
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ali-nekzad-8a8ba3238/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-300/30 hover:bg-white/10"
                >
                  LinkedIn: ali-nekzad-8a8ba3238
                </Link>
              </div>
            </div>
          </div>

          <form
            action={formspreeEndpoint}
            method="POST"
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-3d"
          >
            <div>
              <label className="block text-sm font-semibold text-white">
                Namn
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-500/30"
                placeholder="Ditt namn"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-white">
                  E-post
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-500/30"
                  placeholder="du@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">
                  Ämne
                </label>
                <select
                  name="subject"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-500/30"
                  defaultValue="projekt"
                >
                  <option value="projekt">Projektförfrågan</option>
                  <option value="samarbete">Samarbete</option>
                  <option value="support">Support / IT</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white">
                Meddelande
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-500/30"
                placeholder="Beskriv ditt behov och tidsram..."
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-400">
                Formuläret skickar säkert till Formspree. Uppdatera endpointen med din egen
                Formspree-ID om du vill ta emot svar.
              </p>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-3d transition hover:-translate-y-0.5"
              >
                Skicka meddelande ↗
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
