"use client"

import { useState } from "react"
import Image from "next/image"
import MenuPopup from "@/components/menu-popup"

// Menu categories with HD images
const categories = [
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
    
    description: "Handcrafted pizzas with premium toppings",
  },
  {
    id: "burger",
    name: "Burger",
    icon: "🍔",
    
    description: "Juicy burgers with gourmet ingredients",
  },
  {
    id: "sides",
    name: "Sides",
    icon: "🍟",
   
    description: "Perfect companions for your main dish",
  },
  {
    id: "dessert",
    name: "Dessert",
    icon: "🍰",
    
    description: "Sweet treats to satisfy your cravings",
  },
  {
    id: "chinese",
    name: "Chinese",
    icon: "🥡",
    
    description: "Authentic Asian flavors and specialties",
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
    
    description: "Refreshing beverages for every taste",
  },
  {
    id: "deals",
    name: "Deals",
    icon: "🏷️",
   
    description: "Special offers and combo meals",
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => openCategoryPopup(category.id)}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-4">
                <span className="text-4xl mb-2">{category.icon}</span>
                <h3 className="font-bold text-xl text-white text-center">{category.name}</h3>
              </div>
            </div>
            <p className="text-sm text-center text-gray-600 max-w-[200px]">{category.description}</p>
          </div>
        ))}
      </div>

      {activeCategory && (
        <MenuPopup category={categories.find((cat) => cat.id === activeCategory)!} onClose={closeCategoryPopup} />
      )}
    </>
  )
}
