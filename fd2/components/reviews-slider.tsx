"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample customer reviews
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "2 days ago",
    review:
      "The pizza was absolutely delicious! Delivery was quick and the food was still hot when it arrived. Will definitely order again!",
    orderedItem: "Pepperoni Pizza",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    date: "1 week ago",
    review:
      "Great burgers and the fries were perfectly crispy. The only reason I'm not giving 5 stars is because the delivery took a bit longer than expected.",
    orderedItem: "Double Cheeseburger",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "3 days ago",
    review:
      "The vegetarian options are amazing! As someone who doesn't eat meat, I really appreciate the variety and quality of vegetarian dishes available.",
    orderedItem: "Veggie Supreme Pizza",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "5 days ago",
    review:
      "The desserts are to die for! The chocolate lava cake was warm and gooey in the center, exactly how it should be. Highly recommend!",
    orderedItem: "Chocolate Lava Cake",
  },
  {
    id: 5,
    name: "Sophia Kim",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    date: "2 weeks ago",
    review:
      "The Chinese food was authentic and flavorful. Portions were generous and everything tasted fresh. Will order again soon!",
    orderedItem: "Kung Pao Chicken",
  },
]

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviewsPerView = 3 // Number of reviews to show at once
  const maxIndex = Math.max(0, reviews.length - reviewsPerView)

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
    }, 6000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / reviewsPerView)}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[33.333%] px-3 flex-shrink-0"
              style={{ width: `${100 / reviewsPerView}%` }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src={review.avatar || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{review.review}</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Ordered:</span> {review.orderedItem}
                  </p>
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
        <span className="sr-only">Previous reviews</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12 z-10"
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next reviews</span>
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
