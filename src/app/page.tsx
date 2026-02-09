import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Webbutveckling",
    description: "Next.js, React, TypeScript, Tailwind CSS och responsiva gränssnitt.",
  },
  {
    title: "IT-teknik & support",
    description: "Felsökning, användarstöd och enhetshantering med Jamf för Apple-enheter.",
  },
  {
    title: "Struktur & prestanda",
    description: "Ren kod, tydlig design och fokus på snabb leverans med bra UX.",
  },
];

const featured = [
  {
    title: "GolfCentar – Bloggfunktion (Grupprojekt)",
    description:
      "Utvecklade bloggsektionen med fokus på struktur, UI och kommande databasintegration.",
    tags: ["Next.js", "C#", "Razor Pages"],
    href: "/projects",
  },
  {
    title: "TriUnity – E-butik för kosttillskott",
    description:
      "WooCommerce/WordPress-baserad e-handel där jag ansvarade för design, layout och användarupplevelse.",
    tags: ["WordPress", "WooCommerce", "CSS"],
    href: "/projects",
  },
  {
    title: "PT Atlas – PT hemsida i Next.js",
    description:
      "Modern och responsiv PT-hemsida i Next.js med fokus på professionellt visuellt uttryck.",
    tags: ["Next.js", "React", "Tailwind"],
    href: "/projects",
  },
];

const stats = [
  { label: "Projekt levererade", value: "10+" },
  { label: "Svarstid", value: "< 24h" },
  { label: "Tech stack", value: "Next.js / React / .NET" },
];

  const bio = `Jag heter Ali Nekzad och studerar webbutveckling vid TUC Yrkeshögskola, där jag tar examen i april 2026. Jag arbetar idag som IT-tekniker på Medborgarskolan, där jag ansvarar för teknisk support, felsökning, enhetsadministration och hantering av Apple-enheter genom Jamf. I mina utvecklingsprojekt fokuserar jag på moderna tekniker som React, Next.js, TypeScript, Tailwind CSS samt C#/.NET. Jag bygger responsiva, användarvänliga och prestandafokuserade lösningar och strävar alltid efter att kombinera teknisk precision med tydlig design och enkel användarupplevelse.`;

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="glass relative overflow-hidden rounded-3xl p-6 shadow-3d sm:p-10">
        <div className="pointer-events-none absolute -left-10 top-8 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
              Portfolio 2025
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">Ali Nekzad</span>
              <br />
              Webbutvecklare &amp; IT-tekniker
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-semibold text-emerald-100">
                Jobbar som IT-tekniker på Medborgarskolan
              </span>
              <span className="rounded-full bg-sky-500/15 px-4 py-2 text-xs font-semibold text-sky-100">
               Tar examen i april 2026 (Webbutvecklare, TUC YH
              </span>
            </div>
            <p className="max-w-2xl text-lg text-slate-300">{bio}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-3d transition hover:-translate-y-0.5"
              >
                Se projekt
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Kontakta mig
              </Link>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-400/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-white/10"
              >
                Ladda ner CV
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-3d"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-sky-500/20 via-purple-600/15 to-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 shadow-3d">
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                <p className="text-sm font-semibold text-slate-200">Profilöversikt</p>
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)]" />
              </div>
              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-3d">
                    <Image
                      src="/Pbild.png"
                      alt="Ali Nekzad"
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Öppen för projekt och samarbeten
                    </span>
                    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-200">
                      Remote / hybrid
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-3d">
                    <p className="text-sm text-slate-300">Fokus</p>
                    <p className="text-lg font-semibold text-white">
                      Skapa tydliga och snabba upplevelser
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Modern frontend i Next.js/React, tillsammans med robusta backends
                      i C#/.NET och effektiv IT-drift.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-3d">
                    <p className="text-sm text-slate-300">Aktuellt</p>
                    <p className="text-lg font-semibold text-white">
                      IT-tekniker @ Medborgarskolan
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Support, felsökning, enhetshantering (Jamf) och säkra miljöer för
                      Apple-enheter.Tar examen i april 2026 som webbutvecklare vid TUC YH.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-3xl p-6 shadow-3d sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Vad jag gör</h2>
            <div className="h-10 w-10 rounded-xl bg-white/5 text-center text-lg text-white shadow-inner">
              ⭐
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <p className="text-sm uppercase tracking-wide text-slate-300">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="divider mt-8" />
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-200">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "HTML/CSS",
              "SQL",
              "Git & GitHub",
              "C# / .NET / EF",
              "IT-support & felsökning",
              "Enhetshantering (Jamf)",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6 shadow-3d sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Utvalda projekt</h2>
            <Link
              href="/projects"
              className="text-sm font-semibold text-cyan-300 transition hover:text-white"
            >
              Se alla ↗
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {featured.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">
                    {project.title}
                  </p>
                  <span className="text-xl">↗</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="glass rounded-3xl p-6 shadow-3d sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
              Samarbeta
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Låt oss skapa nästa moderna upplevelse.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-3d transition hover:-translate-y-0.5"
            >
              Starta ett projekt
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Läs mer om mig
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
