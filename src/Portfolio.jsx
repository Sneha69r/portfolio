import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

const socialIconBtn =
  "h-11 w-11 rounded-xl border-white/12 bg-white/5 text-zinc-200 transition hover:border-violet-400/25 hover:bg-white/10 hover:text-white";

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={20} height={20} {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={20} height={20} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const nav = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "Python",
  "Flask",
  "FastAPI",
  "RESTful API",
  "JWT",
  "MySQL",
  "SQL",
  "JavaScript",
  "React",
  "PHP",
  "AWS",
  "Git",
  "AI",
  "ML",
];

const experience = [
  {
    title: "Associate Software Developer",
    org: "Neural IT",
    period: "2024 — 2026",
    points: [
      "Built scalable backend systems using Python and Flask",
      "Improved database performance by 25%+",
      "Implemented JWT authentication and RBAC",
    ],
  },
  {
    title: "Web Developer",
    org: "Itvedant",
    period: "2026 — Present",
    points: [
      "Built CRUD systems and backend modules",
      "Improved performance and user experience",
    ],
  },
];

const projects = [
  {
    title: "Task Management API",
    stack: "Flask · MySQL",
    description:
      "REST APIs with JWT auth, task prioritization, and optimized queries for reliable task workflows.",
    href: "https://github.com/Sneha69r",
  },
  {
    title: "Client Management System",
    stack: "PHP · SQL · JavaScript",
    description: "CMS with role-based access, CRUD operations, and a focus on maintainable data models.",
    href: "https://github.com/Sneha69r",
  },
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-violet-500/35 selection:text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-25%,rgba(139,92,246,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_50%_45%_at_100%_20%,rgba(56,189,248,0.08),transparent)]"
        aria-hidden
      />

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-tight text-white transition hover:text-violet-200"
          >
            Sneha Rawat
          </a>
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-1.5 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:sneha.r5623@gmail.com"
            className="rounded-lg border border-violet-500/35 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-200 transition hover:border-violet-400/50 hover:bg-violet-500/15"
          >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 sm:pt-8">
        <section className="relative mx-auto max-w-3xl py-10 text-center sm:max-w-4xl sm:py-14 md:py-16">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-400 sm:mb-5 sm:text-xs">
            Software developer
          </p>
          <h1 className="font-display tracking-tight">
            <span className="block text-base font-medium text-zinc-500 sm:text-lg md:text-xl">
              Building reliable
            </span>
            <span className="mt-3 block text-[clamp(1.85rem,6vw,3.75rem)] font-bold leading-[1.08] sm:mt-4">
              <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
                APIs &amp; backends
              </span>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-[1.75] text-zinc-300 sm:mt-10 sm:text-lg sm:leading-[1.7]">
            <strong className="font-semibold text-zinc-100">2+ years</strong> building scalable backends and RESTful APIs
            with <strong className="font-semibold text-zinc-200">Python</strong> and{" "}
            <strong className="font-semibold text-zinc-200">Flask</strong>, tuning{" "}
            <strong className="font-semibold text-zinc-200">SQL</strong> databases and shipping secure auth with{" "}
            <strong className="font-semibold text-zinc-200">JWT</strong>—systems that stay fast under load.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-11">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(124,58,237,0.55)] transition hover:bg-violet-500"
            >
              View work
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-white/12 bg-zinc-900/80 px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-sm transition hover:border-white/20 hover:bg-zinc-800/80"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 pt-20 text-center sm:pt-24">
          <div className="mb-8 border-b border-white/[0.07] pb-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Skills</h2>
            <p className="mt-1 text-sm text-zinc-500">Tools and technologies I work with daily</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 shadow-sm transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 pt-20 text-center sm:pt-24">
          <div className="mb-8 border-b border-white/[0.07] pb-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Experience</h2>
            <p className="mt-1 text-sm text-zinc-500">Roles and impact</p>
          </div>
          <div className="space-y-5">
            {experience.map((job) => (
              <Card
                key={job.title + job.org}
                className="group border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent transition hover:border-violet-500/25 hover:shadow-lg hover:shadow-violet-950/20"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div className="min-w-0 flex-1 text-left">
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1.5 hidden h-2 w-2 shrink-0 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.6)] sm:block"
                          aria-hidden
                        />
                        <div>
                          <h3 className="font-display text-lg font-semibold text-white">{job.title}</h3>
                          <p className="mt-0.5 text-sm text-violet-300/90">{job.org}</p>
                        </div>
                      </div>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-zinc-400 marker:text-violet-500/70">
                        {job.points.map((point) => (
                          <li key={point} className="leading-relaxed pl-1">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="shrink-0 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-right">
                      {job.period}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 pt-20 text-center sm:pt-24">
          <div className="mb-8 border-b border-white/[0.07] pb-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Projects</h2>
            <p className="mt-1 text-sm text-zinc-500">Selected work</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="flex h-full flex-col border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent transition duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-950/25"
              >
                <CardContent className="flex flex-1 flex-col p-0">
                  <div className="flex flex-1 flex-col p-6 text-left">
                    <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-300/80">
                      {project.stack}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition hover:text-violet-200"
                    >
                      View on GitHub
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pt-20 sm:pt-24">
          <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-violet-950/40 via-zinc-900/60 to-zinc-950 p-8 shadow-2xl shadow-violet-950/20 sm:p-12">
            <div className="mx-auto max-w-md text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Contact</h2>
              <p className="mt-4 text-pretty text-zinc-400">
                Interested in collaborating or have a role in mind? Reach out on GitHub, LinkedIn, or email—I&apos;d
                love to hear from you.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <Button asChild className={socialIconBtn}>
                  <a href="https://github.com/Sneha69r" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GitHubIcon />
                  </a>
                </Button>
                <Button asChild className={socialIconBtn}>
                  <a
                    href="https://www.linkedin.com/in/sneha-rawat-5135a0231/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                </Button>
                <Button asChild className={socialIconBtn}>
                  <a href="mailto:sneha.r5623@gmail.com" aria-label="Email">
                    <Mail className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/[0.06] pt-8 text-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Sneha Rawat. Built with React &amp; Vite.</p>
        </footer>
      </main>
    </div>
  );
}
