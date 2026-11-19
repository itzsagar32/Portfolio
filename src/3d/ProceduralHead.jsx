// import React, { useRef, useMemo } from 'react'
// import * as THREE from 'three'
// import { useFrame } from '@react-three/fiber'
// import { scarsData } from '../data/scars'

// export default function ProceduralHead({
//   scrollProgress = 0,
//   activeScarId,
//   hoveredScarId,
//   onHoverScar,
//   onSelectScar,
//   mousePos = { x: 0, y: 0 }
// }) {
//   const headGroupRef = useRef()
//   const leftEyelidRef = useRef()
//   const rightEyelidRef = useRef()
//   const neckGroupRef = useRef()

//   // High-visibility, prestigious sculpted slate-titanium bust material
//   const skinMaterial = useMemo(() => {
//     return new THREE.MeshStandardMaterial({
//       color: new THREE.Color('#3a4050'), // Clearly visible slate tone
//       roughness: 0.35,
//       metalness: 0.28,
//       flatShading: false,
//     })
//   }, [])

//   // Secondary structural facet material (slightly deeper slate-bronze)
//   const facetMaterial = useMemo(() => {
//     return new THREE.MeshStandardMaterial({
//       color: new THREE.Color('#2e3442'),
//       roughness: 0.42,
//       metalness: 0.22,
//     })
//   }, [])

//   // Material for the eyes with specular catchlight
//   const eyeMaterial = useMemo(() => {
//     return new THREE.MeshStandardMaterial({
//       color: new THREE.Color('#161822'),
//       roughness: 0.08,
//       metalness: 0.85,
//     })
//   }, [])

//   // Iris reflection ring
//   const irisMaterial = useMemo(() => {
//     return new THREE.MeshStandardMaterial({
//       color: new THREE.Color('#f59e0b'),
//       emissive: new THREE.Color('#b45309'),
//       emissiveIntensity: 0.6,
//       roughness: 0.2,
//     })
//   }, [])

//   // 3D curve paths for each scar seam
//   const scarGeometries = useMemo(() => {
//     const geometries = {}
    
//     // Forehead scar
//     const foreheadPoints = [
//       new THREE.Vector3(-0.48, 1.25, 1.20),
//       new THREE.Vector3(-0.40, 1.18, 1.25),
//       new THREE.Vector3(-0.35, 1.15, 1.26),
//       new THREE.Vector3(-0.28, 1.10, 1.28),
//       new THREE.Vector3(-0.20, 1.05, 1.29)
//     ]
//     geometries['scar-failure'] = new THREE.TubeGeometry(
//       new THREE.CatmullRomCurve3(foreheadPoints), 20, 0.02, 8, false
//     )

//     // Eyebrow scar
//     const eyebrowPoints = [
//       new THREE.Vector3(0.42, 0.92, 1.25),
//       new THREE.Vector3(0.50, 0.88, 1.27),
//       new THREE.Vector3(0.55, 0.85, 1.28),
//       new THREE.Vector3(0.62, 0.78, 1.26)
//     ]
//     geometries['scar-security'] = new THREE.TubeGeometry(
//       new THREE.CatmullRomCurve3(eyebrowPoints), 20, 0.018, 8, false
//     )

//     // Cheek scar
//     const cheekPoints = [
//       new THREE.Vector3(-0.85, 0.25, 1.05),
//       new THREE.Vector3(-0.80, 0.18, 1.10),
//       new THREE.Vector3(-0.75, 0.10, 1.15),
//       new THREE.Vector3(-0.70, 0.00, 1.18),
//       new THREE.Vector3(-0.65, -0.12, 1.20)
//     ]
//     geometries['scar-turning-point'] = new THREE.TubeGeometry(
//       new THREE.CatmullRomCurve3(cheekPoints), 24, 0.019, 8, false
//     )

