"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/profile";
import { Corners } from "./Logo";

const filters: Array<"All" | ProjectCategory> = ["All", "Full stack", "CMS & e-commerce", "QA & .NET", "Frontend"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects],
  );

  return (
    <div className="stack">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="seg" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <span className="spec" aria-live="polite">
          {shown.length} of {projects.length} projects
        </span>
      </div>

      <div className="project-grid">
        {shown.map((p) => (
          <article key={p.name} className="bp card solid project-card">
            <Corners />
            <span className="card-kicker">{p.stack}</span>
            <h3 className="card-title">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </h3>
            <p className="card-body">{p.result}</p>
            <footer>
              <span className="card-meta">Focus: {p.bestFor}</span>
              {p.url && (
                <a className="ext" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name}`}>
                  Visit <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              )}
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
