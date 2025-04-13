"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample menu items for each category
const menuItemsByCategory = {
  pizza: [
    { id: "p1", name: "Margherita", description: "Classic cheese and tomato", price: 9.99 },
    { id: "p2", name: "Pepperoni", description: "Pepperoni and cheese", price: 11.99 },
    { id: "p3", name: "Hawaiian", description: "Ham and pineapple", price: 12.99 },
    { id: "p4", name: "Vegetarian", description: "Mixed vegetables", price: 10.99 },
    { id: "p5", name: "Meat Lovers", description: "All the meats", price: 14.99 },
    { id: "p6", name: "BBQ Chicken", description: "BBQ sauce and chicken", price: 13.99 },
    { id: "p7", name: "Supreme", description: "The works", price: 15.99 },
    { id: "p8", name: "Buffalo", description: "Spicy buffalo chicken", price: 13.99 },
  ],
  burger: [
    { id: "b1", name: "Classic Burger", description: "Beef patty with lettuce and tomato", price: 8.99 },
    { id: "b2", name: "Cheeseburger", description: "Classic with cheese", price: 9.99 },
    { id: "b3", name: "Bacon Burger", description: "With crispy bacon", price: 10.99 },
    { id: "b4", name: "Veggie Burger", description: "Plant-based patty", price: 9.99 },
  ],
  sides: [
    { id: "s1", name: "French Fries", description: "Crispy golden fries", price: 3.99 },
    { id: "s2", name: "Onion Rings", description: "Battered and fried", price: 4.99 },
    { id: "s3", name: "Garlic Bread", description: "Buttery garlic bread", price: 3.99 },
  ],
  dessert: [
    { id: "d1", name: "Chocolate Cake", description: "Rich chocolate cake", price: 5.99 },
    { id: "d2", name: "Cheesecake", description: "New York style", price: 6.99 },
    { id: "d3", name: "Ice Cream", description: "Vanilla, chocolate, or strawberry", price: 3.99 },
  ],
  chinese: [
    { id: "c1", name: "Fried Rice", description: "With vegetables and egg", price: 8.99 },
    { id: "c2", name: "Sweet & Sour Chicken", description: "With pineapple", price: 10.99 },
    { id: "c3", name: "Beef Chow Mein", description: "Stir-fried noodles with beef", price: 11.99 },
  ],
  drinks: [
    { id: "dr1", name: "Soda", description: "Coke, Sprite, or Fanta", price: 1.99 },
    { id: "dr2", name: "Iced Tea", description: "Sweetened or unsweetened", price: 2.49 },
    { id: "dr3", name: "Milkshake", description: "Chocolate, vanilla, or strawberry", price: 4.99 },
  ],
  deals: [
    { id: "de1", name: "Family Meal", description: "2 pizzas, sides, and drinks", price: 29.99 },
    { id: "de2", name: "Lunch Special", description: "Any pizza and drink", price: 12.99 },
    { id: "de3", name: "Weekend Deal", description: "Buy one, get one free", price: 19.99 },
  ],
}

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
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

  const addToCart = (item: { id: string; name: string; price: number }) => {
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
  const menuItems = menuItemsByCategory[category.id as keyof typeof menuItemsByCategory] || []

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
              alt="Pizza slice"
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
            alt="Pizza"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            <h2 className="text-2xl font-bold">{category.name} Menu</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(90vh-80px)]">
          {/* Left column - Menu items */}
          <ScrollArea className="h-full p-6 border-r">
            <div className="space-y-6 pr-4">
              {menuItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <Button onClick={() => addToCart(item)} className="ml-4 bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Right column - Cart */}
          <div className="flex flex-col h-full">
            <div className="p-6 bg-gray-50 flex items-center gap-3">
              <ShoppingCart className="h-6 w-6" />
              <h3 className="text-xl font-bold">Your Cart</h3>
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
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Minus className="h-4 w-4" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addToCart(item)}>
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
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

                <div className="p-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Subtotal:</span>
                    <span className="font-bold">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Proceed to Checkout</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
