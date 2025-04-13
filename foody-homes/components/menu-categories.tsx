"use client"

import { useState } from "react"
import Image from "next/image"
import MenuPopup from "@/components/menu-popup"

// Menu categories
const categories = [
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "burger",
    name: "Burger",
    icon: "🍔",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "sides",
    name: "Sides",
    icon: "🍟",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "dessert",
    name: "Dessert",
    icon: "🍰",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "chinese",
    name: "Chinese",
    icon: "🥡",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "deals",
    name: "Deals",
    icon: "🏷️",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const openCategoryPopup = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const closeCategoryPopup = () => {
    setActiveCategory(null)
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => openCategoryPopup(category.id)}
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 shadow-md group-hover:shadow-lg transition-all">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-4xl">{category.icon}</span>
              </div>
            </div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{category.name}</h3>
          </div>
        ))}
      </div>

      {activeCategory && (
        <MenuPopup category={categories.find((cat) => cat.id === activeCategory)!} onClose={closeCategoryPopup} />
      )}
    </>
  )
}
