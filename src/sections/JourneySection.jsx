import React from 'react'
import { journeyData } from '../data/journey'
import { Flame, Compass } from 'lucide-react'

export default function JourneySection() {
  return (
    <section id="journey" className="section-padding relative border-t border-white/5 bg-[#08090e]">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">DEVELOPMENT & EVOLUTION</span>
          <h2 className="section-title">The Journey & Scars</h2>
          <p className="section-lead">
            The progression of discipline, curiosity, and breakthroughs that shaped my technical perspective. Each chapter represents a pivotal lesson learned through deliberate practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-0">
          {/* Vertical Glowing Track */}
          <div className="absolute left-6 sm:left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500 via-amber-500/40 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-10">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12 group`}
                >
                  {/* Central Node */}
                  <div className="absolute left-0 sm:left-0 md:left-1/2 top-4 w-6 h-6 rounded-full bg-[#0d0f17] border-2 border-amber-500 flex items-center justify-center -translate-x-1/2 z-20 group-hover:scale-125 group-hover:border-amber-300 transition-transform shadow-[0_0_14px_rgba(245,158,11,0.4)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className="w-full md:w-1/2 pl-6 sm:pl-8 md:pl-0">
                    <div className="glow-card p-6 bg-[#10121b] group-hover:border-amber-500/40 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs text-amber-400 font-semibold tracking-wide">
                          PHASE {item.step} — {item.phase}
                        </span>
                        <span className="amber-tag text-[10px] py-0.5 px-2">
                          {item.marker}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="font-mono text-xs text-zinc-400 mb-3">
                        {item.subtitle}
                      </p>

                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.scarLink && (
                        <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-amber-400">
                          <Flame size={13} className="text-amber-400" />
                          <span>Metaphor: {item.scarLink}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
