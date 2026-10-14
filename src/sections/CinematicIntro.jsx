import React, { useState, useEffect, useRef } from 'react'
import { languagesData } from '../data/languages'
import { ArrowRight } from 'lucide-react'

export default function CinematicIntro({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showClimax, setShowClimax] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [skipVisible, setSkipVisible] = useState(false)
  const hasFinishedRef = useRef(false)

  const handleFinish = () => {
    if (hasFinishedRef.current) return
    hasFinishedRef.current = true
    setIsFadingOut(true)
    setTimeout(() => {
      onComplete()
    }, 650)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      handleFinish()
      return
    }

    const skipTimer = setTimeout(() => {
      setSkipVisible(true)
    }, 600)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleFinish()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    let langTimer
    let index = 0

    const nextWord = () => {
      index++
      if (index < languagesData.length) {
        setCurrentIndex(index)
        langTimer = setTimeout(nextWord, 300)
      } else {
        setShowClimax(true)
        setTimeout(() => {
          handleFinish()
        }, 1350)
      }
    }

    langTimer = setTimeout(nextWord, 420)

    return () => {
      clearTimeout(skipTimer)
      clearTimeout(langTimer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const currentLang = languagesData[currentIndex]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Introduction Sequence"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080c] transition-opacity duration-600 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, #131622 0%, #090a0f 65%, #050608 100%)',
      }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.05) 50%, transparent 75%)',
        }}
      />

      {/* Clean Header Bar */}
      <div className="absolute top-8 left-8 right-8 flex items-center justify-between text-zinc-400 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="tracking-widest uppercase text-zinc-300">Krishu Raj</span>
        </div>
        <div className="tracking-widest uppercase text-zinc-400 hidden sm:block">
          Foundations & Evolution
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl min-h-[220px]">
        {!showClimax ? (
          <div key={currentIndex} className="animate-introWord flex flex-col items-center">
            <span className="font-mono text-xs tracking-widest text-amber-400 mb-3 uppercase">
              Language {String(currentIndex + 1).padStart(2, '0')} / {String(languagesData.length).padStart(2, '0')}
            </span>
            <h1
              className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              {currentLang.text}
            </h1>
            <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-400">
              {currentLang.sub}
            </p>
          </div>
        ) : (
          <div className="animate-introClimax flex flex-col items-center">
            <div className="w-10 h-[2px] bg-amber-400 mb-6" />
            <h1
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight"
            >
              Now I build with them.
            </h1>
            <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-400 tracking-wider">
              Software Engineering & Cybersecurity Research
            </p>
          </div>
        )}
      </div>

      {/* Skip Intro Button */}
      {skipVisible && (
        <button
          onClick={handleFinish}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-amber-500/40 transition-all font-mono text-xs tracking-wider uppercase cursor-pointer"
          aria-label="Skip introduction"
        >
          <span>Skip Intro</span>
          <ArrowRight size={13} className="text-amber-400" />
        </button>
      )}

      <style>{`
        @keyframes introWord {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(8px);
            filter: blur(8px);
          }
          25% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
          85% {
            opacity: 1;
            transform: scale(1.01);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: scale(1.08) translateY(-6px);
            filter: blur(6px);
          }
        }
        .animate-introWord {
          animation: introWord 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes introClimax {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(12px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }
        .animate-introClimax {
          animation: introClimax 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}
