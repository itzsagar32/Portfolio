import React, { useState } from 'react'
import { skillsData } from '../data/skills'
import { Shield, Cpu, Code2, Wrench, Search, Zap, Layers, CheckCircle } from 'lucide-react'

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState(
    skillsData.categories[0].skills[0]
  )

  const categoryIcons = {
    cybersecurity: <Shield size={15} />,
    programming: <Cpu size={15} />,
    frontend: <Code2 size={15} />,
    tools: <Wrench size={15} />,
  }

  const allCategories = skillsData.categories
  const currentCategories =
    activeCategory === 'all'
      ? allCategories
      : allCategories.filter((c) => c.id === activeCategory)

  const allSkillsList = currentCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryName: cat.name }))
  )

  const filteredSkills = allSkillsList.filter((s) => {
    return (
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <section id="skills" className="section-padding relative border-t border-white/5 bg-[#08090e]">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">TECHNICAL COMPETENCIES</span>
            <h2 className="section-title">Skills & Capabilities</h2>
            <p className="section-lead">
              From low-level systems programming in C to modern reactive web interfaces and ethical vulnerability research.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#12141d] border border-zinc-800 rounded-md focus:border-amber-500 focus:outline-none text-xs font-mono text-white placeholder-zinc-500"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-black font-semibold shadow-sm'
                : 'bg-[#12141e] text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            <Layers size={13} />
            <span>ALL CAPABILITIES</span>
          </button>

          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black font-semibold shadow-sm'
                  : 'bg-[#12141e] text-zinc-300 hover:text-white border border-zinc-800'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.badge}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name

              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#141724] border-amber-500/70 shadow-lg ring-1 ring-amber-500/30'
                      : 'bg-[#10121b] border-zinc-800/80 hover:border-zinc-700 hover:bg-[#131520]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-display font-bold text-base text-white">
                      {skill.name}
                    </span>
                    <span className="amber-tag text-[10px] py-0.5 px-2">
                      {skill.level}
                    </span>
                  </div>

                  <div className="text-zinc-400 font-mono text-xs mb-2">
                    <span className="text-amber-400">{skill.tag}</span>
                  </div>

                  <p className="text-zinc-300 text-xs line-clamp-2 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              )
            })}

            {filteredSkills.length === 0 && (
              <div className="col-span-full py-12 text-center text-zinc-400 font-mono text-xs">
                No matching technologies found for &ldquo;{searchQuery}&rdquo;.
              </div>
            )}
          </div>

          {/* Inspector Panel */}
          <div className="lg:col-span-4 sticky top-28 glow-card p-6 border-amber-500/30 bg-[#10121b]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">
                TECHNOLOGY DETAIL
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            {selectedSkill ? (
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">
                    MODULE
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-0.5">
                    {selectedSkill.name}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-[#151722] border border-zinc-800">
                    <span className="text-zinc-400 block text-[10px]">CATEGORY</span>
                    <span className="text-amber-400 font-medium">{selectedSkill.tag}</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#151722] border border-zinc-800">
                    <span className="text-zinc-400 block text-[10px]">PROFICIENCY</span>
                    <span className="text-white font-medium">{selectedSkill.level}</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">
                    PRACTICAL APPLICATION
                  </span>
                  <p className="mt-1 text-zinc-300 text-sm leading-relaxed">
                    {selectedSkill.desc}
                  </p>
                </div>

                <div className="p-3 rounded bg-[#151722] border border-zinc-800 font-mono text-xs text-zinc-300">
                  <div className="text-[11px] text-amber-400 mb-1 flex items-center gap-1.5">
                    <Zap size={12} />
                    <span>PRODUCTION RELEVANCE</span>
                  </div>
                  <span>
                    Applied directly in real-world system utilities, application security assessments, or production UI architecture.
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-zinc-400 font-mono text-xs py-8 text-center">
                Click any technology node to view details.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
