import React from 'react'
import { ArrowUp, Terminal, Shield } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-10 bg-[#050507] border-t border-white/5 text-zinc-500 font-mono text-xs">
      <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-zinc-400">KR // 2026</span>
          <span>•</span>
          <span>Krishu Raj Portfolio</span>
          <span>•</span>
          <span className="text-amber-500/80">All Scars Cataloged</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline text-zinc-600">
            Stack: React 18 • Three.js • R3F • GSAP • Vite
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
