"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Sample menu data
const menuItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni pizza with mozzarella cheese",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=200",
    isVegetarian: false,
    category: "pizza",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato, mozzarella, and basil",
    price: 10.99,
    image: "/placeholder.svg?height=200&width=200",
    isVegetarian: true,
    category: "pizza",
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Loaded with bell peppers, onions, mushrooms, and olives",
    price: 13.99,
    image: "/placeholder.svg?height=200&width=200",
    isVegetarian: true,
    category: "pizza",
  },
  {
    id: 4,
    name: "BBQ Chicken Wings",
    description: "Crispy wings tossed in our signature BBQ sauce",
    price: 8.99,
    image: "/placeholder.svg?height=200&width=200",
    isVegetarian: false,
    category: "sides",
  },
  {
    id: 5,
    name: "Garlic Breadsticks",
    description: "Freshly baked breadsticks with garlic butter",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=200",
    isVegetarian: true,
    category: "sides",
  },
  {
    id: 6,
    name: "Coca-Cola",
    description: "20oz bottle",
    price: 2.49,
    image: "/placeholder.svg?height=200&width=200",
    isVegetarian: true,
    category: "drinks",
  },
]

export default function MenuSection() {
  const [vegetarianOnly, setVegetarianOnly] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = menuItems.filter((item) => {
    if (vegetarianOnly && !item.isVegetarian) return false
    if (activeCategory !== "all" && item.category !== activeCategory) return false
    return true
  })

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <Button variant={activeCategory === "all" ? "default" : "outline"} onClick={() => setActiveCategory("all")}>
              All
            </Button>
            <Button
              variant={activeCategory === "pizza" ? "default" : "outline"}
              onClick={() => setActiveCategory("pizza")}
            >
              Pizzas
            </Button>
            <Button
              variant={activeCategory === "sides" ? "default" : "outline"}
              onClick={() => setActiveCategory("sides")}
            >
              Sides
            </Button>
            <Button
              variant={activeCategory === "drinks" ? "default" : "outline"}
              onClick={() => setActiveCategory("drinks")}
            >
              Drinks
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="vegetarian-mode" checked={vegetarianOnly} onCheckedChange={setVegetarianOnly} />
            <Label htmlFor="vegetarian-mode">Vegetarian Only</Label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                {item.isVegetarian && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Vegetarian
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-lg font-bold text-red-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
