"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, User, Heart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 to-amber-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-28 h-18 mr-2">
              <Image
                src="/images/foodylogo.png"
                alt="Foody Homes Logo"
                width={4080}
                height={58}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Foody</span>
              <span className="text-2xl font-bold text-amber-200">Homes</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-amber-200 font-medium">
              Home
            </Link>
            <Link href="/restaurants" className="text-white hover:text-amber-200 font-medium">
              Restaurants
            </Link>
            <Link href="/offers" className="text-white hover:text-amber-200 font-medium">
              Offers
            </Link>
            <Link href="/about" className="text-white hover:text-amber-200 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-amber-200 font-medium">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-amber-200 hover:bg-orange-700/20">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Button>

            <Button variant="ghost" size="icon" className="text-white hover:text-amber-200 hover:bg-orange-700/20">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>

            <Button variant="ghost" size="icon" className="text-white hover:text-amber-200 hover:bg-orange-700/20">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-white hover:text-amber-200 hover:bg-orange-700/20"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-amber-200 hover:bg-orange-700/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-orange-600 to-amber-600 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-white hover:text-amber-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/restaurants"
              className="block py-2 text-white hover:text-amber-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link
              href="/offers"
              className="block py-2 text-white hover:text-amber-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Offers
            </Link>
            <Link
              href="/about"
              className="block py-2 text-white hover:text-amber-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-white hover:text-amber-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/account"
              className="block py-2 text-white hover:text-amber-200 font-medium"
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
