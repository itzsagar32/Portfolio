import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Security', href: '#security' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/92 backdrop-blur-md border-b border-white/5 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 text-white no-underline group"
          aria-label="Krishu Raj — Portfolio Home"
        >
          <div className="w-8 h-8 rounded-md border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
            <span className="font-mono text-xs font-bold tracking-tight">KR</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-amber-400 transition-colors">
              KRISHU RAJ
            </span>
            <span className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase">
              Security & Software
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-300 hover:text-amber-400 font-mono text-xs tracking-wider uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3.5">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#131520] border border-zinc-800 text-zinc-300 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>AVAILABLE</span>
          </div>
          <a
            href="#contact"
            className="btn-primary text-xs"
            style={{ fontSize: '0.75rem', padding: '0.45rem 0.95rem' }}
          >
            CONNECT <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2 rounded focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d14] border-b border-zinc-800/80 px-6 py-5 transition-all">
          <div className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-amber-400 font-mono text-xs tracking-wider uppercase py-1 border-b border-zinc-800/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400">STATUS: AVAILABLE</span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-xs"
                style={{ fontSize: '0.75rem', padding: '0.45rem 0.9rem' }}
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
