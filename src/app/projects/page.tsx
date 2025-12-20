import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "GolfCentar WebApp",
    description:
      "Ett avancerat fullstack-projekt byggt i .NET Razor Pages. Innehåller community-flöde, blogg, produktbutik, orderhantering, användarkonton, adminpanel och dynamisk databas.",
    image: "/golfcentar.png",
    linkLabel: "GitHub",
    link: "https://github.com/Alinekzaad/GolfCentar-WebApp",
  },
  {
    title: "TriUnity Proteinshop",
    description:
      "En modern proteinbutik byggd i WordPress och WooCommerce. Fokus på tydlig produktpresentation, UI/UX och ett smidigt köpflöde.",
    image: "/Triunity.png",
    linkLabel: "Live Site",
    link: "https://alinekzadwebd24jon.burns.se",
  },
  {
    title: "PT-Atlas",
    description:
      "En personlig tränar-hemsida utvecklad med Next.js, TypeScript och Tailwind. Innehåller bokningsformulär, tjänstekort och en modern, responsiv design.",
    image: "/PTatlas.png",
    linkLabel: "GitHub",
    link: "https://github.com/Alinekzaad/PT-Atlas",
  },
];

export const metadata: Metadata = {
  title: "Projekt | Ali Nekzad",
  description: "Tre utvalda projekt av Ali Nekzad med modern webbutveckling.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <header className="glass rounded-3xl p-6 shadow-3d sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Projekt</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Tre projekt som visar min process och min tekniska verktygslåda.
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Fokus på tydlig struktur, responsiv design och prestanda med moderna ramverk.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg p-6 shadow-xl transition hover:scale-[1.02]"
          >
            <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="relative">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <div className="mt-6">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-3d transition hover:-translate-y-0.5"
                >
                  {project.linkLabel} ↗
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