//     // Jawline scar
//     const jawPoints = [
//       new THREE.Vector3(0.55, -0.55, 1.02),
//       new THREE.Vector3(0.62, -0.62, 0.98),
//       new THREE.Vector3(0.65, -0.65, 0.95),
//       new THREE.Vector3(0.70, -0.72, 0.90)
//     ]
//     geometries['scar-low-level'] = new THREE.TubeGeometry(
//       new THREE.CatmullRomCurve3(jawPoints), 20, 0.019, 8, false
//     )

//     // Neck scar
//     const neckPoints = [
//       new THREE.Vector3(-0.40, -1.32, 0.72),
//       new THREE.Vector3(-0.32, -1.34, 0.74),
//       new THREE.Vector3(-0.25, -1.35, 0.75),
//       new THREE.Vector3(-0.15, -1.36, 0.76),
//       new THREE.Vector3(-0.05, -1.34, 0.75)
//     ]
//     geometries['scar-conviction'] = new THREE.TubeGeometry(
//       new THREE.CatmullRomCurve3(neckPoints), 24, 0.02, 8, false
//     )

//     return geometries
//   }, [])

//   // Smooth frame loop
//   useFrame((state) => {
//     if (!headGroupRef.current) return

//     const t = state.clock.getElapsedTime()

//     // 1. Subtle idle breathing and mouse parallax
//     const parallaxWeight = Math.max(0, 1 - scrollProgress * 2)
//     const targetRotY = (mousePos.x * 0.32) * parallaxWeight + Math.sin(t * 0.6) * 0.025
//     const targetRotZ = (-mousePos.x * 0.06) * parallaxWeight + Math.cos(t * 0.5) * 0.012

//     // 2. Scroll-driven head tilt & upward gaze
//     const scrollTilt = Math.min(scrollProgress * 1.22, 0.82)
//     const scrollOffsetY = scrollProgress > 0.38 ? (scrollProgress - 0.38) * 3.4 : 0

//     headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
//       headGroupRef.current.rotation.x,
//       -scrollTilt + Math.sin(t * 0.7) * 0.015 * parallaxWeight,
//       0.08
//     )
//     headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
//       headGroupRef.current.rotation.y,
//       targetRotY,
//       0.06
//     )
//     headGroupRef.current.rotation.z = THREE.MathUtils.lerp(
//       headGroupRef.current.rotation.z,
//       targetRotZ,
//       0.06
//     )
//     headGroupRef.current.position.y = THREE.MathUtils.lerp(
//       headGroupRef.current.position.y,
//       scrollOffsetY,
//       0.08
//     )

//     // 3. Eyes closing smoothly on scroll
//     const eyeCloseAmount = THREE.MathUtils.clamp((scrollProgress - 0.15) / 0.45, 0, 1)
//     if (leftEyelidRef.current && rightEyelidRef.current) {
//       const lidAngle = eyeCloseAmount * 0.65
//       leftEyelidRef.current.rotation.x = lidAngle
//       rightEyelidRef.current.rotation.x = lidAngle
//     }
//   })

//   return (
//     <group ref={headGroupRef} position={[0, 0, 0]}>
//       {/* ================= CRANIUM & FOREHEAD ================= */}
//       {/* Upper Skull Dome */}
//       <mesh position={[0, 0.75, 0.05]} material={skinMaterial}>
//         <sphereGeometry args={[1.25, 36, 32]} />
//       </mesh>

//       {/* Forehead Frontal Plane */}
//       <mesh position={[0, 0.9, 0.75]} rotation={[0.08, 0, 0]} material={skinMaterial}>
//         <boxGeometry args={[1.48, 0.75, 0.9]} />
//       </mesh>

//       {/* Brow Ridge (prominent bone shelf) */}
//       <mesh position={[0, 0.82, 1.2]} rotation={[0.04, 0, 0]} material={facetMaterial}>
//         <boxGeometry args={[1.54, 0.19, 0.44]} />
//       </mesh>

