// import React, { useState, useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Scene3D from '../3d/Scene3D'
// import { scarsData } from '../data/scars'
// import { ArrowDown, X, Compass, ChevronRight } from 'lucide-react'

// gsap.registerPlugin(ScrollTrigger)

// export default function HeroFaceSection() {
//   const containerRef = useRef(null)
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const [hoveredScarId, setHoveredScarId] = useState(null)
//   const [activeScar, setActiveScar] = useState(null)

//   useEffect(() => {
//     if (!containerRef.current) return

//     const trigger = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: 'top top',
//       end: 'bottom bottom',
//       scrub: 0.4,
//       onUpdate: (self) => {
//         setScrollProgress(self.progress)
//       },
//     })

//     return () => {
//       trigger.kill()
//     }
//   }, [])

//   const handleSelectScar = (scar) => {
//     setActiveScar(activeScar?.id === scar.id ? null : scar)
//   }

//   const getNarrativeStage = () => {
//     if (scrollProgress < 0.28) {
//       return {
//         stage: 'PROLOGUE // THE SCULPTURE',
//         phrase: 'The things that happened to me shaped what I became.',
//         detail: 'An interactive exploration of failure, curiosity, and technical growth. Hover or tap the glowing scars to inspect each turning point.',
//       }
//     } else if (scrollProgress < 0.65) {
//       return {
//         stage: 'TRANSFORMATION // FOCUS',
//         phrase: 'Shifting perspective through deliberate practice.',
//         detail: 'Eyes close in concentration as the head tilts upward. From reactive debugging to proactive engineering.',
//       }
//     } else {
//       return {
//         stage: 'EVOLUTION // THE WORK',
//         phrase: 'The scars remain. The journey continues.',
//         detail: 'Transitioning from internal philosophy to production software and security research.',
//       }
//     }
//   }

//   const currentStage = getNarrativeStage()
//   const displayScar = activeScar || (hoveredScarId ? scarsData.find((s) => s.id === hoveredScarId) : null)

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full"
//       style={{ height: '260vh' }}
//       id="hero"
//     >
//       {/* Sticky Fullscreen 3D Viewport */}
//       <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between">
//         {/* 3D WebGL Canvas */}
//         <div className="absolute inset-0 z-10">
//           <Scene3D
//             scrollProgress={scrollProgress}
//             activeScarId={activeScar?.id}
//             hoveredScarId={hoveredScarId}
//             onHoverScar={setHoveredScarId}
//             onSelectScar={handleSelectScar}
//           />
//         </div>

//         {/* Ambient Top & Bottom Depth Gradients */}
//         <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#090a0f] via-[#090a0f]/60 to-transparent pointer-events-none z-20" />
//         <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent pointer-events-none z-20" />

//         {/* Top Hero Typography */}
//         <div className="relative z-30 site-container pt-24 sm:pt-28 flex flex-col items-start pointer-events-none">
//           <div className="flex items-center gap-2 mb-2.5">
//             <span className="w-2 h-2 rounded-full bg-amber-400" />
//             <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-medium">
//               {currentStage.stage}
//             </span>
//           </div>

//           <h1
//             className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white max-w-3xl leading-[1.12] tracking-tight transition-all duration-300 drop-shadow-lg"
//           >
//             &ldquo;{currentStage.phrase}&rdquo;
//           </h1>

//           <p className="mt-3.5 font-mono text-xs sm:text-sm text-zinc-300 max-w-xl transition-all duration-300 leading-relaxed">
//             {currentStage.detail}
//           </p>
//         </div>

