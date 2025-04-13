"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ShoppingCart, Plus, Minus, Trash2, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Sample menu items for each category with dietary tags
const menuItemsByCategory = {
  pizza: [
    {
      id: "p1",
      name: "Margherita",
      description: "Classic cheese and tomato",
      price: 9.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Classic", "Vegetarian"],
    },
    {
      id: "p2",
      name: "Pepperoni",
      description: "Pepperoni and cheese",
      price: 11.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Spicy", "Popular"],
    },
    {
      id: "p3",
      name: "Hawaiian",
      description: "Ham and pineapple",
      price: 12.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Sweet & Savory"],
    },
    {
      id: "p4",
      name: "Vegetarian Supreme",
      description: "Mixed vegetables with extra cheese",
      price: 10.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Healthy"],
    },
    {
      id: "p5",
      name: "Meat Lovers",
      description: "All the meats",
      price: 14.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Protein", "Bestseller"],
    },
    {
      id: "p6",
      name: "BBQ Chicken",
      description: "BBQ sauce and chicken",
      price: 13.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Tangy", "Staff Pick"],
    },
    {
      id: "p7",
      name: "Spinach & Feta",
      description: "Spinach, feta cheese, and olives",
      price: 12.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Mediterranean"],
    },
    {
      id: "p8",
      name: "Buffalo Chicken",
      description: "Spicy buffalo chicken",
      price: 13.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Spicy", "New"],
    },
  ],
  burger: [
    {
      id: "b1",
      name: "Classic Burger",
      description: "Beef patty with lettuce and tomato",
      price: 8.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Classic", "Bestseller"],
    },
    {
      id: "b2",
      name: "Cheeseburger",
      description: "Classic with cheese",
      price: 9.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Popular", "Cheesy"],
    },
    {
      id: "b3",
      name: "Veggie Burger",
      description: "Plant-based patty with all the fixings",
      price: 10.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Healthy"],
    },
    {
      id: "b4",
      name: "Mushroom Swiss",
      description: "Beef patty with mushrooms and swiss cheese",
      price: 11.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Gourmet", "Staff Pick"],
    },
  ],
  sides: [
    {
      id: "s1",
      name: "French Fries",
      description: "Crispy golden fries",
      price: 3.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Classic"],
    },
    {
      id: "s2",
      name: "Onion Rings",
      description: "Battered and fried",
      price: 4.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Crispy"],
    },
    {
      id: "s3",
      name: "Chicken Wings",
      description: "Spicy buffalo wings",
      price: 7.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Spicy", "Popular"],
    },
  ],
  dessert: [
    {
      id: "d1",
      name: "Chocolate Cake",
      description: "Rich chocolate cake",
      price: 5.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Sweet"],
    },
    {
      id: "d2",
      name: "Cheesecake",
      description: "New York style",
      price: 6.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Creamy"],
    },
    {
      id: "d3",
      name: "Apple Pie",
      description: "With vanilla ice cream",
      price: 5.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Warm"],
    },
  ],
  chinese: [
    {
      id: "c1",
      name: "Vegetable Fried Rice",
      description: "With vegetables and egg",
      price: 8.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Classic"],
    },
    {
      id: "c2",
      name: "Sweet & Sour Chicken",
      description: "With pineapple",
      price: 10.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Tangy", "Popular"],
    },
    {
      id: "c3",
      name: "Vegetable Spring Rolls",
      description: "Crispy rolls with dipping sauce",
      price: 6.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Appetizer"],
    },
  ],
  drinks: [
    {
      id: "dr1",
      name: "Soda",
      description: "Coke, Sprite, or Fanta",
      price: 1.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Cold"],
    },
    {
      id: "dr2",
      name: "Fresh Fruit Smoothie",
      description: "Blended with yogurt",
      price: 4.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Healthy"],
    },
    {
      id: "dr3",
      name: "Milkshake",
      description: "Chocolate, vanilla, or strawberry",
      price: 4.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Sweet"],
    },
  ],
  deals: [
    {
      id: "de1",
      name: "Family Meal",
      description: "2 pizzas, sides, and drinks",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Value", "Family"],
    },
    {
      id: "de2",
      name: "Veggie Combo",
      description: "Vegetarian pizza, sides, and drink",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: true,
      tags: ["Vegetarian", "Value"],
    },
    {
      id: "de3",
      name: "Weekend Deal",
      description: "Buy one, get one free",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      isVegetarian: false,
      tags: ["Limited Time", "Bestseller"],
    },
  ],
}

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface MenuPopupProps {
  category: {
    id: string
    name: string
    icon: string
  }
  onClose: () => void
}

export default function MenuPopup({ category, onClose }: MenuPopupProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [vegetarianOnly, setVegetarianOnly] = useState(false)

  useEffect(() => {
    // Animation effect - open with a slight delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10)

    // Prevent body scrolling when popup is open
    document.body.style.overflow = "hidden"

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(onClose, 300) // Wait for animation to complete
  }

  const addToCart = (item: { id: string; name: string; price: number; image: string }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        // Increase quantity if item already in cart
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        // Add new item to cart
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId)

      if (existingItem && existingItem.quantity > 1) {
        // Decrease quantity
        return prevCart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item))
      } else {
        // Remove item completely
        return prevCart.filter((item) => item.id !== itemId)
      }
    })
  }

  const deleteFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Get menu items for the current category
  const allMenuItems = menuItemsByCategory[category.id as keyof typeof menuItemsByCategory] || []

  // Filter by vegetarian if needed
  const menuItems = vegetarianOnly ? allMenuItems.filter((item) => item.isVegetarian) : allMenuItems

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pizza slice clipart in top-right */}
        <div className="absolute -top-10 right-10 w-32 h-32 opacity-70 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Food clipart"
              width={128}
              height={128}
              className="object-contain"
            />
            <div className="absolute top-0 left-1/2 w-1 h-16 bg-yellow-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Three-piece circle pizza clipart in bottom-left */}
        <div className="absolute -bottom-10 left-10 w-32 h-32 opacity-70 pointer-events-none">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="Food clipart"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            <h2 className="text-2xl font-bold">{category.name} Menu</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="vegetarian-mode"
                checked={vegetarianOnly}
                onCheckedChange={setVegetarianOnly}
                className="data-[state=checked]:bg-green-500"
              />
              <Label htmlFor="vegetarian-mode" className="flex items-center gap-1 text-white">
                <Leaf className="h-4 w-4" /> Vegetarian Only
              </Label>
            </div>
            <Button variant="ghost" size="icon" onClick={handleClose} className="text-white hover:bg-white/20">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(90vh-80px)]">
          {/* Left column - Menu items */}
          <ScrollArea className="h-full p-6 border-r">
            <div className="space-y-6 pr-4">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-1">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full ${
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
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="font-bold text-orange-600">${item.price.toFixed(2)}</p>
                      <Button
                        onClick={() => addToCart(item)}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Right column - Cart */}
          <div className="flex flex-col h-full">
            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-3">
              <ShoppingCart className="h-6 w-6 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-600">Your Cart</h3>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-gray-500">
                <ShoppingCart className="h-12 w-12 mb-4 opacity-30" />
                <p className="text-lg">Your cart is empty</p>
                <p className="text-sm">Add items from the menu to get started</p>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-3 items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Minus className="h-4 w-4" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => addToCart(item)}
                          >
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                            onClick={() => deleteFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-6 border-t bg-gradient-to-r from-amber-50 to-orange-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Subtotal:</span>
                    <span className="font-bold text-xl text-orange-600">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 h-12 text-lg">
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
