import React from 'react'
import { aboutData } from '../data/about'
import { Shield, Code, Cpu, Target, Award, ArrowUpRight } from 'lucide-react'

export default function AboutSection() {
  const pillarIcons = [
    <Cpu size={18} className="text-amber-400" />,
    <Code size={18} className="text-amber-400" />,
    <Target size={18} className="text-amber-400" />,
    <Shield size={18} className="text-amber-400" />
  ]

  return (
    <section id="about" className="section-padding relative border-t border-white/5 bg-[#090a0f]">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="section-label">PROFILE & BACKGROUND</span>
          <h2 className="section-title">Krishu Raj</h2>
          <p className="font-mono text-sm sm:text-base text-amber-400 tracking-wide mb-5">
            Cybersecurity Student / Developer / Systems Builder
          </p>
          <p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed">
            {aboutData.bioIntro}
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base leading-relaxed">
            {aboutData.paragraphs.map((para, i) => (
              <p key={i} className="text-zinc-300 font-normal leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-3 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#13151f] border border-zinc-800 text-zinc-300 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Base: {aboutData.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#13151f] border border-zinc-800 text-zinc-300 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Open for Research & Software Engineering</span>
              </div>
            </div>
          </div>

          {/* Philosophy & Metrics Card */}
          <div className="lg:col-span-5 glow-card p-6 sm:p-7 border-l-2 border-l-amber-500 bg-[#10121b]">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-3">
              CORE PHILOSOPHY
            </span>
            <blockquote className="font-serif italic text-base sm:text-lg text-white mb-6 leading-relaxed">
              &ldquo;The best defensive engineers understand offensive mechanics, and the most resilient developers have broken their own code down to raw memory.&rdquo;
            </blockquote>

            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-zinc-800">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <div className="font-display font-bold text-2xl text-amber-400">
                    {stat.number}
                  </div>
                  <div className="font-mono text-[11px] text-zinc-400 leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aboutData.pillars.map((pillar, index) => (
            <div
              key={pillar.label}
              className="glow-card p-6 flex flex-col justify-between group hover:border-amber-500/40 bg-[#10121b]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-md bg-[#151824] border border-zinc-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {pillarIcons[index]}
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {pillar.label}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
