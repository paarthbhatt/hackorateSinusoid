"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample popular items with HD images
const popularItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni pizza with extra cheese",
    price: 12.99,
    image: "/images/peperoni.jpg",
    category: "Pizza",
    rating: 4.8,
    isVegetarian: false,
    tags: ["Bestseller", "Spicy"],
  },
  {
    id: 2,
    name: "Double Cheeseburger",
    description: "Two beef patties with cheese, lettuce, and special sauce",
    price: 9.99,
    image: "/images/doublecheese.jpg",
    category: "Burger",
    rating: 4.6,
    isVegetarian: false,
    tags: ["Popular", "Cheesy"],
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with fresh basil and mozzarella",
    price: 11.99,
    image: "/images/marg.jpg",
    category: "Pizza",
    rating: 4.7,
    isVegetarian: true,
    tags: ["Vegetarian", "Classic"],
  },
  {
    id: 4,
    name: "Kung Pao Chicken",
    description: "Spicy stir-fried chicken with peanuts and vegetables",
    price: 11.99,
    image: "/images/kunfgu.jpg",
    category: "Chinese",
    rating: 4.5,
    isVegetarian: false,
    tags: ["Spicy", "Staff Pick"],
  },
  {
    id: 5,
    name: "Veggie Supreme",
    description: "Loaded with fresh vegetables and premium cheese",
    price: 13.99,
    image: "/images/veggie.jpg",
    category: "Pizza",
    rating: 4.4,
    isVegetarian: true,
    tags: ["Vegetarian", "Healthy"],
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Dessert",
    rating: 4.9,
    isVegetarian: true,
    tags: ["Sweet", "Bestseller"],
  },
]

export default function PopularSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const itemsPerView = 4 // Number of items to show at once
  const maxIndex = Math.max(0, popularItems.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex > maxIndex ? 0 : nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {popularItems.map((item) => (
            <div key={item.id} className="min-w-[25%] px-3 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.category}
                  </div>
                  {item.isVegetarian && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full"></span> Veg
                    </div>
                  )}
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          tag === "Vegetarian"
                            ? "bg-green-100 text-green-800"
                            : tag === "Spicy"
                              ? "bg-red-100 text-red-800"
                              : tag === "Popular" || tag === "Bestseller"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">{item.description}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-orange-600">${item.price.toFixed(2)}</span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12 z-10"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous items</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12 z-10"
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next items</span>
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