//       {/* Temples */}
//       <mesh position={[-0.95, 0.85, 0.4]} rotation={[0, -0.2, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.3, 0.8, 1.1]} />
//       </mesh>
//       <mesh position={[0.95, 0.85, 0.4]} rotation={[0, 0.2, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.3, 0.8, 1.1]} />
//       </mesh>

//       {/* ================= EYE CAVITIES & EYES ================= */}
//       {/* Left Eye */}
//       <group position={[-0.48, 0.68, 1.12]}>
//         <mesh material={eyeMaterial}>
//           <sphereGeometry args={[0.22, 24, 20]} />
//         </mesh>
//         <group ref={leftEyelidRef} position={[0, 0.04, 0.05]}>
//           <mesh material={skinMaterial}>
//             <sphereGeometry args={[0.24, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
//           </mesh>
//         </group>
//         <mesh position={[0, 0, 0.21]} material={irisMaterial}>
//           <circleGeometry args={[0.08, 20]} />
//         </mesh>
//       </group>

//       {/* Right Eye */}
//       <group position={[0.48, 0.68, 1.12]}>
//         <mesh material={eyeMaterial}>
//           <sphereGeometry args={[0.22, 24, 20]} />
//         </mesh>
//         <group ref={rightEyelidRef} position={[0, 0.04, 0.05]}>
//           <mesh material={skinMaterial}>
//             <sphereGeometry args={[0.24, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
//           </mesh>
//         </group>
//         <mesh position={[0, 0, 0.21]} material={irisMaterial}>
//           <circleGeometry args={[0.08, 20]} />
//         </mesh>
//       </group>

//       {/* ================= NOSE ================= */}
//       <mesh position={[0, 0.52, 1.34]} rotation={[-0.18, 0, 0]} material={facetMaterial}>
//         <boxGeometry args={[0.26, 0.55, 0.3]} />
//       </mesh>
//       <mesh position={[0, 0.28, 1.48]} material={skinMaterial}>
//         <sphereGeometry args={[0.18, 20, 18]} />
//       </mesh>
//       <mesh position={[-0.18, 0.24, 1.38]} material={skinMaterial}>
//         <sphereGeometry args={[0.11, 16, 14]} />
//       </mesh>
//       <mesh position={[0.18, 0.24, 1.38]} material={skinMaterial}>
//         <sphereGeometry args={[0.11, 16, 14]} />
//       </mesh>

//       {/* ================= CHEEKBONES & MIDFACE ================= */}
//       <mesh position={[-0.72, 0.4, 0.95]} rotation={[0.15, -0.3, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.55, 0.45, 0.7]} />
//       </mesh>
//       <mesh position={[0.72, 0.4, 0.95]} rotation={[0.15, 0.3, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.55, 0.45, 0.7]} />
//       </mesh>

//       {/* ================= MOUTH & LIPS ================= */}
//       <mesh position={[0, 0.05, 1.34]} rotation={[-0.08, 0, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.55, 0.22, 0.24]} />
//       </mesh>
//       <mesh position={[0, -0.06, 1.36]} material={facetMaterial}>
//         <boxGeometry args={[0.52, 0.08, 0.16]} />
//       </mesh>
//       <mesh position={[0, -0.16, 1.34]} material={facetMaterial}>
//         <boxGeometry args={[0.48, 0.1, 0.18]} />
//       </mesh>

//       {/* ================= JAW & CHIN ================= */}
//       <mesh position={[0, -0.42, 1.25]} rotation={[0.15, 0, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.54, 0.38, 0.46]} />
//       </mesh>
//       <mesh position={[-0.65, -0.35, 0.75]} rotation={[0.35, -0.4, 0.15]} material={skinMaterial}>
//         <boxGeometry args={[0.42, 0.55, 0.95]} />
//       </mesh>
//       <mesh position={[0.65, -0.35, 0.75]} rotation={[0.35, 0.4, -0.15]} material={skinMaterial}>
//         <boxGeometry args={[0.42, 0.55, 0.95]} />
//       </mesh>

