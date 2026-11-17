import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
// import FaceModel from './FaceModel' // disabled for now

// Delicate floating ambient dust particles
function AmbientEmbers({ count = 45 }) {
  const pointsRef = useRef()

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 7
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return [pos]
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array
    const time = state.clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += 0.002
      if (pos[i * 3 + 1] > 3.5) {
        pos[i * 3 + 1] = -3.5
      }
      pos[i * 3 + 0] += Math.sin(time * 0.4 + i) * 0.0008
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#fbbf24"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function CameraRig({ scrollProgress }) {
  useFrame(({ camera }) => {
    const targetY = scrollProgress * -0.45
    const targetZ = 4.6 + scrollProgress * 0.8
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05)
    camera.lookAt(0, scrollProgress * 0.35, 0)
  })
  return null
}

export default function Scene3D({
  scrollProgress = 0,
  activeScarId,
  hoveredScarId,
  onHoverScar,
  onSelectScar
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="w-full h-full relative" style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <CameraRig scrollProgress={scrollProgress} />

        {/* 1. Balanced Studio Ambient Lighting (prevents black pitch shadows) */}
        <ambientLight intensity={1.35} color="#475569" />

        {/* 2. Key Studio Light (sculpts facial planes with clean definition) */}
        <directionalLight
          position={[-2.6, 3.2, 3.8]}
          intensity={2.3}
          color="#f8fafc"
        />

        {/* 3. Warm Amber / Bronze Rim Light (dramatic edge silhouette) */}
        <directionalLight
          position={[3.8, 2.6, -2.2]}
          intensity={4.4}
          color="#f59e0b"
        />

        {/* 4. Cool Slate Edge Fill (subtle depth on opposite contour) */}
        <directionalLight
          position={[-3.5, 1.2, -2]}
          intensity={1.2}
          color="#94a3b8"
        />

        {/* 5. Direct Frontal Facial Spotlight (clarity for eyes, brow, nose) */}
        <pointLight
          position={[0, 0.7, 3.2]}
          intensity={1.6}
          color="#fffbeb"
          distance={8}
        />

        {/* 6. Lower Jaw & Neck Accent Light (activates when head tilts up) */}
        <pointLight
          position={[0, -2.2, 1.4]}
          intensity={1.5}
          color="#f59e0b"
          distance={7}
        />

        {/* 3D Head Model */}
        {/* <FaceModel
  scrollProgress={scrollProgress}
  activeScarId={activeScarId}
  hoveredScarId={hoveredScarId}
  onHoverScar={onHoverScar}
  onSelectScar={onSelectScar}
  mousePos={mousePos}
/> */}

        {/* Subtle Atmospheric Embers */}
        <AmbientEmbers count={45} />
      </Canvas>
    </div>
  )
}
