"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment, OrbitControls } from "@react-three/drei"
import { useScroll } from "framer-motion"
import * as THREE from "three"

function Model({ scrollY }) {
  const { scene } = useGLTF("/assets/3d/duck.glb") // Using duck as placeholder
  const ref = useRef()
  const { viewport } = useThree()

  // Transform the building based on scroll
  useFrame(() => {
    if (ref.current) {
      // Open the building as user scrolls down
      const openAmount = Math.min(scrollY.get() / 500, 1)
      ref.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 0.5, openAmount)

      // Scale down as user scrolls further
      const scale = 1 - Math.min(scrollY.get() / 1000, 0.5)
      ref.current.scale.set(scale, scale, scale)

      // Move up as user scrolls
      ref.current.position.y = -Math.min(scrollY.get() / 300, 2)
    }
  })

  return (
    <group ref={ref} dispose={null} scale={[2, 2, 2]} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export default function PizzaHutBuilding() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollY: frameScrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = frameScrollY.on("change", (latest) => {
      setScrollY(latest)
    })
    return () => unsubscribe()
  }, [frameScrollY])

  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model scrollY={frameScrollY} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
    </div>
  )
}
