import React, { useState } from 'react'
import { contactData } from '../data/contact'
import { Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [sentStatus, setSentStatus] = useState(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setSentStatus('sending')
    setTimeout(() => {
      setSentStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding relative border-t border-white/5 bg-[#08090e]">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="section-label">COMMUNICATION & INQUIRIES</span>
          <h2 className="section-title">{contactData.headline}</h2>
          <p className="section-lead">
            {contactData.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="glow-card p-6 bg-[#10121b]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-zinc-400">DIRECT INQUIRY</span>
                <Mail size={16} className="text-amber-400" />
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-md bg-[#151724] border border-zinc-800">
                <span className="font-mono text-xs sm:text-sm text-white truncate">
                  {contactData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                <a
                  href={`mailto:${contactData.email}`}
                  className="font-mono text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                >
                  <span>COMPOSE EMAIL</span>
                  <ArrowUpRight size={13} />
                </a>
                <span className="font-mono text-[11px] text-zinc-400">ENCRYPTION READY</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/KrishuRaj"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-4 flex items-center justify-between text-white no-underline hover:border-amber-500/50 bg-[#10121b]"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={17} className="text-zinc-400" />
                  <span className="font-mono text-xs">GitHub</span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-500" />
              </a>

              <a
                href="https://linkedin.com/in/krishuraj"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-4 flex items-center justify-between text-white no-underline hover:border-amber-500/50 bg-[#10121b]"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin size={17} className="text-zinc-400" />
                  <span className="font-mono text-xs">LinkedIn</span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-500" />
              </a>
            </div>

            {/* Note */}
            <div className="p-4 rounded-lg bg-[#11131c] border border-zinc-800/80 font-mono text-xs text-zinc-300">
              <span className="text-amber-400 font-medium block mb-1">CURRENT STATUS</span>
              Open to cybersecurity internships, security engineering roles, full-stack software builds, and collaborative vulnerability research.
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7 glow-card p-6 sm:p-8 bg-[#10121b]">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-zinc-800">
              <span className="font-mono text-xs text-amber-400 uppercase font-semibold">
                SEND MESSAGE
              </span>
              <span className="text-zinc-400 font-mono text-[11px]">DIRECT CHANNEL</span>
            </div>

            {sentStatus === 'success' ? (
              <div className="p-8 rounded-lg bg-emerald-950/20 border border-emerald-500/40 text-center animate-fadeIn">
                <CheckCircle2 size={32} className="text-emerald-400 mx-auto mb-3" />
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Message Sent Successfully
                </h3>
                <p className="font-mono text-xs text-zinc-400 max-w-md mx-auto mb-6">
                  Thank you for reaching out. Your transmission has been received. I will review and get back to you shortly.
                </p>
                <button
                  onClick={() => setSentStatus(null)}
                  className="btn-secondary text-xs"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#151724] border border-zinc-800 rounded-md focus:border-amber-500 focus:outline-none text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#151724] border border-zinc-800 rounded-md focus:border-amber-500 focus:outline-none text-xs text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Engineering Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#151724] border border-zinc-800 rounded-md focus:border-amber-500 focus:outline-none text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#151724] border border-zinc-800 rounded-md focus:border-amber-500 focus:outline-none text-xs text-white font-mono leading-relaxed resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-zinc-400">
                    * Required fields
                  </span>
                  <button
                    type="submit"
                    disabled={sentStatus === 'sending'}
                    className="btn-primary text-xs"
                  >
                    {sentStatus === 'sending' ? (
                      <span>SENDING...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Final Statement & Cursor */}
        <div className="mt-20 pt-10 border-t border-zinc-800/80 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            <span>&ldquo;{contactData.footerNote}&rdquo;</span>
            <span className="inline-block w-2.5 h-6 sm:h-7 bg-amber-400 animate-pulse" />
          </div>
          <p className="mt-2.5 font-mono text-xs text-zinc-400 tracking-wider uppercase">
            Engineered by Krishu Raj
          </p>
        </div>
      </div>
    </section>
  )
}
