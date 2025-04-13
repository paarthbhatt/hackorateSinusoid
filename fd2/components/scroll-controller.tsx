"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollController() {
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartY(e.clientY)
    document.body.style.userSelect = "none"
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartY(e.touches[0].clientY)
    document.body.style.userSelect = "none"
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return

    const deltaY = e.clientY - startY
    const threshold = 5 // Minimum movement to trigger scroll

    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0) {
        // Dragging down, scroll up
        setScrollDirection("up")
        window.scrollBy(0, -Math.abs(deltaY) / 2)
      } else {
        // Dragging up, scroll down
        setScrollDirection("down")
        window.scrollBy(0, Math.abs(deltaY) / 2)
      }
      setStartY(e.clientY)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return

    const deltaY = e.touches[0].clientY - startY
    const threshold = 5 // Minimum movement to trigger scroll

    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0) {
        // Dragging down, scroll up
        setScrollDirection("up")
        window.scrollBy(0, -Math.abs(deltaY) / 2)
      } else {
        // Dragging up, scroll down
        setScrollDirection("down")
        window.scrollBy(0, Math.abs(deltaY) / 2)
      }
      setStartY(e.touches[0].clientY)
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      document.body.style.userSelect = ""
      setTimeout(() => setScrollDirection(null), 500)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging, startY])

  return (
    <div className="fixed right-6 bottom-6 z-40">
      <Button
        variant="outline"
        size="icon"
        className={`h-14 w-14 rounded-full bg-gradient-to-r shadow-lg transition-all duration-300 ${
          isDragging
            ? scrollDirection === "up"
              ? "from-amber-500 to-orange-500 rotate-180 scale-110"
              : scrollDirection === "down"
                ? "from-orange-500 to-amber-500 scale-110"
                : "from-orange-500 to-amber-500"
            : "from-orange-500 to-amber-500 hover:scale-105"
        }`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <Menu className={`h-6 w-6 text-white transition-transform ${isDragging ? "scale-90" : ""}`} />
        <span className="sr-only">Scroll controller</span>
      </Button>
    </div>
  )
}
