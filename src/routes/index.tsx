import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Languages, Target, Heart, Download } from "lucide-react";
import profilePic from "../assets/hamza-profile.jpg";
export const Route = createFileRoute("/")({
  component: Portfolio,
});

const experiences = [
  { role: "Sales Officer", company: "Misak Commercial Brokers", rep: "Emirates Islamic Bank", location: "Dubai, UAE", period: "Jun 2024 – Jan 2025" },
  { role: "Stall & Market Salesperson", company: "Finmart Financial Services LLC", rep: "Commercial Bank of Dubai", location: "Abu Dhabi, UAE", period: "Jul 2023 – Apr 2024" },
  { role: "Salesman", company: "Red Tie Brokers", rep: "Afaq Islamic Finance", location: "Abu Dhabi, UAE", period: "Mar 2023 – May 2023" },
  { role: "Sales Officer", company: "Farida Baig Real Estate", rep: null, location: "Pakistan", period: "Mar 2019 – Dec 2022" },
];

const coreSkills = ["Leadership", "Teamwork", "Time Management", "Communication"];
const bankingSkills = [
  "Credit Card Sales", "Client Relationship Management", "Sales Target Achievement",
  "KYC & Compliance", "Cross-Selling", "Lead Generation", "Negotiation", "Market Research",
];
const tools = ["Microsoft Excel", "Microsoft Word", "Canva"];
const languages = [
  { name: "English", level: 80 },
  { name: "Urdu", level: 100 },
  { name: "Hindi", level: 85 },
];

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent-foreground/70">{kicker}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">{title}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">
            Hamza<span className="text-accent-foreground">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#experience" className="transition hover:text-foreground">Experience</a>
            <a href="#skills" className="transition hover:text-foreground">Skills</a>
            <a href="#education" className="transition hover:text-foreground">Education</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90 sm:text-sm">
            Get in touch
          </a>
        </div>
      </header>

      {/* HOME / HERO */}
      <Section id="home" className="relative overflow-hidden pt-12 sm:pt-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-70"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 -z-10 h-[400px] w-[400px] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--gradient-accent)" }}
        />

        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="animate-fade-up order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for new opportunities
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hamza Sadiq
            </h1>
            <p className="mt-4 text-lg font-medium text-accent-foreground sm:text-xl">
              Banking Sales Professional · Dubai, UAE
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              6+ years of sales management experience with 2+ years specialising in credit card sales.
              I build high-performing teams that consistently exceed targets while delivering exceptional customer experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:translate-y-[-1px]">
                <Mail className="h-4 w-4" /> Contact me
              </a>
              <a href="/Hamza-Sadiq-Resume.pdf" download="Hamza-Sadiq-Resume.pdf" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition hover:translate-y-[-1px]" style={{ background: "var(--gradient-accent)" }}>
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary">
                <Briefcase className="h-4 w-4" /> View experience
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "6+", l: "Years in Sales" },
                { v: "2+", l: "Years Banking" },
                { v: "4", l: "UAE Banks" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
                  <div className="font-display text-2xl font-semibold text-primary sm:text-3xl">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 md:order-2 mx-auto md:mx-0">
            <div className="relative animate-float">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
                style={{ background: "var(--gradient-accent)" }}
              />
              <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] border-4 border-card shadow-[var(--shadow-soft)] sm:h-80 sm:w-80 md:h-96 md:w-80">
                <img src={profilePic} alt="Portrait of Hamza Sadiq" className="h-full w-full object-cover" loading="eager" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <Target className="h-4 w-4 text-accent-foreground" />
                  <span>Leadership in Sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="bg-secondary/40">
        <div className="grid gap-10 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <SectionTitle kicker="About" title="A few words about me" />
          </div>
          <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I'm a banking sales professional based in Dubai with a passion for guiding teams to outperform expectations.
              Across the UAE I've represented Emirates Islamic Bank, Commercial Bank of Dubai and Afaq Islamic Finance,
              focusing on credit card sales and customer acquisition.
            </p>
            <p>
              My approach blends consultative selling with disciplined target management — listening first, then crafting
              the right financial solution for each client. Outside of work, I'm an avid traveller and lifelong learner.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Credit Cards", "Banking Sales", "Team Leadership", "UAE Market"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE — timeline */}
      <Section id="experience">
        <SectionTitle kicker="Experience" title="Where I've worked" />
        <ol className="relative border-l-2 border-dashed border-border pl-6 sm:pl-10">
          {experiences.map((e, i) => (
            <li key={i} className="mb-10 last:mb-0">
              <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                <Briefcase className="h-2.5 w-2.5 text-primary-foreground" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:translate-y-[-2px] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{e.role}</h3>
                    <p className="text-sm text-accent-foreground sm:text-base">{e.company}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {e.period}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  {e.rep && <span>Representative · {e.rep}</span>}
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.location}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* SKILLS — three card layout */}
      <Section id="skills" className="bg-secondary/40">
        <SectionTitle kicker="Skills" title="What I bring to the table" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Core Strengths</h3>
            <ul className="mt-4 space-y-2">
              {coreSkills.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:col-span-2">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Banking & Sales Expertise</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {bankingSkills.map((s) => (
                <span key={s} className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-semibold">Tools</h3>
            <ul className="mt-4 space-y-2">
              {tools.map((t) => (
                <li key={t} className="text-sm text-muted-foreground">{t}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:col-span-2">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Languages className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Languages</h3>
            <div className="mt-5 space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-foreground">{l.name}</span>
                    <span className="text-muted-foreground">{l.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full" style={{ width: `${l.level}%`, background: "var(--gradient-accent)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* EDUCATION + Hobbies */}
      <Section id="education">
        <SectionTitle kicker="Education" title="Foundations & interests" />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Intermediate (F.A.)", body: "Lahore Board" },
            { title: "Matriculation", body: "BISE Lahore" },
          ].map((ed) => (
            <div key={ed.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <GraduationCap className="mb-4 h-7 w-7 text-primary" />
              <h3 className="text-xl font-semibold">{ed.title}</h3>
              <p className="mt-1 text-muted-foreground">{ed.body}</p>
              <div
                aria-hidden
                className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-40 transition group-hover:scale-110"
                style={{ background: "var(--gradient-accent)" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-secondary/50 p-7">
            <Heart className="mb-3 h-6 w-6 text-accent-foreground" />
            <h3 className="text-lg font-semibold">Hobbies</h3>
            <p className="mt-2 text-muted-foreground">Learning · Travelling · Driving</p>
          </div>
          <div className="rounded-3xl border border-border bg-primary p-7 text-primary-foreground">
            <Target className="mb-3 h-6 w-6" />
            <h3 className="text-lg font-semibold">Passion</h3>
            <p className="mt-2 opacity-90">Leadership in Sales — building teams that consistently exceed their targets.</p>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-secondary/40">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <SectionTitle kicker="Contact" title="Let's connect" />
              <p className="-mt-6 text-muted-foreground">
                Open to roles in banking sales, team leadership and credit card distribution across the UAE.
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:hamzasadiq3005@gmail.com" className="flex items-center gap-4 rounded-2xl border border-border p-4 transition hover:bg-secondary">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="truncate text-sm font-medium text-foreground sm:text-base">hamzasadiq3005@gmail.com</p>
                </div>
              </a>
              <a href="tel:+971542300011" className="flex items-center gap-4 rounded-2xl border border-border p-4 transition hover:bg-secondary">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground sm:text-base">+971 54 230 0011</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground sm:text-base">Al Rashidiya, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Hamza Sadiq. All rights reserved.</p>
          <p className="font-display italic">Leadership in Sales.</p>
        </div>
      </footer>
    </div>
  );
}
