import type { Metadata } from "next";

const experiences = [
  {
    title: "IT-tekniker",
    company: "Medborgarskolan",
    period: "2023 — nu",
    description:
      "Teknisk support, felsökning, enhetsadministration och hantering av Apple-enheter via Jamf. Säkerställer stabil drift och hjälper användare snabbt.",
  },
  {
    title: "Webbutvecklare (studier & projekt)",
    company: "TUC Yrkeshögskola + egna projekt",
    period: "2023 — nu",
    description:
      "Bygger moderna lösningar med Next.js, React, TypeScript och Tailwind. Fokuserar på responsiv design, prestanda och tydlig UX.",
  },
  {
    title: "IT-support / drift",
    company: "Olika uppdrag",
    period: "2019 — 2023",
    description:
      "Support, felsökning, nätverk och klienthantering. Vande mig vid att snabbt identifiera problem och leverera tydliga lösningar.",
  },
];

const education = [
  {
    school: "TUC Yrkeshögskola",
    program: "Webbutvecklare",
    period: "2023 — tar examen nästa termin",
  },
  {
    school: "Fortbildning & certifikat",
    program: "IT-support, nätverk, Apple-enhetshantering",
    period: "Löpande",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML/CSS",
  "SQL",
  "Git & GitHub",
  "C# / .NET / Entity Framework",
  "IT-support & felsökning",
  "Enhetshantering (Jamf / Apple devices)",
];

const bio =
  "Jag heter Ali Nekzad och studerar webbutveckling vid TUC Yrkeshögskola där jag tar examen nästa termin. Jag arbetar idag som IT-tekniker på Medborgarskolan, där jag ansvarar för teknisk support, felsökning, enhetsadministration och hantering av Apple-enheter genom Jamf. I mina utvecklingsprojekt fokuserar jag på moderna tekniker som React, Next.js, TypeScript, Tailwind CSS samt C#/.NET. Jag bygger responsiva, användarvänliga och prestandafokuserade lösningar och strävar alltid efter att kombinera teknisk precision med tydlig design och enkel användarupplevelse.";

export const metadata: Metadata = {
  title: "Om mig | Ali Nekzad",
  description: "Lär känna Ali Nekzad – webbutvecklare & IT-tekniker.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <header className="glass rounded-3xl p-6 shadow-3d sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Om mig</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Webbutvecklare &amp; IT-tekniker som bygger moderna, tydliga lösningar.
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-semibold text-emerald-100">
            Jobbar som IT-tekniker på Medborgarskolan
          </span>
          <span className="rounded-full bg-sky-500/15 px-4 py-2 text-xs font-semibold text-sky-100">
            Tar examen nästa termin – Webbutvecklare TUC Yrkeshögskola
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{bio}</p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-3xl p-6 shadow-3d sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Erfarenhet</h2>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
              Tech & support
            </span>
          </div>
          <div className="mt-6 space-y-5">
            {experiences.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{role.title}</p>
                    <p className="text-sm text-slate-300">{role.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{role.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 shadow-3d sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Utbildning</h2>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-lg font-semibold text-white">{item.school}</p>
                  <p className="text-sm text-slate-300">{item.program}</p>
                  <p className="text-xs text-slate-400">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-3d sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Kompetenser</h2>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-200 sm:grid-cols-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

