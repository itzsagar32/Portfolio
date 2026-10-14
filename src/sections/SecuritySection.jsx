import React, { useState } from 'react'
import { securityData } from '../data/security'
import { Shield, Award, CheckCircle2, Lock, Terminal, Send, FileText, Check } from 'lucide-react'

export default function SecuritySection() {
  const [terminalInput, setTerminalInput] = useState('')
  const [extraLogs, setExtraLogs] = useState([])

  const handleCommand = (e) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    let response = ''
    if (cmd === 'help') {
      response = 'Available commands: whoami, hof, recon, tools, methodology, clear'
    } else if (cmd === 'whoami') {
      response = 'Krishu Raj — Security Researcher & Systems Developer. Focus: Web Application Security, API Authorization, POSIX Systems.'
    } else if (cmd === 'hof') {
      response = '[✓] Hall of Fame: Enterprise Program Responsible Disclosure. Finding: Authorization / IDOR flaw responsibly remediated.'
    } else if (cmd === 'recon') {
      response = '[*] Surface analysis: DNS asset enumeration, HTTP parameter disparity audits, authorization boundary tests.'
    } else if (cmd === 'tools') {
      response = '[+] Tooling: Burp Suite Professional, Python 3 (AsyncIO), Linux CLI, Postman, Wireshark.'
    } else if (cmd === 'methodology') {
      response = '[*] Methodology: OWASP Web Security Testing Guide (WSTG), PTES, and RFC-9116 security disclosure standards.'
    } else if (cmd === 'clear') {
      setExtraLogs([])
      setTerminalInput('')
      return
    } else {
      response = `Command "${cmd}" not recognized. Type "help" for valid options.`
    }

    setExtraLogs((prev) => [...prev, { cmd, response }])
    setTerminalInput('')
  }

  const runQuickCommand = (cmdText) => {
    setTerminalInput(cmdText)
  }

  return (
    <section id="security" className="section-padding relative border-t border-white/5 bg-[#090a0f]">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="section-label">APPLICATION SECURITY & RESEARCH</span>
          <h2 className="section-title">Cybersecurity & Research</h2>
          <p className="section-lead">
            Offensive curiosity channeled into ethical defense. Mapping perimeter surfaces, testing authorization boundaries, and practicing responsible vulnerability disclosure.
          </p>
        </div>

        {/* Hall of Fame Dossier Card */}
        <div className="glow-card p-6 sm:p-8 border-amber-500/40 bg-[#10121b] mb-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded bg-amber-500/15 text-amber-400">
                  <Award size={18} />
                </span>
                <span className="amber-tag text-xs font-semibold uppercase">
                  VERIFIED ACHIEVEMENT
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {securityData.hallOfFame.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                {securityData.hallOfFame.title}
              </h3>

              <p className="font-mono text-xs text-amber-400 mb-3">
                Target: {securityData.hallOfFame.organization}
              </p>

              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {securityData.hallOfFame.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {securityData.hallOfFame.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#161824] border border-zinc-800 font-mono text-xs text-zinc-300 flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end justify-center">
              <div className="p-5 rounded-lg bg-[#141622] border border-zinc-800 text-left md:text-right">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                  STANDARD ETHICS
                </span>
                <span className="font-display font-bold text-lg text-white">
                  100% Responsible
                </span>
                <span className="font-mono text-xs text-zinc-400 block mt-0.5">
                  RFC-9116 / ISO-29147 Protocol
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {securityData.principles.map((p, i) => (
            <div key={i} className="glow-card p-5 sm:p-6 bg-[#10121b]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold">
                  {p.code}
                </span>
                <Lock size={14} className="text-zinc-400" />
              </div>
              <h4 className="font-display font-bold text-base text-white mb-2">
                {p.title}
              </h4>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Research Terminal Console */}
        <div className="rounded-xl border border-zinc-800 bg-[#0d0f17] overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="px-4 py-3 bg-[#131520] border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="ml-2 font-mono text-xs text-zinc-300">
                krishu@security-lab: ~/assessment/audit-log
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <Terminal size={13} className="text-amber-400" />
              <span>RESEARCH CONSOLE</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 font-mono text-xs text-zinc-300 space-y-2.5 max-h-[360px] overflow-y-auto">
            <div className="text-zinc-400 pb-1">
              # Target scope verified. Ethical assessment telemetry log:
            </div>

            {securityData.terminalLog.map((log, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-zinc-400 min-w-[65px]">{log.time}</span>
                <span
                  className={
                    log.type === 'SUCCESS' || log.type === 'SEC'
                      ? 'text-emerald-400 font-medium'
                      : log.type === 'WARN'
                      ? 'text-amber-400 font-medium'
                      : log.type === 'EXEC'
                      ? 'text-zinc-200'
                      : 'text-zinc-300'
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}

            {/* User Executed Logs */}
            {extraLogs.map((item, idx) => (
              <div key={idx} className="pt-2 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-amber-400 font-medium">
                  <span>krishu@security-lab:~$</span>
                  <span className="text-white">{item.cmd}</span>
                </div>
                <div className="text-zinc-300 pl-4 mt-1">{item.response}</div>
              </div>
            ))}

            {/* Quick Command Suggestions */}
            <div className="pt-3 pb-1 flex flex-wrap items-center gap-2">
              <span className="text-zinc-400 text-xs">Run command:</span>
              {['whoami', 'hof', 'recon', 'tools', 'methodology', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runQuickCommand(cmd)}
                  className="px-2.5 py-0.5 rounded bg-[#181a28] hover:bg-[#202334] border border-zinc-800 text-amber-400 hover:text-amber-300 text-xs transition-colors cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Prompt Input */}
            <form onSubmit={handleCommand} className="pt-2 flex items-center gap-2">
              <span className="text-amber-400 font-medium">krishu@security-lab:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type a command (e.g. whoami, hof, tools)..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs"
              />
              <button
                type="submit"
                className="text-zinc-400 hover:text-amber-400 p-1 cursor-pointer"
                aria-label="Submit command"
              >
                <Send size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
