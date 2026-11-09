import { Mail, Phone, ArrowDown, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Header } from "@/components/Header";
import { Corners } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { ProjectGrid } from "@/components/ProjectGrid";
import { education, experience, extraSkills, metrics, profile, projects, skills } from "@/data/profile";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main" className="page">
        {/* ---------- Hero ---------- */}
        <section id="top" className="hero" aria-labelledby="hero-title">
          <Reveal className="stack">
            <span className="eyebrow">Portfolio · {profile.stackLine}</span>
            <h1 id="hero-title">
              Full stack web apps, built <em>end to end</em>.
            </h1>
            <p className="lead muted">{profile.summary}</p>
            <div className="row hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects <ArrowDown size={16} strokeWidth={1.5} />
              </a>
              <a className="btn" href={`mailto:${profile.email}`}>
                <Mail size={16} strokeWidth={1.5} /> Email me
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <aside className="bp solid profile-card" aria-label="Profile at a glance">
              <Corners />
              <div className="row" style={{ gap: "var(--space-4)", flexWrap: "nowrap" }}>
                <div className="monogram" aria-hidden="true">
                  JA
                </div>
                <div>
                  <h2 style={{ fontSize: 22 }}>{profile.name}</h2>
                  <p className="muted">{profile.headline}</p>
                </div>
              </div>
              <dl className="facts">
                <div>
                  <dt>Experience</dt>
                  <dd>{profile.experienceYears} years full stack</dd>
                </div>
                <div>
                  <dt>Current</dt>
                  <dd>{profile.currentRole}</dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Works</dt>
                  <dd>Remote</dd>
                </div>
              </dl>
              <span className="status s-success">Open to remote work</span>
            </aside>
          </Reveal>
        </section>

        {/* ---------- Metrics ---------- */}
        <section className="metrics" aria-label="Highlights">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 60} className="bp stack" >
              <Corners />
              <span className="eyebrow">{m.label}</span>
              <span className="kpi">{m.value}</span>
              <span className="card-meta">{m.note}</span>
            </Reveal>
          ))}
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="section" aria-labelledby="about-title">
          <header>
            <span className="eyebrow">01</span>
            <h2 id="about-title">About</h2>
          </header>
          <Reveal className="stack">
            <p className="lead">{profile.intro}</p>
            <p className="muted" style={{ maxWidth: "62ch" }}>
              My strongest, most proven work is in Laravel, React and Vue, and in custom CMS builds on WordPress,
              Shopify and Duda. More recently I have been shipping ASP.NET Core features and Playwright test suites.
              Over the years I have led builds, mentored two intern cohorts, and worked directly with clients from
              first brief to launch.
            </p>
            <div className="alert a-info">
              <div>
                <b>How I work</b>
                {profile.workPreference}. Claude Code is my main development tool.
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills" className="section" aria-labelledby="skills-title">
          <header>
            <span className="eyebrow">02</span>
            <h2 id="skills-title">Skills</h2>
            <p className="spec">Grouped by area, with where each one is proven</p>
          </header>
          <Reveal className="stack">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Skills</th>
                  <th scope="col">Where it is proven</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((g) => (
                  <tr key={g.category}>
                    <td>{g.category}</td>
                    <td>{g.skills.join(", ")}</td>
                    <td className="muted">{g.proof}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="stack" style={{ gap: "var(--space-3)" }}>
              <h3 style={{ fontSize: 19 }}>Also working with</h3>
              <div className="tags">
                {extraSkills.map((s) => (
                  <span key={s} className="tag tag-accent">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="section" aria-labelledby="experience-title">
          <header>
            <span className="eyebrow">03</span>
            <h2 id="experience-title">Experience</h2>
            <p className="spec">{experience.length} roles since 2016, newest first</p>
          </header>
          <ol className="timeline">
            {experience.map((r) => (
              <Reveal as="li" key={`${r.company}-${r.dates}`} className={r.current ? "is-current" : undefined}>
                <span className="when">{r.dates}</span>
                <div>
                  <div className="role">
                    <h3>{r.title}</h3>
                    <span className="company">{r.company}</span>
                    {r.current && <span className="status s-success">Current</span>}
                  </div>
                  <ul>
                    {r.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="section" aria-labelledby="projects-title">
          <header>
            <span className="eyebrow">04</span>
            <h2 id="projects-title">Selected projects</h2>
            <p className="spec">Filter by the kind of work you need</p>
          </header>
          <Reveal>
            <ProjectGrid projects={projects} />
          </Reveal>
        </section>

        {/* ---------- Education ---------- */}
        <section id="education" className="section" aria-labelledby="education-title">
          <header>
            <span className="eyebrow">05</span>
            <h2 id="education-title">Education</h2>
          </header>
          <Reveal className="stack">
            <div className="bp card">
              <Corners />
              <span className="card-kicker">Class of {education.year}</span>
              <h3 className="card-title">{education.degree}</h3>
              <p className="card-body">{education.school}</p>
            </div>
            <div className="row">
              <span className="eyebrow">Certification</span>
              <span>{education.certification}</span>
            </div>
          </Reveal>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section" aria-labelledby="contact-title">
          <header>
            <span className="eyebrow">06</span>
            <h2 id="contact-title">Contact</h2>
          </header>
          <Reveal className="stack">
            <p className="lead">
              Have a product to build, a site to migrate or a test suite to grow? Send a short note about the role or
              project and I will get back to you.
            </p>
            <div className="contact-grid">
              <a className="bp contact-item solid" href={`mailto:${profile.email}`}>
                <Corners />
                <span className="icon">
                  <Mail size={20} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="eyebrow">Email</span>
                  <br />
                  <span className="value">{profile.email}</span>
                </span>
              </a>
              <a className="bp contact-item solid" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Corners />
                <span className="icon">
                  <LinkedinIcon size={20} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="eyebrow">LinkedIn</span>
                  <br />
                  <span className="value">john-amba</span>
                </span>
              </a>
              <a className="bp contact-item solid" href={profile.github} target="_blank" rel="noopener noreferrer">
                <Corners />
                <span className="icon">
                  <GithubIcon size={20} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="eyebrow">GitHub</span>
                  <br />
                  <span className="value">johnvamba</span>
                </span>
              </a>
              <a className="bp contact-item solid" href={`tel:${profile.phone}`}>
                <Corners />
                <span className="icon">
                  <Phone size={20} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="eyebrow">Phone</span>
                  <br />
                  <span className="value">{profile.phone}</span>
                </span>
              </a>
            </div>
            <p className="row muted">
              <MapPin size={16} strokeWidth={1.5} /> {profile.location}
            </p>
          </Reveal>
        </section>

        <footer className="foot">
          <span>
            © {year} {profile.name}
          </span>
          <span>Built with Next.js, deployed to GitHub Pages</span>
        </footer>
      </main>
    </>
  );
}
