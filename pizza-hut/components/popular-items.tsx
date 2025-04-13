"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

interface PopularItemsProps {
  direction?: "normal" | "reverse"
}

const items = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    image: "/placeholder.svg?height=200&width=300",
    price: "$12.99",
  },
  {
    id: 2,
    title: "Supreme Pizza",
    image: "/placeholder.svg?height=200&width=300",
    price: "$14.99",
  },
  {
    id: 3,
    title: "Meat Lovers",
    image: "/placeholder.svg?height=200&width=300",
    price: "$15.99",
  },
  {
    id: 4,
    title: "Veggie Pizza",
    image: "/placeholder.svg?height=200&width=300",
    price: "$13.99",
  },
]

export default function PopularItems({ direction = "normal" }: PopularItemsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex space-x-4 py-4"
        style={{
          animationDuration: "20s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationName: "scroll",
          animationDirection: direction === "normal" ? "normal" : "reverse",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            variants={itemVariants}
            className="flex-shrink-0 w-[250px] bg-blue-100 rounded-lg overflow-hidden"
          >
            <div className="relative h-40">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-red-600 font-bold">{item.price}</p>
              <button className="mt-2 text-sm font-medium text-red-600 hover:text-red-800">Add to Cart</button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${items.length * 266}px);
          }
        }
      `}</style>
    </div>
  )
}
