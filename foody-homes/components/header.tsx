"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-md">
              <span className="text-white font-bold">PH</span>
            </div>
            <span className="ml-2 text-xl font-bold text-red-600">Pizza Hut</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/menu" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
              Pizzas
            </Link>
            <Link href="/sides" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
              Sides
            </Link>
            <Link
              href="/drinks"
              className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
            >
              Drinks
            </Link>
            <Link href="/deals" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
              Deals
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/menu"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Pizzas
            </Link>
            <Link
              href="/sides"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Sides
            </Link>
            <Link
              href="/drinks"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Drinks
            </Link>
            <Link
              href="/deals"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </Link>
            <Link
              href="/account"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