//         {/* Active Scar Story Card (High-end Glassmorphic Panel) */}
//         {displayScar && (
//           <div
//             className="absolute z-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:translate-y-0 sm:top-auto sm:bottom-28 sm:left-12 sm:translate-x-0 w-[92%] sm:w-[440px] max-w-full p-6 sm:p-7 rounded-xl bg-[#0f1118]/95 border border-amber-500/40 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(245,158,11,0.15)] animate-fadeIn pointer-events-auto"
//             role="region"
//             aria-live="polite"
//             aria-label={`Scar Story: ${displayScar.name}`}
//           >
//             <div className="flex items-start justify-between gap-3 mb-2.5">
//               <div className="flex items-center gap-2">
//                 <span className="amber-tag text-[10px] uppercase font-semibold">
//                   {displayScar.location}
//                 </span>
//                 <span className="font-mono text-xs text-zinc-400">
//                   {displayScar.tag}
//                 </span>
//               </div>
//               {activeScar && (
//                 <button
//                   onClick={() => setActiveScar(null)}
//                   className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors cursor-pointer"
//                   aria-label="Close scar detail"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <h3 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
//               {displayScar.name}
//             </h3>

//             <p className="font-serif italic text-amber-300 text-sm mb-3 border-l-2 border-amber-500 pl-3 leading-snug">
//               &ldquo;{displayScar.quote}&rdquo;
//             </p>

//             <p className="font-body text-xs sm:text-sm text-zinc-300 leading-relaxed">
//               {displayScar.story}
//             </p>

//             <div className="mt-4 pt-3.5 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
//               <span className="text-amber-400 flex items-center gap-1">
//                 <span>Active Turning Point</span>
//                 <ChevronRight size={13} />
//               </span>
//               <span>{scarsData.findIndex((s) => s.id === displayScar.id) + 1} of 5</span>
//             </div>
//           </div>
//         )}

//         {/* Bottom HUD: Professional Scar Selector & Scroll Indicator */}
//         <div className="relative z-30 site-container pb-6 sm:pb-8 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto">
//           {/* Refined Scar Navigation Tabs */}
//           <div className="flex items-center flex-wrap justify-center gap-1.5 p-1.5 rounded-lg bg-[#11131c]/90 border border-zinc-800/90 backdrop-blur-md">
//             <span className="font-mono text-[11px] text-zinc-400 uppercase px-2.5 hidden sm:inline">
//               TURNING POINTS:
//             </span>
//             {scarsData.map((scar) => {
//               const isSelected = displayScar?.id === scar.id
//               return (
//                 <button
//                   key={scar.id}
//                   onClick={() => handleSelectScar(scar)}
//                   onMouseEnter={() => setHoveredScarId(scar.id)}
//                   onMouseLeave={() => setHoveredScarId(null)}
//                   className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
//                     isSelected
//                       ? 'bg-amber-500 text-black font-semibold shadow-[0_0_16px_rgba(245,158,11,0.4)]'
//                       : 'text-zinc-300 hover:text-white hover:bg-zinc-800/80'
//                   }`}
//                   aria-pressed={isSelected}
//                   aria-label={`Explore scar: ${scar.location}`}
//                 >
//                   <span
//                     className={`w-1.5 h-1.5 rounded-full ${
//                       isSelected ? 'bg-black' : 'bg-amber-400'
//                     }`}
//                   />
//                   <span>{scar.location}</span>
//                 </button>
//               )
//             })}
//           </div>

//           {/* Clean Scroll Indicator */}
//           <div className="flex items-center gap-5 text-zinc-400 font-mono text-xs">
//             <div className="hidden lg:flex items-center gap-2.5">
//               <span>EXPLORATION:</span>
//               <div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-amber-500 transition-all duration-75"
//                   style={{ width: `${Math.round(scrollProgress * 100)}%` }}
//                 />
//               </div>
//               <span className="text-amber-400 font-bold min-w-[32px]">
//                 {Math.round(scrollProgress * 100)}%
//               </span>
//             </div>

//             <div className="flex items-center gap-2 text-zinc-300 animate-bounce">
//               <span className="text-xs tracking-wider uppercase">SCROLL TO EXPLORE</span>
//               <ArrowDown size={14} className="text-amber-400" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
