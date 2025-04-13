"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=800",
    title: "DOUBLE PEPPERONI FEAST",
    description: "Get two medium pizzas for the price of one!",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=800",
    title: "NEW STUFFED CRUST",
    description: "Try our new cheese-stuffed crust with any large pizza!",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=800",
    title: "FAMILY MEAL DEAL",
    description: "2 Large Pizzas + Sides + Drinks for only $29.99",
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % carouselItems.length)
  const prev = () => setCurrent((current - 1 + carouselItems.length) % carouselItems.length)

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[300px] md:h-[400px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselItems[current].image || "/placeholder.svg"}
              alt={carouselItems[current].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{carouselItems[current].title}</h2>
                <p className="text-lg md:text-xl">{carouselItems[current].description}</p>
                <Button className="mt-4 bg-red-600 hover:bg-red-700">Order Now</Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
