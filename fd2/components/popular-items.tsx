import Image from "next/image"
import { Button } from "@/components/ui/button"

// Sample popular items
const popularItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni pizza with extra cheese",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Double Cheeseburger",
    description: "Two beef patties with cheese, lettuce, and special sauce",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Burger",
  },
  {
    id: 3,
    name: "Kung Pao Chicken",
    description: "Spicy stir-fried chicken with peanuts and vegetables",
    price: 11.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Chinese",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Dessert",
  },
]

export default function PopularItems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {popularItems.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
              {item.category}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
              <Button size="sm">Add to Cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
