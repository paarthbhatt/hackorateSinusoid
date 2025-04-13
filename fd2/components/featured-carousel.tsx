"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    image: "/images/carousel1.jpg",
    alt: "Delicious gourmet pizza with fresh toppings",
    title: "Gourmet Pizza Experience",
    subtitle: "Handcrafted with premium ingredients",
  },
  {
    id: 2,
    image: "/images/carousel2.jpg",
    alt: "Juicy burger with melted cheese and fresh vegetables",
    title: "Ultimate Burger Collection",
    subtitle: "Perfectly grilled to your taste",
  },
  {
    id: 3,
    image: "/images/carousel3.jpg",
    alt: "Authentic Chinese cuisine with vibrant colors",
    title: "Authentic Asian Flavors",
    subtitle: "Traditional recipes with a modern twist",
  },
]


export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="min-w-full h-full relative">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.alt}
              fill
              className="object-cover"
              priority={item.id === 1}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end pb-20 px-4 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{item.title}</h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full h-12 w-12 border-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full h-12 w-12 border-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/40"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
