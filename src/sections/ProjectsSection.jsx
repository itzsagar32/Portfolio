import React, { useState } from 'react'
import { projectsData } from '../data/projects'
import { ExternalLink, Github, ArrowUpRight, X, CheckCircle2 } from 'lucide-react'

function ProjectPreviewArt({ id, color = '#f59e0b' }) {
  if (id === 'portfolio-3d') {
    return (
      <div className="w-full h-44 bg-[#0d0f17] relative overflow-hidden flex items-center justify-center border-b border-zinc-800">
        <svg viewBox="0 0 300 150" className="w-full h-full opacity-70">
          <circle cx="150" cy="75" r="45" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3,3" />
          <path d="M 120 75 Q 150 25 180 75 Q 150 125 120 75" stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="150" cy="75" r="4" fill={color} />
          <line x1="80" y1="75" x2="220" y2="75" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="150" y1="20" x2="150" y2="130" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
        </svg>
        <span className="absolute bottom-3 left-4 font-mono text-[11px] text-zinc-400">
          WebGL & R3F Architecture
        </span>
      </div>
    )
  }

  if (id === 'mental-coach-app') {
    return (
      <div className="w-full h-44 bg-[#0d0f17] relative overflow-hidden flex items-center justify-center border-b border-zinc-800">
        <svg viewBox="0 0 300 150" className="w-full h-full opacity-70">
          <rect x="110" y="20" width="80" height="110" rx="8" stroke={color} strokeWidth="1.5" fill="none" />
          <line x1="125" y1="40" x2="175" y2="40" stroke={color} strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="125" y1="60" x2="165" y2="60" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
          <line x1="125" y1="75" x2="170" y2="75" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="150" cy="115" r="4" fill={color} />
        </svg>
        <span className="absolute bottom-3 left-4 font-mono text-[11px] text-zinc-400">
          Android & SQLite Local Architecture
        </span>
      </div>
    )
  }

  if (id === 'security-research-bounty') {
    return (
      <div className="w-full h-44 bg-[#0d0f17] relative overflow-hidden flex items-center justify-center border-b border-zinc-800">
        <svg viewBox="0 0 300 150" className="w-full h-full opacity-70">
          <polygon points="150,25 195,50 195,100 150,125 105,100 105,50" stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="150" cy="75" r="16" stroke={color} strokeWidth="1" fill="none" />
          <line x1="150" y1="65" x2="150" y2="85" stroke={color} strokeWidth="1.5" />
          <line x1="140" y1="75" x2="160" y2="75" stroke={color} strokeWidth="1.5" />
        </svg>
        <span className="absolute bottom-3 left-4 font-mono text-[11px] text-zinc-400">
          Responsible Disclosure Advisory
        </span>
      </div>
    )
  }

  if (id === 'c-systems-project') {
    return (
      <div className="w-full h-44 bg-[#0d0f17] relative overflow-hidden flex items-center justify-center border-b border-zinc-800">
        <svg viewBox="0 0 300 150" className="w-full h-full opacity-70">
          <rect x="70" y="35" width="45" height="30" stroke={color} strokeWidth="1" fill="none" />
          <rect x="125" y="35" width="45" height="30" stroke={color} strokeWidth="1" fill="none" />
          <rect x="180" y="35" width="45" height="30" stroke={color} strokeWidth="1" fill="none" />
          <path d="M 115 50 L 125 50 M 170 50 L 180 50" stroke={color} strokeWidth="1.5" />
          <text x="75" y="54" fill={color} fontSize="9" fontFamily="monospace">0x7FFF</text>
          <text x="130" y="54" fill={color} fontSize="9" fontFamily="monospace">0x8000</text>
          <text x="185" y="54" fill={color} fontSize="9" fontFamily="monospace">0x8004</text>
          <line x1="70" y1="95" x2="225" y2="95" stroke={color} strokeWidth="1" strokeDasharray="4,4" />
        </svg>
        <span className="absolute bottom-3 left-4 font-mono text-[11px] text-zinc-400">
          POSIX Memory Inspection Utility
        </span>
      </div>
    )
  }

  return (
    <div className="w-full h-44 bg-[#0d0f17] relative overflow-hidden flex items-center justify-center border-b border-zinc-800">
      <svg viewBox="0 0 300 150" className="w-full h-full opacity-70">
        <line x1="50" y1="75" x2="250" y2="75" stroke={color} strokeWidth="1" />
        <circle cx="100" cy="75" r="10" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="150" cy="75" r="14" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="75" r="10" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M 100 65 Q 150 35 200 65" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3,3" />
      </svg>
      <span className="absolute bottom-3 left-4 font-mono text-[11px] text-zinc-400">
        Async Target Surface Profiler
      </span>
    </div>
  )
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [inspectProject, setInspectProject] = useState(null)

  const categories = ['all', 'Creative Web & 3D', 'Mobile Engineering', 'Cybersecurity & Research', 'Systems & Low-Level']

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative border-t border-white/5 bg-[#08090e]">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">SELECTED ENGINEERING WORK</span>
            <h2 className="section-title">Projects & Systems</h2>
            <p className="section-lead">
              A curated selection of technical explorations, native mobile applications, security research writeups, and low-level systems utilities.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-amber-500 text-black font-semibold shadow-sm'
                    : 'bg-[#12141e] text-zinc-300 hover:text-white border border-zinc-800'
                }`}
              >
                {cat === 'all' ? 'ALL PROJECTS' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glow-card flex flex-col justify-between overflow-hidden group hover:border-amber-500/50 bg-[#10121b] transition-all duration-300"
            >
              <div>
                <ProjectPreviewArt id={project.id} color={project.accentColor} />

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="amber-tag text-[10px]">{project.category}</span>
                    <span className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#151722] border border-zinc-800 font-mono text-[10px] text-zinc-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-zinc-400"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <button
                  onClick={() => setInspectProject(project)}
                  className="font-mono text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer font-medium"
                >
                  <span>INSPECT DETAILS</span>
                  <ArrowUpRight size={13} />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-[#151722] hover:bg-[#1d202e] text-zinc-300 hover:text-white transition-colors border border-zinc-800"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="p-2 rounded bg-[#151722] hover:bg-[#1d202e] text-amber-400 hover:text-amber-300 transition-colors border border-zinc-800"
                      aria-label={`${project.title} Live URL`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspect Project Modal */}
      {inspectProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#10121b] border border-amber-500/40 rounded-xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative">
            <button
              onClick={() => setInspectProject(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="amber-tag text-xs">{inspectProject.category}</span>
              <span className="font-mono text-xs text-zinc-400">{inspectProject.status}</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1.5">
              {inspectProject.title}
            </h3>
            <p className="font-mono text-xs text-amber-400 mb-5">
              {inspectProject.subtitle}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-mono text-xs uppercase text-zinc-400 mb-1">
                  ARCHITECTURAL BREAKDOWN
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {inspectProject.extendedDescription}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-zinc-400 mb-2">
                  VERIFIED SPECIFICATIONS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {inspectProject.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#161824] border border-zinc-800 font-mono text-xs text-zinc-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => setInspectProject(null)}
                className="btn-secondary text-xs"
              >
                CLOSE
              </button>
              {inspectProject.githubUrl && (
                <a
                  href={inspectProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  <Github size={14} />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