//       {/* ================= EARS ================= */}
//       <mesh position={[-1.15, 0.35, 0.1]} rotation={[0.1, 0.35, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.14, 0.7, 0.38]} />
//       </mesh>
//       <mesh position={[1.15, 0.35, 0.1]} rotation={[0.1, -0.35, 0]} material={skinMaterial}>
//         <boxGeometry args={[0.14, 0.7, 0.38]} />
//       </mesh>

//       {/* ================= NECK & THROAT ================= */}
//       <group ref={neckGroupRef} position={[0, -1.2, 0.15]}>
//         <mesh material={skinMaterial}>
//           <cylinderGeometry args={[0.7, 0.88, 1.45, 28]} />
//         </mesh>
//         <mesh position={[0, 0.16, 0.7]} rotation={[-0.2, 0, 0]} material={facetMaterial}>
//           <boxGeometry args={[0.24, 0.36, 0.24]} />
//         </mesh>
//         <mesh position={[-0.45, 0, 0.44]} rotation={[0.15, -0.3, 0.2]} material={skinMaterial}>
//           <cylinderGeometry args={[0.17, 0.22, 1.25, 14]} />
//         </mesh>
//         <mesh position={[0.45, 0, 0.44]} rotation={[0.15, 0.3, -0.2]} material={skinMaterial}>
//           <cylinderGeometry args={[0.17, 0.22, 1.25, 14]} />
//         </mesh>
//       </group>

//       {/* ================= SCARS & INTERACTIVE HOTSPOTS ================= */}
//       {scarsData.map((scar) => {
//         const isHovered = hoveredScarId === scar.id
//         const isActive = activeScarId === scar.id
//         const isHighlighted = isHovered || isActive

//         const geometry = scarGeometries[scar.id]

//         return (
//           <group key={scar.id}>
//             {/* Luminous Scar Seam */}
//             {geometry && (
//               <mesh geometry={geometry}>
//                 <meshStandardMaterial
//                   color={isHighlighted ? '#fef08a' : '#fbbf24'}
//                   emissive={isHighlighted ? '#fbbf24' : '#f59e0b'}
//                   emissiveIntensity={isHighlighted ? 3.8 : 1.8}
//                   roughness={0.15}
//                   metalness={0.4}
//                 />
//               </mesh>
//             )}

//             {/* Interactive Pulse Node */}
//             <group position={scar.position}>
//               {/* Outer Glow Halo */}
//               <mesh>
//                 <sphereGeometry args={[isHighlighted ? 0.08 : 0.055, 18, 18]} />
//                 <meshBasicMaterial
//                   color={isHighlighted ? '#fde047' : '#fbbf24'}
//                   transparent
//                   opacity={isHighlighted ? 0.95 : 0.75}
//                 />
//               </mesh>

//               {/* White Core Catchlight */}
//               <mesh>
//                 <sphereGeometry args={[0.03, 14, 14]} />
//                 <meshBasicMaterial color="#ffffff" />
//               </mesh>

//               {/* Invisible Easy-Touch Hitbox */}
//               <mesh
//                 onPointerOver={(e) => {
//                   e.stopPropagation()
//                   onHoverScar(scar.id)
//                   document.body.style.cursor = 'pointer'
//                 }}
//                 onPointerOut={(e) => {
//                   e.stopPropagation()
//                   onHoverScar(null)
//                   document.body.style.cursor = 'default'
//                 }}
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   onSelectScar(scar)
//                 }}
//               >
//                 <sphereGeometry args={[0.26, 12, 12]} />
//                 <meshBasicMaterial transparent opacity={0} depthWrite={false} />
//               </mesh>
//             </group>
//           </group>
//         )
//       })}
//     </group>
//   )
// }
